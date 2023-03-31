const getTotalReadTime = () => {
    let time = {};
    const getTime = localStorage.getItem('read-time');
    if (getTime) {
        time = JSON.parse(getTime);
    }
    return time;
}

export {getTotalReadTime};


