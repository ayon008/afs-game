import React from 'react';

const TopAchiver = () => {
    return (
        <div className='flex justify-between border-black border-b-2 2xl:mt-[18px] xl:mt-3'>
            <h5 className='2xl:text-lg xl:text-sm font-semibold'>Wingfoil</h5>
            <div className='2xl:mb-[18px] xl:mb-3'>
                <h3 className='2xl:text-lg xl:text-sm font-semibold first 2xl:py-2 2xl:px-[10px] xl:py-[5px] xl:px-2'>#1. Garmin Fenix 7 Smartwatch</h3>
                <h3 className='2xl:text-lg xl:text-sm font-semibold second 2xl:py-2 2xl:px-[10px] xl:py-[5px] xl:px-2 my-1'>#2. Exclusive Tour to Red Bull Air Race (including flights and accommodation)</h3>
                <h3 className='2xl:text-lg xl:text-sm font-semibold third 2xl:py-2 2xl:px-[10px] xl:py-[5px] xl:px-2'>#3. Complete Neoprene Set (wetsuit, boots, gloves)</h3>
            </div>
        </div>
    );
};

export default TopAchiver;