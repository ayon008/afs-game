'use client'
import AllUsers from '@/ui/AllUsers';
import GpxLists from '@/ui/GpxLists';
import React, { useState } from 'react';

const Page = () => {

    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                {/* Page content here */}
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
                    Open drawer
                </label>
                <AllUsers />
                {/* <div className={index === 1 ? 'block' : 'hidden'}>
                    <GpxLists />
                </div> */}
            </div>
            <div className="drawer-side bg-yellow-600">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu text-black min-h-full w-80 p-4">
                    {/* Sidebar content here */}
                    <li><a href='/'>Home</a></li>
                    <li><a>All Users</a></li>
                    <li><a>Uploaded Gpx</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Page;