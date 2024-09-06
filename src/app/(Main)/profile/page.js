import TableHead from '@/Components/TableHead';
import TableRow from '@/Components/TableRow';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import image from '@/../public/682c7390394d85444b46bee451dcb762.jpg'
import FaArrow from '@/icons/FaArrow';
import EditProfile from '@/ui/EditProfile';
import getUserLeaderBoard from '@/lib/getUserLeaderBoard';


const page = async ({ searchParams }) => {
    console.log(searchParams.uid);
    const data = await getUserLeaderBoard(searchParams.uid);
    console.log(data);
    const find = data?.find(d => d.uid === searchParams.uid) || {};
    console.log(find);

    return (
        <div className='2xl:px-36 2xl:pt-10 xl:px-20 xl:pt-10'>
            <EditProfile />
            <div className='2xl:mt-6 xl:mt-2 flex items-center gap-2'>
                <p className='2xl:text-[22px] xl:text-base font-semibold'>Le nombre total de points dans le tournoi est de </p>
                <span className='2xl:text-[22px] xl:text-base font-semibold bg-[#EDBE1A] px-2 2xl:py-[6px] xl:py-1 rounded-3xl'>{find?.total || 0} points</span>
            </div>
            <div className="overflow-x-auto w-full 2xl:mt-10 xl:mt-6">
                <table className="table">
                    {/* head */}
                    <TableHead />
                    <tbody>
                        {
                            data?.map((d, i) => {
                                return (
                                    <TableRow key={i} data={d} />
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
            <div className='2xl:mt-40 xl:mt-28'>
                <h2 className='font-bold 2xl:text-5xl xl:text-3xl'>Vous êtes dans les classements</h2>
                <p className='2xl:text-2xl xl:text-lg 2xl:mt-14 xl:mt-7 font-bold'>Temps passé à l’eau sur la durée de l’événement </p>
                <hr className='mt-2 mb-4' />
                <div className='grid grid-cols-2 gap-4'>
                    <div className='bg-[#F7F7F7] 2xl:px-[20px] 2xl:py-[10px] xl:px-[15px] xl:py-[10px] rounded-[10px]'>
                        <h5 className='font-semibold 2xl:text-xl xl:text-base'>Wingfoil</h5>
                        <div className="overflow-x-auto">
                            <table className="table">
                                {/* head */}
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Participant</th>
                                        <th className='text-right'>Total des points</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* row 1 */}
                                    {
                                        data?.map((d, i) => {
                                            if (d.category.wingfoil) {
                                                return (
                                                    <tr key={i} className='first'>
                                                        <th>01</th>
                                                        <td className='font-semibold'>Felix Müller</td>
                                                        <td className='text-right font-semibold'>98 points</td>
                                                    </tr>
                                                )
                                            }
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className='bg-[#F7F7F7] 2xl:px-[20px] 2xl:py-[10px] xl:px-[20px] xl:py-[10px] rounded-[10px] h-fit'>
                        <h5 className='font-semibold 2xl:text-xl xl:text-base'>Wingfoil</h5>
                        <p className='2xl:text-lg xl:text-xs text-gray-400'>Vous n&apos;avez pas pratiqué cette discipline jusqu&apos;à présent.</p>
                    </div>
                    <div className='bg-[#F7F7F7] 2xl:px-[20px] 2xl:py-[10px] xl:px-[20px] xl:py-[10px] rounded-[10px]'>
                        <h5 className='font-semibold 2xl:text-xl xl:text-base'>Wingfoil</h5>
                        <div className="overflow-x-auto">
                            <table className="table">
                                {/* head */}
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Participant</th>
                                        <th className='text-right'>Total des points</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* row 1 */}
                                    <tr className='first'>
                                        <th>01</th>
                                        <td className='font-semibold'>Felix Müller</td>
                                        <td className='text-right font-semibold'>98 points</td>
                                    </tr>
                                    <tr className=''>
                                        <th>01</th>
                                        <td className='font-semibold'>Felix Müller</td>
                                        <td className='text-right font-semibold'>98 points</td>
                                    </tr>
                                    <tr className='third'>
                                        <th>01</th>
                                        <td className='font-semibold'>Felix Müller</td>
                                        <td className='text-right font-semibold'>98 points</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div className='2xl:mt-14 xl:mt-10'>
                <p className='2xl:text-2xl xl:text-lg 2xl:mt-14 xl:mt-7 font-bold'>Distance totale parcourue sur la durée de l’événement</p>
                <hr className='mt-2 mb-4' />
                <div className='grid grid-cols-2 gap-4'>
                    <div className='bg-[#F7F7F7] 2xl:px-[20px] 2xl:py-[10px] xl:px-[15px] xl:py-[10px] rounded-[10px]'>
                        <h5 className='font-semibold 2xl:text-xl xl:text-base'>Wingfoil</h5>
                        <div className="overflow-x-auto">
                            <table className="table">
                                {/* head */}
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Participant</th>
                                        <th className='text-right'>Total des points</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* row 1 */}
                                    <tr className='first'>
                                        <th>01</th>
                                        <td className='font-semibold'>Felix Müller</td>
                                        <td className='text-right font-semibold'>98 points</td>
                                    </tr>
                                    <tr className=''>
                                        <th>01</th>
                                        <td className='font-semibold'>Felix Müller</td>
                                        <td className='text-right font-semibold'>98 points</td>
                                    </tr>
                                    <tr className='third'>
                                        <th>01</th>
                                        <td className='font-semibold'>Felix Müller</td>
                                        <td className='text-right font-semibold'>98 points</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className='bg-[#F7F7F7] 2xl:px-[20px] 2xl:py-[10px] xl:px-[20px] xl:py-[10px] rounded-[10px] h-fit'>
                        <h5 className='font-semibold 2xl:text-xl xl:text-base'>Wingfoil</h5>
                        <p className='2xl:text-lg xl:text-xs text-gray-400'>Vous n&apos;avez pas pratiqué cette discipline jusqu&apos;à présent.</p>
                    </div>
                    <div className='bg-[#F7F7F7] 2xl:px-[20px] 2xl:py-[10px] xl:px-[20px] xl:py-[10px] rounded-[10px]'>
                        <h5 className='font-semibold 2xl:text-xl xl:text-base'>Wingfoil</h5>
                        <div className="overflow-x-auto">
                            <table className="table">
                                {/* head */}
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Participant</th>
                                        <th className='text-right'>Total des points</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* row 1 */}
                                    <tr className='first'>
                                        <th>01</th>
                                        <td className='font-semibold'>Felix Müller</td>
                                        <td className='text-right font-semibold'>98 points</td>
                                    </tr>
                                    <tr className=''>
                                        <th>01</th>
                                        <td className='font-semibold'>Felix Müller</td>
                                        <td className='text-right font-semibold'>98 points</td>
                                    </tr>
                                    <tr className='third'>
                                        <th>01</th>
                                        <td className='font-semibold'>Felix Müller</td>
                                        <td className='text-right font-semibold'>98 points</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div className='2xl:mt-20 xl:mt-14 flex items-center justify-center gap-2'>
                <Link href={'/profile/myData'}>
                    <button className='uppercase flex items-center btn bg-black'>
                        <span className='text-lg text-white'>My Sessions</span>
                        <FaArrow className={'w-[20px] h-[20px]'} />
                    </button>
                </Link>
                <Link href={'/profile/uploadUserData'}>
                    <button className='uppercase flex items-center btn bg-black'>
                        <span className='text-lg text-white'>Import Data</span>
                        <FaArrow className={'w-[20px] h-[20px]'} />
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default page;