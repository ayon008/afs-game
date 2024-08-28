'use client'
import React from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import useAuth from '@/Hooks/useAuth';
import FaArrow from '@/icons/FaArrow';
import Google from '@/icons/Google';
import Link from 'next/link';
import { FaEye } from 'react-icons/fa';
import { useRouter } from 'next/navigation';


const Page = () => {
    // Form Hook
    const { register, handleSubmit, formState: { errors, reset, isSubmitting } } = useForm();

    // User Info
    const userInfo = useAuth();
    const { signIn, createWithGoogle } = userInfo;

    // Routing
    const router = useRouter();

    const onSubmit = async (data) => {
        try {
            const { email, password } = data;
            signIn(email, password)
                .then(result => {
                    const user = result.user;
                    console.log(user);
                    Swal.fire({
                        icon: 'success',
                        title: 'Signed in successfully!',
                        showConfirmButton: false,
                        timer: 1500,
                    });
                    router.push('/')
                    reset();
                })
                .catch(error => {
                    Swal.fire({
                        icon: 'error',
                        title: 'Sign in failed!',
                        text: error.message,
                    })
                })

        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Sign in failed!',
                text: error.message,
            });
        }
    };


    // Google Login
    const handleGoogleLogin = () => {
        createWithGoogle()
            .then(result => {
                const user = result.user;
                console.log(user);
                router.push('/')
            })
            .catch(error => {
                console.log(error)
            })
    }

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
                            type={'password'}
                            {...register('password', { required: 'Password is required' })}
                            placeholder="Password"
                            className="input input-bordered border-2 border-[#666] bg-[#1F1F1F] text-white"
                        />
                        <FaEye className='text-[#999999] absolute right-4 top-1/2 bottom-1/2 cursor-pointer' style={{ transform: "translateY(-50%)" }} />
                        {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
                    </div>

                    <div className='flex items-center gap-1'>
                        <p className='w-fit flex-grow-0'><Link href={"/forgot-password"} className='text-red-600 text-sm'>Forgot password?</Link></p>
                        <FaArrow className={'h-[10px] w-[10px] mt-1'} />
                    </div>

                    <div>
                        <p className='text-center text-[#999999] text-xs mb-1'>OR</p>
                    </div>

                    {/* Google Sign-In */}
                    <div className='flex items-center px-3 rounded-[10px] bg-white py-3 border-none border-2 gap-4 cursor-pointer btn' onClick={() => handleGoogleLogin()}>
                        <Google />
                        <h3 className='font-semibold'>Continue with Google</h3>
                    </div>

                    {/* Submit Button */}
                    <div className="form-control">
                        <input type="submit" className="btn bg-red-600 border-none text-white" value={isSubmitting ? 'Login' : 'CONTINUE'} disabled={isSubmitting} />
                    </div>

                    {/* Sign Up Link */}
                    <div className='flex items-center w-fit mx-auto gap-2'>
                        <p className='text-sm text-[#FFFFFF99]'>Need an account?</p>
                        <div className='flex items-baseline gap-1'>
                            <p><Link href={"/register"} className='text-red-600 text-sm'>Create account</Link></p>
                            <FaArrow className={'h-[10px] w-[10px] mt-1'} />
                        </div>
                    </div>
                </form>
            </div>
            <p className={`text-[#FFFFFF99] text-center Alliance 2xl:text-lg lg:text-base mt-2`}>
                By signing up, I confirm that I have read and accepted Foil&Co.’s
                <span className='text-red-600'> Terms & Conditions</span> and
                <span className='text-red-600'> Privacy Policy</span>.
            </p>
        </div>
    );
};

export default Page;
