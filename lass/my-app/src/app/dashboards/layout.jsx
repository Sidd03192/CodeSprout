"use client"

import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { SidebarItem } from "@/components/Sidebar";
import {
  LifeBuoy,
  Receipt,
  Boxes,
  Package,
  UserCircle,
  BarChart3,
  LayoutDashboard,  // Corrected spelling here
  Settings
} from "lucide-react";
import { Divider } from "@mui/material";
import { useEffect, useState } from "react";
export default function Layout({ children }) {

  const [userName, setUserName]= useState("");
  const [email, setEmail]= useState("");
  const [ role, setRole]= useState();
  const [classrooms, setClassrooms]= useState();


  const handleDataFromNavbar = (data) => {
    // Handle the received data here
    let dat = data;
   
    setUserName(dat.name);
    setRole(role);
    setClassrooms(classrooms);

    setEmail(dat.email);
    
    console.log(dat.classrooms);
  };



  return (
    <>
    <div className="z-30 ">
      <Navbar sendDataToLayout={handleDataFromNavbar} /> {/* Pass the callback function to Navbar */}

    </div>
    
    <div className="flex flex-col md:flex-row overflow-hidden w-screen h-screen bg-black dark:bg-dot-white/[0.2] bg-dot-black/[0.2]">
      <div className="z-40">
        <Sidebar>
          <SidebarItem
            icon={<LayoutDashboard size={20} />}  // Corrected spelling here
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


          <Divider>Classrooms</Divider>

   
       

          <SidebarItem
            icon={<Settings size={20} />}
            text="Settings"
          />

          <SidebarItem
            icon={<LifeBuoy size={20} />}
            text="Help"
          />
             <hr className="my-3" ></hr>
             
        </Sidebar>
    
      </div>
      
      <div className=" w-screen ">{children}</div>
    </div>
    
    </>
  );
}
