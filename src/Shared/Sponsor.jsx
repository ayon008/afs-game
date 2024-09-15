import Image from 'next/image';
import sponsor1 from '../../public/svgexport-1 (1) 1.svg';
import sponsor2 from '../../public/svgexport-1 1.svg';
import sponsor3 from '../../public/image 7247.png';
import Marquee from 'react-fast-marquee';
import { antiHero } from '@/app/(Main)/layout';
import getSponsors from '@/lib/getSponsors';


const sponsors = [
    { src: sponsor1, alt: 'sponsor1' },
    { src: sponsor2, alt: 'sponsor2' },
    { src: sponsor3, alt: 'sponsor3' },
]

const Sponsor = async () => {
    return (
        <div className='2xl:mt-[60px] xl:mt-10 lg:mt-8 mt-6 2xl:px-24 xl:px-10 lg:px-8 px-6 2xl:mb-52 xl:mb-32 lg:mb-24 mb-10'>
            <Marquee
                autoFill={true}
                gradient={true}
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

            </Marquee>
        </div>
    );
};

export default Sponsor;
