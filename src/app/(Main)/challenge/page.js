import Image from 'next/image';
import React from 'react';
import image from '../../../../public/DSC08012.png'
import Join from '@/Shared/Join';
import Cards from '@/ui/Cards';
import CardsByDistance from '@/ui/CardsByDistance';
import { antiHero } from '../layout';

const page = () => {
    return (
        <div>
            <div className='m-[10px] relative'>
                <Image
                    src={image}
                    alt='banner-image'
                    placeholder='blur'
                    className='w-full h-auto'
                />
                <h2 className={`${antiHero.className} text-white 2xl:text-7xl xl:text-5xl font-bold absolute left-24 bottom-10 uppercase`}>Defis de l'EvEnement</h2>
            </div>

            <div className='2xl:px-40 xl:px-28 2xl:mt-28 xl:mt-16'>
                <h2 className={`${antiHero.className} font-bold xl:text-4xl text-black 2xl:text-5xl`}>
                    <span className="text-blue-600">Watermen Crown</span> Wingfoil,
                    <br /> Windfoil, Dockstart, Surffoil
                </h2>
                <p className="font-semibold uppercase text-[#111111BF] xl:text-xs 2xl:text-lg xl:my-3 2xl:my-5">
                    classement général
                </p>
                <div className='2xl:h-[420px] points 2xl:p-5 xl:p-4 rounded-[10px] xl:h-[300px] flex flex-col justify-between'>
                    <p className='uppercase font-semibold 2xl:text-base xl:text-xs text-white'>niveau <span className={`${antiHero.className} text-blue-500`}>général</span></p>
                    <div>
                        <p className='uppercase font-semibold text-white 2xl:text-lg xl:text-sm'>Réservé aux participants sur les <span className={`${antiHero.className} text-blue-500`}>4 disciplines</span></p>
                        <h1 className='2xl:text-7xl text-white xl:text-5xl font-medium uppercase'><span className={`${antiHero.className} text-[#EDBE1A]`}>Points gagnants</span> — la somme des points obtenus pour la participation aux 4 disciplines</h1>
                    </div>
                </div>
            </div>
            <div className='2xl:p-40 xl:p-28 bg-black 2xl:mt-40 xl:mt-28'>
                <h2 className={`${antiHero.className} 2xl:text-5xl xl:text-3xl font-bold text-white`}>Temps passé à l’eau sur la <br /> durée de l’événement</h2>
                <p className='uppercase 2xl:text-base 2xl:mt-5 xl:mt-3 xl:text-xs text-white'>Pour Wingfoil, windfoil, dockstart, surf foil, DW</p>
                <Cards />
            </div>
            <div className='2xl:p-40 xl:p-28 w-full'>
                <h2 className='2xl:text-5xl xl:text-3xl font-bold'>Distance totale parcourue <br /> sur la durée de l’événement</h2>
                <p className='uppercase 2xl:text-base 2xl:mt-5 xl:mt-3 xl:text-xs font-semibold text-opacity-60'>Pour Wingfoil, windfoil, dockstart, DW</p>
                <CardsByDistance />
            </div>
            <Join />
        </div>
    );
};

export default page;