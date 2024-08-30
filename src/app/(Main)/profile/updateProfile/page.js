import PicUpload from '@/Components/PicUpload';
import React from 'react';
import { FaCheck } from 'react-icons/fa';

const page = () => {
    return (
        <div className='2xl:px-36  2xl:py-10 xl:px-20 xl:py-10'>
            <h1 className='text-[#000] font-bold 2xl:text-7xl xl:text-5xl'>Modifier le compte</h1>
            <form className='2xl:mt-10 xl:mt-6 bg-[#F0F0F0] rounded-[10px] p-5'>
                <PicUpload />
                <h4 className='2xl:text-xl xl:text-sm font-bold 2xl:mt-10 xl:mt-6'>Vos informations</h4>
                <div className='grid grid-cols-3 2xl:mt-10 xl:mt-6 2xl:gap-x-5 xl:gap-x-3 2xl:gap-y-6 xl:gap-y-4'>
                    <div className="form-control relative">
                        <label className="label bg-[#F0F0F0] items-center justify-normal w-fit h-fit py-0 gap-1 absolute left-[12px] -top-[10px]">
                            <span className="label-text text-[#666]   text-sm font-bold py-0">NAME</span>
                            <span><FaCheck size={'0.85rem'} color='#2A7029' /></span>
                        </label>
                        <input type="text" name='name' placeholder="Emmma" className="input input-bordered border-2 border-[#666] bg-[#F0F0F0] text-white Alliance" required />
                    </div>
                    <div className="form-control relative">
                        <label className="label items-center justify-normal bg-[#F0F0F0] w-fit h-fit py-0 gap-1 absolute left-[12px] -top-[10px]">
                            <span className="label-text text-[#666] text-sm font-bold py-0">ADDRESS</span>
                            <span><FaCheck size={'0.85rem'} color='#2A7029' /></span>
                        </label>
                        <input type="text" name='address' placeholder="Hauptstraße 123, 10115 Berlin" className="input input-bordered border-2 border-[#666] bg-[#F0F0F0] text-white Alliance" required />
                    </div>
                    <div className="form-control relative">
                        <label className="label items-center justify-normal bg-[#F0F0F0] w-fit h-fit py-0 gap-1 absolute left-[12px] -top-[10px]">
                            <span className="label-text text-[#666] text-sm font-bold py-0">AFS Gear (invoice to check)</span>
                            <span><FaCheck size={'0.85rem'} color='#2A7029' /></span>
                        </label>
                        <input type="text" name='address' placeholder="AFS123456789" className="input input-bordered border-2 border-[#666] bg-[#F0F0F0] text-white Alliance" required />
                    </div>
                    <div className="form-control relative">
                        <label className="label items-center justify-normal bg-[#F0F0F0] w-fit h-fit py-0 gap-1 absolute left-[12px] -top-[10px]">
                            <span className="label-text text-[#666]  text-sm font-bold py-0">SURNAME</span>
                            <span><FaCheck size={'0.85rem'} color='#2A7029' /></span>
                        </label>
                        <input type="text" name='surName' placeholder="Schmidt" className="input input-bordered border-2 border-[#666] bg-[#F0F0F0] text-white Alliance" required />
                    </div>
                    <div className="form-control relative">
                        <label className="label items-center justify-normal bg-[#F0F0F0] w-fit h-fit py-0 gap-1 absolute left-[12px] -top-[10px]">
                            <span className="label-text text-[#666] text-sm font-bold py-0">PAYS</span>
                            <span><FaCheck size={'0.85rem'} color='#2A7029' /></span>
                        </label>
                        <input type="text" name='pays' placeholder="GERMANY" className="input input-bordered border-2 border-[#666] bg-[#F0F0F0] text-white Alliance" required />
                    </div>
                    <div className="form-control relative">
                        <label className="label items-center justify-normal bg-[#F0F0F0] w-fit h-fit py-0 gap-1 absolute left-[12px] -top-[10px]">
                            <span className="label-text text-[#666] text-sm font-bold py-0">EMAIL</span>
                            <span><FaCheck size={'0.85rem'} color='#2A7029' /></span>
                        </label>
                        <input type="email" name='email' disabled placeholder="emmma_s@email.com" className="input input-bordered border-2 border-[#666] bg-[#F0F0F0] text-white Alliance" required />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default page;