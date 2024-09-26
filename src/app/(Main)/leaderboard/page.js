import React from 'react';
import { morgana } from '../layout';
import getUserLeaderBoard from '@/lib/getUserLeaderBoard';
import Join from '@/Shared/Join';
import dynamic from 'next/dynamic';
const SelectTab = dynamic(() => import('@/Components/SelectTab'), {
    ssr: false, // This ensures it will only be rendered on the client side
});

const page = async () => {
    const pointTable = await getUserLeaderBoard();
    return (
        <div className="">
            <div className="max-h-[750px] min-h-[550px] flex flex-col">
                <h2 className={`${morgana.className} uppercase m-auto text-white 2xl:text-[120px] xl:text-7xl text-5xl`}>leaderboard</h2>
            </div>
            <div className='2xl:mt-20 xl:mt-14 mt-8 bg-white 2xl:p-20 xl:p-20 py-12 rounded-tr-[50px] rounded-tl-[50px]'>
                <SelectTab pointTable={pointTable} />
            </div>
            <Join />
        </div>
    );
};

export default page;