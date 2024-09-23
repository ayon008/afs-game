const getAllSponsors = async () => {
    const response = await fetch(`http://localhost:5000/sponsors`,
        {
            cache: 'no-cache'
        }
    );
    return response.json()
};

export default getAllSponsors;