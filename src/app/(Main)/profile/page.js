import TableHead from '@/Components/TableHead';
import TableRow from '@/Components/TableRow';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaPen } from 'react-icons/fa';
import image from '@/../public/682c7390394d85444b46bee451dcb762.jpg'


const page = () => {
    return (
        <div className='2xl:px-36  2xl:py-10 xl:px-20 xl:py-10'>
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
                <div>
                    <div className='bg-[#F7F7F7] 2xl:px-[20px] 2xl:py-[10px] xl:px-[20px] xl:py-[10px] rounded-[10px]'>
                        <h5 className='font-semibold 2xl:text-xl xl:text-base'>Wingfoil</h5>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;