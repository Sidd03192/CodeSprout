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
            
            <Navbar/>
                <div className="main">
                    <div className="gradient" />
                </div>


                <main className="app">
                    {}
                    {children}
                </main>
            </body>
        </html>
    );
};

export default RootLayout;
