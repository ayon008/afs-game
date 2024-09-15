const getAllUsers = async () => {
    const response = await fetch(`https://afs-backend-13gw.vercel.app/allUsers`,
        {
            cache: 'no-cache'
        }
    );
    return response.json()
}

export default getAllUsers;