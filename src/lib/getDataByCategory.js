const sortAndRankCategoryByPoints = (data, category) => {
    // Create a shallow copy of the data array
    let sorted = [...data].sort((a, b) => {
        const totalA = a.category[category] ? a.category[category].pointsByTime : 0;
        const totalB = b.category[category] ? b.category[category].pointsByTime : 0;
        return totalB - totalA;
    });

    return { sorted: sorted };
};

const sortAndRankCategoryByDistance = (data, category) => {
    let sorted = [...data].sort((a, b) => {
        const totalA = a.category[category] ? a.category[category].pointsByDistance : 0;
        const totalB = b.category[category] ? b.category[category].pointsByDistance : 0;
        return totalB - totalA;
    });
    return { sorted: sorted };
};

export { sortAndRankCategoryByDistance, sortAndRankCategoryByPoints }