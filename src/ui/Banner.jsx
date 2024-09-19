import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import Sponsor from '@/Shared/Sponsor';
import FaArrow from '@/icons/FaArrow';
import { morgana } from '@/app/(Main)/layout';
import bannerImage from '../../public/Frame.png'
import image1 from '../../public/Rectangle 1.png'
import image2 from '../../public/Rectangle 2.png'
import image3 from '../../public/Rectangle 3.png'
import image4 from '../../public/Rectangle 4.png'
import image5 from '../../public/Rectangle 5.png'
import step1 from '../../public/Frame (1).png'
import step2 from '../../public/Frame 109.png'
import step3 from '../../public/Frame (2).png'
import Join from '@/Shared/Join';

const Banner = () => {
    return (
        <div className='z-30 banner'>
            <Image src={bannerImage} className='2xl:w-[527px] 2xl:h-[575px] mx-auto pt-24 xl:w-[450px] xl:h-[490px] w-[250px] h-auto' alt='' />
            <div className='2xl:px-32 xl:px-24 mt-10 mb-20 px-6'>
                <p className='text-white 2xl:text-3xl xl:text-xl font-semibold text-center text-xs'>
                    Du 30 septembre au 3 octobre, naviguez sur vos spots préférés équipé de vos GPS, uploadez votre session sur votre compte via notre site, passez les paliers et intégrez le classement de points !
                </p>
                <div className='w-fit mx-auto 2xl:mt-10 xl:mt-8 mt-6'>
                    <button className='btn bg-[#FFE500] border-none'>
                        <span>JE M'INSCRIS</span>
                        <FaArrow className={'2xl:w-[14px] 2xl:h-[14px] w-[8px] h-[8px] xl:w-[10px] xl:h-[10px] 2xl:mt-1'} color={'black'} />
                    </button>
                </div>
                <p className='text-center text-white 2xl:text-2xl xl:text-base font-medium 2xl:mt-32 xl:mt-24 text-sm mt-10'>
                    Les AFS GAMES sont un événement exclusif,<span className='text-[#FFE500]'>réservé uniquement aux clients équipés de matériel AFS*</span>. Cet événement unique met en avant plusieurs disciplines de foil, offrant une expérience inédite et immersive aux participants. La particularité des AFS GAMES, c’est qu’ils se déroulent en ligne !
                </p>
                <p className='2xl:text-base xl:text-[10px] text-[#FFE500] text-[8px] text-center mt-6'>*Le client AFS est désigné par un pratiquant possédant au moins un foil AFS et l’utilisant dans le cadre des <br /> challenges. Le choix de la planche et de la wing est libre.</p>
                <div>
                    <h1 className={`${morgana.className} text-center text-white 2xl:mt-28 xl:mt-16 mt-10 2xl:text-6xl xl:text-4xl uppercase text-2xl`}>
                        De nombreux lots à gagner <br /> avec <span className='text-[#FFE500]'>nos partenaires</span> !
                    </h1>
                </div>
            </div>
            <Sponsor />
            <div>
                <h1 className={`${morgana.className} text-center text-white 2xl:mt-28 xl:mt-16 2xl:text-6xl xl:text-4xl uppercase mt-10 text-2xl`}>
                    <span className='text-[#FFE500]'>plusieurs disciplines</span>
                    et <br /> challenges au choix !
                </h1>
            </div>
            <div className='flex justify-center 2xl:mt-32 xl:mt-20 2xl:gap-x-10 xl:gap-x-8 gap-x-4 mt-10 px-6'>
                <div>
                    <Image
                        className='w-auto 2xl:h-[275px] xl:h-[250px]  2xl:mt-20 xl:mt-20 mt-10'
                        src={image1}
                        alt=''
                    />
                    <p className='2xl:text-[28px] xl:text-xl lg:text-lg text-sm font-bold  text-white 2xl:mt-[18px] xl:mt-3 lg:mt-2 mt-1'>Wingfoil</p>
                </div>
                <div>
                    <Image
                        className='w-auto 2xl:h-[275px] xl:h-[250px]'
                        src={image2}
                        alt=''
                    />
                    <p className='2xl:text-[28px] xl:text-xl lg:text-lg text-sm font-bold  text-white 2xl:mt-[18px] xl:mt-3 lg:mt-2 mt-1'>Surf foil</p>
                </div>
                <div>
                    <Image
                        className='w-auto 2xl:h-[275px] xl:h-[250px]  2xl:mt-20 xl:mt-20 mt-10'
                        src={image3}
                        alt=''
                    />
                    <p className='2xl:text-[28px] xl:text-xl lg:text-lg text-sm font-bold  text-white 2xl:mt-[18px] xl:mt-3 lg:mt-2 mt-1'>Dockstart</p>
                </div>
                <div>
                    <Image
                        className='w-auto 2xl:h-[275px] xl:h-[250px]'
                        src={image4}
                        alt=''
                    />
                    <p className='2xl:text-[28px] xl:text-xl lg:text-lg text-sm font-bold  text-white 2xl:mt-[18px] xl:mt-3 lg:mt-2 mt-1'>Windfoil</p>
                </div>
                <div>
                    <Image
                        className='w-auto 2xl:h-[275px] xl:h-[250px]  2xl:mt-20 xl:mt-20 mt-10'
                        src={image5}
                        alt=''
                    />
                    <p className='2xl:text-[28px] xl:text-xl lg:text-lg text-sm font-bold  text-white 2xl:mt-[18px] xl:mt-3 lg:mt-2 mt-1'>Downwind</p>
                </div>
            </div>
            <p className='2xl:text-3xl xl:text-lg font-semibold text-white 2xl:mt-24 xl:mt-16 text-center 2xl:w-3/4 xl:w-3/4 2xl:mx-auto xl:mx-auto px-6 mt-10'>Peu importe votre niveau ou votre âge, vous pouvez prendre part à cet événement, pensé et crée pour nos clients AFS. <span className='text-[#FFE500]'>
                Équipez vous et cumulez les sessions !</span></p>

            <h2 className={`${morgana.className} text-center text-white 2xl:text-6xl xl:text-4xl 2xl:mt-40 xl:mt-28 mt-16 text-2xl
            `}>l’inscription est <br /> <span className='text-[#FFE500]'>simple et rapide !</span>
            </h2>

            <div className='2xl:mt-20 xl:mt-12 flex 2xl:flex-row xl:flex-row flex-col items-center justify-evenly mt-8 gap-6 2xl:gap-0 xl:gap-0'>
                <div className='2xl:w-[340px] xl:w-[320px] w-[280px] h-auto'>
                    <Image src={step1} alt='' />
                    <p className='text-white text-center font-semibold 2xl:text-2xl xl:text-lg mt-4'>Cliquez sur le lien <br /> d'inscription <span className='text-yellow-500 underline'>ici.</span></p>
                </div>
                <div className='2xl:w-[340px] xl:w-[320px] w-[280px] h-auto'>
                    <Image src={step2} alt='' />
                    <p className='text-white text-center font-semibold 2xl:text-2xl xl:text-lg mt-4'>Remplissez le formulaire avec vos informations.</p>
                </div>
                <div className='2xl:w-[340px] xl:w-[320px] w-[280px] h-auto'>
                    <Image src={step3} alt='' />
                    <p className='text-white text-center font-semibold 2xl:text-2xl xl:text-lg mt-4'>Confirmez votre <br /> inscription et recevez <br /> votre confirmation par email.</p>
                </div>
            </div>
            <Join />
        </div>

    );
};

export default Banner;