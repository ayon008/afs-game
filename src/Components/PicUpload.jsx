/* eslint-disable react/display-name */
// components/PicUpload.js
'use client';

import Image from 'next/image';
import React, { useState, forwardRef } from 'react';
import image from '@/../public/image_wrap.png'
import windfoil1 from '../../public/dbad16d0a9e16cb10c083d31371d9e6b.png'

const PicUpload = forwardRef(({ onChange, onBlur, name, ...props }, ref) => {

    const [fileName, setFileName] = useState('');

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setFileName(file ? file.name : '');
        if (onChange) {
            onChange(event); // Call onChange to integrate with react-hook-form
        }
    };

    return (
        <div className='w-fit'>
            {/* Hidden file input */}
            <input
                type="file"
                id={name}
                className="hidden"
                onChange={handleFileChange}
                onBlur={onBlur}
                name={name}
                ref={ref}
                {...props}
            />
            {/* Custom label styled as a button */}
            <label
                htmlFor={name}
                className="cursor-pointer relative"
            >
                <Image src={windfoil1} className='w-[60px] h-[60px] rounded-[50%]' alt='' />
                <Image src={image} alt='' className='absolute z-20 top-0' />
            </label>
        </div>
    );
});

export default PicUpload;