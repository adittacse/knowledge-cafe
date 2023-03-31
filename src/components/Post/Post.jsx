import React from 'react';
import "./Post.css";
const Post = (props) => {
    const {id, coverImage, authorImage, authorName, blogDate, blogReadTime, blogTitle, tags} = props.posts;
    return (
        <div className="post-container">
            <img className="cover-image" src={coverImage} alt="..."/>
            <div className="about-author">
                <img src={authorImage} alt=""/>
                <div className="author-info">
                    <h4>{authorName}</h4>
                    <p>{blogDate}</p>
                </div>
                <p className="blog-read-time">{blogReadTime}</p>
            </div>
            <h2>{blogTitle}</h2>
            <p>#{tags[0]} #{tags[1]}</p>
            <a href="#">Mark as read</a>
            <hr/>
        </div>
    );
};

export default Post;
