"use client"

import { usePathname } from 'next/navigation';
import Navbar from "@/components/Navbar.jsx";

const ConditionalNavbar = () => {
    const pathname = usePathname();
    const showNavbar = !pathname.startsWith('/dashboards/teacher');

    return showNavbar ? <Navbar /> : null;
};

export default ConditionalNavbar;
