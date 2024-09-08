'use client'
import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import TableHead from './TableHead';
import LeadBoard from '@/ui/LeadBoard';
import { sortAndRankCategoryByDistance, sortAndRankCategoryByPoints } from '@/lib/getDataByCategory';

const SelectTab = ({ allData }) => {

    const { sorted: wingfoil } = sortAndRankCategoryByPoints(allData, 'wingfoil');
    const { sorted: windfoil } = sortAndRankCategoryByPoints(allData, 'windfoil');
    const { sorted: dockstart } = sortAndRankCategoryByPoints(allData, 'dockstart');
    const { sorted: dw } = sortAndRankCategoryByPoints(allData, 'dw');
    const { sorted: surfFoil } = sortAndRankCategoryByPoints(allData, 'surfFoil');

    // Sorting and ranking for distance
    const { sorted: wingfoilDistance } = sortAndRankCategoryByDistance(allData, 'wingfoil');
    const { sorted: windfoilDistance } = sortAndRankCategoryByDistance(allData, 'windfoil');
    const { sorted: dockstartDistance } = sortAndRankCategoryByDistance(allData, 'dockstart');
    const { sorted: dwDistance } = sortAndRankCategoryByDistance(allData, 'dw');
    const { sorted: surfFoilDistance } = sortAndRankCategoryByDistance(allData, 'surfFoil');

    const [tabIndex, setTabIndex] = useState(0);
    const [timeIndex, setTimeIndex] = useState(0);
    return (
        <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
            <TabList className={'flex items-center justify-center gap-10 cursor-pointer'}>
                <Tab className={`${tabIndex === 0 && 'text-blue-500 pb-1 border-b-2 border-blue-500'} 2xl:text-lg xl:text-sm font-semibold uppercase text-gray-400 pb-1`}>classement général</Tab>
                <Tab className={`${tabIndex === 1 && 'text-blue-500 pb-1 border-b-2 border-blue-500'} 2xl:text-lg xl:text-sm font-semibold uppercase text-gray-400 pb-1`}>wingfoil</Tab>
                <Tab className={`${tabIndex === 2 && 'text-blue-500 pb-1 border-b-2 border-blue-500'} 2xl:text-lg xl:text-sm font-semibold uppercase text-gray-400 pb-1`}>windfoil</Tab>
                <Tab className={`${tabIndex === 3 && 'text-blue-500 pb-1 border-b-2 border-blue-500'} 2xl:text-lg xl:text-sm font-semibold uppercase text-gray-400 pb-1`}>Dockstart</Tab>
                <Tab className={`${tabIndex === 4 && 'text-blue-500 pb-1 border-b-2 border-blue-500'} 2xl:text-lg xl:text-sm font-semibold uppercase text-gray-400 pb-1`}>surf foil</Tab>
                <Tab className={`${tabIndex === 5 && 'text-blue-500 pb-1 border-b-2 border-blue-500'} 2xl:text-lg xl:text-sm font-semibold uppercase text-gray-400 pb-1`}>surf foil</Tab>
                <Tab className={`${tabIndex === 6 && 'text-blue-500 pb-1 border-b-2 border-blue-500'} 2xl:text-lg xl:text-sm font-semibold uppercase text-gray-400 pb-1`}>dw</Tab>
            </TabList>

            <TabPanel className={'2xl:mt-20 xl:mt-12'}>
                <h1 className='text-[#000] font-bold 2xl:text-5xl xl:text-3xl text-center'>Watermen Crown Wingfoil,<br /> Windfoil, Dockstart, Surffoil</h1>
                <LeadBoard allData={allData} />
            </TabPanel>
            <TabPanel>
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
                                        wingfoil?.map((d, i) => {
                                            const pos = i + 1;
                                            return d.category['wingfoil'] && (
                                                <tr key={i} className={pos === 1 ? 'first' : pos === 2 ? 'second' : pos === 3 ? 'third' : ''}>
                                                    <th>{pos}</th>
                                                    <td className='font-semibold'>{d.displayName}</td>
                                                    <td className='text-right font-semibold'>{points === 'byTime' ? `${d.category[categoryName].pointsByTime}` : `${d.category[categoryName].pointsByDistance}`}</td>
                                                </tr>
                                            );
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        2
                    </TabPanel>
                </Tabs>
            </TabPanel>
        </Tabs>
    );
};

export default SelectTab;