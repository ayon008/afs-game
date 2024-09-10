const sortAndRankCategoryByPoints = (data, category) => {
    // Create a shallow copy of the data array and filter out any items that don't have the required category
    let sorted = [...data].filter((item) => item.category && item.category[category]).sort((a, b) => {
        const totalA = a.category[category].pointsByTime || 0;
        const totalB = b.category[category].pointsByTime || 0;
        return totalB - totalA;
    });

    return { sorted };
};


const sortAndRankCategoryByDistance = (data, category) => {
    let sorted = [...data].filter(item => item.category && item.category[category]).sort((a, b) => {
        const totalA = a.category[category].pointsByDistance || 0;
        const totalB = b.category[category].pointsByDistance || 0;
        return totalB - totalA;
    });

    return { sorted };
};



export { sortAndRankCategoryByDistance, sortAndRankCategoryByPoints }