import React from 'react';
import "./Bookmarked.css";

const Bookmarked = (props) => {
    // Define an array to store the bookmarked titles
    const bookmarkedTitles = [];

    // Loop through the bookmarked titles and add them to the array
    const titles = JSON.parse(localStorage.getItem("bookmarked-title")) || [];
    for (let title in titles) {
        bookmarkedTitles.push(<h4>{titles[title]}</h4>);
    }
    return bookmarkedTitles;

    return (
        <div>
            {bookmarkedTitles}
        </div>
    );
};

export default Bookmarked;
