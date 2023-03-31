import React, {useEffect, useState} from 'react';
import "./Post.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'
import {getBookmarked, getTotalReadTime} from "../../utilities/LocalStorage.jsx";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const notify = () => {
    toast.error("Already Bookmarked", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
    });
};

const bookmarked = () => {
    toast.success("Post Bookmarked", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
    });
};

const readTime = (id, time) => {
    let totalTime = getTotalReadTime();
    // add time
    const addTime = totalTime[id];
    if (!addTime) {
        totalTime[id] = parseInt(time);
    } else {
        const newTime = addTime + parseInt(time);
        totalTime[id] = newTime;
    }
    localStorage.setItem('read-time', JSON.stringify(totalTime));
}

const readTitle = (id, title) => {
    let getTitle = getBookmarked();
    const addTitle = getTitle[id];
    if (!addTitle) {
        getTitle[id] = title;
        bookmarked();
    } else {
        notify();
    }
    localStorage.setItem("bookmarked-title", JSON.stringify(getTitle));
}

const Post = (props) => {
    const {id, coverImage, authorImage, authorName, blogDate, blogReadTime, blogTitle, tags} = props.posts;
    const handleTime = props.handleTime;
    const handlePostCount = props.handlePostCount;


    return (
        <div className="post-container">
            <img className="cover-image" src={coverImage} alt="..."/>
            <div className="about-author">
                <img src={authorImage} alt="..."/>
                <div className="author-info">
                    <h4>{authorName}</h4>
                    <p>{blogDate}</p>
                </div>
                <p className="blog-read-time">{blogReadTime} min read <FontAwesomeIcon onClick={() => {readTitle(id, blogTitle), handlePostCount}} icon={faBookmark} /></p>
                <ToastContainer position="top-center" autoClose={3000} hideProgressBar={false}
                                newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss
                                draggable pauseOnHover theme="colored"></ToastContainer>
            </div>
            <h2 className="blog-tile">{blogTitle}</h2>
            <p>#{tags[0]} #{tags[1]}</p>
            <a href="#" onClick={() => {readTime(id, blogReadTime), handleTime()}}>Mark as read</a>
            <hr className="horizontal-line"/>
        </div>
    );
};

export default Post;
