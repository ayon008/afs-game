'use client';
import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { FaCheck, FaPlus, FaTimes, FaTrashAlt } from 'react-icons/fa';
import Cloud from '@/icons/Cloud';
import * as toGeoJSON from 'togeojson';
import { DOMParser } from 'xmldom';
import useAxiosPublic from '@/Hooks/useAxiosPublic';
import calculateTotalTimeAndDistance from '@/js/calculateTotalTimeAndDistance';
import useAuth from '@/Hooks/useAuth';
import Swal from 'sweetalert2';
import GetFileName from '@/lib/GetFileName';
import gpx from '../../public/file.png';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import GetUserData from '@/lib/getUserData';
import useAxiosSecure from '@/Hooks/useAxiosSecure';

const UploadGPX = () => {
    const [geojson, setGeojson] = useState(null);
    const [category, setCategory] = useState('');
    const [uploadedFiles, setUploadedFiles] = useState([]);
    const axiosPublic = useAxiosPublic();
    const { user } = useAuth();
    const { files, refetch } = GetFileName();
    const { isLoading, isError, error, userInfo } = GetUserData(user?.uid);
    const isDisabled = userInfo?.approved;
    const axiosSecure = useAxiosSecure();

    const router = useRouter();
    const { getRootProps, getInputProps, acceptedFiles, isDragActive, isDragAccept, isDragReject } = useDropzone({
        accept: '.gpx',
        multiple: false,
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
        disabled: !isDisabled
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
            // Loading state
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
                    distance: totalDistance,
                    uid: user?.uid,
                    category,
                    filename: uploadedFiles[0]?.name,
                    time: new Date(),
                    status: false,
                });

                Swal.fire({
                    icon: 'success',
                    title: 'Success',
                    text: 'Time, Distance, and Filename saved successfully!',
                });
                refetch();
                // Reset all states after successful save
                router.push(`/profile?uid=${user?.uid}`);
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

    const handleDelete = (id) => {
        axiosSecure.delete(`/fileName/${id}`);
        refetch();
    }

    return (
        <>
            <div className='bg-white w-fit mx-auto 2xl:mt-10 xl:mt-6 mt-3 flex items-center justify-center'>
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
                                    Formats Gpx jusqu&apos;à 10 MB
                                </p>
                            </div>
                            <button className='text-center flex w-fit mx-auto bg-yellow-500 btn text-white' disabled={!isDisabled}>
                                <span className='text-white'>Parcourir le fichier</span>
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
            <p className={`${!isDisabled ? 'block' : 'hidden'} text-center text-red-600 font-semibold mt-6`}>Your account have not approved yet</p>
            <div className='my-10'>
                {
                    files?.map((f, i) => {
                        console.log(f);
                        return (
                            <>
                                <div className='my-4 w-3/4 mx-auto flex justify-between'>
                                    <div className='flex gap-2 items-center'>
                                        <Image className='h-[32px] w-[32px]' alt="logo" src={gpx} />
                                        <p className='text-white'>{f.filename}</p>
                                    </div>
                                    <div className='flex items-center gap-6'>
                                        <p className={`${f?.status === false ? 'block' : 'hidden'} flex items-center gap-2`}>
                                            <span className='text-white'>Chargement</span>
                                            <span className="loading loading-spinner text-accent"></span>
                                        </p>
                                        <p className={`${f?.status === true ? 'block' : 'hidden'} flex items-center gap-2`}>
                                            <span className='text-white'>Complite</span>

                                            <FaCheck color='green' />                                        </p>
                                        <p className={`${f?.status === 'rejected' ? 'block' : 'hidden'} flex items-center gap-2`}>
                                            <span className='text-white'>Erreur de chargement</span>

                                            <FaTimes color='red' />                                       </p>
                                        <button onClick={() => handleDelete(f?._id)} className={`${f?.status && 'hidden'} btn`}>
                                            <FaTrashAlt />
                                        </button>
                                    </div>
                                </div>
                            </>
                        )
                    })
                }
            </div>

            <div className='flex items-center 2xl:flex-row xl:flex-row flex-col justify-between w-3/4 mx-auto 2xl:gap-2 xl:gap2 gap-y-6 2xl:mt-20 xl:mt-14 pb-20'>
                <div className="form-control relative">
                    <label className="label items-center justify-normal w-fit h-fit py-0 gap-1 absolute left-[12px] -top-[10px]">
                        <span className="label-text text-[#666] text-sm font-bold py-0">Discipline </span>
                        <FaCheck size={'0.85rem'} color='#2A7029' />
                    </label>
                    <select
                        className="select select-bordered w-[300px] bg-black text-white"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    >
                        <option value="" disabled className='text-white'>Select a category</option>

                        <option className={`${userInfo?.Wingfoil || userInfo?.WatermanCrown ? 'block' : 'hidden'} uppercase text-white `} value={'Wingfoil'}>wingfoil</option>

                        <option className={`${userInfo?.Windfoil || userInfo?.WatermanCrown ? 'block' : 'hidden'} uppercase text-white`} value={'Windfoil'}>windfoil</option>

                        <option className={`${userInfo?.Dockstart ? 'block' : 'hidden'} uppercase text-white`} value={'dockstart'}>dockstart</option>

                        <option className={`${userInfo?.Surffoil ? 'block' : 'hidden'} uppercase text-white`} value={'surfFoil'}>surf foil</option>

                        <option className={`${userInfo?.Downwind || userInfo?.WatermanCrown ? 'block' : 'hidden'} uppercase text-white`} value={'dw'}>dw</option>
                    </select>
                </div>
                <div className='flex gap-2'>
                    <button className='uppercase text-gray-600 bg-gray-300 btn'>
                        annuler
                    </button>
                    <button onClick={handleSave} className='uppercase text-white bg-blue-500 btn'>
                        sauver
                    </button>
                </div>
            </div>
        </>
    );
};

export default UploadGPX;
