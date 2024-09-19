/* eslint-disable @next/next/no-img-element */
'use client'
import useAuth from '@/Hooks/useAuth';
import Link from 'next/link';
import React from 'react';

const NavMobile = () => {
    const navItems = [
        'Award', 'Challenge', 'Leaderboard', 'Faq', 'Contacts'
    ]
    const userInfo = useAuth();
    const { user, logOut } = userInfo;

    return (
        <div className="dropdown dropdown-end 2xl:hidden xl:hidden lg:hidden block">
            <div tabIndex={0} role="button" className="btn m-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 z-10 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
            </div>

            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow text-black">
                {
                    user && <li className='flex gap-2'>
                        <img src={user?.photoURL} alt='profile-picture' className='h-[30px] w-[30px] rounded-[50%] ml-3' />
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
                    user ?
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
                            <li>
                                <Link href={'/login'} className='uppercase 2xl:text-base xl:text-xs text-[8px] font-semibold text-black'>
                                    Login
                                </Link>
                            </li>
                            <li>
                                <Link href={'/register'} className='uppercase 2xl:text-base xl:text-xs text-[8px] font-semibold text-black'>
                                    Inscription
                                </Link>
                            </li>
                        </>
                }
            </ul>
        </div>
    );
};

export default NavMobile;