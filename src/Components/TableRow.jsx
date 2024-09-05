import Image from 'next/image';
import React from 'react';
import image from '@/../public/682c7390394d85444b46bee451dcb762.jpg'

const TableRow = ({ data }) => {
    const { name, pointsByDistance, pointsByTime, total, category, position } = data;
    const { wingfoil, dw, windfoil, surfFoil, dockstart } = category;
    console.log(position);


    return (
        <tr className={position === 1 && 'first' || position === 2 && 'second' || position === 3 && 'third'}>
            <td>{position.length > 2 ? position : `0${position}`}</td>
            <td>
                <div className='flex items-center gap-2'>
                    <Image alt='profile-image' className='2xl:w-[40px] 2xl:h-[40px] xl:w-[25px] xl:h-[25px] rounded-[50%]' src={image} />
                    <h3 className='2xl:text-lg xl:text-sm font-semibold'>{name}</h3>
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