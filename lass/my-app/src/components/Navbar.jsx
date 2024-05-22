"use client"

import getUserData from "@/app/api/route";
import "@/components/Nav.css";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { Profile } from "./profile";
import Link from "next/link";

const Navbar = ({sendDataToLayout}) => {
  const [isOpen, setIsOpen] = useState(false);
  const auth = getAuth();
  // const router = useRouter();
  const [userData, setUserData] = useState(null);
  const [role, setRole] = useState("");
  const [email,setEmail]=useState("");
  const [userName, setUserName]= useState("");
  const [classrooms, setClassrooms]= useState();
  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // Fetch user data only when the user is logged in
        getUserData(user.uid)
          .then((userData) => {
            setUserData(userData);
            setRole(userData.role);
            setEmail(userData.email);
            setUserName(userData.userName);
            setClassrooms(userData.classrooms)
            console.log(userData.role);
            sendDataToLayout({ data: userData.email, role: userData.role, name: userData.userName, classrooms:userData.classrooms , school:userData.school });

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
    console.log("received role");
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
        <a href="/">

        <div className="nav-logo ml-3">
          <img src="/sidelogo.png" width="150px" />
          
        </div>
        </a>
        
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
