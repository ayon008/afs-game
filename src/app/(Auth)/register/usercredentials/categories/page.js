'use client';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaArrowLeft } from 'react-icons/fa';
import Link from 'next/link';
import FaArrow from '@/icons/FaArrow';
import { useRouter } from 'next/navigation';
import Swal from 'sweetalert2';

const Categories = () => {
    const { register, handleSubmit, watch, setValue, resetField } = useForm();
    const router = useRouter();

    // State to track whether Waterman Crown is selected
    const [isWatermanSelected, setIsWatermanSelected] = useState(false);

    // Watch the values of the checkboxes
    const watchWatermanCrown = watch("WatermanCrown");

    const onSubmit = async (data) => {
        if (!data.Wingfoil && !data.Windfoil && !data.Downwind && !data.Dockstart && !data.Surffoil && !data.WatermanCrown) {
            Swal.fire({
                title: 'Error',
                text: 'Please select at least one category.',
                icon: 'error',
                confirmButtonText: 'OK',
            });
            return;
        }
        // Proceed with the form submission
        localStorage.setItem('categories', JSON.stringify(data));
        router.push('createUser')
    };

    // Function to handle checkbox toggle for Waterman Crown
    const handleWatermanChange = (event) => {
        const isChecked = event.target.checked;
        setIsWatermanSelected(isChecked);

        // If Waterman Crown is selected, reset other fields
        if (isChecked) {
            setValue("Wingfoil", true);
            setValue("Windfoil", true);
            setValue("Downwind", true);
            setValue("Dockstart", false);
            setValue("Surffoil", false);
        }
    };

    return (
        <div className='xl:w-1/3 2xl:w-1/2 w-[90%] mx-auto'>
            <form onSubmit={handleSubmit(onSubmit)} className="card-body space-y-[0px] bg-[#111] rounded-lg relative">
                <span className='text-gray-500 absolute right-3 top-1 cursor-pointer'>
                    <Link href={'/'}>X</Link>
                </span>
                <span className='text-gray-500 absolute left-2 top-1 cursor-pointer' onClick={() => router.back()}>
                    <FaArrowLeft />
                </span>
                <div className='text-white text-center'>
                    <h3 className='font-bold 2xl:text-[28px] xl:text-2xl text-lg'>Select Categories</h3>
                    <h5 className='2xl:text-base xl:text-sm text-[10px] 2xl:mb-2 xl:mb-2 mb-1 tracking-wide text-[#FFFFFF99]'>
                        Select categories you want to sign up
                    </h5>
                </div>

                {/* Wingfoil */}
                <div className="form-control">
                    <label className="cursor-pointer label justify-between">
                        <span className="label-text text-white 2xl:text-lg xl:text-sm">Wingfoil</span>
                        <input
                            type="checkbox"
                            {...register('Wingfoil')}
                            className="checkbox checkbox-warning w-[12px] h-[12px]"
                            disabled={isWatermanSelected}  // Disable if Waterman Crown is selected
                        />
                    </label>
                </div>

                {/* Windfoil */}
                <div className="form-control">
                    <label className="cursor-pointer label justify-between">
                        <span className="label-text text-white 2xl:text-lg xl:text-sm">Windfoil</span>
                        <input
                            type="checkbox"
                            {...register('Windfoil')}
                            className="checkbox checkbox-warning w-[12px] h-[12px]"
                            disabled={isWatermanSelected}  // Disable if Waterman Crown is selected
                        />
                    </label>
                </div>

                {/* Downwind SUPfoil */}
                <div className="form-control">
                    <label className="cursor-pointer label justify-between">
                        <span className="label-text text-white 2xl:text-lg xl:text-sm">Downwind SUPfoil</span>
                        <input
                            type="checkbox"
                            {...register('Downwind')}
                            className="checkbox checkbox-warning w-[12px] h-[12px]"
                            disabled={isWatermanSelected}  // Disable if Waterman Crown is selected
                        />
                    </label>
                </div>

                {/* Dockstart */}
                <div className="form-control">
                    <label className="cursor-pointer label justify-between">
                        <span className="label-text text-white 2xl:text-lg xl:text-sm">Dockstart</span>
                        <input
                            type="checkbox"
                            {...register('Dockstart')}
                            className="checkbox checkbox-warning w-[12px] h-[12px]"
                            disabled={isWatermanSelected}  // Disable if Waterman Crown is selected
                        />
                    </label>
                </div>

                {/* Surffoil */}
                <div className="form-control">
                    <label className="cursor-pointer label justify-between">
                        <span className="label-text text-white 2xl:text-lg xl:text-sm">Surffoil</span>
                        <input
                            type="checkbox"
                            {...register('Surffoil')}
                            className="checkbox checkbox-warning w-[12px] h-[12px]"
                            disabled={isWatermanSelected}  // Disable if Waterman Crown is selected
                        />
                    </label>
                </div>

                {/* Waterman Crown */}
                <div className="form-control">
                    <label className="cursor-pointer label justify-between">
                        <span className="label-text text-white 2xl:text-lg xl:text-sm">
                            Register only for the Waterman Crown (Wingfoil, Windfoil, Downwind)
                        </span>
                        <input
                            type="checkbox"
                            {...register('WatermanCrown')}
                            className="checkbox checkbox-warning w-[12px] h-[12px]"
                            onChange={handleWatermanChange}  // Handle change for Waterman Crown
                        />
                    </label>
                </div>

                {/* Submit Button */}
                <div className="form-control">
                    <button type="submit" className="btn bg-yellow-500 border-none text-white">CONTINUE</button>
                </div>

                {/* Footer */}
                <div className='flex items-center w-fit mx-auto gap-2'>
                    <p className='text-sm text-[#FFFFFF99]'>Already have an account?</p>
                    <div className='flex items-baseline gap-1'>
                        <p><Link href={"/login"} className='text-blue-500 text-sm'>Log In</Link></p>
                        <FaArrow className={'w-[10px] h-[10px]'} />
                    </div>
                </div>
            </form>

            <p className={`text-[#FFFFFF99] text-center Alliance 2xl:text-lg xl:text-[6px] mt-2`}>
                By signing up, I confirm that I have read and accepted Foil&Co.’s
                <span className='text-blue-500'> Terms & Conditions</span> and
                <span className='text-blue-500'> Privacy Policy</span>.
            </p>
        </div>
    );
};

export default Categories;
