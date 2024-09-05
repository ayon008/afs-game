const getUserLeaderBoard = async (uid) => {
    const response = await fetch(`http://localhost:5000/totalPoints?uid=${uid}`,
        {
            cache:'no-cache'
        }
    );
    return response.json()
};

export default getUserLeaderBoard;