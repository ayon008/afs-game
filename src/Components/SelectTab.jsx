/* eslint-disable @next/next/no-img-element */
'use client'
import useAuth from '@/Hooks/useAuth';
import convertToFranceTime from '@/lib/convertTime';
import sortDataByTime from '@/lib/getDataByCategory';
import GetFlag from '@/lib/getFlag';
import LeadBoard from '@/ui/LeadBoard';
import React, { useState } from 'react';
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

    const { user } = useAuth();
    const uid = user?.uid;

    const userData = pointTable.find(point => point.uid === uid);
    const userPosition = pointTable.indexOf(userData) + 1;


    return (
        <div>
            <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList className={'flex items-center justify-center 2xl:gap-10 xl:gap-10 gap-5 cursor-pointer'}>
                    {
                        categories.map((category, i) => {
                            return (
                                <Tab key={i} className={`${tabIndex === i && 'text-blue-500 pb-1 border-b-2 border-blue-500'} 2xl:text-lg xl:text-sm text-[8px] font-semibold uppercase pb-1`}>{category}</Tab>
                            )
                        })
                    }
                    <Tab className={`${tabIndex === 5 && 'text-blue-500 pb-1 border-b-2 border-blue-500'} 2xl:text-lg xl:text-sm text-[8px] font-semibold uppercase pb-1`}>WatermanCrown</Tab>
                </TabList>
                {/* */}
                {
                    categories.map((category, i) => {
                        return (
                            <TabPanel key={i} className={'2xl:mt-20 xl:mt-12 mt-8'}>
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
                                                    const time = d.lastUploadedTime;
                                                    return (
                                                        <>
                                                            <tr onClick={() => handleOpen(i, open)} key={i} className={pos === 1 ? 'first' : pos === 2 ? 'second' : pos === 3 ? 'third' : userPosition === pos ? 'my-position' : ''}>
                                                                <th>{pos}</th>
                                                                <td>
                                                                    <div className='flex items-center gap-2'>
                                                                        <img alt='profile-image' className='2xl:w-[40px] 2xl:h-[20px] xl:w-[25px] xl:h-[15px] w-[15px] h-[10px]' src={flag} />
                                                                        <img alt='profile-image' className='2xl:w-[40px] 2xl:h-[40px] xl:w-[25px] xl:h-[25px] w-[15px] h-[10px] rounded-[50%]' src={d?.photoURL} />
                                                                        <h3 className='2xl:text-lg xl:text-sm text-[10px] font-semibold'>{d?.displayName}</h3>
                                                                    </div>
                                                                </td>
                                                                <td></td>
                                                                <td className='text-right font-semibold flex items-center gap-2 justify-end '><span>
                                                                    {d[category].toFixed(2) + ' ' + 'hours' || 'n/a'}
                                                                </span>
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
                                                                            <div className='border-r-2 border-[#FFF] ml-2'>
                                                                                <div className='w-fit mx-auto'>
                                                                                    <h2 className='2xl:text-3xl xl:text-xl text-base font-bold text-white'>{convertToFranceTime(time).date}</h2>
                                                                                    <p className='2xl:text-sm xl:text-xs text-[8px] text-[#FFFFFF80] 2xl:mt-2 xl:mt-1 mt-[2px]'>DATE DE DERNIÈRE SESSION</p>
                                                                                </div>
                                                                            </div>
                                                                            <div className='border-r-2 border-[#FFF] ml-2'>
                                                                                <div className='w-fit mx-auto'>
                                                                                    <h2 className='2xl:text-3xl xl:text-xl text-base font-bold text-white'>{d[`${category}Session`]}</h2>
                                                                                    <p className='2xl:text-sm xl:text-xs text-[8px] text-[#FFFFFF80] 2xl:mt-2 xl:mt-1 mt-[2px]'>NOMBRE DE SESSIONS TOTAL</p>
                                                                                </div>
                                                                            </div>
                                                                            <div>
                                                                                <div className='w-fit ml-auto'>
                                                                                    <h2 className='2xl:text-3xl xl:text-xl text-base font-bold text-white'>{(d[`${category}Distance`]).toFixed(2)
                                                                                    } KM</h2>
                                                                                    <p className='2xl:text-sm xl:text-xs text-[8px] text-[#FFFFFF80] 2xl:mt-2 xl:mt-1 mt-[2px]'>DISTANCE TOTALEL</p>
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
                                </div>
                            </TabPanel>
                        )
                    })
                }
                <TabPanel className={'2xl:mt-20 xl:mt-12'}>
                    <LeadBoard pointTable={pointTable} userPosition={userPosition} />
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default SelectTab;