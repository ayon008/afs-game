import axios from "axios";
const useAxiosPublic = () => {
    const instance = axios.create({
        baseURL: 'https://afs-backend-4w9k.vercel.app/',
    });
    return instance;
};

export default useAxiosPublic;