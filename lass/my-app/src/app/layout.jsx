import '@/styles/globals.css'
import Navbar from "@/components/Navbar.jsx"
import React from "react";
import "@/components/Nav.css";

export const metadata = {
    title: "Code Sprout",
    description: "Cultivate Your Coding"
};

const RootLayout = ({ children }) => {
    return (
        <html>
            
            <body>
            
            {/* <Navbar/> */}
  
                 
                    {children}
              
            </body>
        </html>
    );
    
};

export default RootLayout;
