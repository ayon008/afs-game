/* eslint-disable @next/next/no-img-element */
import getGpx from '@/lib/getGpx';
import getUserInfo from '@/lib/getUserInfo';
import React from 'react';

const GpxLists = async () => {
    const gpx = await getGpx();
    return (
        <div className='p-10'>
            <div>
                <h3 className='text-2xl font-bold text-center'>All GPX files</h3>
                <p className='text-xs text-center font-bold mt-2'>Manage gpx files</p>
            </div>
            <div className="overflow-x-auto mt-10">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Category</th>
                            <th>Uploaded Time</th>
                            <th>Distance</th>
                            <th>Total Time</th>
                            <th>Filename</th>
                            <th>Uploaded By</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            gpx.map(async (g, i) => {
                                const { category, distance, totalTime, filename, status, uid } = g;
                                const uploadedBy = await getUserInfo(uid);
                                return (
                                    <tr key={i}>
                                        <th>{i + 1}</th>
                                        <td className='uppercase font-bold text-xs'>{category}</td>
                                        <td>Quality Control Specialist</td>
                                        <td>{distance.toFixed(2)} KM</td>
                                        <td>{totalTime.toFixed(2)} hr</td>
                                        <td>{filename}</td>
                                        <td>
                                            <div className="flex items-center gap-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle h-12 w-12">
                                                        <img
                                                            src={uploadedBy?.photoURL}
                                                            alt="user-profile" />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="font-bold">{uploadedBy?.displayName}</div>
                                                    <div className="text-sm opacity-50">{uploadedBy?.city} , {uploadedBy?.pays}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className='flex items-center gap-1'>
                                            <button className='btn btn-outline text-green-600'>Accept</button>
                                            <button className='btn btn-outline text-red-600'>Reject</button>
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

export default GpxLists;