'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import { FaArrowLeft } from 'react-icons/fa';
import Link from 'next/link';
import Swal from 'sweetalert2';
import useAuth from '@/Hooks/useAuth';
import { useRouter } from 'next/navigation';
import countries from '@/js/countries';
import useAxiosPublic from '@/Hooks/useAxiosPublic';
import uploadPdfToFirebase from '@/js/uploadPdf';

const UserForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const userInfo = useAuth();
    const { createAccount, updatedProfile, reauthenticateAndDelete, logOut, user, deleteGoogleUser } = userInfo;
    const router = useRouter();
    const axiosPublic = useAxiosPublic();
    const onSubmit = async (data) => {
        // Show loading indicator
        Swal.fire({
            title: 'Creating Account...',
            text: 'Please wait while we create your account and upload the invoice.',
            allowOutsideClick: false,
            didOpen: () => {
                Swal.showLoading();
            },
        });
        const { name, surName, City, Pays, AfsGear } = data;
        const invoice = AfsGear[0];
        let email = '';
        let password = '';
        let categories;
        const invoiceURL = await uploadPdfToFirebase(invoice);
        if (user) {
            try {
                await axiosPublic.post('/user', { name, surName, City, Pays, ...user, invoiceURL, ...categories });
                Swal.fire({
                    title: 'Account Created',
                    text: 'Your account has been successfully created!',
                    icon: 'success',
                    confirmButtonText: 'OK',
                    confirmButtonColor: '#d33',
                }).then(() => {
                    router.push('/');
                });
                return
            }
            catch (error) {
                console.log(error.message);
                axiosPublic.delete(`/user/${user.id}`);
                deleteGoogleUser(user);
                Swal.fire({
                    title: 'Error',
                    text: error.code?.split('auth/')[1],
                    icon: 'error',
                    confirmButtonText: 'OK',
                    confirmButtonColor: '#d33',
                });
                return;
            }
        }

        // Ensure localStorage is accessed on the client side only
        if (typeof window !== "undefined") {
            email = JSON.parse(localStorage.getItem('email'));
            password = JSON.parse(localStorage.getItem('password'));
            categories = JSON.parse(localStorage.getItem('categories'));
        }
        if (!email || !password || !categories || !invoice) {
            Swal.fire({
                title: 'Error',
                text: 'Email or password is missing. Please try again.',
                icon: 'error',
                confirmButtonText: 'OK',
                confirmButtonColor: '#d33',
            });
            return;
        }

        try {
            const result = await createAccount(email, password);
            const user = result.user;
            // Update user profile
            await updatedProfile(name, user?.photoURL);
            try {
                const userData = { name, surName, City, Pays, ...user, invoiceURL, ...categories };
                await axiosPublic.post('/user', userData);
            }
            catch (error) {
                console.log(error.message);
                axiosPublic.delete(`/user/${user.id}`);
                reauthenticateAndDelete(user, password);
                Swal.fire({
                    title: 'Error',
                    text: error.code?.split('auth/')[1],
                    icon: 'error',
                    confirmButtonText: 'OK',
                    confirmButtonColor: '#d33',
                });
                return;
            }
            // Clear sensitive data from localStorage
            if (typeof window !== "undefined") {
                localStorage.removeItem('password');
                localStorage.removeItem('email');
                localStorage.removeItem('categories');
            }
            // Success feedback
            Swal.fire({
                title: 'Account Created',
                text: 'Your account has been successfully created!',
                icon: 'success',
                confirmButtonText: 'OK',
                confirmButtonColor: '#d33',
            }).then(() => {
                logOut();
                router.push('/login');
            });
        } catch (error) {
            // Error feedback
            Swal.fire({
                title: 'Error',
                text: `Error during account creation: ${error.code?.split('auth/')[1]}`,
                icon: 'error',
                confirmButtonText: 'Try Again',
                confirmButtonColor: '#d33',
            });
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="relative card-body 2xl:space-y-2 xl:space-y-[1px] bg-[#111] rounded-lg">
            <span className='text-gray-500 absolute right-3 top-1 cursor-pointer'>
                <Link href={'/'}>X</Link>
            </span>
            <span className='text-gray-500 absolute left-2 top-1 cursor-pointer' onClick={() => router.back()}>
                <FaArrowLeft />
            </span>
            <div className="text-white text-center">
                <h3 className="font-bold 2xl:text-[20px] xl:text-base tracking-wide">Create Your Account</h3>
                <h5 className="2xl:text-base xl:text-xs tracking-wide text-[#FFFFFF99]">Your name will be seen in the leaderboard</h5>
            </div>

            {/* Name Field */}
            <div className="form-control relative">
                <input
                    type="text"
                    {...register('name', { required: 'Name is required' })}
                    placeholder="Name"
                    className="input input-bordered border-2 border-[#666] bg-[#1F1F1F] text-white"
                />
                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
            </div>

            {/* Surname Field */}
            <div className="form-control relative">
                <input
                    type="text"
                    {...register('surName', { required: 'Surname is required' })}
                    placeholder="Surname"
                    className="input input-bordered border-2 border-[#666] bg-[#1F1F1F] text-white"
                />
                {errors.surName && <p className="text-red-500 text-xs mt-1">{errors.surName.message}</p>}
            </div>

            {/* City Field */}
            <div className="form-control relative">
                <input
                    type="text"
                    {...register('city', { required: 'city is required' })}
                    placeholder="City"
                    className="input input-bordered border-2 border-[#666] bg-[#1F1F1F] text-white"
                />
                {errors.City && <p className="text-red-500 text-xs mt-1">{errors.City.message}</p>}
            </div>

            {/* Pays Field */}
            <div className="form-control relative">
                <select
                    {...register('pays', { required: 'Country is required' })}
                    className="select select-bordered border-2 border-[#666] bg-[#1F1F1F] text-white"
                >
                    <option disabled selected className='text-[#666]'>Country</option>
                    {
                        countries.map((country, index) => (
                            <option key={index} value={country}>{country}</option>
                        ))
                    }
                </select>
                {errors.Pays && <p className="text-red-500 text-xs mt-1">{errors.Pays.message}</p>}
            </div>

            {/* AfsGear Field */}
            <div className="form-control relative">
                <label className="label text-white text-sm">Upload Your Afs gear (invoice)</label>
                <input
                    type="file"
                    {...register('AfsGear', {
                        required: 'Afs Gear is required',
                        validate: {
                            isPdf: (files) => files && files[0]?.type === "application/pdf" || 'Only PDF files are allowed',
                        }
                    })}
                    className="file-input border-2 border-[#666] bg-[#1F1F1F] text-white"
                    accept="application/pdf" // Only PDF files are allowed
                />
                {errors.AfsGear && <p className="text-red-500 text-xs mt-1">{errors.AfsGear.message}</p>}
            </div>


            {/* Checkbox Fields */}
            <div className="form-control">
                <label className="cursor-pointer label">
                    <span className="label-text text-white text-xs">I agree to participate in the AFS Games and to receive communications related to the event.</span>
                    <input type="checkbox" {...register('agree', { required: 'You must agree to participate' })} className="checkbox checkbox-warning w-[10px] h-[10px]" />
                </label>
                {errors.agree && <p className="text-red-500 text-xs mt-1">{errors.agree.message}</p>}
            </div>

            <div className="form-control">
                <label className="cursor-pointer label">
                    <span className="label-text text-white text-xs">I certify that I own and will use my AFS foil for the competition. (Proof will be required later).</span>
                    <input type="checkbox" {...register('certify', { required: 'You must certify this' })} className="checkbox checkbox-warning w-[10px] h-[10px]" />
                </label>
                {errors.certify && <p className="text-red-500 text-xs mt-1">{errors.certify.message}</p>}
            </div>

            {/* Submit Button */}
            <div className="form-control">
                <button type="submit" className="btn bg-yellow-500 xl:text-xs p-1 border-none text-white">CREATE ACCOUNT</button>
            </div>

            {/* Footer */}
            <div className="flex items-center w-fit mx-auto gap-2">
                <p className="text-sm text-[#FFFFFF99]">Already have an account?</p>
                <div className="flex items-baseline gap-1">
                    <p><Link href="/register" className="text-blue-500 text-sm">Log In</Link></p>
                </div>
            </div>
        </form>
    );
};

export default UserForm;
