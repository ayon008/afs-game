/* eslint-disable @next/next/no-img-element */
'use client'
import { antiHero } from '@/Components/Font';
import useAuth from '@/Hooks/useAuth';
import Link from 'next/link';
import React from 'react';
import { FaPen } from 'react-icons/fa';

const EditProfile = () => {
    const { user } = useAuth();
    return (
        <div className='flex items-center justify-between'>
            <div className='flex items-center gap-2'>
                <h1 className='text-[#000] font-bold 2xl:text-7xl xl:text-5xl text-sm'><span className={`${antiHero.className} text-blue-500`}>
                    Bonjour</span>,
                    {user?.displayName}
                </h1>
                <img src={user?.photoURL} className='xl:w-[50px] xl:h-[50px] 2xl:w-[70px] 2xl:h-[70px] w-[20px] h-[20px] rounded-[10px]' alt='profile-img' />
            </div>
            <div className='flex items-center gap-1'>
                <Link href={`/profile/${user?.uid}`}>
                    <p>Modifier l&apos;information</p></Link>
                <FaPen />
            </div>
        </div>
    );
};

export default EditProfile;

