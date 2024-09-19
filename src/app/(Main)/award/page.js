import React from 'react';
import image from '../../../../public/DSC08000.png'
import Image from 'next/image';
import Sponsor from '@/Shared/Sponsor';
import Join from '@/Shared/Join';
import TopAchiver from '@/Components/TopAchiver';
import { antiHero } from '../layout';
import priceImage from '../../../../public/Frame 53@2x.png'

const page = () => {
    return (
        <div className='banner'>
            <div className='2xl:m-[10px] m-1 relative'>
                <Image
                    src={image}
                    alt='banner-image'
                    placeholder='blur'
                    className='w-full max-h-auto min-h-[20vh]'
                />
                <h2 className={`${antiHero.className} text-white 2xl:text-7xl xl:text-5xl text-lg font-bold absolute 2xl:left-24 xl:left-24 2xl:bottom-10 xl:bottom-10 left-10 bottom-5`}>What you can win!</h2>
            </div>
            <Sponsor />
            <p className="text-center font-semibold uppercase text-[#111111BF] xl:text-xs 2xl:text-lg text-[6px]">
                classement général — La principale récompense
            </p>
            <h2 className={`${antiHero.className} text-center font-bold xl:text-4xl text-lg text-black 2xl:text-5xl xl:mt-2 2xl:mt-5`}>
                <span className="text-blue-500">Watermen Crown</span> Wingfoil,
                <br />
                Windfoil, Dockstart, Surffoil
            </h2>
            <div className='2xl:px-36 xl:px-20 2xl:mt-10 xl:mt-8 mt-4 px-6'>
                <div className='2xl:h-[320px] xl:h-[300px] relative'>
                    <Image
                        src={priceImage}
                        alt='watermen-crown'
                        placeholder='blur'
                        className='w-full h-full 2xl:rounded-[10px] xl:rounded-[10px] rounded object-cover'
                    />
                    <div class="absolute inset-0 bg-gradient-to-tr from-transparent to-black opacity-40"></div>
                    <div className='inset-0 absolute z-20 p-4 flex flex-col h-full'>
                        <h2 className={`${antiHero.className} text-[#FAE500] font-normal 2xl:text-7xl xl:text-4xl`}>#1.</h2>
                        <p className='2xl:text-6xl xl:text-4xl font-semibold text-white mt-auto'>Exclusive Garmin Enduro 2 Set (smartwatch + navigation equipment)</p>
                    </div>
                </div>
                <div className='2xl:mt-40 xl:mt-28 mt-12'>
                    <h2 className={`${antiHero.className} text-center font-bold xl:text-4xl 2xl:mb-10 xl:mb-6 mb-2 2xl:text-5xl xl:mt-2 2xl:mt-5 text-blue-500 text-lg`}>
                        Tous les prix dans les <br /> autres nominations
                    </h2>
                    <div className='custom-grid border-t-2 border-black'>
                        <h5 className='2xl:text-lg xl:text-sm text-xs font-semibold 2xl:mt-[18px] xl:mt-3 mt-2 2xl:text-left xl:text-left text-center uppercase '>Temps passé à l’eau sur la <br /> durée de l’événement</h5>
                        <div>
                            <TopAchiver />
                            <TopAchiver />
                        </div>
                    </div>
                </div>
            </div>
            <div className='2xl:mt-40 xl:mt-28 mt-14'>
                <Join />
            </div>
        </div >
    );
};

export default page;