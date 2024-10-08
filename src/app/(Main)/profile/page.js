import { antiHero } from '@/Components/Font';
import TableHead from '@/Components/TableHead';
import TableRow from '@/Components/TableRow';
import FaArrow from '@/icons/FaArrow';
import getSurroundingData from '@/js/getSortedData';
import sortDataByTime from '@/lib/getDataByCategory';
import getUserInfo from '@/lib/getUserInfo';
import getUserLeaderBoard from '@/lib/getUserLeaderBoard';
import EditProfile from '@/ui/EditProfile';
import Link from 'next/link';
import React from 'react';


const CategoryTable = ({ title, data, find, categoryName }) => {
    const position = data.indexOf(find) + 1;
    const userIndex = position - 1;
    const uid = find?.uid;
    let newData = getSurroundingData(data, userIndex);
    return (
        <div className='bg-[#F7F7F7] 2xl:px-[20px] 2xl:py-[10px] xl:px-[15px] xl:py-[10px] p-4 rounded-[10px] h-fit'>
            <h5 className='font-semibold 2xl:text-xl xl:text-base'>{title}</h5>
            {
                position ?
                    <div className="overflow-x-auto">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Participant</th>
                                    <th className='text-right'>Total Points</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    newData?.map((d, i) => {
                                        const pos = data.indexOf(d) + 1;
                                        return (
                                            <tr key={i} className={`${pos === 1 ? 'first' : ''} 
                                            ${pos === 2 ? 'second' : ''} 
                                            ${pos === 3 ? 'third' : ''} 
                                            ${uid === d?.uid ? 'opacity-100' : 'opacity-40'}`}>
                                                <th className='text-black'>{pos}.</th>
                                                <td className='font-semibold'>{d.displayName}</td>
                                                <td className='text-right font-semibold'>
                                                    {(d[`${categoryName}`])?.toFixed(2) + ' ' + 'hours'}
                                                </td>
                                            </tr>
                                        );
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                    :
                    <p className='2xl:text-lg xl:text-xs text-gray-400'>
                        You have not participated in this discipline so far.
                    </p>
            }
        </div>
    );
};

const page = async ({ searchParams }) => {
    const uid = searchParams.uid;
    // Point Table
    let pointTable = await getUserLeaderBoard();
    // User point table
    const userPointTable = pointTable?.find((d) => d?.uid === uid);
    // User position
    const userIndex = pointTable.indexOf(userPointTable);
    // Sort data by user position
    let newData = getSurroundingData(pointTable, userIndex);

    // User information
    const userInformation = await getUserInfo(uid);
    console.log(userInformation);

    const { Wingfoil, Windfoil, Dockstart, Surffoil, Downwind, WatermanCrown } = userInformation;

    const WingfoilPoint = sortDataByTime(pointTable, 'Wingfoil');
    const WindfoilPoint = sortDataByTime(pointTable, 'Windfoil');
    const DockstartPoint = sortDataByTime(pointTable, 'dockstart');
    const SurffoilPoint = sortDataByTime(pointTable, 'surfFoil');
    const DWPoint = sortDataByTime(pointTable, 'dw');

    return (
        <div>
            <div className='2xl:px-36 2xl:pt-32 xl:px-20 xl:pt-32 pt-24 px-6'>
                <EditProfile />
                <p className={`${antiHero.className} text-blue-500 bg-[#FFE500] w-fit px-2 rounded-[20px] mt-4`}>{userPointTable ? (userPointTable?.total).toFixed(2) : "0"} hours</p>
                {/* leaderboard */}
                <div className="overflow-x-auto w-full 2xl:mt-10 xl:mt-6 mt-3">
                    <table className="table">
                        <TableHead profile={true} tableHead={['#', 'Participant', 'Wingfoil', 'Windfoil', 'Dockstart', 'Surffoil', 'DW', 'WatermanCrown', 'Total Time']} />
                        <tbody>
                            {
                                newData?.map((d, i) => {
                                    const pos = pointTable.indexOf(d) + 1;
                                    return (
                                        <TableRow key={i} data={d} uid={userPointTable?.uid} position={pos} />
                                    );
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            <div className='bg-white 2xl:p-20 xl:p-20 px-6 py-10 rounded-t-[50px] 2xl:mt-40 xl:mt-28 mt-16'>
                <div className=''>
                    <h2 className='font-bold 2xl:text-5xl xl:text-3xl'>You are in the rankings</h2>
                    <p className='2xl:text-2xl xl:text-lg 2xl:mt-14 xl:mt-7 font-bold'>Time spent on the water during the event</p>
                    <hr className='mt-2 mb-4' />
                    <div className='grid 2xl:grid-cols-2 xl:grid-cols-2 grid-cols-1 gap-4'>
                        <span className={Wingfoil ? 'block' : 'hidden'}>
                            <CategoryTable data={WingfoilPoint} title={'Wingfoil'} find={userPointTable} categoryName={'Wingfoil'} />
                        </span>
                        <span className={Windfoil ? 'block' : 'hidden'}>
                            <CategoryTable data={WindfoilPoint} title={'Windfoil'} find={userPointTable} categoryName={'Windfoil'} />
                        </span>
                        <span className={Dockstart ? 'block' : 'hidden'}>
                            <CategoryTable data={DockstartPoint} title={'Dockstart'} find={userPointTable} categoryName={'dockstart'} />
                        </span>
                        <span className={Surffoil ? 'block' : 'hidden'}>
                            <CategoryTable data={SurffoilPoint} title={'Surffoil'} find={userPointTable} categoryName={'surfFoil'} />
                        </span>
                        <span className={Downwind ? 'block' : 'hidden'}>
                            <CategoryTable data={DWPoint} title={'Downwind'} find={userPointTable} categoryName={'dw'} />
                        </span>
                    </div>
                </div>

                {/* Upload Data */}
                <div className='2xl:mt-20 xl:mt-14 mt-8 flex 2xl:flex-row xl:flex-row flex-col w-full gap-2'>
                    <Link href={'/profile/uploadUserData'} className='2xl:w-1/2 xl:w-1/2 w-full 2xl:h-[240px] xl:h-[200px]'>
                        <button className='uppercase w-full h-full flex flex-col-reverse justify-between bg-black p-5'>
                            <span className={`${antiHero.className} text-lg text-[#FAE500] 2xl:text-7xl xl:text-4xl`}>My Sessions</span>
                            <FaArrow className={'w-[40px] h-[40px] ml-auto'} color={'#FAE500'} />
                        </button>
                    </Link>
                    <Link href={'/profile/uploadUserData'} className='2xl:w-1/2 xl:w-1/2 w-full 2xl:h-[240px] xl:h-[200px]'>
                        <button className='uppercase flex flex-col-reverse justify-between w-full h-full bg-black p-5'>
                            <span className={`${antiHero.className} text-lg text-[#FAE500] 2xl:text-7xl xl:text-4xl`}>Import Data</span>
                            <FaArrow className={'w-[40px] h-[40px] ml-auto'} color={'#FAE500'} />
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default page;
