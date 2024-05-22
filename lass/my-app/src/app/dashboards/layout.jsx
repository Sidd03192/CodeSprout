"use client"

import Navbar from "@/components/Navbar";
import Sidebar, { SidebarItem } from "@/components/Sidebar"; // Updated import for SidebarItem
import {
  LifeBuoy,
  Receipt,
  Boxes,
  Package,
  UserCircle,
  BarChart3,
  LayoutDashboard,
  Settings,
  Album
} from "lucide-react";
import { Divider } from "@mui/material";
import { useEffect, useState } from "react";
import { getAuth } from "firebase/auth"; // Import getAuth
import { db } from "@/app/firebase/firebase"; // Import your firebase config
import { collection, onSnapshot } from "firebase/firestore"; // Import Firestore methods
import { getClassrooms } from "@/app/api/route"; // Import your getClassrooms function
import { useRouter } from 'next/navigation'; // Import useRouter hook

export default function Layout({ children }) {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState();
  const [classrooms, setClassrooms] = useState([]);
  const [school, setSchool] = useState("");
  const router = useRouter(); // Initialize useRouter

  const handleDataFromNavbar = (data) => {
    setUserName(data.name);
    setRole(data.role);
    setClassrooms(data.classrooms);
    setEmail(data.email);
    setSchool(data.school);
  };

  const handleSidebarItemClick = (classroomId) => {
    router.push(`/dashboards/teacher/${classroomId}`);
  };
  const fetchClassrooms = async () => {
    const auth = getAuth();
    const user = auth.currentUser;

    if (!user) return;

    const teacherId = user.uid;
    
    try {
      const classroomsData = await getClassrooms(teacherId);
      setClassrooms(classroomsData);
    } catch (error) {
      console.error("Error fetching classrooms:", error);
    }
  };

  useEffect(() => {
    // Subscribe to changes in Firestore classrooms collection
    const unsubscribe = onSnapshot(collection(db, "classrooms"), (snapshot) => {
      fetchClassrooms();
    });

    return () => unsubscribe(); // Clean up the listener when the component unmounts
  }, []);
  return (
    <>
      <div className="z-30 ">
        <Navbar sendDataToLayout={handleDataFromNavbar} /> {/* Pass the callback function to Navbar */}
      </div>

      <div className="flex flex-col md:flex-row overflow-hidden w-screen h-screen bg-black dark:bg-dot-white/[0.2] bg-dot-black/[0.2]">
        <div className="z-40">
          <Sidebar school={school} userName={userName}>
            <SidebarItem
              icon={<LayoutDashboard size={20} />}
              text="Dashboard"
              alert
              active
            />

            <SidebarItem
              icon={<UserCircle size={20} />}
              text="Users"
            />

            <SidebarItem
              icon={<Boxes size={20} />}
              text="Inventory"
            />

            <SidebarItem
              icon={<Package size={20} />}
              text="Orders"
              alert
            />

            <SidebarItem
              icon={<Receipt size={20} />}
              text="Billings"
            />

            <hr className="my-3" ></hr>

            {/* Render classroom names in the sidebar */}
            {classrooms.map((classroom) => (
              <SidebarItem
                key={classroom.id}
                icon={<Album size={20} />}
                text={classroom.name}
                onClick={() => handleSidebarItemClick(classroom.id)} // Add onClick handler
              />
            ))}
          </Sidebar>
        </div>

        <div className="w-screen">{children}</div>
      </div>
    </>
  );
}
