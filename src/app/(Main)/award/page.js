/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import Join from '@/Shared/Join';
import { morgana } from '../layout';
import getAllSponsors from '@/lib/getAllSponsors';
import Award from '@/ui/Award';

const page = async () => {
    const sponsors = await getAllSponsors();
    return (
        <div className=''>
            <div className='min-h-screen flex flex-col'>
                <div className='m-auto'>
                    <h1 className={`${morgana.className} text-center 2xl:text-9xl xl:text-7xl text-5xl text-white uppercase`}>Award</h1>
                </div>
            </div>
            <div className='bg-white 2xl:p-20 xl:p-20 p-10 rounded-t-[50px]'>
                <h2 className={`${morgana.className} uppercase text-center 2xl:text-7xl xl:text-5xl text-2xl`}>découvrez les partenaires de <br />l’événement</h2>

                <div className='grid 2xl:grid-cols-2 xl:grid-cols-2 grid-cols-1 2xl:mt-20 xl:mt-16 mt-10 2xl:gap-10 xl:gap-8 gap-y-4 2xl:justify-center xl:justify-center justify-normal'>
                    {
                        sponsors.map((sponsor, i) => {
                            return (
                                <div key={i} className='2xl:space-y-6 xl:space-y-5 space-y-3 '>
                                    <div className='w-fit'>
                                        <img src={sponsor.sponsorPicture} alt='sponsor' />
                                    </div>
                                    <p className='text-[#0000007f] 2xl:text-2xl xl:text-lg text-sm font-semibold'>
                                        {sponsor.SponosorDetails}
                                    </p>
                                    <div>
                                        <a className='text-[#000] 2xl:text-2xl xl:text-lg text-sm font-semibold underline' href={sponsor.sponsorName}>{sponsor.sponsorName}</a>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <h2 className={`${morgana.className} uppercase text-center 2xl:text-7xl xl:text-5xl text-2xl 2xl:mt-24 xl:mt-16 mt-10`}>les podiums de l’événement</h2>
                <p className='text-[#0000007f] 2xl:text-2xl xl:text-lg text-sm font-semibold text-center 2xl:my-12 xl:my-6 my-4'>Temps passé à l’eau en wingfoil, downwind, windfoil, dockstart, surf foil</p>
                <Award />
            </div>
            {/* <div className='2xl:m-[10px] m-1 relative'>
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
            </div> */}
            <Join />
        </div >
    );
};

export default page;