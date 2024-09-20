/* eslint-disable @next/next/no-img-element */
import DeleteButton from '@/Components/DeleteButton';
import getSponsors from '@/lib/getSponsors';
import Sponsor from '@/Shared/Sponsor';
import AddSponsors from '@/ui/AddSponsors';
import React from 'react';

const Page = async () => {
    const sponsors = await getSponsors();
    return (
        <div className='p-10'>
            <div>
                <h3 className='text-2xl font-bold text-center'>Sponsors List</h3>
                <p className='text-xs text-center font-bold mt-2'>Manage your sponsors</p>
            </div>
            <div className="overflow-x-auto mt-10">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>Sponsor Logo</th>
                            <th>Sponsor Name</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            sponsors?.map((sponsor, i) => {
                                return (
                                    <tr key={i}>
                                        <th>
                                            {i + 1}
                                        </th>
                                        <td>
                                            <div className="flex items-start gap-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle h-12 w-12">
                                                        <img
                                                            src={sponsor?.profilePicture}
                                                            alt="Avatar Tailwind CSS Component" />
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className='font-bold'>
                                            {sponsor?.sponsorName}
                                        </td>
                                        <td>
                                            <DeleteButton id={sponsor?._id} />
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
            <AddSponsors />
        </div>
    );
};

export default Page;