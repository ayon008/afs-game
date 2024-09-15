/* eslint-disable @next/next/no-img-element */
'use client'
import sortDataByTime from '@/lib/getDataByCategory';
import GetFlag from '@/lib/getFlag';
import LeadBoard from '@/ui/LeadBoard';
import React, { useState } from 'react';
import { FaArrowDown } from 'react-icons/fa';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';

const SelectTab = ({ pointTable }) => {
    const categories = ['Wingfoil', 'Windfoil', 'dockstart', 'surfFoil', 'dw'];
    const [tabIndex, setTabIndex] = useState(0);
    const WatermanCrown = pointTable.filter((d) => {
        if (d.WatermanCrown) {
            return d
        }
    })
    const sortedWatermanCrown = WatermanCrown.sort((a, b) => {
        return (a.Wingfoil + a.Windfoil + a.dw) - (b.Wingfoil + b.Windfoil + b.dw)
    })

    const [index, setIndex] = useState(0);
    const [open, setOpen] = useState(false);

    const handleOpen = (i, open) => {
        setIndex(i + 1)
        setOpen(!open)
    }


    return (
        <div>
            <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList className={'flex items-center justify-center gap-10 cursor-pointer'}>
                    <Tab className={`${tabIndex === 0 && 'text-blue-500 pb-1 border-b-2 border-blue-500'} 2xl:text-lg xl:text-sm font-semibold uppercase text-gray-400 pb-1`}>classement général</Tab>
                    {
                        categories.map((category, i) => {
                            return (
                                <Tab key={i + 1} className={`${tabIndex === i + 1 && 'text-blue-500 pb-1 border-b-2 border-blue-500'} 2xl:text-lg xl:text-sm font-semibold uppercase text-gray-400 pb-1`}>{category}</Tab>
                            )
                        })
                    }
                    <Tab className={`${tabIndex === 6 && 'text-blue-500 pb-1 border-b-2 border-blue-500'} 2xl:text-lg xl:text-sm font-semibold uppercase text-gray-400 pb-1`}>WatermanCrown</Tab>
                </TabList>
                <TabPanel className={'2xl:mt-20 xl:mt-12'}>
                    <h1 className='text-[#000] font-bold 2xl:text-5xl xl:text-3xl text-center'>Watermen Crown Wingfoil,<br /> Windfoil, Dockstart, Surffoil</h1>
                    <LeadBoard pointTable={pointTable} />
                </TabPanel>
                {
                    categories.map((category, i) => {
                        return (
                            <TabPanel key={i} className={'2xl:mt-20 xl:mt-12'}>
                                <div className="overflow-x-auto">
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>Participant</th>
                                                <th></th>
                                                <th className='text-right'>Total des points</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                sortDataByTime(pointTable, category)?.map((d, i) => {
                                                    const flag = GetFlag(d?.pays);
                                                    const pos = i + 1;
                                                    return (
                                                        <>
                                                            <tr key={i} className={pos === 1 ? 'first' : pos === 2 ? 'second' : pos === 3 ? 'third' : ''}>
                                                                <td>{pos}</td>
                                                                <td>
                                                                    <div className='flex items-center gap-2'>
                                                                        <img alt='profile-image' className='2xl:w-[40px] 2xl:h-[20px] xl:w-[25px] xl:h-[15px]' src={flag} />
                                                                        <img alt='profile-image' className='2xl:w-[40px] 2xl:h-[40px] xl:w-[25px] xl:h-[25px] rounded-[50%]' src={d?.photoURL} />
                                                                        <h3 className='2xl:text-lg xl:text-sm font-semibold'>{d?.displayName}</h3>
                                                                    </div>
                                                                </td>
                                                                <td></td>
                                                                <td className='text-right font-semibold flex items-center gap-2 justify-end'><span>
                                                                    {d[category].toFixed(2) + ' ' + 'hours' || 'n/a'}
                                                                </span>
                                                                    <FaArrowDown onClick={() => handleOpen(i, open)} /> </td>
                                                            </tr>
                                                            {index === i + 1 && open && (
                                                                <tr>
                                                                    <td>
                                                                        <span className='font-bold'>Number of sessions completed</span>: {d[`${category}Session`] || 'N/A'}
                                                                    </td>
                                                                    <td>
                                                                        <span className='font-bold'>City & Country</span>: {d?.city || 'N/A'}, {d?.pays || 'N/A'}
                                                                    </td>
                                                                    <td>
                                                                        <span className='font-bold'>Date of the last recorded sessions</span>: {d?.city || 'N/A'}, {d?.pays || 'N/A'}
                                                                    </td>
                                                                    <td>
                                                                        <span className='font-bold'>Cumulative distance of the sessions</span>: {d[`${category}Distance`]?.toFixed(2) + ' ' + 'KM' || 'N/A'}
                                                                    </td>
                                                                </tr>
                                                            )}
                                                        </>
                                                    );
                                                })
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </TabPanel>
                        )
                    })
                }
                <TabPanel>
                    <div className="overflow-x-auto">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Participant</th>
                                    <th></th>
                                    <th className='text-right'>Total des points</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    sortedWatermanCrown.map((d, i) => {
                                        const flag = GetFlag(d?.pays);
                                        const pos = i + 1;
                                        return (
                                            <>
                                                <tr key={i} className={pos === 1 ? 'first' : pos === 2 ? 'second' : pos === 3 ? 'third' : ''}>
                                                    <td>{pos}</td>
                                                    <td>
                                                        <div className='flex items-center gap-2'>
                                                            <img alt='profile-image' className='2xl:w-[40px] 2xl:h-[20px] xl:w-[25px] xl:h-[15px]' src={flag} />
                                                            <img alt='profile-image' className='2xl:w-[40px] 2xl:h-[40px] xl:w-[25px] xl:h-[25px] rounded-[50%]' src={d?.photoURL} />
                                                            <h3 className='2xl:text-lg xl:text-sm font-semibold'>{d?.displayName}</h3>
                                                        </div>
                                                    </td>
                                                    <td></td>
                                                    <td className='text-right font-semibold flex items-center justify-end gap-2'>
                                                        <span> {(parseFloat(d?.Wingfoil || 0) + parseFloat(d?.Windfoil || 0) + parseFloat(d?.dw || 0)).toFixed(2) + ' ' + 'hours' || 'n/a'}</span>
                                                        <FaArrowDown onClick={() => handleOpen(i, open)} />
                                                    </td>
                                                </tr>
                                                {index === i + 1 && open && (
                                                    <tr>
                                                        <td>
                                                            <span className='font-bold'>Number of sessions completed</span>: {d?.session || 'N/A'}
                                                        </td>
                                                        <td>
                                                            <span className='font-bold'>City & Country</span>: {d?.city || 'N/A'}, {d?.pays || 'N/A'}
                                                        </td>
                                                        <td>
                                                            <span className='font-bold'>Date of the last recorded sessions</span>: {d?.city || 'N/A'}, {d?.pays || 'N/A'}
                                                        </td>
                                                        <td>
                                                            <span className='font-bold'>Cumulative distance of the sessions</span>: {d?.distance?.toFixed(2) + ' ' + 'KM' || 'N/A'}
                                                        </td>
                                                    </tr>
                                                )}
                                            </>
                                        );
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default SelectTab;