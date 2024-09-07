import TableHead from '@/Components/TableHead';
import TableRow from '@/Components/TableRow';
import Link from 'next/link';
import React from 'react';
import FaArrow from '@/icons/FaArrow';
import EditProfile from '@/ui/EditProfile';
import getUserLeaderBoard from '@/lib/getUserLeaderBoard';

const CategoryTable = ({ title, categoryName, data, find, position }) => {
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
                                        const pos = data.indexOf(d) + 1;
                                        return d.category[categoryName] && (
                                            <tr key={i} className={pos === 1 ? 'first' : pos === 2 ? 'second' : pos === 3 ? 'third' : ''}>
                                                <th>{pos}</th>
                                                <td className='font-semibold'>{d.name}</td>
                                                <td className='text-right font-semibold'>{d.category[categoryName].pointsByTime}</td>
                                            </tr>
                                        );
                                    })
                                }
                                {
                                    position > 3 && (
                                        <tr key={position}>
                                            <th>{position}</th>
                                            <td className='font-semibold'>{find.name}</td>
                                            <td className='text-right font-semibold'>{find.category[categoryName].pointsByTime}</td>
                                        </tr>
                                    )
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

const sortAndRankCategoryByPoints = (data, find, category) => {
    let sorted = data.sort((a, b) => {
        const totalA = a.category[category] ? a.category[category].pointsByTime : 0;
        const totalB = b.category[category] ? b.category[category].pointsByTime : 0;
        return totalB - totalA;
    });
    const position = sorted.indexOf(find) + 1;
    return { sorted: sorted.slice(0, 3), position };
};

const sortAndRankCategoryByDistance = (data, find, category) => {
    let sorted = data.sort((a, b) => {
        const totalA = a.category[category] ? a.category[category].pointsByDistance : 0;
        const totalB = b.category[category] ? b.category[category].pointsByDistance : 0;
        return totalB - totalA;
    });
    const position = sorted.indexOf(find) + 1;
    return { sorted: sorted.slice(0, 3), position };
};

const page = async ({ searchParams }) => {
    let data = await getUserLeaderBoard();
    const find = data?.find(d => d.uid === searchParams.uid) || {};
    const userPosition = data.indexOf(find) + 1;
    data = data.slice(0, 3);

    // Sorting and ranking for points
    const { sorted: wingfoil, position: wingfoilPosition } = sortAndRankCategoryByPoints(data, find, 'wingfoil');
    const { sorted: windfoil, position: windfoilPosition } = sortAndRankCategoryByPoints(data, find, 'windfoil');
    const { sorted: dockstart, position: dockstartPosition } = sortAndRankCategoryByPoints(data, find, 'dockstart');
    const { sorted: dw, position: dwPosition } = sortAndRankCategoryByPoints(data, find, 'dw');
    const { sorted: surfFoil, position: surfFoilPosition } = sortAndRankCategoryByPoints(data, find, 'surfFoil');

    // Sorting and ranking for distance
    const { sorted: wingfoilDistance, position: wingfoilDistancePosition } = sortAndRankCategoryByDistance(data, find, 'wingfoil');
    const { sorted: windfoilDistance, position: windfoilDistancePosition } = sortAndRankCategoryByDistance(data, find, 'windfoil');
    const { sorted: dockstartDistance, position: dockstartDistancePosition } = sortAndRankCategoryByDistance(data, find, 'dockstart');
    const { sorted: dwDistance, position: dwDistancePosition } = sortAndRankCategoryByDistance(data, find, 'dw');
    const { sorted: surfFoilDistance, position: surfFoilDistancePosition } = sortAndRankCategoryByDistance(data, find, 'surfFoil');

    return (
        <div className='2xl:px-36 2xl:pt-10 xl:px-20 xl:pt-10'>
            <EditProfile />
            <div className='2xl:mt-6 xl:mt-2 flex items-center gap-2'>
                <p className='2xl:text-[22px] xl:text-base font-semibold'>Le nombre total de points dans le tournoi est de </p>
                <span className='2xl:text-[22px] xl:text-base font-semibold bg-[#EDBE1A] px-2 2xl:py-[6px] xl:py-1 rounded-3xl'>{find?.total || 0} points</span>
            </div>
            <div className="overflow-x-auto w-full 2xl:mt-10 xl:mt-6">
                <table className="table">
                    <TableHead />
                    <tbody>
                        {
                            data?.map((d, i) => {
                                return (
                                    <TableRow key={i} data={d} position={data.indexOf(d) + 1} />
                                );
                            })
                        }
                        {
                            userPosition > 3 &&
                            <TableRow key={find.uid} data={find} position={userPosition} />
                        }
                    </tbody>
                </table>
            </div>
            <div className='2xl:mt-40 xl:mt-28'>
                <h2 className='font-bold 2xl:text-5xl xl:text-3xl'>Vous êtes dans les classements</h2>
                <p className='2xl:text-2xl xl:text-lg 2xl:mt-14 xl:mt-7 font-bold'>Temps passé à l’eau sur la durée de l’événement </p>
                <hr className='mt-2 mb-4' />
                <div className='grid grid-cols-2 gap-4'>
                    <CategoryTable title="Wingfoil" categoryName="wingfoil" data={wingfoil} find={find} position={wingfoilPosition} />
                    <CategoryTable title="Windfoil" categoryName="windfoil" data={windfoil} find={find} position={windfoilPosition} />
                    <CategoryTable title="Dockstart" categoryName="dockstart" data={dockstart} find={find} position={dockstartPosition} />
                    <CategoryTable title="DW" categoryName="dw" data={dw} find={find} position={dwPosition} />
                    <CategoryTable title="Surf Foil" categoryName="surfFoil" data={surfFoil} find={find} position={surfFoilPosition} />
                </div>
            </div>
            <div className='2xl:mt-14 xl:mt-10'>
                <p className='2xl:text-2xl xl:text-lg 2xl:mt-14 xl:mt-7 font-bold'>Distance totale parcourue sur la durée de l’événement</p>
                <hr className='mt-2 mb-4' />
                <div className='grid grid-cols-2 gap-4'>
                    <CategoryTable title="Wingfoil" categoryName="wingfoil" data={wingfoilDistance} find={find} position={wingfoilDistancePosition} />
                    <CategoryTable title="Windfoil" categoryName="windfoil" data={windfoilDistance} find={find} position={windfoilDistancePosition} />
                    <CategoryTable title="Dockstart" categoryName="dockstart" data={dockstartDistance} find={find} position={dockstartDistancePosition} />
                    <CategoryTable title="DW" categoryName="dw" data={dwDistance} find={find} position={dwDistancePosition} />
                    <CategoryTable title="Surf Foil" categoryName="surfFoil" data={surfFoilDistance} find={find} position={surfFoilDistancePosition} />
                </div>
            </div>
            <div className='2xl:mt-20 xl:mt-14 flex items-center justify-center gap-2'>
                <Link href={'/profile/myData'}>
                    <button className='uppercase flex items-center btn bg-black'>
                        <span className='text-lg text-white'>My Sessions</span>
                        <FaArrow className={'w-[20px] h-[20px]'} />
                    </button>
                </Link>
                <Link href={'/profile/uploadUserData'}>
                    <button className='uppercase flex items-center btn bg-black'>
                        <span className='text-lg text-white'>Import Data</span>
                        <FaArrow className={'w-[20px] h-[20px]'} />
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default page;
