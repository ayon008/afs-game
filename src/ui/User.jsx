/* eslint-disable @next/next/no-img-element */
'use client'
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import image from '../../public/1269c2f99e52bba6b8d0a67446092360.jpg'
import useAuth from '@/Hooks/useAuth';
import { FaChevronDown } from 'react-icons/fa';


const User = () => {
    const userInfo = useAuth();
    const { user, logOut } = userInfo;
    const uid = JSON.parse(localStorage.getItem('uid'));
    return (
        uid ?
            <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="m-1 flex items-center gap-2">
                    <img src={user?.photoURL} alt='profile-picture' className='h-[20px] w-[20px] rounded-[50%]' />
                    <div className='flex items-center gap-1'>
                        <p className='uppercase 2xl:text-base lg:text-xs font-semibold'>{user?.displayName}</p>
                        <FaChevronDown className='mt-1' color='red' size={'0.8rem'} />
                    </div>
                </div>
                <ul tabIndex={0} className="dropdown-content menu rounded-box z-[1] w-52 p-2 shadow mt-5 bg-[#111]">
                    <li>
                        <Link href={'/profile'} className='uppercase 2xl:text-base lg:text-xs font-semibold'>Profile</Link>
                    </li>
                    <li>
                        <p onClick={() => logOut()} className='uppercase 2xl:text-base lg:text-xs font-semibold'>log out</p>
                    </li>
                </ul>
            </div>
            :
            <>
                <div className='uppercase 2xl:text-base lg:text-xs font-semibold font-alliance flex items-center gap-4'>
                    <Link href={'/login'} className='text-[#FFF] opacity-50'>
                        Login
                    </Link>
                    <span className='text-red-500'>/</span>
                    <Link href={'/register'}>
                        Inscription
                    </Link>
                </div>
            </>
    );
};

export default User;