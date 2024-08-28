import Image from 'next/image';
import React from 'react';
import logo from '@/../public/logo.png';
import Link from 'next/link';
import User from '@/ui/User';

const Navbar = () => {

    const navItems = [
        'Award', 'Challenge', 'Leaderboard', 'Faq', 'Contacts'
    ]

    return (
        <div className='flex items-center justify-between text-white 2xl:p-[20px] lg:py-3 lg:px-4 bg-[#111] rounded-[10px] mx-[10px]'>
            <Link href={'/'}>
                <Image src={logo} className='2xl:w-[150px] lg:w-[100px] h-auto' alt='logo' />
            </Link>
            {
                navItems.map((item, index) => (
                    <Link href={`/${item.toLowerCase()}`} key={index}>
                        <p className='uppercase 2xl:text-base lg:text-xs font-semibold'>{item}</p>
                    </Link>
                ))
            }
            <User />
        </div>
    );
};

export default Navbar;