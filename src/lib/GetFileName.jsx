'use client'
import useAxiosPublic from '@/Hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const GetFileName = () => {
    const axiosPublic = useAxiosPublic();
    const uid = JSON.parse(localStorage.getItem('uid'));
    const { isLoading, isError, error, data: files, refetch } = useQuery({
        queryKey: ['fileName', uid], // Include `uid` in queryKey to refetch if `uid` changes
        queryFn: async () => {
            try {
                const response = await axiosPublic.get(`/fileName/${uid}`);
                const data = await response.data;
                console.log(data, 'fileName');

                return data;
            } catch (err) {
                console.error("Error fetching user data:", err);
                throw err; // Rethrow the error to be caught by React Query
            }
        },
    });
    return { isLoading: false, files, refetch };
};

export default GetFileName;