import React from "react";

const getTotalReadTime = () => {
    let time = {};
    const getTime = localStorage.getItem('read-time');
    if (getTime) {
        time = JSON.parse(getTime);
    }
    return time;
}

const getBookmarked = () => {
    // let state;
    let bookmarkedTitle = {};
    const getBookMarkedTitle = localStorage.getItem("bookmarked-title");
    if (getBookMarkedTitle) {
        bookmarkedTitle = JSON.parse(getBookMarkedTitle);
    }
    return bookmarkedTitle;
}

const getBookmarkedId = () => {
    // Define an array to store the bookmarked titles
    let bookmarkedId = [];
    // Loop through the bookmarked titles and add them to the array
    const post = JSON.parse(localStorage.getItem("bookmarked-title")) || [];
    for (let id in post) {
        bookmarkedId.push(id);
    }
    return bookmarkedId;
}

const getBookmarkedTitle = () => {
    // Define an array to store the bookmarked titles
    const bookmarkedTitles = [];
    // Loop through the bookmarked titles and add them to the array
    const titles = JSON.parse(localStorage.getItem("bookmarked-title")) || [];
    for (let title in titles) {
        bookmarkedTitles.push(<h4>{titles[title]}</h4>);
    }
    return bookmarkedTitles;
}

export {getTotalReadTime, getBookmarked, getBookmarkedId, getBookmarkedTitle};
