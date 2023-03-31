import React, {useEffect, useState} from 'react';
import "./Blog.css";
import Post from "../Post/Post.jsx";
import {getTotalReadTime} from "../../utilities/LocalStorage.jsx";

const Blog = () => {
    const [readTime, setReadTime] = useState(0);
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch("blogs.json")
            .then(res => res.json())
            .then(data => setPosts(data));
    }, []);

    const getReadTime = () => {
        // Get the "read-time" values from local storage
        const readTimes = JSON.parse(localStorage.getItem('read-time')) || [];
        // console.log(readTimes);
        let total = 0;
        for (const time in readTimes) {
            total += Number(readTimes[time]);
        }
        // Set the sum state
        setReadTime(total);
    }

    useEffect(() => {
        getReadTime();
    }, [readTime]);

    const handleTime = () => {
        getReadTime();
    }

    return (
        <div className="blog">
            <div className="single-blog">
                {
                    posts.map(post => <Post key={post.id} posts={post} handleTime={handleTime}></Post>)
                }
            </div>
            <div>
                <h2 className="time">Spent time on read: {readTime} min</h2>
                <div className="bookmarked-container">
                    <h2 className="bookmarked-blogs">Bookmarked Blogs: </h2>
                    <div className="added-blogs">
                        <h4>normal title</h4>
                        <h4>normal title</h4>
                        <h4>normal title</h4>
                        <h4>normal title</h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;
