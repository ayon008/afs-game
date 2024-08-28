import Image from 'next/image';
import React from 'react';
import image1 from '../../public/DSC08000.jpg'
import Link from 'next/link';
import FaArrow from '@/icons/FaArrow';
import sponsor1 from '../../public/svgexport-1 (1) 1.svg'
import sponsor2 from '../../public/svgexport-1 1.svg'
import sponsor3 from '../../public/image 7247.png'
import windfoil1 from '../../public/dbad16d0a9e16cb10c083d31371d9e6b.png'
import windfoil2 from '../../public/0484a66553ca0f2ce1126de24262f077.png'
import windfoil3 from '../../public/899f81cccfb820e0a76ec4d480220679.png'
import windfoil4 from '../../public/9b5f432062660643beb47fe5b853ad7f.jpg'
import { FaArrowRight } from 'react-icons/fa';


const steps = [
    <>
        Cliquez sur le lien d'inscription <span className='text-red-600'>ici.</span>
    </>,
    "Remplissez le formulaire avec vos informations.",
    "Confirmez votre inscription et recevez votre confirmation par email."
]

const Banner = () => {
    return (
        <div className='2xl:max-w-[1920px] xl:max-w-7xl mx-auto'>
            {/* Headline */}
            <div className='2xl:px-36 xl:px-20 2xl:py-6 xl:py-3'>
                <div className='w-1/2'>
                    <div className='me-5 mb-[10px]'>
                        <h4 className='2xl:text-xl xl:text-sm text-right font-medium text-[#111111BF] 2xl:mb-5 xl:mb-2'>Bienvenue sur le site officiel des </h4>
                        <h1 className='2xl:text-[90px] xl:text-6xl font-semibold leading-[81px]
                     2xl:tracking-[-3.6px] xl:tracking-[-1.6px] uppercase text-right'><span className='text-red-600'>AFS GAMES</span>
                            <br /> ONLINE 2024</h1>
                    </div>
                </div>
                <div className='2xl:text-lg font-semibold 2xl:leading-5 xl:text-sm xl:leading-5 w-1/2 ml-auto'>
                    <p className='xl:text-xs'>Les AFS GAMES sont un événement exclusif, réservé uniquement aux clients équipés de matériel AFS*. Cet événement unique met en avant plusieurs disciplines de foil, offrant une expérience inédite et immersive aux participants. La particularité des AFS GAMES, c’est qu’ils se déroulent en ligne !</p>

                    <div className='flex items-center 2xl:gap-10 xl:gap-5 mt-5'>
                        <Link href={'subscribe'}>
                            <button className='bg-black text-white flex items-center font-semibold 2xl:text-base xl:text-xs rounded xl:py-2 xl:px-4 uppercase gap-1'>
                                <span>S’inscrire</span>
                                <FaArrow className={'2xl:w-[14px] 2xl:h-[14px] xl:w-[10px] xl:h-[10px] 2xl:mt-1'} />
                            </button>
                        </Link>
                        <span className='2xl:text-base xl:text-xs font-semibold'>ou</span>
                        <Link href={'subscribe'}>
                            <button className='bg-red-600 text-white flex items-center font-semibold 2xl:text-base xl:text-xs rounded xl:py-2 xl:px-4 uppercase gap-1'>
                                <span>M'inscrire</span>
                                <FaArrow className={'2xl:w-[14px] 2xl:h-[14px] xl:w-[10px] xl:h-[10px] 2xl:mt-1'} />
                            </button>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Banner Image */}
            <div className='mt-4 px-[10px]'>
                <Image
                    src={image1}
                    alt='surfing in the ocean'
                    placeholder='blur'
                />
            </div>


            <div className='2xl:mt-36 xl:mt-20 2xl:px-40 2xl:pt-10 xl:pt-8 xl:px-24'>
                <p className='2xl:text-[70px] xl:text-5xl font-semibold leading-[70px] tracking-[-0.7px]'><span className='text-red-600'>Du 30 septembre au 3 octobre</span>, naviguez sur vos spots préférés équipé de vos GPS, uploadez votre session sur votre compte via notre site, passez les paliers et intégrez le classement de points ! </p>
            </div>
            <div className='2xl:mt-[60px] xl:mt-10 2xl:px-24 xl:px-10 flex items-center justify-between 2xl:mb-52 xl:mb-32'>
                <Image className='2xl:w-[75px] xl:w-[75px] h-auto'

                    src={sponsor2}
                    alt='sponsor1'
                />
                <Image className='2xl:w-[75px] xl:w-[75px] h-auto'
                    src={sponsor1}
                    alt='sponsor1'
                />
                <Image className='2xl:w-[75px] xl:w-[75px] h-auto'
                    src={sponsor3}
                    alt='sponsor1'
                />
                <Image className='2xl:w-[75px] xl:w-[75px] h-auto'
                    src={sponsor2}
                    alt='sponsor1'
                />
                <Image className='2xl:w-[75px] xl:w-[75px] h-auto'
                    src={sponsor1}
                    alt='sponsor1'
                />
                <Image className='2xl:w-[75px] xl:w-[75px] h-auto'
                    src={sponsor3}
                    alt='sponsor1'
                />
                <div className='flex items-center relative'>
                    <Image className='2xl:w-[75px] xl:w-[75px] h-auto'
                        src={sponsor2}
                        alt='sponsor1'
                    />
                    <div className='px-8' style={{ background: 'linear-gradient(90deg, rgba(255, 255, 248, 0.00) 0%, #FFFFF8 10%, #FFFFF8 90%, rgba(255, 255, 248, 0.00) 100%)' }}>
                        <p className='text-black uppercase  2xl:text-lg xl:text-base font-semibold'>De nombreux lots à gagner <br /> avec <span className='text-red-600'>nos partenaires</span></p>
                    </div>
                    <Image className='2xl:w-[75px] xl:w-[75px] h-auto'
                        src={sponsor1}
                        alt='sponsor1'
                    />
                </div>
            </div>


            <div className='2xl:p-40 xl:p-24 bg-black'>
                <div className='w-[80%] mx-auto'>
                    <p className='2xl:text-5xl xl:text-3xl text-white font-bold  text-center tracking-wider'>Plusieurs disciplines et <br /> challenges au choix!</p>
                    <div className='flex justify-between 2xl:mt-[60px] xl:mt-10'>
                        <div>
                            <Image placeholder='blur' className='rounded-[5px] 2xl:h-[280px] 2xl:w-[250px] xl:w-[170px] xl:h-[200px]' src={windfoil4} alt='' />
                            <p className='2xl:text-[28px] xl:text-xl font-bold  text-white 2xl:mt-[18px] xl:mt-3'>Wingfoil</p>
                        </div>
                        <div className='2xl:mt-24 xl:mt-16'>
                            <Image placeholder='blur' className='rounded-[5px] 2xl:h-[280px] 2xl:w-[250px] xl:w-[170px] xl:h-[200px]' src={windfoil3} alt='' />
                            <p className='2xl:text-[28px] xl:text-xl font-bold  text-white 2xl:mt-[18px] xl:mt-3'>Wingfoil</p>
                        </div>
                        <div>
                            <Image placeholder='blur' className='rounded-[5px] 2xl:h-[280px] 2xl:w-[250px] xl:w-[170px] xl:h-[200px]' src={windfoil2} alt='' />
                            <p className='2xl:text-[28px] xl:text-xl font-bold  text-white 2xl:mt-[18px] xl:mt-3'>Downwind</p>
                        </div>
                        <div className='2xl:mt-24 xl:mt-16'>
                            <Image placeholder='blur' className='rounded-[5px] 2xl:h-[280px] 2xl:w-[250px] xl:w-[170px] xl:h-[200px]' src={windfoil1} alt='' />
                            <p className='2xl:text-[28px] xl:text-xl font-bold  text-white 2xl:mt-[18px] xl:mt-3'>Dockstart</p>
                        </div>
                    </div>
                </div>
                <p className='w-1/2 ml-auto 2xl:mt-20 xl:mt-10 2xl:text-[32px] text-white font-semibold xl:text-xl'>
                    Peu importe votre niveau ou votre âge, vous pouvez prendre part à cet événement, pensé et crée pour nos clients AFS. <span className='text-red-600'>Des challenges de distance et de temps vous attendent !</span>
                </p>
            </div>
            <div className='2xl:p-40 xl:p-28'>
                <p className='2xl:text-5xl xl:text-3xl font-bold'>L'inscription est <br /> simple et rapide</p>
                <div className='2xl:mt-10 xl:mt-6 grid grid-cols-3 2xl:gap-5 xl:gap-3'>
                    {
                        steps.map((step, i) => {
                            return (
                                <div key={i} className='bg-[#000] 2xl:p-10 xl:p-7 2xl:h-[327px] xl:h-[230px] rounded-[5px] flex flex-col justify-between'>
                                    <h4 className='uppercase  2xl:text-xl xl:text-sm font-semibold text-white'>STEP <span className='text-red-600'>0{i + 1}</span></h4>
                                    <p className='text-white 2xl:text-4xl xl:text-2xl font-bold'>{step}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

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
        </div>

    );
};

export default Banner;