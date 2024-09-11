import TableHead from '@/Components/TableHead';
import TableRow from '@/Components/TableRow';
import FaArrow from '@/icons/FaArrow';
import { sortAndRankCategoryByDistance, sortAndRankCategoryByPoints } from '@/lib/getDataByCategory';
import getUserLeaderBoard from '@/lib/getUserLeaderBoard';
import EditProfile from '@/ui/EditProfile';
import Link from 'next/link';
import React from 'react';
import { antiHero } from '../layout';
import getSurroundingData from '@/js/getSortedData';

const CategoryTable = ({ title, categoryName, data, find, points }) => {
    const position = data.indexOf(find) + 1;
    const userIndex = position - 1;
    const uid = find?.uid;
    let newData = getSurroundingData(data, userIndex);
    return (
        <div className='bg-[#F7F7F7] 2xl:px-[20px] 2xl:py-[10px] xl:px-[15px] xl:py-[10px] rounded-[10px] h-fit'>
            <h5 className='font-semibold 2xl:text-xl xl:text-base'>{title}</h5>
            {

                find?.category?.[categoryName] ? (
                    <div className="overflow-x-auto">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Participant</th>
                                    <th className='text-right'>Total des points</th>
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
                                                <th>{pos}</th>
                                                <td className='font-semibold'>{d.displayName}</td>
                                                <td className='text-right font-semibold'>{points === 'byTime' ? `${d.category[categoryName]?.pointsByTime}` : `${d.category[categoryName]?.pointsByDistance}`}</td>
                                            </tr>
                                        );
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                ) : (
                    <p className='2xl:text-lg xl:text-xs text-gray-400'>
                        Vous n&apos;avez pas pratiqué cette discipline jusqu&apos;à présent.
                    </p>
                )
            }
        </div>
    );
};

const page = async ({ searchParams }) => {
    const uid = searchParams?.uid;
    let allData = await getUserLeaderBoard();
    const userData = allData.find((d) => d?.uid === uid);
    const position = allData.indexOf(userData) + 1;
    const userIndex = position - 1;
    // Sorting and ranking for points
    const { sorted: wingfoil } = sortAndRankCategoryByPoints(allData, 'wingfoil');
    const { sorted: windfoil } = sortAndRankCategoryByPoints(allData, 'windfoil');
    const { sorted: dockstart } = sortAndRankCategoryByPoints(allData, 'dockstart');
    const { sorted: dw } = sortAndRankCategoryByPoints(allData, 'dw');
    const { sorted: surfFoil } = sortAndRankCategoryByPoints(allData, 'surfFoil');

    // Sorting and ranking for distance
    const { sorted: wingfoilDistance } = sortAndRankCategoryByDistance(allData, 'wingfoil');
    const { sorted: windfoilDistance } = sortAndRankCategoryByDistance(allData, 'windfoil');
    const { sorted: dockstartDistance } = sortAndRankCategoryByDistance(allData, 'dockstart');
    const { sorted: dwDistance } = sortAndRankCategoryByDistance(allData, 'dw');
    const { sorted: surfFoilDistance } = sortAndRankCategoryByDistance(allData, 'surfFoil');
    let newData = getSurroundingData(allData, userIndex);

    return (
        <div className='2xl:px-36 2xl:pt-32 xl:px-20 xl:pt-32 pt-20 px-10'>
            <EditProfile />
            <div className='2xl:mt-6 xl:mt-2 flex items-center gap-2 mt-4'>
                <p className='2xl:text-[22px] xl:text-base font-semibold'>Le nombre total de points dans le tournoi est de </p>
                <span className={`${antiHero.className} 2xl:text-[22px] xl:text-base font-semibold bg-[#EDBE1A] px-2 2xl:py-[6px] xl:py-1 rounded-3xl text-blue-500`}>{userData?.total || 0} points</span>
            </div>

            {/* LeaderBoard */}
            <div className="overflow-x-auto w-full 2xl:mt-10 xl:mt-6">
                <table className="table">
                    <TableHead />
                    <tbody>
                        {
                            newData?.map((d, i) => {
                                const pos = allData.indexOf(d) + 1;
                                return (
                                    <TableRow key={i} data={d} uid={userData?.uid} position={pos} />
                                );
                            })
                        }
                    </tbody>
                </table>
            </div>
            <div className='2xl:mt-40 xl:mt-28'>
                <h2 className='font-bold 2xl:text-5xl xl:text-3xl'>Vous êtes dans les classements</h2>
                <p className='2xl:text-2xl xl:text-lg 2xl:mt-14 xl:mt-7 font-bold'>Temps passé à l’eau sur la durée de l’événement </p>
                <hr className='mt-2 mb-4' />
                <div className='grid grid-cols-2 gap-4'>
                    <CategoryTable title="Wingfoil" categoryName="wingfoil" data={wingfoil} find={userData} points={'byTime'} />
                    <CategoryTable title="Windfoil" categoryName="windfoil" data={windfoil} find={userData} points={'byTime'} />
                    <CategoryTable title="Dockstart" categoryName="dockstart" data={dockstart} find={userData} points={'byTime'} />
                    <CategoryTable title="DW" categoryName="dw" data={dw} find={userData} points={'byTime'} />
                    <CategoryTable title="Surf Foil" categoryName="surfFoil" data={surfFoil} find={userData} points={'byTime'} />
                </div>
            </div>
            <div className='2xl:mt-14 xl:mt-10'>
                <p className='2xl:text-2xl xl:text-lg 2xl:mt-14 xl:mt-7 font-bold'>Distance totale parcourue sur la durée de l’événement</p>
                <hr className='mt-2 mb-4' />
                <div className='grid grid-cols-2 gap-4'>
                    <CategoryTable title="Wingfoil" categoryName="wingfoil" data={wingfoilDistance} find={userData} />
                    <CategoryTable title="Windfoil" categoryName="windfoil" data={windfoilDistance} find={userData} />
                    <CategoryTable title="Dockstart" categoryName="dockstart" data={dockstartDistance} find={userData} />
                    <CategoryTable title="DW" categoryName="dw" data={dwDistance} find={userData} />
                    <CategoryTable title="Surf Foil" categoryName="surfFoil" data={surfFoilDistance} find={userData} />
                </div>
            </div>
            <div className='2xl:mt-20 xl:mt-14 flex w-full gap-2'>
                <Link href={'/profile/myData'} className='w-1/2 2xl:h-[240px] xl:h-[200px]'>
                    <button className='uppercase w-full h-full flex flex-col-reverse justify-between  bg-black p-5'>
                        <span className={`${antiHero.className} text-lg text-yellow-400 2xl:text-7xl xl:text-4xl`}>My Sessions</span>
                        <FaArrow className={'w-[40px] h-[40px] ml-auto'} color={'#FAE500'} />
                    </button>
                </Link>
                <Link href={'/profile/uploadUserData'} className='w-1/2 2xl:h-[240px] xl:h-[200px]'>
                    <button className='uppercase flex flex-col-reverse justify-between w-full h-full  bg-black p-5'>
                        <span className={`${antiHero.className} text-lg text-yellow-400 2xl:text-7xl xl:text-4xl`}>Import Data</span>
                        <FaArrow className={'w-[40px] h-[40px] ml-auto'} color={'#FAE500'} />
                    </button>
                </Link>
            </div>
        </div >
    );
};

export default page;