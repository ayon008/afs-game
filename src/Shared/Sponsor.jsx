import Marquee from 'react-fast-marquee';
import getSponsors from '@/lib/getSponsors';

const Sponsor = async () => {
    const sponsors = await getSponsors();
    return (
        <div className='2xl:mt-[60px] xl:mt-10 lg:mt-8 mt-6 2xl:px-24 xl:px-10 lg:px-8 px-6 2xl:mb-52 xl:mb-32 lg:mb-24 mb-10'>
            <Marquee
                autoFill={true}
                gradient={true}
            >
                {sponsors.map((sponsor, index) => (
                    <div key={index} className='flex items-center mx-10'>
                        <img
                            className='2xl:w-[75px] xl:w-[75px] lg:w-[60px] w-[60px] h-auto'
                            src={sponsor.profilePicture}
                            alt={sponsor.alt}
                        />
                    </div>
                ))}

            </Marquee>
        </div>
    );
};

export default Sponsor;
