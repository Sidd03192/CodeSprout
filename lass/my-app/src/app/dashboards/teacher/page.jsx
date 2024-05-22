"use client"

import "@/styles/globals.css";
import React, { useEffect, useState } from "react";
import Sidebar from "@/components/Sidebar";
import { VortexDemo } from "@/components/fun/aceternity/vortexDemo";
import getUserData from "@/app/api/route";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Tables from "@/components/fun/table";
import Vortex from "@/components/fun/aceternity/vortex";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "@/app/firebase/firebase";
export default function Page() {
  const [userName, setUserName] = useState("");
  const [classrooms, setClassrooms]=useState(null);



  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        getUserData(user.uid)
          .then((userData) => {
            setUserName(userData.userName);
            setClassrooms(userData.classrooms);
          })
          .catch((error) => {
            console.error("Error fetching user data:", error);
          });
      }
    });

    return () => unsubscribe();
  }, []);


  
  




  return (
    <div className="w-[calc(100%-4rem)] mx-auto rounded-md h-screen overflow-hidden">
      <Vortex
        backgroundColor="black"
        rangeY={800}
        particleCount={500}
        baseHue={120}
        className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
      >
        <h2 className="text-white text-2xl md:text-6xl font-bold text-center green_gradient head_text">
          Wellcome Back !
        </h2>
        <p className="text-white text-sm md:text-1xl max-w-xl mt-6 text-center desc mb-10">
          "Teachers ignite the sparkes that change the world"
        </p>
     
        <Tables type ={"dash"}classrooms={classrooms} className="w-[65%]"/>

      
      
        
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
          
        </div>
      </Vortex>
    </div>
  );
}
