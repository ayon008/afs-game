'use client'
import GetAwardsByCategory from '@/lib/getAwardByCategory';
import GetAwards from '@/lib/getAwards';
import React, { useState } from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';

const Award = () => {
    const categories = ['Wingfoil', 'Windfoil', 'dockstart', 'surfFoil', 'dw', 'waterman crown'];
    const [tabIndex, setTabIndex] = useState(0);
    return (
        <div className='overflow-x-auto mt-4'>
            <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList className={'flex items-center justify-center 2xl:gap-10 xl:gap-10 gap-3 cursor-pointer'}>
                    {
                        categories?.map((category, i) => {
                            return (
                                <Tab key={i} className={`${tabIndex === i && 'text-blue-500 pb-1 border-b-2 border-blue-500'} 2xl:text-lg xl:text-sm text-[8px] font-semibold uppercase pb-1`}>{category === 'surfFoil' ? 'prone foil' : category === 'dw' ? 'Downwind' : category}</Tab>
                            )
                        })
                    }
                </TabList>
                {
                    categories?.map((category, i) => {
                        const { isLoading, isError, error, awardsCategory, refetch } = GetAwardsByCategory(category);
                        console.log(awardsCategory);


                        return (
                            <TabPanel key={i}>
                                <div className='2xl:mt-14 xl:mt-8 mt-6 grid 2xl:grid-cols-3 xl:grid-cols-3 grid-cols-1 items-end 2xl:gap-6 xl:gap-5 gap-3'>
                                    {
                                        awardsCategory?.map((a, i) => {
                                            if (a.position === '1st') {
                                                return (
                                                    <div key={i} className='2xl:p-10 xl:p-6 p-6 award 2xl:h-[550px] xl:h-[440px] h-auto flex flex-col'>
                                                        <h1 className='2xl:text-8xl xl:text-6xl text-4xl font-bold text-white'>
                                                            1<sup className='2xl:text-3xl xl:text-xl text-lg font-medium align-super'>ST</sup>
                                                        </h1>
                                                        <ul className='text-[#FFFFFF80] list-disc 2xl:pl-5 xl:pl-5 pl-2 2xl:mt-14 xl:mt-10 mt-6'>
                                                            <li className='2xl:text-2xl xl:text-lg text-base'>{a.prize1}</li>
                                                            {a.prize2 && <li className='2xl:text-2xl xl:text-lg text-base'>{a.prize2}</li>}
                                                            {a.prize3 && <li className='2xl:text-2xl xl:text-lg text-base'>{a.prize3}</li>}
                                                        </ul>
                                                        <div className='2xl:mt-auto xl:mt-auto mt-10 grid grid-cols-3 2xl:gap-10 xl:gap-6 gap-4 w-full overflow-hidden items-end'>
                                                            <img src={a.sponsors1} className='w-full h-auto' alt='' />
                                                            <img src={a.sponsors2} className='w-full h-auto' alt='' />
                                                            <img src={a.sponsors3} className='w-full h-auto' alt='' />
                                                        </div>
                                                    </div>
                                                )
                                            }
                                            if (a.position === '2nd') {
                                                return (
                                                    <div key={i} className='2xl:p-10 xl:p-6 p-6 award 2xl:h-[490px] xl:h-[380px] h-auto flex flex-col'>
                                                        <h1 className='2xl:text-8xl xl:text-6xl text-4xl font-bold text-white'>
                                                            2<sup className='2xl:text-3xl xl:text-xl text-lg font-medium align-super'>2ND</sup>
                                                        </h1>
                                                        <ul className='text-[#FFFFFF80] list-disc 2xl:pl-5 xl:pl-5 pl-2 2xl:mt-14 xl:mt-10 mt-6'>
                                                            <li className='2xl:text-2xl xl:text-lg text-base'>{a.prize1}</li>
                                                            {a.prize2 && <li className='2xl:text-2xl xl:text-lg text-base'>{a.prize2}</li>}
                                                            {a.prize3 && <li className='2xl:text-2xl xl:text-lg text-base'>{a.prize3}</li>}
                                                        </ul>
                                                        <div className='2xl:mt-auto xl:mt-auto mt-10 grid grid-cols-3 2xl:gap-10 xl:gap-6 gap-4 w-full overflow-hidden items-end'>
                                                            <img src={a.sponsors1} className='w-full h-auto' alt='' />
                                                            <img src={a.sponsors2} className='w-full h-auto' alt='' />
                                                            <img src={a.sponsors3} className='w-full h-auto' alt='' />
                                                        </div>
                                                    </div>
                                                )
                                            }
                                            if (a.position === '3rd') {
                                                return (
                                                    <div key={i} className='2xl:p-10 xl:p-6 p-6 award 2xl:h-[430px] xl:h-[320px] h-auto flex flex-col'>
                                                        <h1 className='2xl:text-8xl xl:text-6xl text-4xl font-bold text-white'>
                                                            3<sup className='2xl:text-3xl xl:text-xl text-lg font-medium align-super'>RD</sup>
                                                        </h1>
                                                        <ul className='text-[#FFFFFF80] list-disc 2xl:pl-5 xl:pl-5 pl-2 mt-6'>
                                                            <li className='2xl:text-2xl xl:text-lg text-base'>{a.prize1}</li>
                                                            {a.prize2 && <li className='2xl:text-2xl xl:text-lg text-base'>{a.prize2}</li>}
                                                            {a.prize3 && <li className='2xl:text-2xl xl:text-lg text-base'>{a.prize3}</li>}
                                                        </ul>
                                                        <div className='2xl:mt-auto xl:mt-auto mt-10 grid grid-cols-3 2xl:gap-10 xl:gap-6 gap-4 w-full overflow-hidden items-end'>
                                                            <img src={a.sponsors1} className='w-full h-auto' alt='' />
                                                            <img src={a.sponsors2} className='w-full h-auto' alt='' />
                                                            <img src={a.sponsors3} className='w-full h-auto' alt='' />
                                                        </div>
                                                    </div>
                                                )
                                            }
                                        })
                                    }
                                </div>
                            </TabPanel>
                        )
                    })
                }
            </Tabs>
        </div>
    );
};

export default Award;