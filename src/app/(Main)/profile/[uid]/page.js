'use client'
import React, { useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import InputField from '@/Components/InputField';
import PicUpload from '@/Components/PicUpload';
import { useRouter } from 'next/navigation';
import GetUserData from '@/lib/getUserData';
import useAxiosSecure from '@/Hooks/useAxiosSecure';
import useAuth from '@/Hooks/useAuth';
import { antiHero } from '@/Components/Font';
import countries from '@/js/countries';
import { FaCheck } from 'react-icons/fa';

const Page = () => {
    const { user, updatedProfile } = useAuth();
    const { isLoading, isError, error, userInfo } = GetUserData(user?.uid);
    const axiosSecure = useAxiosSecure();

    const { control, register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm({
        defaultValues: {
            displayName: userInfo?.displayName || user?.displayName,
            surName: userInfo?.surName || '',
            pays: userInfo?.pays || '',
            afsGear: userInfo?.afsGear || '',
            email: userInfo?.email || user?.email,
        },
    });

    const router = useRouter();

    const onSubmit = async (data) => {
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

        const formData = new FormData();
        formData.append('displayName', data.displayName);
        formData.append('surName', data.surName);
        formData.append('pays', data.pays);
        formData.append('email', data.email);
        formData.append('afsGear', data.afsGear[0]); // The file input as a FormData item
        formData.append('photoURL', user?.photoURL);
        formData.append('uid', user?.uid);

        try {
            const response = await axiosSecure.patch(`/user/${userInfo?._id}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log(response.data);
            updatedProfile(data.displayName, user?.photoURL);
            swal.close(); // Close the loading alert
            Swal.fire({
                title: 'Success!',
                text: 'Your account has been updated.',
                icon: 'success',
                confirmButtonText: 'OK'
            });
        } catch (error) {
            swal.close(); // Close the loading alert
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
        { label: 'SURNAME', name: 'surName', placeholder: 'Schmidt', validation: { required: 'Surname is required' } },
        { label: 'EMAIL', name: 'email', placeholder: 'emmma_s@email.com', type: 'email', disabled: true }
    ];

    useEffect(() => {
        reset({
            email: userInfo?.email || '',
            pays: userInfo?.pays || '',
            surName: userInfo?.surName || '',
            displayName: userInfo?.displayName || '',
            afsGear: userInfo?.afsGear || ''
        });
    }, [userInfo, reset]);

    return (
        <div className='2xl:px-36 2xl:py-32 xl:px-20 xl:py-32 p-10 '>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h1 className={`${antiHero.className}font-bold 2xl:text-7xl xl:text-5xl text-center text-white`}>Modifier le compte</h1>
                <div className='2xl:mt-10 xl:mt-6 bg-[#F0F0F0] rounded-[10px] p-5'>
                    <div className='w-fit mx-auto'>
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
                    </div>
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
                        {/* File Upload Field for AFS Gear */}
                        {/* <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">AFS Gear (Invoice)</span>
                            </div>
                            <Controller
                                name="afsGear"
                                control={control}
                                rules={{ required: 'AFS Gear is required' }}
                                render={({ field: { onChange, onBlur, ref } }) => (
                                    <input
                                        type="file"
                                        accept=".pdf,.jpg,.jpeg,.png"
                                        onChange={(e) => onChange(e.target.files)}
                                        onBlur={onBlur}
                                        ref={ref}
                                        className="input input-bordered w-full"
                                    />
                                )}
                            />
                            {errors.afsGear && <span className="text-red-500">{errors.afsGear.message}</span>}
                        </label> */}
                        <div className="form-control relative">
                            <label className="label items-center justify-normal bg-[#F0F0F0] w-fit h-fit py-0 gap-1 absolute left-[12px] -top-[10px]">
                                <span className="label-text text-[#666] text-sm font-bold py-0">Pays</span>
                                {errors['pays'] ? <span className="text-red-500">*</span> : <FaCheck size={'0.85rem'} color='#2A7029' />}
                            </label>
                            <select className="select select-bordered w-full bg-[#F0F0F0]">
                                <option disabled selected>Pays</option>
                                {
                                    countries.map(c => {
                                        return (
                                            <option className='uppercase'>{c}</option>
                                        )
                                    })
                                }
                            </select>
                            {errors['pays'] && <span className="text-red-500 text-sm mt-1">{errors['pays'].message}</span>}
                        </div>
                        <div className="form-control relative">
                            <label className="label items-center justify-normal bg-[#F0F0F0] w-fit h-fit py-0 gap-1 absolute left-[12px] -top-[10px]">
                                <span className="label-text text-[#666] text-sm font-bold py-0">Afs gear</span>
                                {errors['pays'] ? <span className="text-red-500">*</span> : <FaCheck size={'0.85rem'} color='#2A7029' />}
                            </label>
                            <input type="file" className="file-input file-input-bordered w-full" />
                            {errors['pays'] && <span className="text-red-500 text-sm mt-1">{errors['pays'].message}</span>}
                        </div>
                    </div>
                    <div className='flex items-center justify-center mt-10 gap-2'>
                        <button onClick={() => router.back()} type='button' className='flex items-center gap-2 text-[#111111BF] font-medium uppercase btn bg-[#D9D9D9]'>
                            <span>Annuler</span>
                        </button>
                        <button
                            type='submit'
                            className={`btn uppercase text-white bg-blue-500 ${isSubmitting ? 'text-gray-400 cursor-not-allowed' : 'text-[#11111166]'}`}
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? 'Submitting...' : 'Sauver'}
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Page;
