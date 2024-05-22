import React, { useState } from "react";
import { Popover, PopoverTrigger, PopoverContent, Button, Input } from "@nextui-org/react";
import { auth, db } from "@/app/firebase/firebase"; // Ensure firebase is imported
import { collection, doc, setDoc, updateDoc, arrayUnion } from 'firebase/firestore';

const generateAssginmentId = (baseString) => {
  const randomNumber = Math.floor(Math.random() * 100000);
  return `${baseString}-${randomNumber}`;
};

export default function Add2() {
 
 
  return (
    <Popover placement="bottom" showArrow offset={10}>
      <PopoverTrigger>
        <button
          title="Add New"
          className="group cursor-pointer outline-none hover:rotate-90 duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40px"
            height="40px"
            viewBox="0 0 24 24"
            className="stroke-green-400 fill-none group-hover:fill-emerald-900 group-active:stroke-green-200 group-active:fill-green-600 group-active:duration-0 duration-300"
          >
            <path
              d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
              strokeWidth="1.5"
            ></path>
            <path d="M8 12H16" strokeWidth="1.5"></path>
            <path d="M12 16V8" strokeWidth="1.5"></path>
          </svg>
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-[340px]">
        {(titleProps) => (
          <div className="px-1 py-2 w-full">
            <p className="text-small font-bold text-foreground" {...titleProps}>
              Create An Assignment
            </p>
            <div className="mt-2 flex flex-col gap-2 w-full">
              <Input
                placeholder="Classroom Name"
                size="m"
                variant="bordered"
                value={className}
                onChange={(e) => setClassName(e.target.value)}
              />
              <Input
                placeholder="Classroom Password"
                size="m"
                variant="bordered"
                value={classPassword}
                onChange={(e) => setClassPassword(e.target.value)}
              />
              <Input
                placeholder="Classroom Type"
                size="m"
                variant="bordered"
                value={classType}
                onChange={(e) => setClassType(e.target.value)}
              />
              <Button color="success" onPress={createClassroom}>
                Create
              </Button>
            </div>
          </div>
        )}
      </PopoverContent>
    </Popover>
  );
}

