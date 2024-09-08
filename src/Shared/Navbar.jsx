import Image from 'next/image';
import React from 'react';
import logo from '@/../public/Group.svg';
import Link from 'next/link';
import User from '@/ui/User';

const Navbar = () => {

    const navItems = [
        'Award', 'Challenge', 'Leaderboard', 'Faq', 'Contacts'
    ]

    return (
        <nav className='flex items-center justify-between text-white 2xl:p-[20px] xl:py-3 xl:px-4 mx-[10px] absolute top-0 right-0 left-0 z-20'>
            <Link href={'/'}>
                <Image src={logo} className='2xl:w-[92px] lg:w-[72px] h-auto' alt='logo' />
            </Link>
            <ul className='bg-[#111] flex items-center rounded-[10px] 2xl:px-[15px] 2xl:py-[10px] xl:px-[12px] xl:py-[8px]'>
                {
                    navItems.map((item, index) => (
                        <li key={index} className='flex items-center'>
                            <Link href={`/${item.toLowerCase()}`} >
                                <p className='uppercase 2xl:text-base lg:text-xs font-semibold'>{item}</p>
                            </Link>
                            <div className='w-[7px] h-[7px] rounded-[50%] bg-yellow-500 mx-4 mt-1'>

                            </div>
                        </li>
                    ))
                }
                <User />
            </ul>
        </nav>
    );
};

export default Navbar;