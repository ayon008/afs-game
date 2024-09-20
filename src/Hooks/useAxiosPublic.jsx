import axios from "axios";
const useAxiosPublic = () => {
    const instance = axios.create({
        baseURL: 'https://afs-backend-jz7l.vercel.app/',
    });
    return instance;
};

export default useAxiosPublic;
