'use client';
import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { FaPlus } from 'react-icons/fa';
import Cloud from '@/icons/Cloud';
import * as toGeoJSON from 'togeojson';
import { DOMParser } from 'xmldom';
import useAxiosPublic from '@/Hooks/useAxiosPublic';

const UploadGPX = () => {
    const [geojson, setGeojson] = useState(null);
    const axiosPublic = useAxiosPublic();
    const { getRootProps, getInputProps, acceptedFiles, isDragActive, isDragAccept, isDragReject } = useDropzone({
        accept: '.gpx',
        maxSize: 10 * 1024 * 1024, // 10 MB
        onDrop: (files) => {
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
            return 'border-blue-500'; // Style when file is dragged over
        }
        if (isDragReject) {
            return 'border-red-500'; // Style when file type is rejected
        }
        if (isDragAccept) {
            return 'border-green-500'; // Style when file is accepted
        }
        return 'border-gray-300'; // Default style
    };


    const handleSave = () => {
        axiosPublic.post('/geoJson', JSON.stringify(geojson, null, 2))
            .then((response) => {
                alert('GeoJson saved successfully')
            })
    }

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
                    <div>
                        {acceptedFiles.length > 0 && (
                            <ul className='list-disc mt-4'>
                                {acceptedFiles.map(file => (
                                    <li key={file.path}>{file.path} - {file.size} bytes</li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>
            </div>
            <div className='flex items-center justify-center gap-2 2xl:mt-20 xl:mt-14'>
                <button className='uppercase text-gray-600 bg-gray-300 btn'>
                    annuler
                </button>
                <button onClick={() => handleSave()} className='uppercase text-gray-600 bg-gray-300 btn'>
                    sauver
                </button>
            </div>
        </>
    );
};

export default UploadGPX;
