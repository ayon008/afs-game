/* eslint-disable @next/next/no-img-element */
'use client'
import TableHead from '@/Components/TableHead';
import GetFlag from '@/lib/getFlag';
import React, { useState } from 'react';
import { FaArrowDown } from 'react-icons/fa';

const LeadBoard = ({ pointTable, userPosition, userData, LeadBoard }) => {
    const [index, setIndex] = useState(0);
    const [open, setOpen] = useState(false);

    const handleOpen = (i, open) => {
        setIndex(i + 1)
        setOpen(!open)
    }

    return (
        <div className="overflow-x-auto w-full 2xl:mt-10 xl:mt-6">
            <table className="table">
                <TableHead tableHead={['#', 'Participant', 'Wingfoil', 'Windfoil', 'Dockstart', 'Surffoil', 'DW', 'WatermanCrown', 'Total des Points']} />
                <tbody>
                    {
                        pointTable?.map((d, i) => {
                            const { displayName, photoURL, Wingfoil, Windfoil, dw, dockstart, surfFoil, total, pays, WatermanCrown } = d;
                            const position = pointTable.indexOf(d) + 1;
                            const flag = GetFlag(pays);
                            return (
                                <React.Fragment key={i}>
                                    {/* First Row */}
                                    <tr className={`${position === 1 ? 'first' : ''}
              ${position === 2 ? 'second' : ''} 
              ${position === 3 ? 'third' : ''} 
              relative`}>
                                        <td>{position < 10 ? `0${position}` : position}</td>
                                        <td>
                                            <div className='flex items-center gap-2'>
                                                <img alt='flag' className='2xl:w-[40px] 2xl:h-[20px] xl:w-[25px] xl:h-[15px]' src={flag} />
                                                <img alt='profile-image' className='2xl:w-[40px] 2xl:h-[40px] xl:w-[25px] xl:h-[25px] rounded-[50%]' src={photoURL} />
                                                <h3 className='2xl:text-lg xl:text-sm font-semibold'>{displayName}</h3>
                                            </div>
                                        </td>
                                        <td className='2xl:text-lg xl:text-sm font-semibold'>
                                            {Wingfoil ? Wingfoil.toFixed(2) + ' hours' : 'n/a'}
                                        </td>
                                        <td className='2xl:text-lg xl:text-sm font-semibold'>
                                            {Windfoil ? Windfoil.toFixed(2) + ' hours' : 'n/a'}
                                        </td>
                                        <td className='2xl:text-lg xl:text-sm font-semibold'>
                                            {dockstart ? dockstart.toFixed(2) + ' hours' : 'n/a'}
                                        </td>
                                        <td className='2xl:text-lg xl:text-sm font-semibold'>
                                            {surfFoil ? surfFoil.toFixed(2) + ' hours' : 'n/a'}
                                        </td>
                                        <td className='2xl:text-lg xl:text-sm font-semibold'>
                                            {dw ? dw.toFixed(2) + ' hours' : 'n/a'}
                                        </td>
                                        <td className='2xl:text-lg xl:text-sm font-semibold'>
                                            {WatermanCrown ? (parseFloat(Wingfoil || 0) + parseFloat(Windfoil || 0) + parseFloat(dw || 0)).toFixed(2) + ' hours' : <span className='text-[8px]'>You didn't participate</span>}
                                        </td>
                                        <td className='2xl:text-lg xl:text-sm font-semibold text-right flex items-center gap-2'>
                                            <span>{total.toFixed(2) + ' hours' || 'n/a'}</span>
                                            <FaArrowDown onClick={() => handleOpen(i, open)} />
                                        </td>
                                    </tr>
                                    {index === i + 1 && open && (
                                        <tr>
                                            <td colSpan="2">
                                                <span className='font-bold'>Number of sessions completed</span>: {d?.session || 'N/A'}
                                            </td>
                                            <td colSpan="3">
                                                <span className='font-bold'>City & Country</span>: {d?.city || 'N/A'}, {d?.pays || 'N/A'}
                                            </td>
                                            <td colSpan="2">
                                                <span className='font-bold'>Date of the last recorded sessions</span>: {d?.city || 'N/A'}, {d?.pays || 'N/A'}
                                            </td>
                                            <td colSpan="2">
                                                <span className='font-bold'>Cumulative distance of the sessions</span>: {d?.distance?.toFixed(2) + ' ' + 'KM'  || 'N/A'}
                                            </td>
                                        </tr>
                                    )}
                                </React.Fragment>
                            );
                        })
                    }
                </tbody>
            </table>
        </div>
    );
};

export default LeadBoard;