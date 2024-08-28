'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import FaArrow from '@/icons/FaArrow';
import Link from 'next/link';
import useAuth from '@/Hooks/useAuth';
import { useRouter } from 'next/navigation';
import Swal from 'sweetalert2';

const UserForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const userInfo = useAuth();
    const { createAccount, updateProfile } = userInfo;
    const router = useRouter();

    const onSubmit = async (data) => {
        const { name, surName, Address, Pays, AfsGear } = data;
        const email = JSON.parse(localStorage.getItem('email'));
        const password = JSON.parse(localStorage.getItem('password'));

        try {
            const result = await createAccount(email, password);
            const user = result.user;

            await updateProfile(user, { displayName: name });
            localStorage.removeItem('password');
            localStorage.removeItem('email');

            Swal.fire({
                title: 'Account Created',
                text: 'Your account has been successfully created!',
                icon: 'success',
                confirmButtonText: 'OK',
                confirmButtonColor: '#d33',
            }).then(() => {
                router.push('/');
            });
        } catch (error) {
            Swal.fire({
                title: 'Error',
                text: `Error during account creation: ${error.message}`,
                icon: 'error',
                confirmButtonText: 'Try Again',
                confirmButtonColor: '#d33',
            });
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="relative card-body space-y-2 bg-[#111] rounded">
            <span className='text-gray-500 absolute right-4 top-2'>
                <Link href={'/'}>X</Link>
            </span>
            <div className="text-white text-center">
                <h3 className="font-bold text-[28px] Alliance tracking-wide">Create Your Account</h3>
                <h5 className="text-base Alliance tracking-wide text-[#FFFFFF99]">Your name will be seen in the leaderboard</h5>
            </div>

            <div className="form-control relative">
                <input
                    type="text"
                    {...register('name', { required: 'Name is required' })}
                    placeholder="Name"
                    className="input input-bordered border-2 border-[#666] bg-[#1F1F1F] text-white Alliance"
                />
                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
            </div>

            <div className="form-control relative">
                <input
                    type="text"
                    {...register('surName', { required: 'Surname is required' })}
                    placeholder="Surname"
                    className="input input-bordered border-2 border-[#666] bg-[#1F1F1F] text-white Alliance"
                />
                {errors.surName && <p className="text-red-500 text-xs mt-1">{errors.surName.message}</p>}
            </div>

            <div className="form-control relative">
                <input
                    type="text"
                    {...register('Address', { required: 'Address is required' })}
                    placeholder="Address"
                    className="input input-bordered border-2 border-[#666] bg-[#1F1F1F] text-white Alliance"
                />
                {errors.Address && <p className="text-red-500 text-xs mt-1">{errors.Address.message}</p>}
            </div>

            <div className="form-control relative">
                <input
                    type="text"
                    {...register('Pays', { required: 'Pays is required' })}
                    placeholder="Pays"
                    className="input input-bordered border-2 border-[#666] bg-[#1F1F1F] text-white Alliance"
                />
                {errors.Pays && <p className="text-red-500 text-xs mt-1">{errors.Pays.message}</p>}
            </div>

            <div className="form-control relative">
                <input
                    type="text"
                    {...register('AfsGear', { required: 'Afs Gear is required' })}
                    placeholder="Afs Gear (Invoice to check)"
                    className="input input-bordered border-2 border-[#666] bg-[#1F1F1F] text-white Alliance"
                />
                {errors.AfsGear && <p className="text-red-500 text-xs mt-1">{errors.AfsGear.message}</p>}
            </div>

            <div className="form-control">
                <button type="submit" className="btn bg-red-600 border-none text-white Alliance">CREATE ACCOUNT</button>
            </div>

            <div className="flex items-center w-fit mx-auto gap-2">
                <p className="text-sm text-[#FFFFFF99]">Already have an account?</p>
                <div className="flex items-baseline gap-1">
                    <p><Link href="/register" className="text-red-600 text-sm">Log In</Link></p>
                    <FaArrow className="w-[10px] h-[10px]" />
                </div>
            </div>
        </form>
    );
};

export default UserForm;
