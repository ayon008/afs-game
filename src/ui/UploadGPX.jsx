'use client';
import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { FaCheck, FaPlus } from 'react-icons/fa';
import Cloud from '@/icons/Cloud';
import * as toGeoJSON from 'togeojson';
import { DOMParser } from 'xmldom';
import useAxiosPublic from '@/Hooks/useAxiosPublic';
import calculateTotalTimeAndDistance from '@/js/calculateTotalTimeAndDistance';
import useAuth from '@/Hooks/useAuth';
import Swal from 'sweetalert2';

const UploadGPX = () => {
    const [geojson, setGeojson] = useState(null);
    const [category, setCategory] = useState('');
    const [uploadedFiles, setUploadedFiles] = useState([]);
    const axiosPublic = useAxiosPublic();
    const { user } = useAuth();
    const { getRootProps, getInputProps, acceptedFiles, isDragActive, isDragAccept, isDragReject } = useDropzone({
        accept: '.gpx',
        maxSize: 10 * 1024 * 1024, // 10 MB
        onDrop: (files) => {
            setUploadedFiles(files);
            const file = files[0];
            const reader = new FileReader();
            reader.onload = (e) => {
                const gpxData = e.target.result;
                const parser = new DOMParser();
                const xmlDoc = parser.parseFromString(gpxData, 'text/xml');
                const geojsonData = toGeoJSON.gpx(xmlDoc);
                setGeojson(geojsonData);
            };
            reader.readAsText(file);
        },
    });

    const getDropzoneStyle = () => {
        if (isDragActive) {
            return 'border-blue-500';
        }
        if (isDragReject) {
            return 'border-red-500';
        }
        if (isDragAccept) {
            return 'border-green-500';
        }
        return 'border-gray-300';
    };

    const handleSave = async () => {
        if (!category) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Category must be selected.',
            });
            return;
        }

        if (geojson) {
            const { totalTime, totalDistance } = calculateTotalTimeAndDistance(geojson);
            Swal.fire({
                title: 'Saving...',
                allowOutsideClick: false,
                didOpen: () => {
                    Swal.showLoading();
                },
            });

            try {
                await axiosPublic.post('/geoJson', {
                    totalTime,
                    totalDistance,
                    uid: user?.uid,
                    category,
                    filename: uploadedFiles[0]?.name,
                });

                Swal.fire({
                    icon: 'success',
                    title: 'Success',
                    text: 'Time, Distance, and Filename saved successfully!',
                });

                // Reset all states after successful save
                setGeojson(null);
                setCategory('');
                setUploadedFiles([]);
            } catch (error) {
                console.error('Error saving data:', error);
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'Failed to save data.',
                });
            }
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'No GeoJSON data to save.',
            });
        }
    };

    return (
        <>
            <div className='bg-[#F7F7F7] w-fit mx-auto 2xl:mt-10 xl:mt-6 flex items-center justify-center'>
                <div>
                    <div className={`w-fit mx-auto ${getDropzoneStyle()} border-2 border-dashed p-6 rounded`}>
                        <div {...getRootProps()} className='flex flex-col items-center justify-center w-full'>
                            <input {...getInputProps()} />
                            <Cloud />
                            <div className='my-6'>
                                <h3 className='2xl:text-xl xl:text-base font-semibold text-center'>
                                    {isDragActive ? 'Relâchez le fichier ici...' : 'Choisissez un fichier ou glissez-déposez-le ici'}
                                </h3>
                                <p className='2xl:text-lg xl:text-xs text-center font-semibold text-gray-400'>
                                    Formats Gpx jusqu'à 10 MB
                                </p>
                            </div>
                            <button className='text-center flex w-fit mx-auto bg-red-600 btn text-white'>
                                <span>Parcourir le fichier</span>
                                <FaPlus className='mt-1' size={'0.8rem'} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                {uploadedFiles.length > 0 && (
                    <ul className='list-disc mt-4 w-fit mx-auto'>
                        {uploadedFiles.map(file => (
                            <li key={file.path}>
                                {file.path} - {(file.size / (1024 * 1024)).toFixed(2)} MB
                            </li>
                        ))}
                    </ul>
                )}
            </div>
            <div className='flex items-center justify-between w-3/4 mx-auto gap-2 2xl:mt-20 xl:mt-14'>
                <div className="form-control relative">
                    <label className="label items-center justify-normal bg-[#FFFFF8] w-fit h-fit py-0 gap-1 absolute left-[12px] -top-[10px]">
                        <span className="label-text text-[#666] text-sm font-bold py-0">Discipline </span>
                        <FaCheck size={'0.85rem'} color='#2A7029' />
                    </label>
                    <select
                        className="select select-bordered w-[300px] bg-[#FFFFF8]"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    >
                        <option value="" disabled>Select a category</option>
                        <option className='uppercase'>wingfoil</option>
                        <option className='uppercase'>windfoil</option>
                        <option className='uppercase'>dockstart</option>
                        <option className='uppercase'>surf foil</option>
                        <option className='uppercase'>dw</option>
                    </select>
                </div>
                <div className='flex gap-2'>
                    <button className='uppercase text-gray-600 bg-gray-300 btn'>
                        annuler
                    </button>
                    <button onClick={handleSave} className='uppercase text-gray-600 bg-gray-300 btn'>
                        sauver
                    </button>
                </div>
            </div>
        </>
    );
};

export default UploadGPX;
