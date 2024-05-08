"use client"
import React, { useState } from "react";
import { getAuth } from "firebase/auth";
import { Avatar } from "@nextui-org/react";
import "@/components/Nav.css";
import getUserData from "@/app/api/route";
import { Profile } from "./profile";
import { useRouter } from 'next/navigation'

import { getAllUsers,getStudentDocuments } from "@/app/api/route";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const auth = getAuth();
  let userData;
  const router =useRouter();
 
  
  return (
    <div className="Navbar">
      <span className="nav-logo">Code Sprout</span>
      <div className={`Navbar ${isOpen ? 'open' : ''}`}>
      <div className="nav-logo">Logo</div>
      <div className="nav-items">
        <a href="/">Home</a>
        <a href="/signIn/studentLogin">Student Login</a>
        <a href="/contact">Contact</a>
        <div className="Profile">
      <Profile/>
      </div>
      </div>
      
     
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
