import TableHead from '@/Components/TableHead';
import Link from 'next/link';
import React from 'react';
import { FaPen } from 'react-icons/fa';

const page = () => {
    return (
        <div className='2xl:px-36  2xl:py-10 xl:px-20 xl:py-10'>
            <div className='flex items-center justify-between'>
                <h1 className='text-[#000] font-bold 2xl:text-7xl xl:text-5xl'>Bonjour, Felix Müller</h1>
                <div className='flex items-center gap-1'>
                    <Link href={'/profile/updateProfile'}>
                        <p>Modifier l'information</p></Link>
                    <FaPen />
                </div>
            </div>
            <div className='2xl:mt-6 xl:mt-2 flex items-center gap-2'>
                <p className='2xl:text-[22px] xl:text-base font-semibold'>Le nombre total de points dans le tournoi est de </p>
                <span className='2xl:text-[22px] xl:text-base font-semibold bg-[#EDBE1A] px-2 2xl:py-[6px] xl:py-1 rounded-3xl'>360 points</span>
            </div>
            <div className="overflow-x-auto w-full 2xl:mt-10 xl:mt-6">
                <table className="table">
                    {/* head */}
                    <TableHead />

                </table>
            </div>
        </div>
    );
};

export default page;