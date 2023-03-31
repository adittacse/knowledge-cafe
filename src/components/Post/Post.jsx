import React, {useEffect, useState} from 'react';
import "./Post.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'
import {getTotalReadTime} from "../../utilities/LocalStorage.jsx";

const readTime = (id, time) => {
    let totalTime = getTotalReadTime();
    // add time
    const addTime = totalTime[id];
    if (!addTime) {
        totalTime[id] = parseInt(time);
    }
    else {
        const newTime = addTime + parseInt(time);
        totalTime[id] = newTime;
    }
    localStorage.setItem('read-time', JSON.stringify(totalTime));
}

const Post = (props) => {
    const {id, coverImage, authorImage, authorName, blogDate, blogReadTime, blogTitle, tags} = props.posts;
    const handleTime = props.handleTime;

    return (
        <div className="post-container">
            <img className="cover-image" src={coverImage} alt="..."/>
            <div className="about-author">
                <img src={authorImage} alt="..."/>
                <div className="author-info">
                    <h4>{authorName}</h4>
                    <p>{blogDate}</p>
                </div>
                <p className="blog-read-time">{blogReadTime} min read <FontAwesomeIcon icon={faBookmark} /></p>
            </div>
            <h2>{blogTitle}</h2>
            <p>#{tags[0]} #{tags[1]}</p>
            {/*<a href="#" onClick={() => {readTime(id, blogReadTime); handleTime(blogReadTime)}}>Mark as read</a>*/}
            <a href="#" onClick={() => {readTime(id, blogReadTime), handleTime()}}>Mark as read</a>
            <hr/>
        </div>
    );
};

export default Post;
