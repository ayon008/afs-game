'use client'
import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import TableHead from './TableHead';

const SelectTab = () => {
    const [tabIndex, setTabIndex] = useState(0);
    return (
        <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
            <TabList className={'flex items-center justify-center gap-10 cursor-pointer'}>
                <Tab className={`${tabIndex === 0 && 'text-red-600 pb-1 border-b-2 border-red-600'} 2xl:text-lg xl:text-sm font-semibold uppercase text-gray-400 pb-1`}>classement général</Tab>
                <Tab className={`${tabIndex === 1 && 'text-red-600 pb-1 border-b-2 border-red-600'} 2xl:text-lg xl:text-sm font-semibold uppercase text-gray-400 pb-1`}>wingfoil</Tab>
                <Tab className={`${tabIndex === 2 && 'text-red-600 pb-1 border-b-2 border-red-600'} 2xl:text-lg xl:text-sm font-semibold uppercase text-gray-400 pb-1`}>windfoil</Tab>
                <Tab className={`${tabIndex === 3 && 'text-red-600 pb-1 border-b-2 border-red-600'} 2xl:text-lg xl:text-sm font-semibold uppercase text-gray-400 pb-1`}>Dockstart</Tab>
                <Tab className={`${tabIndex === 4 && 'text-red-600 pb-1 border-b-2 border-red-600'} 2xl:text-lg xl:text-sm font-semibold uppercase text-gray-400 pb-1`}>surf foil</Tab>
                <Tab className={`${tabIndex === 5 && 'text-red-600 pb-1 border-b-2 border-red-600'} 2xl:text-lg xl:text-sm font-semibold uppercase text-gray-400 pb-1`}>surf foil</Tab>
                <Tab className={`${tabIndex === 6 && 'text-red-600 pb-1 border-b-2 border-red-600'} 2xl:text-lg xl:text-sm font-semibold uppercase text-gray-400 pb-1`}>dw</Tab>
            </TabList>

            <TabPanel className={'2xl:mt-20 xl:mt-12'}>
                <h1 className='text-[#000] font-bold 2xl:text-5xl xl:text-3xl text-center'>Watermen Crown Wingfoil,<br /> Windfoil, Dockstart, Surffoil</h1>
                <div className="overflow-x-auto w-full 2xl:mt-10 xl:mt-6">
                    <table className="table">
                        {/* head */}
                        <TableHead />
                        <tbody>
                        </tbody>
                    </table>
                </div>
            </TabPanel>
            <TabPanel>
                <h2>Any content 2</h2>
            </TabPanel>
        </Tabs>
    );
};

export default SelectTab;