'use client'
import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

const SelectTab = () => {
    const [tabIndex, setTabIndex] = useState(0);
    return (
        <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
            <TabList className={'flex items-center justify-center gap-10 cursor-pointer'}>
                <Tab className={`${tabIndex === 0 && 'text-red-600 pb-1 border-b-2 border-red-600'} 2xl:text-lg xl:text-sm font-semibold uppercase text-gray-400`}>classement général</Tab>
                <Tab className={`${tabIndex === 1 && 'text-red-600 pb-1 border-b-2 border-red-600'} 2xl:text-lg xl:text-sm font-semibold uppercase text-gray-400`}>wingfoil</Tab>
            </TabList>

            <TabPanel className={'2xl:mt-20 xl:mt-12'}>
                <h1 className='text-[#000] font-bold 2xl:text-5xl xl:text-3xl text-center'>Watermen Crown Wingfoil,<br /> Windfoil, Dockstart, Surffoil</h1>
            </TabPanel>
            <TabPanel>
                <h2>Any content 2</h2>
            </TabPanel>
        </Tabs>
    );
};

export default SelectTab;