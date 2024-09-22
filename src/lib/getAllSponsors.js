const getAllSponsors = async () => {
    const response = await fetch(`https://afs-backend-8zs8.vercel.app/sponsors`,
        {
            cache: 'no-cache'
        }
    );
    return response.json()
};

export default getAllSponsors;