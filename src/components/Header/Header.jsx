import React from 'react';
import "./Header.css";
import user from "../../image/user/user.jpeg"

const Header = () => {
    return (
        <div className="header">
            <div className="header-data">
                <h2>Knowledge Cafe</h2>
                <img src={user} alt=""/>
            </div>
            <hr/>
        </div>
    );
};

export default Header;
