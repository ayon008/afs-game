/* eslint-disable @next/next/no-img-element */
import LeadBoard from '@/ui/LeadBoard';
import Image from 'next/image';
import React from 'react';

const TableRow = ({ data, position, uid }) => {
    const { displayName, photoURL, pointsByDistance, pointsByTime, total, category } = data;
    const { wingfoil, dw, windfoil, surfFoil, dockstart } = category;
    console.log(position);

    return (
        <tr className={`${position === 1 ? 'first' : ''}
        ${position === 2 ? 'second' : ''} 
        ${position === 3 ? 'third' : ''} 
        ${uid === data.uid ? 'opacity-100' : 'opacity-60'}
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
};

export default TableRow;