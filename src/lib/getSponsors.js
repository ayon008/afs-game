const getSponsors = async () => {
    const response = await fetch(`https://afs-backend-13gw.vercel.app/sponsors`,
        {
            cache: 'no-cache'
        }
    );
    return response.json()
};

export default getSponsors;