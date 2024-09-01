import UploadGPX from '@/ui/UploadGPX';
import React from 'react';

const page = () => {
    return (
        <div className='2xl:px-36 2xl:pt-10 xl:px-20 xl:pt-10'>
            <h1 className='text-[#000] font-bold 2xl:text-7xl xl:text-5xl text-center'>Téléchargez vos résultats</h1>
            <p className='2xl:text-lg xl:text-sm 2xl:mt-5 xl:mt-3 font-medium text-gray-400 text-center'>Sélectionnez et téléchargez les fichiers de votre choix</p>
            <UploadGPX />

            <div className='flex items-center justify-center gap-2 2xl:mt-20 xl:mt-14'>
                <button className='uppercase text-gray-600 bg-gray-300 btn'>
                    annuler
                </button>
                <button className='uppercase text-gray-600 bg-gray-300 btn'>
                    sauver
                </button>
            </div>
        </div>
    );
};

export default page;