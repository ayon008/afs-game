import PicUpload from '@/Components/PicUpload';
import React from 'react';

const page = () => {
    return (
        <div className='2xl:px-36  2xl:py-10 xl:px-20 xl:py-10'>
            <h1 className='text-[#000] font-bold 2xl:text-7xl xl:text-5xl'>Modifier le compte</h1>
            <form className='2xl:mt-10 xl:mt-6 bg-[#F0F0F0] rounded-[10px] p-5'>
                <PicUpload />
                <h4 className='2xl:text-xl xl:text-sm font-bold 2xl:mt-10 xl:mt-6'>Vos informations</h4>
                <div className='form-control'>

                </div>
            </form>
        </div>
    );
};

export default page;