/* eslint-disable @next/next/no-img-element */
'use client'
import TableHead from '@/Components/TableHead';
import convertToFranceTime from '@/lib/convertTime';
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
                            const time = d.lastUploadedTime;
                            const flag = GetFlag(pays);
                            return (
                                <React.Fragment key={i}>
                                    {/* First Row */}
                                    <tr onClick={() => handleOpen(i, open)} className={`relative  ${userPosition === position && 'my-position'}`}>
                                        {/* <td colSpan={9} className={`absolute inset-0`}></td> */}
                                        <td className='font-semibold 2xl:text-lg xl:text-base z-20'>{position < 10 ? `0${position}` : position}</td>
                                        <td>
                                            <div className='flex items-center gap-2'>
                                                <img alt='flag' className='2xl:w-[51px] 2xl:h-[31px] xl:w-[41px] xl:h-auto w-[41px] h-auto' src={flag} />
                                                <img alt='profile-image' className='2xl:w-[40px] 2xl:h-[40px] xl:w-[25px] xl:h-[25px] rounded-[50%]' src={photoURL} />
                                                <h3 className='2xl:text-lg xl:text-sm font-semibold'>{displayName}</h3>
                                            </div>
                                        </td>
                                        <td className='2xl:text-lg xl:text-sm font-semibold'>
                                            {Wingfoil ? Wingfoil.toFixed(2) + ' heures' : 'n/a'}
                                        </td>
                                        <td className='2xl:text-lg xl:text-sm font-semibold'>
                                            {Windfoil ? Windfoil.toFixed(2) + ' heures' : <span className='text-[#11111166]'>n/a</span>}
                                        </td>
                                        <td className='2xl:text-lg xl:text-sm font-semibold'>
                                            {dockstart ? dockstart.toFixed(2) + ' heures' : <span className='text-[#11111166]'>n/a</span>}
                                        </td>
                                        <td className='2xl:text-lg xl:text-sm font-semibold'>
                                            {surfFoil ? surfFoil.toFixed(2) + ' heures' : <span className='text-[#11111166]'>n/a</span>}
                                        </td>
                                        <td className='2xl:text-lg xl:text-sm font-semibold'>
                                            {dw ? dw.toFixed(2) + ' heures' : <span className='text-[#11111166]'>n/a</span>}
                                        </td>
                                        <td className='2xl:text-lg xl:text-sm font-semibold'>
                                            {WatermanCrown ? (parseFloat(Wingfoil || 0) + parseFloat(Windfoil || 0) + parseFloat(dw || 0)).toFixed(2) + ' heures' : <span className='text-[#11111166]'>n/a</span>}
                                        </td>
                                        <td className='2xl:text-lg xl:text-sm font-semibold text-right'>
                                            <span className='text-right'>{total.toFixed(2) + ' heures' || <span className='text-[#11111166]'>n/a</span>}</span>
                                        </td>
                                    </tr>
                                    {index === i + 1 && open && (
                                        <tr>
                                            <td colSpan={'9'} className='p-0'>
                                                <div className='bg-black rounded-[20px] 2xl:p-10 xl:p-6 p-2 grid grid-cols-4'>
                                                    <div className='border-r-2 border-[#FFF]'>
                                                        <h2 className='2xl:text-3xl xl:text-xl text-base font-bold text-white'>{d.city} {d.pays}</h2>
                                                        <p className='2xl:text-sm xl:text-xs text-[8px] text-[#FFFFFF80] 2xl:mt-2 xl:mt-1 mt-[2px]'>CITY, COUNTRY</p>
                                                    </div>
                                                    <div className='border-r-2 border-[#FFF]'>
                                                        <div className='w-fit mx-auto'>
                                                            <h2 className='2xl:text-3xl xl:text-xl text-base font-bold text-white'>{convertToFranceTime(time).date}</h2>
                                                            <p className='2xl:text-sm xl:text-xs text-[8px] text-[#FFFFFF80] 2xl:mt-2 xl:mt-1 mt-[2px]'>DATE DE DERNIÈRE SESSION</p>
                                                        </div>
                                                    </div>
                                                    <div className='border-r-2 border-[#FFF]'>
                                                        <div className='w-fit mx-auto'>
                                                            <h2 className='2xl:text-3xl xl:text-xl text-base font-bold text-white'>{d.session}</h2>
                                                            <p className='2xl:text-sm xl:text-xs text-[8px] text-[#FFFFFF80] 2xl:mt-2 xl:mt-1 mt-[2px]'>NOMBRE DE SESSIONS TOTAL</p>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className='w-fit ml-auto'>
                                                            <h2 className='2xl:text-3xl xl:text-xl text-base font-bold text-white'>{(d.distance).toFixed(2)
                                                            } KM</h2>
                                                            <p className='2xl:text-sm xl:text-xs text-[8px] text-[#FFFFFF80] 2xl:mt-2 xl:mt-1 mt-[2px]'>DISTANCE TOTALEL</p>
                                                        </div>
                                                    </div>
                                                </div>
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