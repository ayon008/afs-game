/* eslint-disable @next/next/no-img-element */
'use client';
import ApprovedBtn from '@/Components/ApprovedBtn';
import GetAllUser from '@/lib/getAllUsers';
import React, { useState } from 'react';

const AllUsers = () => {
    const { isLoading, isError, error, allUsers, refetch } = GetAllUser();
    const categories = ['Wingfoil', 'Windfoil', 'Dockstart', 'Surffoil', 'Downwind', 'WatermanCrown'];

    const [type, setType] = useState('');
    const handleValue = e => {
        const type = e.target.value;
        setType(type);
        console.log(type);
    }

    // Filter users based on the selected category
    const data = type ? allUsers?.filter(user => user[type] === true) : allUsers;
    console.log(data);


    return (
        <div className='p-10'>
            <div>
                <h3 className='text-2xl font-bold text-center'>All Users</h3>
                <p className='text-xs text-center font-bold mt-2'>Manage users</p>
                <div>
                    <select onChange={handleValue} className="select select-bordered w-full max-w-xs">
                        <option disabled>Sort by category</option>
                        <option value={''}>All users</option>
                        {categories?.map((c, i) => (
                            <option key={i} value={c}>{c}</option>
                        ))}
                    </select>
                </div>
            </div>
            <div className="overflow-x-auto mt-10">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Invoice</th>
                            <th>Participated</th>
                            <th>Approve Account</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data?.map((user) => {
                            const { pays, city, email, displayName, photoURL, approved, invoiceURL, Windfoil, Wingfoil, DockStart, Downwind, Surffoil, WatermanCrown, _id } = user;
                            return (
                                <tr key={_id}>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle h-12 w-12">
                                                    <img src={photoURL} alt="user-profile" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{displayName}</div>
                                                <div className="text-sm opacity-50">{city}, {pays}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>{email}</td>
                                    <td>
                                        {invoiceURL && (
                                            <a href={invoiceURL} target='_blank' className='text-[#FFE500] underline'>Invoice URL</a>
                                        )}
                                    </td>
                                    <td className='font-bold'>
                                        {Windfoil && 'Windfoil'} {Wingfoil && 'Wingfoil'} {DockStart && 'Dockstart'} {Downwind && 'Downwind'} {Surffoil && 'Surffoil'} {WatermanCrown && 'Waterman Crown'}
                                    </td>
                                    <td>
                                        {!approved ? <ApprovedBtn id={_id} refetch={refetch} /> : <span>Approved</span>}
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;
