import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import bannerImage from '../../public/1. Hero.png'
import windfoil1 from '../../public/dbad16d0a9e16cb10c083d31371d9e6b.png'
import windfoil2 from '../../public/0484a66553ca0f2ce1126de24262f077.png'
import windfoil3 from '../../public/899f81cccfb820e0a76ec4d480220679.png'
import windfoil4 from '../../public/9b5f432062660643beb47fe5b853ad7f.jpg'
import Sponsor from '@/Shared/Sponsor';
import Join from '@/Shared/Join';
import FaArrow from '@/icons/FaArrow';
import { antiHero } from '@/app/(Main)/layout';

const steps = [
    <>
        Cliquez sur le lien d&apos;inscription <Link href={'/register'} className='text-blue-500 underline'>ici.</Link>
    </>,
    "Remplissez le formulaire avec vos informations.",
    "Confirmez votre inscription et recevez votre confirmation par email."
]

const Banner = () => {
    return (
        <div className='z-30'>
            {/* Banner Image */}
            <div className='relative'>
                <Image src={bannerImage} alt='banner-image' className='min-h-[70vh] max-h-screen z-10' />
                <div className='2xl:text-lg font-semibold 2xl:leading-5 xl:leading-5 xl:text-sm  2xl:w-1/2 xl:w-1/2 w-3/4 text-white absolute bottom-[15%] left-1/2 -translate-x-1/2 transform  z-30'>
                    <p className='xl:text-xs 2xl:text-xs text-[8px]'>Les AFS GAMES sont un événement exclusif, réservé uniquement aux clients équipés de matériel AFS*. Cet événement unique met en avant plusieurs disciplines de foil, offrant une expérience inédite et immersive aux participants. La particularité des AFS GAMES, c’est qu’ils se déroulent en ligne !</p>

                    <div className='flex items-center 2xl:gap-10 xl:gap-5 gap-3 mt-5 justify-center z-30'>
                        <Link href={'/register'}>
                            <button className='bg-white text-black flex items-center font-semibold 2xl:text-base xl:text-xs text-[10px] rounded xl:py-2 xl:px-4
                            px-1 py-2
                            uppercase gap-1'>
                                <span>S’inscrire</span>
                                <FaArrow className={'2xl:w-[14px] 2xl:h-[14px] w-[8px] h-[8px] xl:w-[10px] xl:h-[10px] 2xl:mt-1'} color={'black'} />
                            </button>
                        </Link>
                        <span className='2xl:text-base xl:text-xs font-semibold text-[8px]'>ou</span>
                        <Link href={'/login'}>
                            <button className='bg-yellow-400 text-white flex items-center font-semibold 2xl:text-base xl:text-xs text-[10px] rounded xl:py-2 xl:px-4 px-1 py-2 uppercase gap-1'>
                                <span>M&apos;inscrire</span>
                                <FaArrow className={'2xl:w-[14px] 2xl:h-[14px] xl:w-[10px] xl:h-[10px] w-[8px] h-[8px] 2xl:mt-1'} color={'white'} />
                            </button>
                        </Link>
                    </div>
                </div>
            </div>

            <div className='2xl:mt-36 xl:mt-20 lg:mt-16 mt-10 2xl:px-40 xl:px-24 lg:px-16 px-10 2xl:pt-10 xl:pt-8 lg:pt-7'>
                <p className='2xl:text-[70px] xl:text-5xl lg:text-3xl text-xl font-semibold 2xl:leading-[70px] 2xl:tracking-[-0.7px] xl:leading-[60px] lg:leading-[50px] leading-10 xl:tracking-[-0.6px] lg:-tracking-[-0.6px] tracking-[-0.5px]'><span className={`${antiHero.className} text-blue-500`}>Du 30 septembre au 3 octobre</span>, naviguez sur vos spots préférés équipé de vos GPS, uploadez votre session sur votre compte via notre site, passez les paliers et intégrez le classement de points ! </p>
            </div>
            <Sponsor />
            <div className='2xl:p-40 xl:p-24 lg:p-16 p-10 bg-black'>
                <div className='2xl:w-[80%] 2xl:mx-auto'>
                    <p className={`2xl:text-5xl xl:text-3xl lg:text-xl text-lg text-white font-bold text-center 2xl:tracking-wider xl:tracking-wider tracking-wide ${antiHero.className} text-yellow-500`}>Plusieurs disciplines et <br /> challenges au choix!</p>
                    <div className='w-fit mx-auto flex 2xl:flex-nowrap xl:flex-nowrap lg:flex-nowrap justify-center 2xl:justify-normal xl:justify-normal flex-wrap 2xl:gap-20 xl:gap-16 lg:gap-12 gap-8 2xl:mt-[60px] xl:mt-10 lg:mt-8 mt-6'>
                        <div>
                            <Image placeholder='blur' className='rounded-[5px] 2xl:h-[280px] 2xl:w-[250px] xl:w-[170px] xl:h-[190px] lg:w-[150px] lg:h-[170px] w-[120px] h-[150px]' src={windfoil4} alt='' />
                            <p className='2xl:text-[28px] xl:text-xl lg:text-lg text-base font-bold  text-white 2xl:mt-[18px] xl:mt-3 lg:mt-2 mt-1'>Wingfoil</p>
                        </div>
                        <div className='2xl:mt-24 xl:mt-16 lg:mt-10 mt-6'>
                            <Image placeholder='blur' className='rounded-[5px] 2xl:h-[280px] 2xl:w-[250px] xl:w-[170px] xl:h-[190px] lg:w-[150px] lg:h-[170px] w-[120px] h-[150px]' src={windfoil3} alt='' />
                            <p className='2xl:text-[28px] xl:text-xl lg:text-lg text-base font-bold  text-white 2xl:mt-[18px] xl:mt-3 lg:mt-2 mt-1'>Windfoil</p>
                        </div>
                        <div>
                            <Image placeholder='blur' className='rounded-[5px] 2xl:h-[280px] 2xl:w-[250px] xl:w-[170px] xl:h-[190px] lg:w-[150px] lg:h-[170px] w-[120px] h-[150px]' src={windfoil2} alt='' />
                            <p className='2xl:text-[28px] xl:text-xl lg:text-lg text-base font-bold  text-white 2xl:mt-[18px] xl:mt-3 lg:mt-2 mt-1'>Downwind</p>
                        </div>
                        <div className='2xl:mt-24 xl:mt-16 lg:mt-10 mt-6'>
                            <Image placeholder='blur' className='rounded-[5px] 2xl:h-[280px] 2xl:w-[250px] xl:w-[170px] xl:h-[190px] lg:w-[150px] lg:h-[170px] w-[120px] h-[150px]' src={windfoil1} alt='' />
                            <p className='2xl:text-[28px] xl:text-xl lg:text-lg text-base font-bold  text-white 2xl:mt-[18px] xl:mt-3 lg:mt-2 mt-1'>Dockstart</p>
                        </div>
                    </div>
                </div>
                <p className='2xl:w-1/2 xl:w-1/2 2xl:text-left xl:text-left text-center 2xl:ml-auto xl:ml-auto 2xl:mt-20 xl:mt-10 mt-6 2xl:text-[32px] text-base text-white font-semibold xl:text-xl'>
                    Peu importe votre niveau ou votre âge, vous pouvez prendre part à cet événement, pensé et crée pour nos clients AFS. <span className={`${antiHero.className} text-yellow-500 `}>Des challenges de distance et de temps vous attendent !</span>
                </p>
            </div>
            <div className='2xl:p-40 xl:p-28 p-10'>
                <p className={`${antiHero.className} 2xl:text-5xl xl:text-3xl text-lg font-bold text-blue-500`}>L&apos;inscription est <br /> simple et rapide</p>
                <div className='2xl:mt-10 xl:mt-6 mt-3 grid 2xl:grid-cols-3 xl:grid-cols-3 grid-cols-1 2xl:gap-5 xl:gap-3 gap-2'>
                    {
                        steps.map((step, i) => {
                            return (
                                <div key={i} className='bg-[#000] 2xl:p-10 xl:p-7 2xl:h-[327px] xl:h-[230px] h-[150px] p-4 rounded-[5px] flex flex-col justify-between'>
                                    <h4 className='uppercase  2xl:text-xl xl:text-sm font-semibold text-white'>STEP <span className={`${antiHero.className} text-blue-500 2xl:text-2xl xl:text-lg`}>0{i + 1}</span></h4>
                                    <p className='text-white 2xl:text-4xl xl:text-2xl text-base font-bold'>{step}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <Join />
        </div>

    );
};

export default Banner;