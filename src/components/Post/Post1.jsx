import React from 'react';
import "./Post1.css";
import blogImage1 from "../../image/blog/blog-1.png";
import blogImage2 from "../../image/blog/blog-2.png";
import blogImage3 from "../../image/blog/blog-3.jpg";
import blogImage4 from "../../image/blog/blog-4.jpg";
import person1 from "../../image/person/person1.jpg";
import person2 from "../../image/person/person2.jpeg";
import person3 from "../../image/person/person3.jpg";
import person4 from "../../image/person/person4.jpeg";

const Post1 = () => {
    return (
        <div className="post-container">
            <div className="single-post">
                <img className="cover-image" src={blogImage1} alt="..."/>
                <div className="about-author">
                    <img src={person1} alt=""/>
                    <div className="author-info">
                        <h4>Mr. Raju</h4>
                        <p>Mar 14 (4 Days ago)</p>
                    </div>
                    <p>05 min read</p>
                </div>
                <h2>How to get your first job as a self-taught programmer</h2>
                <p>#beginners #programming</p>
                <p>Mark as read</p>
            </div>

            <div className="single-post">
                <img className="cover-image" src={blogImage2} alt="..."/>
                <div className="about-author">
                    <img src={person2} alt=""/>
                    <div>
                        <h4>Mrs. Setara</h4>
                        <p>Mar 14 (4 Days ago)</p>
                    </div>
                    <p>15 min read</p>
                </div>
                <h2>How to get your first job as a self-taught programmer</h2>
                <p>#beginners #programming</p>
                <p>Mark as read</p>
            </div>

            <div className="single-post">
                <img className="cover-image" src={blogImage3} alt="..."/>
                <div className="about-author">
                    <img src={person3} alt=""/>
                    <div>
                        <h4>Mina Mostofa</h4>
                        <p>Mar 15 (10 Days ago)</p>
                    </div>
                    <p>10 min read</p>
                </div>
                <h2>How to get your first job as a self-taught programmer</h2>
                <p>#beginners #programming</p>
                <p>Mark as read</p>
            </div>

            <div className="single-post">
                <img className="cover-image" src={blogImage4} alt="..."/>
                <div className="about-author">
                    <img src={person4} alt=""/>
                    <div>
                        <h4>Mr. John</h4>
                        <p>Mar 10 (7 Days ago)</p>
                    </div>
                    <p>12 min read</p>
                </div>
                <h2>How to get your first job as a self-taught programmer</h2>
                <p>#beginners #programming</p>
                <p>Mark as read</p>
            </div>
        </div>
    );
};

export default Post1;
