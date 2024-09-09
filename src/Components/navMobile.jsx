/* eslint-disable @next/next/no-img-element */
'use client'
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import logo from '@/../public/Group.svg';
import useAuth from '@/Hooks/useAuth';
import { FaChevronDown } from 'react-icons/fa';

const NavMobile = () => {
    const navItems = [
        'Award', 'Challenge', 'Leaderboard', 'Faq', 'Contacts'
    ]
    const userInfo = useAuth();
    const { user, logOut } = userInfo;
    const uid = JSON.parse(localStorage.getItem('uid'));
    const [open, isOpen] = useState(false);
    return (
        <div className='block 2xl:hidden xl:hidden lg:hidden z-40'>
            <svg onClick={() => isOpen(!open)} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 z-10 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
            <ul className={`${open === true ? 'block' : 'hidden'}
            space-y-2 absolute w-1/2 min-h-screen -py-[4] left-0 top-0 -ml-[10px] transition duration-1000 bg-white z-40 px-4 py-5
            `}>
                {
                    uid && <li className='flex gap-2'>
                        <img src={user?.photoURL} alt='profile-picture' className='h-[30px] w-[30px] rounded-[50%]' />
                        <div className='flex items-center gap-1'>
                            <p className='uppercase 2xl:text-base xl:text-xs text-sm font-semibold text-black'>{user?.displayName}</p>
                        </div>
                    </li>
                }
                {
                    navItems.map((n, i) => {
                        return (
                            <li key={i}>
                                <Link href={`/${n.toLowerCase()}`} >
                                    <p className='uppercase 2xl:text-base xl:text-xs text-[8px] font-semibold text-black'>{n}</p>
                                </Link>
                            </li>
                        )
                    })
                }
                {
                    uid ?
                        <>
                            <li>
                                <Link href={`/profile?uid=${user?.uid}`} className='uppercase 2xl:text-base xl:text-xs text-[8px] font-semibold text-black'>Profile</Link>
                            </li>
                            <li>
                                <p onClick={() => logOut()} className='uppercase 2xl:text-base xl:text-xs text-[8px] font-semibold text-black'>log out</p>
                            </li>
                        </>
                        :
                        <>
                            <Link href={'/login'} className='uppercase 2xl:text-base xl:text-xs text-[8px] font-semibold text-black'>
                                Login
                            </Link>
                            <div className='uppercase 2xl:text-base xl:text-xs text-[8px] font-semibold text-black'>
                            </div>
                            <Link href={'/register'}>
                                Inscription
                            </Link>
                        </>
                }
            </ul>
        </div>
    );
};

export default NavMobile;