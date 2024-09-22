import axios from "axios";
const useAxiosPublic = () => {
    const instance = axios.create({
        baseURL: 'https://afs-backend-8zs8.vercel.app/',
    });
    return instance;
};

export default useAxiosPublic;
