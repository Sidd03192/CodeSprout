import '@/styles/globals.css'
import { NextUIProvider } from "@nextui-org/react";

export const metadata = {
    title: "Code Sprout",
    description: "Cultivate Your Coding"
};

const RootLayout = ({ children }) => {
    return (
        <html>
            <body>
                <div className="taskbar" style={{ backgroundColor: "dark-gray", display: "flex", justifyContent: "space-between", height: "2.5rem" }}>
                    <div className="taskbar-left">
                        <strong>Taskbar</strong>
                    </div>
                    <div className="taskbar-right" style={{ marginRight: "1rem" }}>
                        <button>Login</button>
                    </div>
                </div>
                <div className="main">
                    <div className="gradient" />
                </div>
                <main className="app">
                    {/* Gets Children from the page file. ( displays whatever u want) */}
                    {children}
                </main>
            </body>
        </html>
    );
};

export default RootLayout;
