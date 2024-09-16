const getGpx = async () => {
    const response = await fetch(`http://localhost:5000/geoJson`);
    return response.json();
}

export default getGpx;