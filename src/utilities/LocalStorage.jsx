const getTotalReadTime = () => {
    let time = {};
    const getTime = localStorage.getItem('read-time');
    if (getTime) {
        time = JSON.parse(getTime);
    }
    return time;
}

const getBookmarked = () => {
    let bookmarkedTitle = {};
    const getBookMarkedTitle = localStorage.getItem("bookmarked-title");
    if (getBookMarkedTitle) {
        bookmarkedTitle = JSON.parse(getBookMarkedTitle);
    }
    return bookmarkedTitle;
}

export {getTotalReadTime, getBookmarked};
