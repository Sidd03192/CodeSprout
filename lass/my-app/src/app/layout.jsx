import '@/styles/globals.css';
import React from "react";
import ConditionalNavbar from "@/components/ConditionalNavbar";
import "@/components/Nav.css";

export const metadata = {
    title: "Code Sprout",
    description: "Cultivate Your Coding"
};

const RootLayout = ({ children }) => {
    return (
        <html lang="en">
            <body>
                <ConditionalNavbar />
                {children}
            </body>
        </html>
    );
};

export default RootLayout;
