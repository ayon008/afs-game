'use client';
import React from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import { useRouter } from 'next/navigation';

const ResetPassword = () => {
    const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm();
    const router = useRouter();

    const onSubmit = async (data) => {
        try {
            const { token, newPassword } = data;

            // Call backend API to reset the password with the provided token and new password
            await resetPasswordWithToken(token, newPassword);

            Swal.fire({
                icon: 'success',
                title: 'Password reset successfully!',
                showConfirmButton: false,
                timer: 1500,
            });
            router.push('/login'); // Redirect to login page after successful reset
            reset();
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Reset failed!',
                text: error.message,
            });
        }
    };

    return (
        <div className="w-1/3 mx-auto">
            <div className="bg-[#111] rounded-lg p-8">
                <h2 className="text-white text-center text-2xl mb-4">Reset Password</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    {/* Token Field */}
                    <div className="form-control">
                        <input
                            type="text"
                            {...register('token', { required: 'Token is required' })}
                            placeholder="6 digit code"
                            className="input input-bordered border-[#666] bg-[#1F1F1F] text-white"
                        />
                        {errors.token && <p className="text-red-500 text-xs mt-1">{errors.token.message}</p>}
                    </div>

                    {/* New Password Field */}
                    <div className="form-control">
                        <input
                            type="password"
                            {...register('newPassword', { required: 'New password is required' })}
                            placeholder="New Password"
                            className="input input-bordered border-[#666] bg-[#1F1F1F] text-white"
                        />
                        {errors.newPassword && <p className="text-red-500 text-xs mt-1">{errors.newPassword.message}</p>}
                    </div>

                    {/* Submit Button */}
                    <div className="form-control">
                        <input
                            type="submit"
                            className="btn bg-red-600 border-none text-white"
                            value={isSubmitting ? 'Resetting...' : 'Reset Password'}
                            disabled={isSubmitting}
                        />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ResetPassword;
