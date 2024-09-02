'use client'
import Link from 'next/link';
import React from 'react';
import { FaPen } from 'react-icons/fa';

const EditProfile = () => {
    const uid = JSON.parse(localStorage.getItem('uid'));
    return (
        <div className='flex items-center gap-1'>
            <Link href={`/profile/${uid}`}>
                <p>Modifier l'information</p></Link>
            <FaPen />
        </div>
    );
};

export default EditProfile;