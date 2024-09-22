const getFaq = async () => {
    const response = await fetch(`https://afs-backend-8zs8.vercel.app/faq`, {
        cache: 'no-cache'
    });
    return response.json()
};

export default getFaq;