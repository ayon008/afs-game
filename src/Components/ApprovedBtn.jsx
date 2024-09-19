'use client'
import useAxiosSecure from '@/Hooks/useAxiosSecure';
import React from 'react';
import Swal from 'sweetalert2';


const ApprovedBtn = ({ id, refetch }) => {
    const axiosSecure = useAxiosSecure();

    const handleClick = (id) => {
        const approved = { approved: true };

        // Show a loading alert before making the request
        Swal.fire({
            title: 'Processing...',
            text: 'Please wait while we update the status.',
            allowOutsideClick: false,
            didOpen: () => {
                Swal.showLoading(); // Show the loading spinner
            },
        });

        axiosSecure.patch(`/approved/${id}`, approved)
            .then(async (response) => {
                // Close the loading alert
                Swal.close();
                refetch();
                // Show success alert
                Swal.fire({
                    icon: 'success',
                    title: 'Approved!',
                    text: 'The status has been successfully updated.',
                    confirmButtonText: 'OK',
                });
            })
            .catch((error) => {
                // Close the loading alert
                Swal.close();

                // Show error alert
                Swal.fire({
                    icon: 'error',
                    title: 'Error!',
                    text: 'There was a problem updating the status.',
                    confirmButtonText: 'Try Again',
                });
            });
    };


    return (
        <button onClick={() => handleClick(id)} className='btn btn-outline text-green-500 hover:text-white hover:bg-green-500'>
            Accept
        </button>
    );
};

export default ApprovedBtn;