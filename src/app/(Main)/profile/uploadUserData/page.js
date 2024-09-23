import UploadGPX from '@/ui/UploadGPX';
import React from 'react';
import { antiHero } from '../../layout';

const page = () => {
    return (
        <div className='2xl:px-36 2xl:pt-32 xl:px-20 xl:pt-32 px-6 pt-28'>
            <h1 className={`${antiHero.className} font-bold 2xl:text-7xl xl:text-5xl text-center text-white`}>Telechargez vos resultats</h1>
            <p className='2xl:text-lg xl:text-sm text-[8px] 2xl:mt-5 xl:mt-3 font-medium text-gray-400 text-center'>Sélectionnez et téléchargez les fichiers de votre choix</p>
            <UploadGPX />
        </div>
    );
};

export default page;