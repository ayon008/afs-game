import React from 'react';
import Join from '@/Shared/Join';
import { morgana } from '../layout';
import CountdownTimer from '@/ui/CountDown';
import Image from 'next/image';
import step1 from '../../../../public/Frame.svg';
import step2 from '../../../../public/Frame (1).svg'
import step3 from '../../../../public/Frame (2).svg'
import step4 from '../../../../public/Frame (3).svg'


const page = () => {
    return (
        <div className=''>
            <div className='min-h-screen flex flex-col'>
                <div className='m-auto'>
                    <h1 className={`${morgana.className} text-center 2xl:text-9xl xl:text-7xl text-white uppercase`}>le challenge</h1>
                    <p className={`text-[#FFE500] 2xl:text-6xl xl:text-4xl ${morgana.className} text-center 2xl:mt-12 xl:mt-8`}>en octobre, enchaîne les sessions !</p>
                </div>
            </div>
            <div className='w-fit mx-auto'>
                <CountdownTimer />
            </div>
            <p className='text-center text-white w-3/4 mx-auto 2xl:text-2xl xl:text-lg font-medium'>
                L’objectif des AFS GAMES est de vous motiver à aller à l’eau tout au long du mois d’octobre, pour progresser et repousser vos limites dans une ambiance conviviale. Accumulez des heures de navigation et tentez de décrocher une place sur le podium, avec à la clé des lots offerts par nos partenaires.
            </p>
            <p className='2xl:text-2xl xl:text-lg text-white text-center mt-10 font-medium'>
                Pour participer :
            </p>
            <div className='2xl:mt-20 xl:mt-12 flex 2xl:flex-row xl:flex-row flex-col items-start justify-evenly mt-8 gap-x-6 2xl:gap-0 xl:gap-0'>
                <div className='2xl:w-[340px] xl:w-[320px] w-[280px] h-auto'>
                    <Image src={step1} className='ml-24' alt='' />
                    <p className='text-white text-center font-semibold 2xl:text-3xl xl:text-2xl mt-[2px]'>Démarrez une <br /> session sur votre <br /> spot favori</p>
                </div>
                <div className='2xl:w-[340px] xl:w-[320px] w-[280px] h-auto'>
                    <Image src={step2} className='ml-24' alt='' />
                    <p className='text-white text-center font-semibold 2xl:text-3xl xl:text-2xl mt-[2px]'>Une fois terminé, <br /> exportez votre <br /> fichier GPX</p>
                    <p className='2xl:mt-6 xl:mt-4 mt-2 text-white text-center font-semibold 2xl:text-xl xl:text-base'>(les tutoriels seront <br /> bientôt disponibles).</p>
                </div>
                <div className='2xl:w-[340px] xl:w-[320px] w-[280px] h-auto'>
                    <Image src={step3} className='ml-24' alt='' />
                    <p className='text-white text-center font-semibold 2xl:text-3xl xl:text-2xl mt-[2px]'>Connectez-vous à <br /> votre profil et <br /> cliquez sur <br />“importer.”</p>
                </div>
                <div className='2xl:w-[340px] xl:w-[320px] w-[280px] h-auto'>
                    <Image src={step4} className='ml-24' alt='' />
                    <p className='text-white text-center font-semibold 2xl:text-3xl xl:text-2xl mt-[2px]'>Téléchargez votre <br /> fichier et c’est <br /> validé !</p>
                </div>
            </div>
            <h3 className='2xl:text-3xl xl:text-2xl text-center font-medium text-white 2xl:mt-11 xl:mt-11 mt-8 2xl:mb-48 xl:mb-32 mb-20'>Vous pourrez ensuite suivre votre progression dans le <br /> classement !</h3>
            <Join />
        </div>
    );
};

export default page;