const getUserInfo = async (uid) => {
    const response = await fetch(`http://localhost:5000/user/${uid}`,
        {
            cache: 'no-cache'
        }
    );
    return response.json()
};

export default getUserInfo;