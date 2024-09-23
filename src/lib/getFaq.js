const getFaq = async () => {
    const response = await fetch(`http://localhost:5000/faq`, {
        cache: 'no-cache'
    });
    return response.json()
};

export default getFaq;