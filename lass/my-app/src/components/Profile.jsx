import React, { useEffect, useState } from "react";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/react";
import { Avatar } from "@nextui-org/react";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import Link from "next/link";
import Cookies from "universal-cookie";
import getUserData from "@/app/api/route";

export const Profile = ({ sendDataToParent }) => {
  const cookies = new Cookies();
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState("");
  const [pic, setPic] = useState("");

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        // Fetch user data only when the user is logged in
        getUserData(user.uid)
          .then((userData) => {
            setEmail(userData.email);
            setPic(userData.userPicture);
          })
          .catch((error) => {
            console.error("Error fetching user data:", error);
          });
      } else {
        setUser(null);
        // Clear user data when the user is logged out
        setEmail("");
        setPic("");
      }
    });

    return () => unsubscribe();
  }, [user]); // Only re-run the effect if the user state changes

  const logout = () => {
    const auth = getAuth();
    signOut(auth).then(() => {
      console.log("Logged out successfully!");
    });
  };

  const login = () => {
    console.log(user);
    // Redirect to the login page
  };

    if (user){

      return (
          <div className="profile">
          <Dropdown placement="bottom-end">
            <DropdownTrigger>
              <Avatar
                isBordered
                as="button"
                className="transition-transform"
                src={pic}
                name="null"
              />
            </DropdownTrigger>
            <DropdownMenu aria-label="Profile Actions" variant="flat">
              <DropdownItem key="profile" className="h-14 gap-2">
                <p className="font-semibold">Signed in as</p>
                <p className="font-semibold">{email}</p>
              </DropdownItem>
              <DropdownItem key="settings">
                My Settings
              </DropdownItem>
              <DropdownItem key="help_and_feedback">
                Help & Feedback
              </DropdownItem>
              
              <DropdownItem onClick={logout}key="logout" color="danger">                   
                  Log Out                  </DropdownItem>
            </DropdownMenu>
          </Dropdown>
          </div>
        );

  }
 
  else{
      return (
          <div className="profile">

        
          <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Avatar
              isBordered
              as="button"
              className="transition-transform"
             
              name="hi"
            />
          </DropdownTrigger>
          <DropdownMenu closeOnSelect={false} aria-label="Profile Actions" variant="flat">
              <DropdownItem key="5" className="h-14 gap-2">
                <p className="font-semibold">Not Signed In</p>
              </DropdownItem>
              <DropdownItem key="g">Help & Feedback</DropdownItem>
              <DropdownItem onClick={login} key="Sign In" color="success">
                <Link href="/signIn/studentLogin">Student Login
                
                </Link>
                
              </DropdownItem>
              <DropdownItem>
              </DropdownItem>
                
              </DropdownMenu>
          </Dropdown>
          </div>
        );
       
    }
  
}

