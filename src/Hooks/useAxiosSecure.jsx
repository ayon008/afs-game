'use client'
import axios from 'axios';
import useAuth from './useAuth';
import { useRouter } from 'next/navigation';

const useAxiosSecure = () => {
    const { logOut, user } = useAuth();
    const router = useRouter();

    const axiosSecure = axios.create({
        baseURL: 'https://afs-backend.vercel.app/', // Adjust this to your actual base URL
    });

    // Request interceptor
    axiosSecure.interceptors.request.use(
        (config) => {
            // Ensure this runs only on the client side
            if (typeof window !== 'undefined') {
                const userToken = JSON.parse(localStorage.getItem('userToken'));
                if (userToken && userToken.token) {
                    config.headers.authorization = `Bearer ${userToken.token}`;
                }
            }
            return config;
        },
        (error) => {
            // Handle request error
            return Promise.reject(error);
        }
    );

    // Response interceptor
    axiosSecure.interceptors.response.use(
        (response) => {
            // Handle successful response
            return response;
        },
        async (error) => {
            const status = error.response?.status;
            if (status === 401 || status === 403) {
                // Unauthorized or Forbidden, log out and redirect to login
                await logOut();
                router.push('/login');
            }
            return Promise.reject(error);
        }
    );

    return axiosSecure;
};

export default useAxiosSecure;
