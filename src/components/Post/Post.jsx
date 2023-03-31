import React from 'react';
import "./Post.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'

const readTime = (id, time) => {
    let totalTime = getTotalReadTime();
    // add quantity
    const addTime = totalTime[id];
    if (!addTime) {
        totalTime[id] = parseInt(time);
    }
    else {
        const newTime = addTime + parseInt(time);
        totalTime[id] = newTime;
    }
    localStorage.setItem('read-time', JSON.stringify(totalTime));
    // console.log(totalTime)
}

const getTotalReadTime = () => {
    let time = {};
    const getTime = localStorage.getItem('read-time');
    if (getTime) {
        time = JSON.parse(getTime);
    }

    return time;
}

const Post = (props) => {
    const {id, coverImage, authorImage, authorName, blogDate, blogReadTime, blogTitle, tags} = props.posts;
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
            <a href="#" onClick={() => readTime(id, blogReadTime)}>Mark as read</a>
            <hr/>
        </div>
    );
};

export default Post;
