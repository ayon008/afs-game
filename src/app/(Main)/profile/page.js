import TableHead from '@/Components/TableHead';
import TableRow from '@/Components/TableRow';
import FaArrow from '@/icons/FaArrow';
import { sortAndRankCategoryByDistance, sortAndRankCategoryByPoints } from '@/lib/getDataByCategory';
import getUserLeaderBoard from '@/lib/getUserLeaderBoard';
import EditProfile from '@/ui/EditProfile';
import LeadBoard from '@/ui/LeadBoard';
import Link from 'next/link';
import React from 'react';

const CategoryTable = ({ title, categoryName, data, find, points }) => {
    const position = data.indexOf(find) + 1;
    data = data.slice(0, 3);
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
                                    data?.map((d, i) => {
                                        const pos = i + 1;
                                        return d.category[categoryName] && (
                                            <tr key={i} className={pos === 1 ? 'first' : pos === 2 ? 'second' : pos === 3 ? 'third' : ''}>
                                                <th>{pos}</th>
                                                <td className='font-semibold'>{d.displayName}</td>
                                                <td className='text-right font-semibold'>{points === 'byTime' ? `${d.category[categoryName].pointsByTime}` : `${d.category[categoryName].pointsByDistance}`}</td>
                                            </tr>
                                        );
                                    })
                                }
                                {
                                    position > 3 &&
                                    <tr key={position} className='opacity-50'>
                                        <th>{position}</th>
                                        <td className='font-semibold'>{find.name}</td>
                                        <td className='text-right font-semibold'>
                                            {points === 'byTime' ? `${find.category[categoryName].pointsByTime}` : `${find.category[categoryName].pointsByDistance}`}
                                        </td>
                                    </tr>
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
    const userPosition = allData.indexOf(userData) + 1;
    console.log('user', userPosition);
    allData = allData.slice(0, 3);


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

    return (
        <div className='2xl:px-36 2xl:pt-20 xl:px-20 xl:pt-20'>
            <EditProfile />
            <div className='2xl:mt-6 xl:mt-2 flex items-center gap-2'>
                <p className='2xl:text-[22px] xl:text-base font-semibold'>Le nombre total de points dans le tournoi est de </p>
                <span className='2xl:text-[22px] xl:text-base font-semibold bg-[#EDBE1A] px-2 2xl:py-[6px] xl:py-1 rounded-3xl'>{userData?.total || 0} points</span>
            </div>

            {/* LeaderBoard */}
            <div className="overflow-x-auto w-full 2xl:mt-10 xl:mt-6">
                <table className="table">
                    <TableHead />
                    <tbody>
                        {
                            allData?.map((d, i) => {
                                return (
                                    <TableRow key={i} data={d} position={i + 1} />
                                );
                            })
                        }
                        {
                            userPosition > 3 &&
                            <TableRow key={userData.uid} data={userData} position={userPosition} />
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
            <div className='2xl:mt-20 xl:mt-14 flex items-center justify-center gap-2'>
                <Link href={'/profile/myData'}>
                    <button className='uppercase flex items-center btn bg-black'>
                        <span className='text-lg text-white'>My Sessions</span>
                        <FaArrow className={'w-[20px] h-[20px]'} color={'white'} />
                    </button>
                </Link>
                <Link href={'/profile/uploadUserData'}>
                    <button className='uppercase flex items-center btn bg-black'>
                        <span className='text-lg text-white'>Import Data</span>
                        <FaArrow className={'w-[20px] h-[20px]'} color={'white'} />
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default page;