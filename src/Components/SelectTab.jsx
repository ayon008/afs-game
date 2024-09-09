/* eslint-disable @next/next/no-img-element */
'use client'
import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import TableHead from './TableHead';
import LeadBoard from '@/ui/LeadBoard';
import { sortAndRankCategoryByDistance, sortAndRankCategoryByPoints } from '@/lib/getDataByCategory';

const SelectTab = ({ allData }) => {

    const categories = ['wingfoil', 'windfoil', 'dockstart', 'surfFoil', 'dw'];

    const sortedByPoints = categories.reduce((acc, category) => {
        acc[category] = sortAndRankCategoryByPoints(allData, category).sorted;
        return acc;
    }, {});

    // Sorting and ranking for distance
    const sortedByDistance = categories.reduce((acc, category) => {
        acc[category] = sortAndRankCategoryByDistance(allData, category).sorted;
        return acc;
    }, {});

    const [tabIndex, setTabIndex] = useState(0);
    const [timeIndex, setTimeIndex] = useState(0);
    return (
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
            </TabList>

            {/* ALl Data leaderBoard */}
            <TabPanel className={'2xl:mt-20 xl:mt-12'}>
                <h1 className='text-[#000] font-bold 2xl:text-5xl xl:text-3xl text-center'>Watermen Crown Wingfoil,<br /> Windfoil, Dockstart, Surffoil</h1>
                <LeadBoard allData={allData} />
            </TabPanel>

            {
                categories.map((category, i) => {
                    return (
                        <TabPanel key={i}>
                            <Tabs selectedIndex={timeIndex} onSelect={(index) => setTimeIndex(index)}>
                                <TabList className={'flex items-center justify-between gap-10'}>
                                    <Tab className={`${timeIndex === 0 ? 'opacity-100' : 'opacity-40'} w-1/2`}>
                                        <h1 className='text-[#000] font-bold 2xl:text-5xl xl:text-3xl text-center cursor-pointer'>Temps passé à l’eau sur la durée de l’événement</h1>
                                    </Tab>
                                    <Tab className={`${timeIndex === 1 ? 'opacity-100' : 'opacity-40'} w-1/2`}>
                                        <h1 className='text-[#000] font-bold 2xl:text-5xl xl:text-3xl text-center cursor-pointer'> Distance totale parcourue sur la durée de l’événemen</h1>
                                    </Tab>
                                </TabList>
                                <TabPanel>
                                    <div className="overflow-x-auto">
                                        <table className="table">
                                            <thead>
                                                <tr>
                                                    <th>#</th>
                                                    <th>Participant</th>
                                                    <th className='text-right'>Total des points</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    sortedByPoints[category]?.map((d, i) => {
                                                        const pos = i + 1;
                                                        return d.category[category] && (
                                                            <tr key={i} className={pos === 1 ? 'first' : pos === 2 ? 'second' : pos === 3 ? 'third' : ''}>
                                                                <th>{pos}</th>
                                                                <td className='font-semibold'><div className='flex items-center gap-2'>
                                                                    <img alt='profile-image' className='2xl:w-[40px] 2xl:h-[40px] xl:w-[25px] xl:h-[25px] rounded-[50%]' src={d?.photoURL} />
                                                                    <h3 className='2xl:text-lg xl:text-sm font-semibold'>{d?.displayName}</h3>
                                                                </div>
                                                                </td>
                                                                <td className='text-right font-semibold'>{d.category[category].pointsByTime}</td>
                                                            </tr>
                                                        );
                                                    })
                                                }
                                            </tbody>
                                        </table>
                                    </div>
                                </TabPanel>
                                <TabPanel>
                                    <div className="overflow-x-auto">
                                        <table className="table">
                                            <thead>
                                                <tr>
                                                    <th>#</th>
                                                    <th>Participant</th>
                                                    <th className='text-right'>Total des points</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    sortedByDistance[category]?.map((d, i) => {
                                                        const pos = i + 1;
                                                        return d.category[category] && (
                                                            <tr key={i} className={pos === 1 ? 'first' : pos === 2 ? 'second' : pos === 3 ? 'third' : ''}>
                                                                <td>{pos}</td>
                                                                <td>
                                                                    <div className='flex items-center gap-2'>
                                                                        <img alt='profile-image' className='2xl:w-[40px] 2xl:h-[40px] xl:w-[25px] xl:h-[25px] rounded-[50%]' src={d?.photoURL} />
                                                                        <h3 className='2xl:text-lg xl:text-sm font-semibold'>{d?.displayName}</h3>
                                                                    </div>
                                                                </td>
                                                                <td className='text-right font-semibold'>{d.category[category].pointsByDistance}</td>
                                                            </tr>
                                                        );
                                                    })
                                                }
                                            </tbody>
                                        </table>
                                    </div>
                                </TabPanel>
                            </Tabs>
                        </TabPanel>
                    )
                })
            }
            
        </Tabs>
    );
};

export default SelectTab;