import React, {useEffect, useState} from 'react';
import "./Blog.css";
import Post from "../Post/Post.jsx";
import Bookmarked from "../Bookmarked/Bookmarked.jsx";

const Blog = () => {
    const [bookmarkedTitle, setBookmarkedTitle] = useState("");
    let [totalPost, setTotalPost] = useState(0);
    const [readTime, setReadTime] = useState(0);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch("blogs.json")
            .then(res => res.json())
            .then(data => setPosts(data));
    }, []);

    const getTitle = () => {
        let currentTitle = "";
        const titles = JSON.parse(localStorage.getItem("bookmarked-title")) || [];
        for (let title in titles) {
            currentTitle = titles[title];
        }
        setBookmarkedTitle(currentTitle);
    }

    useEffect(() => {
        getTitle();
    }, [bookmarkedTitle]);

    const getTotalPost = () => {
        let totalPost = 0
        const titles = JSON.parse(localStorage.getItem("bookmarked-title")) || [];
        for (let title in titles) {
            totalPost += title;
        }
        setTotalPost(totalPost);
    }

    useEffect(() => {
        getTotalPost();
    }, [totalPost]);

    const handlePostCount = () => {
        getTotalPost();
    }

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

    // const [postTitle, setPostTitle] = useState([]);
    // const [bookmarkedTitle, setBookmarkedTitle] = useState("");
    // const handleBookmarkedBlogTitle = () => {
    //     getTitle();
    // }


    return (
        <div className="blog">
            <div className="single-blog">
                {
                    posts.map(post => <Post key={post.id}
                                            posts={post}
                                            handlePostCount={handlePostCount}
                                            // handleBookmarkedBlogTitle={handleBookmarkedBlogTitle}
                                            handleTime={handleTime}></Post>)
                }
            </div>
            <div className="sidebar">
                <h2 className="time">Spent time on read: {readTime} min</h2>
                <div className="bookmarked-container">
                    <h2 className="bookmarked-blogs">Bookmarked Blogs: {totalPost.length-1}</h2>
                    <div className="added-blogs">
                        <Bookmarked></Bookmarked>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;
