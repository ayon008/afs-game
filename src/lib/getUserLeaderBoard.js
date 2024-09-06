const getUserLeaderBoard = async (uid) => {
    const response = await fetch(`https://afs-backend-4w9k.vercel.app/totalPoints?uid=${uid}`,
        {
            cache:'no-cache'
        }
    );
    return response.json()
};

export default getUserLeaderBoard;