import FaArrow from '@/icons/FaArrow';
import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const Join = () => {
    return (
        <div className='px-[10px]'>
            <div className='px-5 bg-black rounded-[10px]'>
                <div className='2xl:px-[140px] xl:px-20 2xl:py-20 xl:py-[60px]'>
                    <p className='text-white font-medium xl:text-5xl 2xl:text-7xl '>Rejoignez-nous et prenez part à la première édition des AFS GAMES ONLINE 2024, rencontrez des passionnés et participez à des challenges inédits. </p>

                    <div className='2xl:mt-7 xl:mt-5 flex items-start 2xl:gap-20 xl:gap-16'>
                        <p className='text-white xl:text-xl font-semibold 2xl:text-3xl '>Ne manquez pas cette occasion unique de vivre <br /> l'expérience Foiling Spirit !</p>

                        <p className=' 2xl:text-xl xl:text-sm font-semibold text-white'>Emplacement-<span className='text-red-600'>ONLINE</span> <br /> PRIX-<span className='text-red-600'>Free</span></p>

                        <p className='text-red-600 2xl:text-xl xl:text-sm font-semibold  flex items-center gap-2'>
                            <span>30 Sep.</span>
                            <span className='text-white'>(Lundi)</span>
                            <FaArrowRight color='white' />
                            <span>03 Oct.</span>
                            <span className='text-white'>(Jeudi)</span>
                        </p>
                    </div>

                    <button className='bg-red-700 flex items-center justify-center text-white 2xl:text-xl xl:text-sm font-semibold uppercase 2xl:mt-14 xl:mt-10 w-full border-none 2xl:rounded-[20px] xl:rounded-[12px] 2xl:py-7 xl:py-4 gap-2'>
                        <span>M’inscrire</span>
                        <FaArrow className={'2xl:w-[20px] 2xl:h-[20px] xl:w-[14px] xl:h-[14px]  mt-1'} />
                    </button>

                    <p className='text-[#666] 2xl:text-sm xl:text-[10px] xl:leading-[10px] font-normal text-center mt-5'><span className='text-red-600'>*</span>Le client AFS est désigné par un pratiquant possédant au moins un foil AFS et l’utilisant <br /> dans le cadre de la compétition. Le choix de la planche et de la wing est libre. </p>
                </div>
            </div>
        </div>
    );
};

export default Join;