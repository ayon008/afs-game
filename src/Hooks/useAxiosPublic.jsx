import axios from "axios";
const useAxiosPublic = () => {
    const instance = axios.create({
        baseURL: 'https://afs-backend-oc8s.vercel.app/',
    });
    return instance;
};

export default useAxiosPublic;
