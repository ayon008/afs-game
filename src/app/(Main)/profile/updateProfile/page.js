'use client'
import React from 'react';
import { useForm } from 'react-hook-form';
import { FaArrowLeft } from 'react-icons/fa';
import Swal from 'sweetalert2';
import InputField from '@/Components/InputField';
import PicUpload from '@/Components/PicUpload';
import { useRouter } from 'next/navigation';

const Page = () => {
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();

    const router = useRouter();

    const onSubmit = async data => {
        console.log(data);

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
            // Simulate form submission
            await new Promise(resolve => setTimeout(resolve, 2000)); // Replace with actual API call
            swal.close(); // Close the loading alert

            Swal.fire({
                title: 'Success!',
                text: 'Your account has been updated.',
                icon: 'success',
                confirmButtonText: 'OK'
            });
        } catch (error) {
            swal.close(); // Close the loading alert

            Swal.fire({
                title: 'Error!',
                text: 'There was a problem updating your account.',
                icon: 'error',
                confirmButtonText: 'OK'
            });
        }
    };

    const fields = [
        { label: 'NAME', name: 'name', placeholder: 'Emmma', validation: { required: 'Name is required' } },
        { label: 'ADDRESS', name: 'address', placeholder: 'Hauptstraße 123, 10115 Berlin', validation: { required: 'Address is required' } },
        { label: 'AFS Gear (invoice to check)', name: 'afsGear', placeholder: 'AFS123456789', validation: { required: 'AFS Gear is required' } },
        { label: 'SURNAME', name: 'surName', placeholder: 'Schmidt', validation: { required: 'Surname is required' } },
        { label: 'PAYS', name: 'pays', placeholder: 'GERMANY', validation: { required: 'Country is required' } },
        { label: 'EMAIL', name: 'email', placeholder: 'emmma_s@email.com', type: 'email', }
    ];

    return (
        <div className='2xl:px-36 2xl:py-10 xl:px-20 xl:py-10'>
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
                    <PicUpload />
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
