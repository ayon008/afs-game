import TableHead from '@/Components/TableHead';
import TableRow from '@/Components/TableRow';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaPen } from 'react-icons/fa';
import image from '@/../public/682c7390394d85444b46bee451dcb762.jpg'
import FaArrow from '@/icons/FaArrow';


const page = () => {
    return (
        <div className='2xl:px-36 2xl:pt-10 xl:px-20 xl:pt-10'>
            <div className='flex items-center justify-between'>
                <h1 className='text-[#000] font-bold 2xl:text-7xl xl:text-5xl'>Bonjour, Felix Müller</h1>
                <div className='flex items-center gap-1'>
                    <Link href={'/profile/updateProfile'}>
                        <p>Modifier l'information</p></Link>
                    <FaPen />
                </div>
            </div>
            <div className='2xl:mt-6 xl:mt-2 flex items-center gap-2'>
                <p className='2xl:text-[22px] xl:text-base font-semibold'>Le nombre total de points dans le tournoi est de </p>
                <span className='2xl:text-[22px] xl:text-base font-semibold bg-[#EDBE1A] px-2 2xl:py-[6px] xl:py-1 rounded-3xl'>360 points</span>
            </div>
            <div className="overflow-x-auto w-full 2xl:mt-10 xl:mt-6">
                <table className="table">
                    {/* head */}
                    <TableHead />
                    <tbody>
                        <TableRow />
                        <tr >
                            <td>01.</td>
                            <td>
                                <div className='flex items-center gap-2'>
                                    <Image alt='profile-image' className='2xl:w-[40px] 2xl:h-[40px] xl:w-[25px] xl:h-[25px] rounded-[50%]' src={image} />
                                    <h3 className='2xl:text-lg xl:text-sm font-semibold'>Felix Müller</h3>
                                </div>
                            </td>
                            <td className='2xl:text-lg xl:text-sm font-semibold'>
                                98 points
                            </td>
                            <td className='2xl:text-lg xl:text-sm font-semibold'>
                                n/a
                            </td>
                            <td className='2xl:text-lg xl:text-sm font-semibold'>
                                46 points
                            </td>
                            <td className='2xl:text-lg xl:text-sm font-semibold'>
                                57 points
                            </td>
                            <td className='2xl:text-lg xl:text-sm font-semibold'>
                                n/a
                            </td>
                            <td className='2xl:text-lg xl:text-sm font-semibold text-right'>
                                386 points
                            </td>
                        </tr>
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
                        <p className='2xl:text-lg xl:text-xs text-gray-400'>Vous n'avez pas pratiqué cette discipline jusqu'à présent.</p>
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
                        <p className='2xl:text-lg xl:text-xs text-gray-400'>Vous n'avez pas pratiqué cette discipline jusqu'à présent.</p>
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
                <Link href={'/profile/uploadData'}>
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