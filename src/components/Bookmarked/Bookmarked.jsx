import React from 'react';
import "./Bookmarked.css";
import {getBookmarkedTitle} from "../../utilities/LocalStorage.jsx";

const Bookmarked = () => {
    const bookmarkedTitles = getBookmarkedTitle();

    return (
        <div>
            {bookmarkedTitles}
        </div>
    );
};

export default Bookmarked;
