'use client'
import InputField from '@/Components/InputField';
import SponsorPic from '@/Components/SponsorPic';
import useAxiosSecure from '@/Hooks/useAxiosSecure';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

const AddSponsors = ({ refetch }) => {
    const { control, register, handleSubmit, watch, reset, formState: { errors, isSubmitting } } = useForm();
    const sponsorPictureValue = watch('sponsorPicture');

    const fields = [
        { label: 'SPONSOR WEBSITE', name: 'sponsorName', placeholder: 'Redbull', validation: { required: 'sponsor name is required' } },
        { label: 'SPONSOR DETAILS', name: 'SponosorDetails', placeholder: 'Details', validation: { required: 'Details is required' } },
    ];

    const axiosSecure = useAxiosSecure();

    const onSubmit = (data) => {
        console.log(data);
        const swal = Swal.fire({
            title: 'Submitting...',
            text: 'Please wait while we process your request.',
            icon: 'info',
            showConfirmButton: false,
            allowOutsideClick: false,
            didOpen: () => {
                Swal.showLoading();
            }
        });
        try {
            axiosSecure.post(`/sponsors`, data)
                .then(response => {
                    console.log(response.data);
                    swal.close(); // Close the loading alert
                    Swal.fire({
                        title: 'Success!',
                        text: 'Sponsor Added',
                        icon: 'success',
                        confirmButtonText: 'OK'
                    });
                    refetch();
                })
            reset();
        }
        catch (error) {
            Swal.close(); // Close the loading alert
            console.log(error.message);
            Swal.fire({
                title: 'Error!',
                text: 'There was a problem updating sponsors.',
                icon: 'error',
                confirmButtonText: 'OK'
            });
        }
    }


    return (
        <div className=''>
            <h3 className='my-10 text-center font-bold text-2xl'>Add Sponsors</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='2xl:mt-10 xl:mt-6 bg-[#F0F0F0] rounded-[10px] p-5'>
                    <div className='w-fit mx-auto'>
                        <Controller
                            name="sponsorPicture"
                            control={control}
                            render={({ field: { onChange, onBlur, value, ref } }) => (
                                <SponsorPic
                                    onChange={onChange}
                                    onBlur={onBlur}
                                    ref={ref}
                                    name="sponsorPicture"
                                />
                            )}
                        />
                    </div>
                    <h4 className='2xl:text-xl xl:text-sm font-bold 2xl:mt-10 xl:mt-6'>Sponsor Information</h4>
                    <div className='grid grid-cols-2 2xl:mt-10 xl:mt-6 2xl:gap-x-5 xl:gap-x-3 2xl:gap-y-6 xl:gap-y-4'>
                        {fields.map((field, index) => (
                            <InputField
                                key={index}
                                {...field}
                                register={register}
                                errors={errors}
                            />
                        ))}
                    </div>
                    <div className='flex items-center justify-center mt-10 gap-2'>
                        <button onClick={() => router.back()} type='button' className='flex items-center gap-2 text-[#111111BF] font-medium uppercase btn bg-[#D9D9D9]'>
                            <span>Annuler</span>
                        </button>
                        <button
                            type='submit'
                            className={`btn uppercase text-white bg-blue-500 ${isSubmitting ? 'text-gray-400 cursor-not-allowed' : 'text-[#11111166]'}`}
                            disabled={!sponsorPictureValue}
                        >
                            {isSubmitting ? 'Submitting...' : 'Sauver'}
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AddSponsors;