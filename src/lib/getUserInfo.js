const getUserInfo = async (uid) => {
    const response = await fetch(`https://afs-backend-13gw.vercel.app/user/${uid}`,
        {
            cache: 'no-cache'
        }
    );
    return response.json()
};

export default getUserInfo;