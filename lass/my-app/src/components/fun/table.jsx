"use client"

import React, { useEffect, useState } from "react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Spinner, Tooltip, Popover, PopoverTrigger, PopoverContent, Button, Snippet, Input } from "@nextui-org/react";
import { getClassrooms } from "@/app/api/route";
import { EditIcon } from "./EditIcon";
import { DeleteIcon } from "./DeleteIcon";
import { EyeIcon } from "./EyeIcon";
import { ScrollShadow } from "@nextui-org/react";
import { db } from "@/app/firebase/firebase";
import { arrayRemove, collection, deleteDoc, doc, getDocs, onSnapshot, updateDoc } from "firebase/firestore";
import getUserData from "@/app/api/route";
import { getAuth } from "firebase/auth";
import "@/styles/globals.css";
import { Search } from "lucide-react";
const columns = [
  { key: "name", label: "Class Name" },
  { key: "students", label: "Students" },
  { key: "code", label: "Class Code" },
  { key: "options", label: "Actions" }
];

const columns2 = [
  { key: "name", label: "Name" },
  { key: "students", label: "Grade" },
  { key: "code", label: "Actions" },
 
];
export default function Tables(props) {
  const { classrooms } = props;
  const [classroomData, setClassroomData] = useState([]);
  const [fetching, setFetching] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [students, setStudents]=useState([]);
  

  let studentsData = [];

  const fetchClassrooms = async () => {
    const auth = getAuth();
    const user = auth.currentUser;

    if (!user) return;

    const teacherId = user.uid;
    
    try {
      const classroomsData = await getClassrooms(teacherId);
      setClassroomData(classroomsData);
      setFetching(true);
      setStudents(classroomsData.students); // need to add names of students into this array when we make a new student
      studentsData= props.studentsData;
      
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

  const deleteStudent=async(studentId)=>{

  }
  const deleteClassroom = async (classroomId) => {
    console.log(classroomId);
    try {
      // Delete the classroom document
      await deleteDoc(doc(db, "classrooms", classroomId));
      console.log("Classroom deleted with ID: " + classroomId);
  
      // Update the teacher's classrooms array
      const teacherRef = doc(db, "users", getAuth().currentUser.uid);
      await updateDoc(teacherRef, {
        classrooms: arrayRemove(classroomId)
      });
      console.log("Classroom removed from teacher's classrooms array");
    } catch (error) {
      console.error('Error deleting classroom:', error.message);
    }
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredClassrooms = classroomData.filter((classroom) =>
    classroom.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const filteredStudents = studentsData.filter((student) =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  if (!fetching) {
    return <Spinner color="secondary" label="Loading Classrooms" />;
  }

    return (
    <>
      <Input
        isDisabled={classroomData.length === 0}
        isClearable
        startContent={<Search className="text-white/90" />}
        className='hover:border-2 border-emerald-500/70 border-3 border-emerald-500/70 w-[60%] dark rounded-xl mb-3'
        value={searchTerm}
        onChange={handleSearchChange}
        placeholder="Search classrooms..."
      />

      <ScrollShadow hideScrollBar className="w-[65%] dark text-white max-w-[90%] h-full max-h-[400px]">
        <div className="">
          <Table
            color={"success"}
            selectionMode="single"
            defaultSelectedKeys={["2"]}
            aria-label="Example table with dynamic content"
          >
            <TableHeader columns={columns}>
              {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
            </TableHeader>

            <TableBody className=" "emptyContent={"No rows to display."}>
              {filteredClassrooms.length === 0 ? (
                []
              ) : (
                filteredClassrooms.map((classroom) => (
                  <TableRow key={classroom.id}>
                    <TableCell>{classroom.name}</TableCell>
                    <TableCell>{classroom.students.length}</TableCell>
                    <TableCell>
                      <Snippet symbol={""}>{classroom.password}</Snippet>
                    </TableCell>
                    <TableCell>
                      <div className="relative flex items-center gap-2">
                        <Tooltip
                          closeDelay={0}
                          content={
                            <div className="px-1 py-2">
                              <div className="text-small font-bold">Classroom Students</div>
                              {classroom.students.length === 0 ? (
                                <div className="dark">
                                  Ask your students to join this class! <br />
                                  Once they do, they will appear here!
                                </div>
                              ) : (
                                <ScrollShadow hideScrollBar className="h-full max-h-[200px]">
                                  <Table aria-label="Student list" className="" shadow={false}>
                                    <TableHeader>
                                      <TableColumn>Student Name</TableColumn>
                                    </TableHeader>
                                    <TableBody>
                                      {classroom.students.map((student, index) => (
                                        <TableRow key={index}>
                                          <TableCell>{student}</TableCell>
                                        </TableRow>
                                      ))}
                                    </TableBody>
                                  </Table>
                                </ScrollShadow>
                              )}
                            </div>
                          }
                        >
                          <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                            <EyeIcon />
                          </span>
                        </Tooltip>

                        <Tooltip content="Edit classroom">
                          <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                            <EditIcon />
                          </span>
                        </Tooltip>
                        <Tooltip color="danger" content="Delete classroom">
                          <span className="text-lg text-danger cursor-pointer active:opacity-50">
                            <DeleteIcon onClick={() => deleteClassroom(classroom.id)} />
                          </span>
                        </Tooltip>
                      </div>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>
      </ScrollShadow>
    </>
    );



}
