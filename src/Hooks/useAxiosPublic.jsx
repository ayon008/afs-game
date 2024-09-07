import axios from "axios";
const useAxiosPublic = () => {
    const instance = axios.create({
        baseURL: 'https://afs-backend-9ke5.vercel.app/',
    });
    return instance;
};

export default useAxiosPublic;