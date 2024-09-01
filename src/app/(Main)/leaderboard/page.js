import SelectTab from '@/Components/SelectTab';
import React from 'react';

const page = () => {
    return (
        <div className='2xl:px-36 2xl:pt-10 xl:px-20 xl:pt-10'>
            <h1 className='text-[#000] font-bold 2xl:text-7xl xl:text-5xl text-center'>Classement par nombre de points</h1>
            <div className='2xl:mt-20 xl:mt-14'>
                <SelectTab />
            </div>
        </div>
    );
};

export default page;