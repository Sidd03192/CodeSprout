"use client"

import React, { useEffect, useState } from "react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Tooltip, Input, Spinner } from "@nextui-org/react";
import { EyeIcon } from "./EyeIcon";
import { EditIcon } from "./EditIcon";
import { DeleteIcon } from "./DeleteIcon";
import { ScrollShadow } from "@nextui-org/react";
import { Search } from "lucide-react";
import "@/styles/globals.css";
import Add2 from "./AddAssignment";

const columns = [
  { key: "name", label: "Name" },
  { key: "students", label: "Grade" },
  { key: "code", label: "Actions" },
];

export default function Tables3({ studentsData, onDelete, classroomData }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredStudents = studentsData.filter((student) =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 300); // Set loading to false after half a second

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);

  if (loading) return <Spinner color="success" />;

  return (
    <>
    <div className="flex">
    <Input
        isDisabled={studentsData.length === 0}
        isClearable
        startContent={<Search className="text-white/90" />}
        className='hover:border-2 border-emerald-500/70 border-3 border-emerald-500/70 dark rounded-xl mb-3 mt-8 w-[90%]'
        value={searchTerm}
        onChange={handleSearchChange}
        placeholder="Search students..."
      />
      <div  className="mt-8 ml-3">
      <Add2/>
      </div>
        
    </div>
      
      <ScrollShadow hideScrollBar className="dark text-white h-full">
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

            <TableBody className=" " emptyContent={"No rows to display."}>
              {filteredStudents.length === 0 ? (
                []
              ) : (
                filteredStudents.map((student) => (
                  <TableRow key={student.id}>
                    <TableCell>{student.name}</TableCell>
                    <TableCell>{student.grade}</TableCell>
                    <TableCell>
                      <div className="relative flex items-center gap-2">
                        <Tooltip
                          closeDelay={0}
                          content={
                            <div className="px-1 py-2 w-[200px]">
                              <div className="text-small font-bold">Submitted Assignments</div>
                              {student.submitted.length === 0 ? (
                                <div className="dark">
                                  No assignments submitted
                                </div>
                              ) : (
                                <ScrollShadow hideScrollBar className="h-full max-h-[200px]">
                                  <Table aria-label="Assignment list" className="" shadow={false}>
                                    <TableHeader>
                                      <TableColumn>Assignment</TableColumn>
                                    </TableHeader>
                                    <TableBody>
                                      {classroomData.assignments.map((assignment, index) => (
                                        <TableRow key={index}>
                                          <TableCell
                                            style={{
                                              color: student.submitted.includes(assignment) ? 'green' : 'red'
                                            }}
                                          >
                                            {assignment}
                                          </TableCell>
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
                        
                        <Tooltip color="danger" content="Delete student">
                          <span className="text-lg text-danger cursor-pointer active:opacity-50">
                            <DeleteIcon onClick={() => onDelete(student.id)} />
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
