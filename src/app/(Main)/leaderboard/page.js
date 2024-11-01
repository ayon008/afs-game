toimport React from 'react';
import { morgana } from '../layout';
import getUserLeaderBoard from '@/lib/getUserLeaderBoard';
import Join from '@/Shared/Join';
import dynamic from 'next/dynamic';
const SelectTab = dynamic(() => import('@/Components/SelectTab'), {
    ssr: false, // This ensures it will only be rendered on the client side
});

export const pointTable = await getUserLeaderBoard();

const page = async () => {
    const pointTable = await getUserLeaderBoard();
    // Set the target date as November 1, 2024, 8 AM in France time (CET/CEST)
    const targetDate = new Date('2024-11-01T08:00:00+01:00'); // France time (CET)
    const currentDate = new Date();
    const afterTargetDate = new Date('2024-11-02T08:00:00+01:00')

    return (
        <div className="">
            <div className="max-h-[750px] min-h-[550px] flex flex-col">
                <h2 className={`${morgana.className} uppercase m-auto text-white 2xl:text-[120px] xl:text-7xl text-5xl`}>leaderboard</h2>
            </div>
            <div className='2xl:mt-20 xl:mt-14 mt-8 bg-white 2xl:p-20 xl:p-20 py-12 rounded-tr-[50px] rounded-tl-[50px]'>
                
                   
                     
                        <div>
                            <h3 className={`${morgana.className} uppercase 2xl:text-6xl xl:text-4xl text-2xl text-center`}>*The leaderboard has disappeared!*</h3>
                            <p className='text-center mt-10 text-lg 2xl:px-0 xl:px-0 px-10'>
                                


The AFS Games leaderboard has disappeared! 😱

Don't worry, this was planned by our team. As the challenge nears its end, we’re working on the closing ceremony and prize-giving event. The leaderboard will remain offline until the day after the ceremony!

Nothing is decided yet! Keep uploading your sessions until the very end!

This little surprise is our way of keeping you on your toes and encouraging you to join the award ceremony.

See you soon for the big reveal!


                
                            </p>
                        </div>
                
            </div>
            <Join />
        </div>
    );
};

export default page;
