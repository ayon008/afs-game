import axios from 'axios';
import React, { useEffect, useState } from 'react';

const GetFlag = (name) => {   
    const [flag, setFlag] = useState();
    console.log(flag);
    
    useEffect(() => {
        axios.get(`https://restcountries.com/v3.1/name/${name}`)
            .then(response => {
                setFlag(response.data[0]?.flags?.png);
            })
            .catch(error => {
                console.error(error);
            });
    }, [name])
    return flag;
};

export default GetFlag;