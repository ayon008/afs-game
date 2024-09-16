/* eslint-disable @next/next/no-img-element */
import getAllUsers from '@/lib/getAllUsers';
import React from 'react';

const AllUsers = async () => {
    const allUsers = await getAllUsers();
    console.log(allUsers);

    return (
        <div className='p-10'>
            <div>
                <h3 className='text-2xl font-bold text-center'>All Users</h3>
                <p className='text-xs text-center font-bold mt-2'>Manage users</p>
            </div>
            <div className="overflow-x-auto mt-10">
                <table className="table">
                    {/* head */}
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
                        {
                            allUsers?.map((user, i) => {
                                const { name, pays, city, surname, email, displayName, photoURL, approved, invoiceURL, uid, Windfoil, Wingfoil, DockStart, Downwind, Surffoil, WatermanCrown } = user;
                                return (
                                    <tr key={i}>
                                        <td>
                                            <div className="flex items-center gap-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle h-12 w-12">
                                                        <img
                                                            src={photoURL}
                                                            alt="user-profile" />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="font-bold">{displayName}</div>
                                                    <div className="text-sm opacity-50">{city} , {pays}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            {email}
                                        </td>
                                        <td>
                                            <a href={invoiceURL} target='_blank' className='text-blue-500 underline'>Invoice URL</a>
                                        </td>
                                        <td className='font-bold'>{Windfoil && 'Windfoil'} {Wingfoil && 'Wingfoil'} {DockStart && 'Dockstart'}{Downwind && 'Downwind'} {Surffoil && 'Surffoil'} {WatermanCrown && 'Waterman Crown'}</td>
                                        <td>
                                            {
                                                !approved ?
                                                    <button className='btn btn-outline text-green-500 hover:text-white hover:bg-green-500'>
                                                        Accept
                                                    </button>
                                                    : <span>Approved</span>
                                            }
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;