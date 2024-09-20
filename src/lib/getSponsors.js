const getSponsors = async () => {
    const response = await fetch(`https://afs-backend-jz7l.vercel.app/sponsors`,
        {
            cache: 'no-cache'
        }
    );
    return response.json()
};

export default getSponsors;