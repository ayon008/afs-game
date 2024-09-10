const getUserLeaderBoard = async () => {
    const response = await fetch(`https://afs-backend-ldys.vercel.app/totalPoints`,
        {
            cache:'no-cache'
        }
    );
    return response.json()
};

export default getUserLeaderBoard;