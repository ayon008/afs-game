import React from 'react';
import image from '../../../../public/DSC08000.png'
import Image from 'next/image';
import Sponsor from '@/Shared/Sponsor';
import Join from '@/Shared/Join';
import TopAchiver from '@/Components/TopAchiver';

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
                <h2 className='text-white 2xl:text-7xl xl:text-5xl font-bold absolute left-24 bottom-10'>What you can win!</h2>
            </div>
            <Sponsor />
            <p className="text-center font-semibold uppercase text-[#111111BF] xl:text-xs 2xl:text-lg">
                classement général — La principale récompense
            </p>

            <h2 className="text-center font-bold xl:text-4xl text-black 2xl:text-5xl xl:mt-2 2xl:mt-5">
                <span className="text-red-600">Watermen Crown</span> Wingfoil,
                <br />
                Windfoil, Dockstart, Surffoil
            </h2>
            <div className='2xl:px-36 xl:px-20 2xl:mt-10 xl:mt-8'>
                <div className='bg-[#FFEFB0] 2xl:p-5 xl:p-3 rounded-[10px] flex items-start 2xl:gap-[10px] xl:gap-2'>
                    <p className='font-semibold 2xl:text-2xl xl:text-lg'>#1.</p>

                    {
                        Array.from({ length: 3 }, (_, i) => {
                            return (
                                <>
                                    <p className={`${i === 0 && 'hidden'} my-auto 2xl:text-lg xl:text-xs font-medium`}>&</p>
                                    <div className='relative 2xl:h-[260px] xl:h-[180px]'>
                                        <Image
                                            src={image}
                                            alt='watermen-crown'
                                            placeholder='blur'
                                            className='w-full h-full rounded-[10px]'
                                        />
                                        <div className='absolute inset-0 w-full h-full flex flex-col justify-between p-5'>
                                            <p className='text-semibold 2xl:text-lg xl:text-xs text-white'>01.PRIX</p>
                                            <p className='2xl:text-2xl xl:text-sm text-white font-semibold uppercase'>
                                                Exclusive Garmin Enduro 2 Set (smartwatch + navigation equipment)
                                            </p>
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>
                <div className='2xl:mt-40 xl:mt-28'>
                    <h2 className="text-center font-bold xl:text-4xl 2xl:mb-10 xl:mb-6 text-black 2xl:text-5xl xl:mt-2 2xl:mt-5">
                        Tous les prix dans les <br /> autres nominations
                    </h2>

                    <div className='custom-grid border-t-2 border-black'>
                        <h5 className='2xl:text-lg xl:text-sm font-semibold 2xl:mt-[18px] xl:mt-3 uppercase'>Temps passé à l’eau sur la durée de l’événement</h5>
                        <div>
                            <TopAchiver />
                            <TopAchiver />
                        </div>
                    </div>
                    <div className='custom-grid border-t-2 border-black'>
                        <h5 className='2xl:text-lg xl:text-sm font-semibold uppercase 2xl:mt-[18px] xl:mt-3'>Distance totale parcourue surla <br /> durée de l’événement</h5>
                        <div>
                            <TopAchiver />
                            <TopAchiver />
                        </div>
                    </div>
                </div>
            </div>
            <div className='2xl:mt-40 xl:mt-28'>
                <Join />
            </div>
        </div >
    );
};

export default page;