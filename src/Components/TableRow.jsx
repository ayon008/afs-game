/* eslint-disable @next/next/no-img-element */
import React from 'react';

const TableRow = ({ data, position, uid }) => {
    const { Wingfoil, Windfoil, dockstart, surfFoil, dw, WatermanCrown, displayName, photoURL, total } = data;

    return (
        <tr className={`${position === 1 ? 'first' : ''}
        ${position === 2 ? 'second' : ''} 
        ${position === 3 ? 'third' : ''}`}>
            <th className='text-white'>{position < 10 ? `0${position}` : position}</th>
            <td>
                <div className='flex items-center gap-2'>
                    <img alt='profile-image' className='2xl:w-[40px] 2xl:h-[40px] xl:w-[25px] xl:h-[25px] w-[15px] h-[15px] rounded-[50%]' src={photoURL} />
                    <h3 className='2xl:text-lg xl:text-sm text-[8px] font-semibold text-white'>{displayName}</h3>
                </div>
            </td>
            <td className={`2xl:text-lg xl:text-sm font-semibold text-[8px] text-white`}>
                {Wingfoil ? Wingfoil?.toFixed(2) + ' ' + 'hours' : '0 hours'}
            </td>
            <td className={`2xl:text-lg xl:text-sm font-semibold text-[8px] text-white`}>
                {Windfoil ? Windfoil?.toFixed(2) + ' ' + 'hours' : '0 hours'}
            </td>
            <td className={` 2xl:text-lg xl:text-sm font-semibold text-[8px] text-white`}>
                {dockstart ? dockstart?.toFixed(2) + ' ' + 'hours' : '0 hours'}
            </td>
            <td className={` 2xl:text-lg xl:text-sm font-semibold text-[8px] text-white`}>
                {surfFoil ? surfFoil?.toFixed(2) + ' ' + 'hours' : '0 hours'}
            </td>
            <td className={` 2xl:text-lg xl:text-sm font-semibold text-[8px] text-white`}>
                {dw ? dw?.toFixed(2) + ' ' + 'hours' : '0 hours'}
            </td>
            <td className={` 2xl:text-lg xl:text-sm font-semibold text-[8px] text-white`}>
                {WatermanCrown ? (parseFloat(Wingfoil || 0) + parseFloat(Windfoil || 0) + parseFloat(dw || 0)).toFixed(2) + ' ' + 'hours' : '0 hours'}
            </td>
            <td className={`2xl:text-lg xl:text-sm font-semibold text-right text-[8px] text-white`}>
                {total?.toFixed(2) + ' ' + 'hours' || '0 hours'}
            </td>
        </tr>
    );
};


export default TableRow;