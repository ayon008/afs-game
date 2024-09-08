'use client'
import React, { useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { FaArrowLeft } from 'react-icons/fa';
import Swal from 'sweetalert2';
import InputField from '@/Components/InputField';
import PicUpload from '@/Components/PicUpload';
import { useRouter } from 'next/navigation';
import GetUserData from '@/lib/getUserData';
import useAxiosSecure from '@/Hooks/useAxiosSecure';
import useAuth from '@/Hooks/useAuth';

const Page = () => {
    const { user, updatedProfile } = useAuth();
    const { isLoading, isError, error, userInfo } = GetUserData(user?.uid);
    const axiosSecure = useAxiosSecure();

    const { control, register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm({
        defaultValues: {
            displayName: userInfo?.displayName || user?.displayName,
            surName: userInfo?.surName || '',
            address: userInfo?.address || '',
            pays: userInfo?.pays || '',
            afsGear: userInfo?.afsGear || '',
            email: userInfo?.email || user?.email,
        },
    });

    const router = useRouter();
    const onSubmit = data => {
        // Show loading SweetAlert
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
            axiosSecure.patch(`/user/${userInfo?._id}`, { ...data, photoURL: user?.photoURL, uid: user?.uid })
                .then(response => {
                    console.log(response.data);
                    updatedProfile(data?.displayName, user?.photoURL)
                    swal.close(); // Close the loading alert
                    Swal.fire({
                        title: 'Success!',
                        text: 'Your account has been updated.',
                        icon: 'success',
                        confirmButtonText: 'OK'
                    });
                })
        }
        catch (error) {
            Swal.close(); // Close the loading alert
            console.log(error.message);
            Swal.fire({
                title: 'Error!',
                text: 'There was a problem updating your account.',
                icon: 'error',
                confirmButtonText: 'OK'
            });
        }
    };


    const fields = [
        { label: 'NAME', name: 'displayName', placeholder: 'Emmma', validation: { required: 'Name is required' } },
        { label: 'ADDRESS', name: 'address', placeholder: 'Hauptstraße 123, 10115 Berlin', validation: { required: 'Address is required' } },
        { label: 'AFS Gear (invoice to check)', name: 'afsGear', placeholder: 'AFS123456789', validation: { required: 'AFS Gear is required' } },
        { label: 'SURNAME', name: 'surName', placeholder: 'Schmidt', validation: { required: 'Surname is required' } },
        { label: 'PAYS', name: 'pays', placeholder: 'GERMANY', validation: { required: 'Country is required' } },
        { label: 'EMAIL', name: 'email', placeholder: 'emmma_s@email.com', type: 'email', disabled: true }
    ];


    useEffect(() => {
        reset({
            email: userInfo?.email || '',
            pays: userInfo?.pays || '',
            surName: userInfo?.surName || '',
            displayName: userInfo?.displayName || '',
            address: userInfo?.address || '',
            afsGear: userInfo?.afsGear || ''
        });
    }, [userInfo, reset]);

    return (
        <div className='2xl:px-36 2xl:pt-32 xl:px-20 xl:pt-32'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='flex justify-between items-center'>
                    <h1 className='text-[#000] font-bold 2xl:text-7xl xl:text-5xl'>Modifier le compte</h1>
                    <div className='flex items-center gap-2'>
                        <button onClick={() => router.back()} type='button' className='flex items-center gap-2 text-[#111111BF] font-medium uppercase'>
                            <FaArrowLeft size={'0.7rem'} />
                            <span>Annuler</span>
                        </button>
                        <button
                            type='submit'
                            className={`uppercase ${isSubmitting ? 'text-gray-400 cursor-not-allowed' : 'text-[#11111166]'}`}
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? 'Submitting...' : 'Sauver'}
                        </button>
                    </div>
                </div>
                <div className='2xl:mt-10 xl:mt-6 bg-[#F0F0F0] rounded-[10px] p-5'>
                    <Controller
                        name="profilePicture"
                        control={control}
                        render={({ field: { onChange, onBlur, value, ref } }) => (
                            <PicUpload
                                onChange={onChange}
                                onBlur={onBlur}
                                ref={ref}
                                name="profilePicture"
                            />
                        )}
                    />
                    <h4 className='2xl:text-xl xl:text-sm font-bold 2xl:mt-10 xl:mt-6'>Vos informations</h4>
                    <div className='grid grid-cols-3 2xl:mt-10 xl:mt-6 2xl:gap-x-5 xl:gap-x-3 2xl:gap-y-6 xl:gap-y-4'>
                        {fields.map((field, index) => (
                            <InputField
                                key={index}
                                {...field}
                                register={register}
                                errors={errors}
                            />
                        ))}
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Page;
