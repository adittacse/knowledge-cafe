import React, {useEffect, useState} from 'react';
import "./Blog.css";
import Post from "../Post/Post.jsx";
import Bookmarked from "../Bookmarked/Bookmarked.jsx";
import {deleteShoppingCart} from "../../utilities/LocalStorage.jsx";

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

    return (
        <div className="blog-container">
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
                    <div className="sidebar-container">
                        <h2 className="time">Spent time on read: {readTime} min</h2>
                        <div className="bookmarked-container">
                            <h2 className="bookmarked-blogs">Bookmarked Blogs: {totalPost.length-1 ? totalPost.length-1 : 0}</h2>
                            <div className="added-blogs">
                                <Bookmarked></Bookmarked>
                            </div>
                        </div>
                        <div className="btn-container">
                            <button className="btn-delete-data" onClick={deleteShoppingCart}>Delete Data From Local Storage</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="questions-and-answers">
                <h2>Questions and Answers</h2>
                <div>
                    <h3>1. Difference between props and state?</h3>
                    <p>A. props data are non-changeable. state data are changeable.</p>
                    <p>B. props passed data from a component to another component.
                        state manage data within the component itself.</p>
                    <p>C. props make components reusable. state can't make components reusable.</p>
                    <p>D. props can be accessed in child components. state can't accessed by child components.</p>
                </div>
                <div>
                    <h3>2. How does useState() works in react?</h3>
                    <p>In React, the useState() hook is used to manage state in a functional component.
                        It returns an array with two values: the current state and a function to update it.
                        The Hook takes an initial state value as an argument and returns an updated state value
                        when setter function is called inside useState() function.</p>
                </div>
                <div>
                    <h3>3. What can do useEffect() function in react without data load?</h3>
                    <p>A. It can update the document title.</p>
                    <p>B. It can carry another functions inside itself.</p>
                    <p>C. Programmers can logging the console for debugging the program.</p>
                </div>
                <div>
                    <h3>4. How does react works?</h3>
                    <p>React is a JavaScript library. It works by creating small, reusable pieces of UI called
                        components, which can be combined to create more complex interfaces. When a React component
                        is rendered, it creates a virtual representation of the user interface, called the Virtual
                        DOM. React updates only the parts of the actual DOM that have changed, which makes it fast
                        and efficient. Overall, React provides a powerful and flexible way to build modern user
                        interfaces using a component-based approach that emphasizes reusability and efficient updates.</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;
