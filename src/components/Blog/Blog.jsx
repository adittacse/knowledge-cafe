import React, {useEffect, useState} from 'react';
import "./Blog.css";
import Post from "../Post/Post.jsx";

const Blog = () => {

    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch("blogs.json")
            .then(res => res.json())
            .then(data => setPosts(data));
    }, []);

    return (
        <div className="blog">
            <div className="single-blog">
                {
                    posts.map(post => <Post key={post.id} posts={post}></Post>)
                }
            </div>
            <div>
                <h2 className="time">Spent time on read: {} min</h2>
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
