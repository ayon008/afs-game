import SelectTab from '@/Components/SelectTab';
import React from 'react';
import { antiHero } from '../layout';
import getUserLeaderBoard from '@/lib/getUserLeaderBoard';

const page = async () => {
    const pointTable = await getUserLeaderBoard();
    return (
        <div className='2xl:px-36 2xl:pt-36 xl:px-20 xl:pt-36 pt-20'>
            <h1 className={`${antiHero.className} text-[#000] font-bold 2xl:text-7xl xl:text-5xl text-center`}>Classement par nombre de points</h1>
            <div className='2xl:mt-20 xl:mt-14'>
                <SelectTab pointTable={pointTable} />
            </div>
        </div>
    );
};

export default page;