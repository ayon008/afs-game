import Image from 'next/image';
import React from 'react';
import sponsor1 from '../../public/svgexport-1 (1) 1.svg'
import sponsor2 from '../../public/svgexport-1 1.svg'
import sponsor3 from '../../public/image 7247.png'

const Sponsor = () => {
    return (
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
    );
};

export default Sponsor;