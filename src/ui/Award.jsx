'use client'
import React, { useState } from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';

const Award = () => {
    const categories = ['Wingfoil', 'Windfoil', 'dockstart', 'surfFoil', 'dw', 'waterman crown'];
    const [tabIndex, setTabIndex] = useState(0);
    return (
        <div className='overflow-x-auto mt-4'>
            <Tabs>
                <TabList className={'flex items-center justify-center gap-10 cursor-pointer'}>
                    {
                        categories.map((category, i) => {
                            return (
                                <Tab key={i} className={`${tabIndex === i && 'text-blue-500 pb-1 border-b-2 border-blue-500'} 2xl:text-lg xl:text-sm font-semibold uppercase pb-1`}>{category}</Tab>
                            )
                        })
                    }
                </TabList>
                <TabPanel>
                    <div className='2xl:mt-14 xl:mt-8 mt-6 grid grid-cols-3 items-end 2xl:gap-6 xl:gap-5 gap-3'>
                        <div className='2xl:p-10 xl:p-6 p-4 award 2xl:h-[490px] xl:h-[350px] h-[270px]'>
                            <h1 className='2xl:text-8xl xl:text-6xl text-4xl font-bold text-white'>
                                1<sup className='2xl:text-3xl xl:text-xl text-lg font-medium align-super'>ER</sup>
                            </h1>
                            <ul className='text-[#FFFFFF80] list-disc pl-5 2xl:mt-14 xl:mt-10 mt-6'>
                                <li>AFS Whitebird 5’8 Artness Pro A3D</li>
                                <li>Cale AP3D</li>
                                <li>Abonnement annuel Foiling Mag</li>
                            </ul>
                            <div>

                            </div>
                        </div>
                        <div className='2xl:p-10 xl:p-6 p-4 award 2xl:h-[394px] xl:h-[290px] h-[190px]'>
                            <h1 className='2xl:text-8xl xl:text-6xl text-4xl font-bold text-white'>
                                1<sup className='2xl:text-3xl xl:text-xl text-lg font-medium align-super'>ER</sup>
                            </h1>
                            <ul className='text-[#FFFFFF80] list-disc pl-5 2xl:mt-14 xl:mt-10 mt-6'>
                                <li>AFS Whitebird 5’8 Artness Pro A3D</li>
                                <li>Cale AP3D</li>
                                <li>Abonnement annuel Foiling Mag</li>
                            </ul>
                            <div>

                            </div>
                        </div>
                        <div className='2xl:p-10 xl:p-6 p-4 award 2xl:h-[330px] xl:h-[230px] h-[150px]'>
                            <h1 className='2xl:text-8xl xl:text-6xl text-4xl font-bold text-white'>
                                1<sup className='2xl:text-3xl xl:text-xl text-lg font-medium align-super'>ER</sup>
                            </h1>
                            <ul className='text-[#FFFFFF80] list-disc pl-5 2xl:mt-14 xl:mt-10 mt-6'>
                                <li>AFS Whitebird 5’8 Artness Pro A3D</li>
                                <li>Cale AP3D</li>
                                <li>Abonnement annuel Foiling Mag</li>
                            </ul>
                            <div>

                            </div>
                        </div>
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Award;