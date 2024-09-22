const getUserLeaderBoard = async () => {
    const response = await fetch(`https://afs-backend-oc8s.vercel.app/totalPoints`,
        {
            cache:'no-cache'
        }
    );
    return response.json()
};

export default getUserLeaderBoard;