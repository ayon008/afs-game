import Image from 'next/image';
import React from 'react';
import sponsor1 from '../../public/svgexport-1 (1) 1.svg';
import sponsor2 from '../../public/svgexport-1 1.svg';
import sponsor3 from '../../public/image 7247.png';
import Marquee from 'react-fast-marquee';
import { antiHero } from '@/app/(Main)/layout';

const sponsors = [
    { src: sponsor1, alt: 'sponsor1' },
    { src: sponsor2, alt: 'sponsor2' },
    { src: sponsor3, alt: 'sponsor3' },
];

const Sponsor = () => {
    return (
        <Marquee
            autoFill={true}
            className='2xl:mt-[60px] xl:mt-10 lg:mt-8 mt-6 2xl:px-24 xl:px-10 lg:px-8 px-6 2xl:mb-52 xl:mb-32 lg:mb-24 mb-10'
            gradient={false}
        >
            {sponsors.map((sponsor, index) => (
                <div key={index} className='flex items-center mx-10'>
                    <Image
                        className='2xl:w-[75px] xl:w-[75px] lg:w-[60px] w-[60px] h-auto'
                        src={sponsor.src}
                        alt={sponsor.alt}
                    />
                </div>
            ))}
            <div className='flex items-center mx-10'>
                <Image
                    className='2xl:w-[75px] xl:w-[75px] lg:w-[60px] w-[60px] h-auto'
                    src={sponsor2}
                    alt='sponsor2'
                />
                <div
                    className='2xl:px-8 xl:px-6 lg:px-4 px-2 mx-10'
                    style={{
                        background:
                            'linear-gradient(90deg, rgba(255, 255, 248, 0.00) 0%, #FFFFF8 10%, #FFFFF8 90%, rgba(255, 255, 248, 0.00) 100%)',
                    }}
                >
                    <p className='text-black uppercase 2xl:text-lg xl:text-base lg:text-sm text-xs font-semibold'>
                        De nombreux lots à gagner <br /> avec{' '}
                        <span className={`${antiHero.className} text-blue-500`}>nos partenaires</span>
                    </p>
                </div>
                <Image
                    className='2xl:w-[75px] xl:w-[75px] lg:w-[60px] w-[60px] h-auto'
                    src={sponsor1}
                    alt='sponsor1'
                />
            </div>
        </Marquee>
    );
};

export default Sponsor;
