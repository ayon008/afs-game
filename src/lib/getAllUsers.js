const getAllUsers = async () => {
    const response = await fetch(`http://localhost:5000/allUsers`,
        {
            cache: 'no-cache'
        }
    );
    return response.json()
}

export default getAllUsers;