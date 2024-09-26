/* eslint-disable @next/next/no-img-element */
'use client'
import useAuth from '@/Hooks/useAuth';
import FaArrowDown from '@/icons/FaArrowDown';
import GetFlags from '@/js/GetFlags';

import watermanCrown from '@/js/getWatermanCrown';
import convertToFranceTime from '@/lib/convertTime';
import sortDataByTime from '@/lib/getDataByCategory';
import LeadBoard from '@/ui/LeadBoard';
import React, { useEffect, useState } from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';

const SelectTab = ({ pointTable }) => {
    const categories = ['Wingfoil', 'Windfoil', 'dockstart', 'surfFoil', 'dw'];
    const [tabIndex, setTabIndex] = useState(0);
    const sortedWatermanCrown = watermanCrown(pointTable);
    const [index, setIndex] = useState(0);
    const [open, setOpen] = useState(false);
    const [itemsToShow, setItemsToShow] = useState(10);
    const handleShowMore = () => {
        setItemsToShow(prev => prev + 10);
    };

    const handleOpen = (i, open) => {
        setIndex(i + 1)
        setOpen(!open)
    }
    console.log(sortedWatermanCrown);
    const { user } = useAuth();
    const uid = user?.uid;
    const userData = pointTable.find(point => point.uid === uid);
    const userPosition = pointTable.indexOf(userData) + 1;

    return (
        <div>
            <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)} className={'mr-2'}>
                <TabList className={'flex items-center justify-center 2xl:gap-10 xl:gap-10 gap-5 cursor-pointer overflow-x-auto'}>
                    {
                        categories?.map((category, i) => {
                            return (
                                <Tab key={i} className={`${tabIndex === i && 'text-blue-500 pb-1 border-b-2 border-blue-500'} 2xl:text-lg xl:text-sm text-xs font-semibold uppercase pb-1`}>{category === 'surfFoil' ? 'prone foil' : category === 'dw' ? 'Downwind' : category}</Tab>
                            )
                        })
                    }
                    <Tab className={`${tabIndex === 5 && 'text-blue-500 pb-1 border-b-2 border-blue-500'} 2xl:text-lg xl:text-sm text-xs font-semibold uppercase pb-1`}>WatermanCrown</Tab>
                </TabList>
                {
                    categories?.map((category, i) => {
                        return (
                            <TabPanel key={i} className={'2xl:mt-20 xl:mt-12 mt-8'}>
                                <div className="overflow-x-auto">
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th className='font-semibold 2xl:text-lg xl:text-sm text-xs border-b-[1px] border-[#00000033] text-black'>#</th>
                                                <th className='font-semibold 2xl:text-lg xl:text-sm text-xs border-b-[1px] border-[#00000033] text-black'>Participant</th>
                                                <th className='font-semibold 2xl:text-lg xl:text-sm text-xs border-b-[1px] border-[#00000033] text-black'></th>
                                                <th className='font-semibold 2xl:text-lg xl:text-sm text-xs border-b-[1px] border-[#00000033] text-black'></th>
                                                <th className='text-right font-semibold 2xl:text-lg xl:text-sm text-xs border-b-[1px] border-[#00000033] text-black'>Total time</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                [...sortDataByTime(pointTable, category)].slice(0, itemsToShow)?.map((d, i) => {
                                                    const pos = i + 1;
                                                    const time = d.lastUploadedTime;
                                                    return (
                                                        <>
                                                            <tr onClick={() => handleOpen(i, open)} key={i} className={`${pos === 1 && userPosition !== 1 ? 'first' : pos === 2 && userPosition !== 2 ? 'second' : pos === 3
                                                                && userPosition !== 3 ? 'third' : userPosition === pos ? 'my-position' : ''} cursor-pointer border-b-[1px] border-[#00000033]`}>
                                                                <th>{pos}.</th>
                                                                <td>
                                                                    <div className='flex items-center gap-2'>
                                                                        <GetFlags params={{ country: d?.pays }} />
                                                                        <img alt='profile-image' className='2xl:w-[40px] 2xl:h-[40px] xl:w-[25px] xl:h-[25px] w-[24px] h-[24px] rounded-[50%]' src={d?.photoURL} />
                                                                        <h3 className='2xl:text-lg xl:text-sm font-semibold'>{d?.displayName}</h3>
                                                                    </div>
                                                                </td>
                                                                <td className='font-semibold 2xl:text-lg xl:text-sm text-[8px] border-b-[1px] border-[#00000033] text-black'></td>
                                                                <td className='font-semibold 2xl:text-lg xl:text-sm text-[8px] border-b-[1px] border-[#00000033] text-black'></td>
                                                                <td className='text-right font-semibold  2xl:text-lg xl:text-sm flex items-center gap-2 justify-end '><span>
                                                                    {d[category].toFixed(2) + ' ' + 'hours' || 'n/a'}
                                                                </span>
                                                                </td>
                                                            </tr>
                                                            {index === i + 1 && open && (
                                                                <tr>
                                                                    <td colSpan={'9'} className='p-0'>
                                                                        <div className='bg-black rounded-[20px] 2xl:p-10 xl:p-6 p-4 grid 2xl:grid-cols-4 xl:grid-cols-4 grid-cols-2 2xl:gap-0 xl:gap-0 gap-6'>
                                                                            <div className='border-r-2 border-[#FFF]'>
                                                                                <h2 className='2xl:text-3xl xl:text-xl text-xs font-bold text-white'>{d.city} {d.pays}</h2>
                                                                                <p className='2xl:text-sm xl:text-xs text-[8px] text-[#FFFFFF80] 2xl:mt-2 xl:mt-1 mt-[2px]'>CITY, COUNTRY</p>
                                                                            </div>
                                                                            <div className='2xl:border-r-2 xl:border-r-2 2xl:border-[#FFF] xl:border-[#FFF] 2xl:ml-2 xl:ml-2'>
                                                                                <div className='2xl:w-fit 2xl:mx-auto xl:w-fit xl:mx-auto'>
                                                                                    <h2 className='2xl:text-3xl xl:text-xl text-xs font-bold text-white'>{convertToFranceTime(time).date}</h2>
                                                                                    <p className='2xl:text-sm xl:text-xs text-[8px] text-[#FFFFFF80] 2xl:mt-2 xl:mt-1 mt-[2px] uppercase'>last session</p>
                                                                                </div>
                                                                            </div>
                                                                            <div className='border-r-2 border-[#FFF] 2xl:ml-2 xl:ml-2'>
                                                                                <div className='2xl:w-fit 2xl:mx-auto xl:w-fit xl:mx-auto'>
                                                                                    <h2 className='2xl:text-3xl xl:text-xl text-xs font-bold text-white'>{d[`${category}Session`]}</h2>
                                                                                    <p className='2xl:text-sm xl:text-xs text-[8px] text-[#FFFFFF80] 2xl:mt-2 xl:mt-1 mt-[2px]'>TOTAL NUMBER OF SESSIONS</p>
                                                                                </div>
                                                                            </div>
                                                                            <div>
                                                                                <div className='w-fit 2xl:ml-auto xl:ml-auto'>
                                                                                    <h2 className='2xl:text-3xl xl:text-xl text-xs font-bold text-white'>{(d[`${category}Distance`]).toFixed(2)
                                                                                    } KM</h2>
                                                                                    <p className='2xl:text-sm xl:text-xs text-[8px] text-[#FFFFFF80] 2xl:mt-2 xl:mt-1 mt-[2px]'>TOTAL DISTANCE</p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                            )}
                                                        </>
                                                    );
                                                })
                                            }
                                        </tbody>
                                    </table>
                                    {
                                        sortDataByTime(pointTable, category).length > 10 && <div className='w-fit mx-auto mt-10'>
                                            <button onClick={() => handleShowMore()} className="btn bg-white border-none flex items-center gap-0">
                                                <span>See more</span> <span className="mt-1"><FaArrowDown /></span>
                                            </button>
                                        </div>
                                    }
                                </div>
                            </TabPanel>
                        )
                    })
                }
                <TabPanel className={'2xl:mt-20 xl:mt-12'}>
                    <LeadBoard pointTable={sortedWatermanCrown} userPosition={userPosition} />
                </TabPanel>
            </Tabs>
        </div >
    );
};

export default SelectTab;