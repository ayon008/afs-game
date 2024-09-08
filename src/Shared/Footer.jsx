import Image from 'next/image';
import React from 'react';
import logo from '../../public/logo.svg'

const Footer = () => {
    const links = [
        { text: 'Règles', underline: true },
        { text: 'Politique de confidentialité', underline: true },
        { text: 'Avis sur les cookies', underline: true },
        { text: 'Foil and Co., All rights are reserved. ©2023', underline: false }
    ];

    return (
        <footer className='2xl:mt-40 xl:mt-28 px-[10px]'>
            <div className='2xl:py-5 lg:py-3 flex justify-between items-center border-t-2 border-black'>
                <Image className='w-[60px] h-auto' src={logo} alt='Foil and Co. Logo' />
                {links.map(({ text, underline }, index) => (
                    <p
                        key={index}
                        className={`2xl:text-base lg:text-[10px] font-medium font-alliance ${underline ? 'underline' : ''}`}
                    >
                        {text}
                    </p>
                ))}
            </div>
        </footer>
    );
};

export default Footer;
