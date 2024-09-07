const getUserLeaderBoard = async () => {
    const response = await fetch(`https://afs-backend-9ke5.vercel.app/totalPoints`,
        {
            cache:'no-cache'
        }
    );
    return response.json()
};

export default getUserLeaderBoard;