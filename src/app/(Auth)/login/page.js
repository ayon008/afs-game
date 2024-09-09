'use client'
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import useAuth from '@/Hooks/useAuth';
import FaArrow from '@/icons/FaArrow';
import Google from '@/icons/Google';
import Link from 'next/link';
import { FaEye } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import requestPasswordReset from '@/lib/requestPasswordReset';

const Page = () => {
    const { register, handleSubmit, formState: { errors }, reset, isSubmitting } = useForm();
    const { signIn, createWithGoogle, changePassword } = useAuth();
    const router = useRouter();
    const [showPassword, setShowPassword] = useState(false);

    // Show/hide password toggle
    const togglePasswordVisibility = () => {
        setShowPassword(prev => !prev);
    };

    const onSubmit = async (data) => {
        try {
            const { email, password } = data;
            await signIn(email, password);
            Swal.fire({
                icon: 'success',
                title: 'Signed in successfully!',
                showConfirmButton: false,
                timer: 1500,
            });
            router.push('/');
            reset();
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Sign in failed!',
                text: error.message,
            });
        }
    };

    const handleGoogleLogin = async () => {
        try {
            await createWithGoogle();
            router.push('/');
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Google Sign-In failed!',
                text: error.message,
            });
        }
    };

    const handlePasswordReset = async (email) => {
        if (!email) {
            Swal.fire({
                icon: 'warning',
                title: 'Please enter your email!',
            });
            return;
        }
        try {
            // Trigger the backend to send a reset email
            await requestPasswordReset(email);
            Swal.fire({
                icon: 'success',
                title: 'Password reset email sent!',
                text: 'Check your inbox for a reset link.',
            });
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Password reset failed!',
                text: error.message,
            });
        }
    };

    return (
        <div className='lg:w-1/3 2xl:w-1/2 mx-auto'>
            <div className='bg-[#111] rounded-lg relative'>
                <span className='text-gray-500 absolute right-4 top-2'>
                    <Link href={'/'}>X</Link>
                </span>
                <form onSubmit={handleSubmit(onSubmit)} className="card-body space-y-[1px]">
                    <div className='text-white text-center'>
                        <h3 className='font-bold 2xl:text-[28px] lg:text-2xl tracking-wide'>Sign in</h3>
                        <h5 className='2xl:text-base lg:text-sm mb-2 tracking-wide text-[#FFFFFF99]'>Add your own records for everyone to see</h5>
                    </div>

                    {/* Email Field */}
                    <div className="form-control relative">
                        <input
                            type="email"
                            {...register('email', { required: 'Email is required' })}
                            placeholder="Email Address"
                            className="input input-bordered border-2 border-[#666] bg-[#1F1F1F] text-white"
                        />
                        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                    </div>

                    {/* Password Field */}
                    <div className="form-control relative mb-0">
                        <input
                            type={showPassword ? 'text' : 'password'}
                            {...register('password', { required: 'Password is required' })}
                            placeholder="Password"
                            className="input input-bordered border-2 border-[#666] bg-[#1F1F1F] text-white"
                        />
                        <FaEye
                            className='text-[#999999] absolute right-4 top-1/2 bottom-1/2 cursor-pointer'
                            onClick={togglePasswordVisibility}
                            style={{ transform: "translateY(-50%)" }}
                        />
                        {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
                    </div>

                    <div className='flex items-center gap-1'>
                        <p className='w-fit flex-grow-0'>
                            <span
                                className='text-blue-500 text-sm cursor-pointer'
                                onClick={() => handlePasswordReset(document.querySelector('input[name="email"]').value)}
                            >
                                Forgot password?
                            </span>
                        </p>
                        <FaArrow className={'h-[10px] w-[10px] mt-1'} />
                    </div>

                    <div>
                        <p className='text-center text-[#999999] text-xs mb-1'>OR</p>
                    </div>

                    {/* Google Sign-In */}
                    <div
                        className='flex items-center px-3 rounded-[10px] bg-white py-3 border-none border-2 gap-4 cursor-pointer btn'
                        onClick={handleGoogleLogin}
                    >
                        <Google />
                        <h3 className='font-semibold'>Continue with Google</h3>
                    </div>

                    {/* Submit Button */}
                    <div className="form-control">
                        <input
                            type="submit"
                            className="btn bg-yellow-500 border-none text-white"
                            value={isSubmitting ? 'Logging in...' : 'CONTINUE'}
                            disabled={isSubmitting}
                        />
                    </div>

                    {/* Sign Up Link */}
                    <div className='flex items-center w-fit mx-auto gap-2'>
                        <p className='text-sm text-[#FFFFFF99]'>Need an account?</p>
                        <div className='flex items-baseline gap-1'>
                            <p><Link href={"/register"} className='text-blue-500 text-sm'>Create account</Link></p>
                            <FaArrow className={'h-[10px] w-[10px] mt-1'} />
                        </div>
                    </div>
                </form>
            </div>
            <p className={`text-[#FFFFFF99] text-center Alliance 2xl:text-lg lg:text-base mt-2`}>
                By signing up, I confirm that I have read and accepted Foil&Co.’s
                <span className='text-blue-500'> Terms & Conditions</span> and
                <span className='text-blue-500'> Privacy Policy</span>.
            </p>
        </div>
    );
};

export default Page;
