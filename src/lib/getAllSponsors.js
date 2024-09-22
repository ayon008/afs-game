const getAllSponsors = async () => {
    const response = await fetch(`https://afs-backend-oc8s.vercel.app/sponsors`,
        {
            cache: 'no-cache'
        }
    );
    return response.json()
};

export default getAllSponsors;