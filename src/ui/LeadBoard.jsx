/* eslint-disable @next/next/no-img-element */
import TableHead from '@/Components/TableHead';
import TableRow from '@/Components/TableRow';
import React from 'react';

const LeadBoard = ({ allData, userPosition, userData, LeadBoard }) => {
    return (
        <div className="overflow-x-auto w-full 2xl:mt-10 xl:mt-6">
            <table className="table">
                <TableHead />
                <tbody>
                    {
                        allData?.map((d, i) => {
                            const { displayName, photoURL, pointsByDistance, pointsByTime, total, category } = d;
                            const { wingfoil, dw, windfoil, surfFoil, dockstart } = category;
                            const position = allData.indexOf(d) + 1;

                            return (
                                <tr key={i} className={`${position === 1 ? 'first' : ''}
        ${position === 2 ? 'second' : ''} 
        ${position === 3 ? 'third' : ''} 
        `}>
                                    <td>{position < 10 ? `0${position}` : position}</td>
                                    <td>
                                        <div className='flex items-center gap-2'>
                                            <img alt='profile-image' className='2xl:w-[40px] 2xl:h-[40px] xl:w-[25px] xl:h-[25px] rounded-[50%]' src={photoURL} />
                                            <h3 className='2xl:text-lg xl:text-sm font-semibold'>{displayName}</h3>
                                        </div>
                                    </td>
                                    <td className='2xl:text-lg xl:text-sm font-semibold'>
                                        {wingfoil ? wingfoil.total + ' ' + 'points' : 'n/a'}
                                    </td>
                                    <td className='2xl:text-lg xl:text-sm font-semibold'>
                                        {windfoil ? windfoil.total + ' ' + 'points' : 'n/a'}
                                    </td>
                                    <td className='2xl:text-lg xl:text-sm font-semibold'>
                                        {dockstart ? dockstart.total + ' ' + 'points' : 'n/a'}
                                    </td>
                                    <td className='2xl:text-lg xl:text-sm font-semibold'>
                                        {surfFoil ? surfFoil.total + ' ' + 'points' : 'n/a'}
                                    </td>
                                    <td className='2xl:text-lg xl:text-sm font-semibold'>
                                        {dw ? dw.total + ' ' + 'points' : 'n/a'}
                                    </td>
                                    <td className='2xl:text-lg xl:text-sm font-semibold text-right'>
                                        {total + ' ' + 'points' || 'n/a'}
                                    </td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>
        </div>
    );
};

export default LeadBoard;