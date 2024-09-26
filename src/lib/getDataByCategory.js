const sortDataByTime = (data, category) => {
    const filter = data?.filter(d => {
        if (d[`${category}`]) {
            return d;
        }
    });
    const sortData = filter?.sort((a, b) => {
        return a.category - b.category;
    })
    return sortData;
}

export default sortDataByTime;