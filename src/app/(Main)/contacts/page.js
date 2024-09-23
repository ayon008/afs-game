/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { morgana } from '../layout';
import image1 from '../../../../public/Rectangle 4269.png';
import image2 from '../../../../public/Rectangle 4272.png';
import image3 from '../../../../public/Rectangle 4275.png';
import Image from 'next/image';
import Join from '@/Shared/Join';
import facebook from '../../../../public/uiw_facebook.svg'
import instagram from '../../../../public/streamline_instagram-solid.svg'
import tiktok from '../../../../public/ic_baseline-tiktok.svg'
import youtube from '../../../../public/ri_youtube-fill.svg'
import whatsapp from '../../../../public/ri_whatsapp-fill.svg'

const page = () => {
    return (
        <div className=''>
            <div className='max-h-[750px] min-h-[550px] flex flex-col'>
                <div className='m-auto'>
                    <h1 className={`${morgana.className} text-center 2xl:text-9xl xl:text-7xl text-5xl text-white uppercase`}>Contact</h1>
                </div>
            </div>
            <div className='bg-white 2xl:p-20 xl:p-20 p-10 rounded-t-[50px]'>
                <h2 className={`${morgana.className} uppercase text-center 2xl:text-7xl xl:text-5xl text-3xl`}>l’équipe AFS</h2>
                <div className='2xl:mt-14 xl:mt-10 mt-8 w-fit mx-auto grid 2xl:grid-cols-3 xl:grid-cols-3 grid-cols-1 2xl:gap-8 xl:gap-6 gap-4'>
                    <div className="card bg-base-100 w-full shadow-xl">
                        <figure>
                            <Image
                                src={image1}
                                alt="Shoes"
                                className='w-full'
                            />
                        </figure>
                        <div className="card-body p-6">
                            <div>
                                <h2 className="card-title 2xl:text-2xl xl:text-base text-sm">Chaussy</h2>
                                <p className='2xl:text-2xl xl:text-lg text-sm'>Chloé</p>
                            </div>
                            <p className='mt-2 text-[#989898] 2xl:text-lg xl:text-base text-sm'>Responsable évenementiel</p>
                            <div className='bg-[#EFEFEF] p-3 rounded-[18.5px] w-fit mt-4'>
                                <a href={'mailto:chloe.chaussy@foilandco.com'} className='text-[#B5B5B5] 2xl:text-sm xl:text-xs text-[8px]'>chloe.chaussy@foilandco.com</a>
                            </div>
                        </div>
                    </div>
                    <div className="card bg-base-100 w-full shadow-xl">
                        <figure>
                            <Image
                                src={image2}
                                alt="Shoes"
                                className='w-full'
                            />
                        </figure>
                        <div className="card-body p-6">
                            <div>
                                <h2 className="card-title 2xl:text-2xl xl:text-base text-sm">Raffarin</h2>
                                <p className='2xl:text-2xl xl:text-lg text-sm'>Antonin</p>
                            </div>
                            <p className='mt-2 text-[#989898] 2xl:text-lg xl:text-base text-sm'>Responsable Marketing &
                                Communication</p>
                            <div className='bg-[#EFEFEF] p-3 rounded-[18.5px] w-fit mt-4'>
                                <a href={'mailto:antonin.raffarin@foilandco.com'} className='text-[#B5B5B5] 2xl:text-sm xl:text-xs text-[8px]'>antonin.raffarin@foilandco.com</a>
                            </div>
                        </div>
                    </div>
                    <div className="card bg-base-100 w-full shadow-xl">
                        <figure>
                            <Image
                                src={image3}
                                alt="Shoes"
                                className='w-full'
                            />
                        </figure>
                        <div className="card-body p-6">
                            <div>
                                <h2 className="card-title 2xl:text-2xl xl:text-base text-sm">viseux</h2>
                                <p className='2xl:text-2xl xl:text-lg text-sm'>Bénédicte</p>
                            </div>
                            <p className='mt-2 text-[#989898] 2xl:text-lg xl:text-base text-sm'>Responsable contenu</p>
                            <div className='bg-[#EFEFEF] p-3 rounded-[18.5px] w-fit mt-4'>
                                <a href={'mailto:benedicte.viseux@foilandco.com'} className='text-[#B5B5B5] 2xl:text-sm xl:text-xs text-[8px]'>benedicte.viseux@foilandco.com</a>
                            </div>
                        </div>
                    </div>
                </div>
                <h2 className={`${morgana.className} 2xl:my-20 xl:my-16 my-10 uppercase text-center 2xl:text-7xl xl:text-5xl text-3xl`}>Médias sociaux</h2>
                <div className='flex items-center justify-center 2xl:flex-nowrap xl:flex-nowrap flex-wrap 2xl:gap-10 xl:gap-8 gap-6'>

                    <a target='_blank' className="cursor-pointer" href={'https://www.facebook.com/afsfoils/'}>
                        <Image src={facebook} alt='facebook' />
                    </a>
                    <a className='cursor-pointer' target='_blank' href='https://www.instagram.com/afsfoils/'>
                        <Image src={instagram} alt='instagram' />
                    </a>
                    <a className='cursor-pointer' target='_blank' href='https://www.youtube.com/channel/UCv-LqvRBRFQWBSJSeIZK_5g'>
                        <Image src={youtube} alt='youtube' />
                    </a>
                    <a className='' target='_blank' href=''>
                        <Image src={tiktok} alt='tiktok' />
                    </a>
                    <a className='cursor-pointer' href='https://www.whatsapp.com/channel/0029VaR5sep0Qeajo7HHEQ32'>
                        <Image src={whatsapp} alt='whatsapp' />
                    </a>
                </div>
            </div>
            <Join />
        </div>
    );
};

export default page;