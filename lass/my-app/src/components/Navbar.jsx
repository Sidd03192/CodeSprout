"use client"
import React, { useState } from "react";
import { getAuth } from "firebase/auth";
import { Avatar } from "@nextui-org/react";
import "@/components/Nav.css";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="Navbar">
      <span className="nav-logo">Code Sprout</span>
      <div className={`nav-items ${isOpen && "open"}`}>
        <a href="/home">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
        <Avatar isBordered color="secondary" src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />

      
      </div>
      <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
      </div>
    </div>
  );
};

export default Navbar;
// "use client";
// import {useRef} from 'react';
// import React from "react";
// import {FaBars, FaTimes} from "react-icons/fa";
// import '@/components/Nav.css'
// function Navbar(){
// const navRef = useRef();

// const showNavbar = () => {
//     navRef.current.classList.toggle("responsive_nav");
// }

//     return (
//         <header>
//             <h3>Logo</h3>
//                 <a href="/#">Home</a>
//                 <a href="/#">My Work</a>
//                 <a href="/#">Blog</a>
//                 <a href="/#">About me</a>
//                 <button className = "nav-btn nav-close-btn" onClick = {showNavbar}>
//                     <FaTimes/>
//                 </button>
            
//             <button className = "nav-btn" onClick = {showNavbar}>
//                 <FaBars/>
//             </button>
//         </header>
//     );
// }
// export default Navbar;
