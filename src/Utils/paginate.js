const paginate = (items, pageNumber, itemsPerPage) => {
    const startIndex = (pageNumber - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentPageItems = items.slice(startIndex, endIndex);
    
    const totalItems = items.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    
    return {
        currentPageItems,
        totalItems,
        totalPages,
        currentPage: pageNumber
    };
};

export default paginate;