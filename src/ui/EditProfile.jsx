'use client'
import useAuth from '@/Hooks/useAuth';
import Link from 'next/link';
import React from 'react';
import { FaPen } from 'react-icons/fa';

const EditProfile = () => {
    const { user } = useAuth();
    return (
        <div className='flex items-center justify-between'>
            <h1 className='text-[#000] font-bold 2xl:text-7xl xl:text-5xl'>Bonjour, {user?.displayName}</h1>
            <div className='flex items-center gap-1'>
                <Link href={`/profile/${user?.uid}`}>
                    <p>Modifier l&apos;information</p></Link>
                <FaPen />
            </div>
        </div>
    );
};

export default EditProfile;

