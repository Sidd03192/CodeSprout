"use client"

import React, { useState, useEffect } from "react";
import { getAuth } from "firebase/auth";
import { useRouter } from 'next/router';
import { Avatar } from "@nextui-org/react";
import "@/components/Nav.css";
import { Profile } from "./profile";
import { onAuthStateChanged } from "firebase/auth";
import getUserData from "@/app/api/route";

const Navbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const auth = getAuth();
  // const router = useRouter();
  const [userData, setUserData] = useState(null);
  const [role, setRole] = useState("");

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // Fetch user data only when the user is logged in
        getUserData(user.uid)
          .then((userData) => {
            setUserData(userData);
            setRole(userData.role);
          })
          .catch((error) => {
            console.error("Error fetching user data:", error);
          });
      } else {
        setUserData(null);
        setRole("");
      }
    });

    return () => unsubscribe();
  }, []);

  const receiveChildData = (data) => {
    setRole(data.role);
  };

  const logout = () => {
    const auth = getAuth();
    signOut(auth).then(() => {
      console.log("Logged out successfully!");
      router.reload(); // Reload the page after logout
    });
  };

  return (
    <div className="Navbar">
      <span className="nav-logo">Code Sprout</span>
      <div className={`Navbar ${isOpen ? 'open' : ''}`}>
        <div className="nav-logo">Logo</div>
        <div className="nav-items">
          <a href="/">Home</a>
          <a href="/signIn/studentLogin">Student Login</a>
          <a href="/contact">Contact</a>
          {role ? (
            <a href={`/dashboards/${role.toLowerCase()}`}>{role} Homepage</a>
          ) : (
            <></>
          )}
          <div className="Profile">
          {userData && <Profile sendDataToParent={receiveChildData} />}

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
