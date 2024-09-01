import Image from 'next/image';
import React from 'react';
import image from '@/../public/682c7390394d85444b46bee451dcb762.jpg'

const TableRow = () => {
    return (
        <tr className='first'>
            <td>01.</td>
            <td>
                <div className='flex items-center gap-2'>
                    <Image alt='profile-image' className='2xl:w-[40px] 2xl:h-[40px] xl:w-[25px] xl:h-[25px] rounded-[50%]' src={image} />
                    <h3 className='2xl:text-lg xl:text-sm font-semibold'>Felix Müller</h3>
                </div>
            </td>
            <td className='2xl:text-lg xl:text-sm font-semibold'>
                98 points
            </td>
            <td className='2xl:text-lg xl:text-sm font-semibold'>
                n/a
            </td>
            <td className='2xl:text-lg xl:text-sm font-semibold'>
                46 points
            </td>
            <td className='2xl:text-lg xl:text-sm font-semibold'>
                57 points
            </td>
            <td className='2xl:text-lg xl:text-sm font-semibold'>
                n/a
            </td>
            <td className='2xl:text-lg xl:text-sm font-semibold text-right'>
                386 points
            </td>
        </tr>
    );
};

export default TableRow;