'use client'
import useAxiosSecure from '@/Hooks/useAxiosSecure';
import React, { useEffect, useState } from 'react';
import * as XLSX from 'xlsx';


const ExportGPXData = ({ data }) => {
    const axiosSecure = useAxiosSecure();
    const uid = data?.map(d => d?.uid);
    console.log(uid);

    const [userInfo, setUserInfo] = useState([]);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true); // Start loading at the beginning
            try {
                const data = await Promise.all(
                    uid?.map(async (id) => {
                        const user = await axiosSecure.get(`/user/${id}`);
                        console.log(user.data);
                        const userData = user?.data;
                        const email = userData?.email;
                        const name = userData?.name;
                        return { email, name };
                    })
                );
                setUserInfo(data);
            } catch (error) {
                console.error("Error fetching user data:", error.message);
            } finally {
                setLoading(false); // Stop loading after data is set or on error
            }
        };

        if (uid && uid.length > 0) {
            fetchData();
        }
    }, [uid, axiosSecure]); // Removed userInfo.length dependency




    console.log(userInfo);
    console.log(isLoading);




    const exportToExcel = () => {
        const worksheetData = data?.map((user, i) => ({
            category: user?.category,
            distance: user.distance,
            createdTime: user?.createdTime,
            uploadedTime: user?.lastUploadedTime,
            email: userInfo[i]?.email,
            uploadedBy: userInfo[i]?.name,
            status: user.status,
        }));

        const worksheet = XLSX.utils.json_to_sheet(worksheetData);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "User Data");

        // Create a custom filename with a timestamp
        const timestamp = new Date().toISOString().replace(/:/g, '-').split('.')[0];
        const filename = `user_data_${timestamp}.xlsx`;

        // Download file
        XLSX.writeFile(workbook, filename);
    };
    return (
        <div>
            {
                isLoading ? <p>Loading....</p>
                    :
                    <button onClick={exportToExcel} className="download-table-xls-button text-white bg-green-600 btn">
                        Export Data to Excel Sheet
                    </button>
            }
        </div>
    )
};

export default ExportGPXData;