/* eslint-disable @next/next/no-img-element */


import React from 'react';
export async function generateStaticParams() {
    const points = await getUserLeaderBoard();

    return points.map((point) => ({
        country: point?.pays
    }))
}

const GetFlags = async ({ params }) => {
    console.log(params);
    const { country } = params;
    const flagData = await fetch(`https://restcountries.com/v3.1/name/${country}`);
    const response = await flagData.json();
    const flag = response[0]?.flags?.png;
    console.log(flag);
    if(flag){
        return (
            <img alt='flags' className='2xl:w-[51px] 2xl:h-[31px] xl:w-[25px] xl:h-[15px] w-[20px] h-[14px]' src={flag} />
        )
    }
}

export default GetFlags;

