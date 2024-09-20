import SelectTab from '@/Components/SelectTab';
import React from 'react';
import { antiHero, morgana } from '../layout';
import getUserLeaderBoard from '@/lib/getUserLeaderBoard';
import Join from '@/Shared/Join';

const page = async () => {
    const pointTable = await getUserLeaderBoard();
    return (
        <div className="banner">
            <div className="min-h-screen flex flex-col">
                <h2 className={`${morgana.className} uppercase m-auto text-white 2xl:text-[120px] xl:text-7xl`}>classement</h2>
            </div>
            <div className='2xl:mt-20 xl:mt-14 bg-white p-20 rounded-tr-[50px] rounded-tl-[50px]'>
                <SelectTab pointTable={pointTable} />
            </div>
            <Join />
        </div>
    );
};

export default page;