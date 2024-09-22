const getUserLeaderBoard = async () => {
    const response = await fetch(`https://afs-backend-8zs8.vercel.app/totalPoints`,
        {
            cache:'no-cache'
        }
    );
    return response.json()
};

export default getUserLeaderBoard;