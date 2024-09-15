/* eslint-disable @next/next/no-img-element */
import React from 'react';

const TableRow = ({ data, position, uid }) => {
    const { Wingfoil, Windfoil, dockstart, surfFoil, dw, WatermanCrown, displayName, photoURL, total } = data;

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
            <td className={`2xl:text-lg xl:text-sm font-semibold`}>
                {Wingfoil ? Wingfoil?.toFixed(2) + ' ' + 'hours' : <span className='text-[8px]'>You didn't participant</span>}
            </td>
            <td className={`2xl:text-lg xl:text-sm font-semibold`}>
                {Windfoil ? Windfoil?.toFixed(2) + ' ' + 'hours' : <span className='text-[8px]'>You didn't participant</span>}
            </td>
            <td className={` 2xl:text-lg xl:text-sm font-semibold`}>
                {dockstart ? dockstart?.toFixed(2) + ' ' + 'hours' : <span className='text-[8px]'>You didn't participant</span>}
            </td>
            <td className={` 2xl:text-lg xl:text-sm font-semibold`}>
                {surfFoil ? surfFoil?.toFixed(2) + ' ' + 'hours' : <span className='text-[8px]'>You didn't participant</span>}
            </td>
            <td className={` 2xl:text-lg xl:text-sm font-semibold`}>
                {dw ? dw?.toFixed(2) + ' ' + 'hours' : <span className='text-[8px]'>You didn't participant</span>}
            </td>
            <td className={` 2xl:text-lg xl:text-sm font-semibold`}>
                {WatermanCrown ? (parseFloat(Wingfoil || 0) + parseFloat(Windfoil || 0) + parseFloat(dw || 0)).toFixed(2) + ' ' + 'hours' : <span className='text-[8px]'>You didn't participant</span>}
            </td>
            <td className={`2xl:text-lg xl:text-sm font-semibold`}>
                {total?.toFixed(2) + ' ' + 'hours' || 'n/a'}
            </td>
        </tr>
    );
};


export default TableRow;