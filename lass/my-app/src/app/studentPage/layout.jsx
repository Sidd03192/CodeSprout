'use client'


import React from 'react';
import './Sidebar.css';  // Assuming your styles will be in Sidebar.css

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="username-section">
                Username
            </div>
            <div className="classrooms">
                <h2>Classrooms:</h2>
                <ul>
                    <li>Mr. Watson</li>
                    <li>Mr. Garcia</li>
                </ul>
            </div>
            <button className="add-button">+</button>
        </div>
    );
}

export default Sidebar;
