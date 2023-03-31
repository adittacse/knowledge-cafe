import React, {useEffect, useState} from 'react';
import "./Blog.css";
import Post from "../Post/Post.jsx";
import {getTotalReadTime} from "../../utilities/LocalStorage.jsx";

const Blog = () => {
    const [bookmarkedTitle, setBookmarkedTitle] = useState([]);
    const [readTime, setReadTime] = useState(0);
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch("blogs.json")
            .then(res => res.json())
            .then(data => setPosts(data));
    }, []);

    const getTitle = () => {
        const title = JSON.parse(localStorage.getItem("bookmarked-title")) || [];
        console.log(title)
    }
    useEffect(() => {
        getTitle();
    }, []);

    const getReadTime = () => {
        // Get the "read-time" values from local storage
        const readTimes = JSON.parse(localStorage.getItem('read-time')) || [];
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
    // const [bookmarkedTitle, setBookmarkedTitle] = useState([]);
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
                        {
                            bookmarkedTitle.map(title => <h4>{setBookmarkedTitle} lol</h4>)
                        }
                        {/*<h4>normal title</h4>*/}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;
