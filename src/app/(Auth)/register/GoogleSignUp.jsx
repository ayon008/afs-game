'use client';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import useAuth from '@/Hooks/useAuth';
import Google from '@/icons/Google';
import Link from 'next/link';
import FaArrow from '@/icons/FaArrow';

const GoogleSignUp = () => {
    const { createWithGoogle } = useAuth();
    const router = useRouter();
    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleGoogleSignUp = async () => {
        try {
            await createWithGoogle();
            router.push('/'); // Redirect to homepage or another route after successful sign-up
        } catch (error) {
            console.error('Error during Google sign-up:', error);
            alert('Google sign-up failed. Please try again.');
        }
    };

    const onSubmit = async (data) => {
        try {
            localStorage.setItem('email', JSON.stringify(data.email));
            router.push('register/usercredentials')
            // Additional form handling logic can be added here
        } catch (error) {
            console.error('Error during form submission:', error);
            alert('Form submission failed. Please try again.');
        }
    };


    return (
        <div className="card-body space-y-2 bg-[#111] rounded relative">
            <span className='text-gray-500 absolute right-4 top-2'>
                <Link href={'/'}>X</Link>
            </span>
            <div className='text-white text-center'>
                <h3 className='font-bold text-[28px] Alliance tracking-wide'>Sign up</h3>
                <h5 className='text-base Alliance tracking-wide text-[#FFFFFF99]'>Add your own records for everyone to see</h5>
            </div>
            <button
                className='flex items-center p-3 gap-4 btn w-full bg-white rounded justify-start'
                onClick={handleGoogleSignUp}
            >
                <Google />
                <h3 className='Alliance font-semibold'>Continue with Google</h3>
            </button>
            <div>
                <p className='text-center text-[#999999] Alliance text-xs'>OR</p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className='space-y-6'>
                <div className="form-control">
                    <input
                        type="email"
                        placeholder="Email Address"
                        {...register('email', { required: 'Email is required' })}
                        className="input input-bordered border-2 border-[#666] bg-[#1F1F1F] text-white Alliance"
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                </div>
                <div className="form-control">
                    <input type="submit" className="btn bg-red-600 border-none text-white Alliance" value={'CONTINUE'} />
                </div>
            </form>
            <div className='flex items-center w-fit mx-auto gap-2'>
                <p className='text-sm text-[#FFFFFF99] w-fit'>Already have an account?</p>
                <div className='flex items-center gap-1'>
                    <Link href="/register" className='text-red-600 text-sm'>Login</Link>
                    <FaArrow className='w-[10px] h-[10px] mt-1' />
                </div>
            </div>
        </div>
    );
};

export default GoogleSignUp;
