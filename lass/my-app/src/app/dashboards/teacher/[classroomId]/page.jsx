"use client"
import Tables from '@/components/fun/table';
import { useRouter } from 'next/navigation';
import styles from '@/styles/ClassroomPage.module.css'; // Import the CSS module
import { collection, doc, getDoc, getDocs, onSnapshot, deleteDoc } from 'firebase/firestore';
import { db } from '@/app/firebase/firebase';
import { useEffect, useState } from 'react';
import Tables2 from '@/components/fun/tables2';
import Tables3 from '@/components/fun/tables3';
const ClassroomPage = ({ params }) => {
  const router = useRouter();
  const classroomId = params.classroomId;
  const [students, setStudents] = useState([]);
  const [studentsData, setStudentsData] = useState([]);
  const [classroomData, setClassroomData] = useState(null);

  const fetchClassroomData = async () => {
    try {
      const docRef = doc(db, "classrooms", classroomId);
      const docSnap = await getDoc(docRef);
  
      if (docSnap.exists()) {
        setClassroomData(docSnap.data());
      } else {
        console.log("No such document!");
      }
      
      const studentsSnapshot = await getDocs(collection(db, "classrooms", classroomId, "students"));
      const studentsData1 = studentsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setStudentsData(studentsData1);
    } catch (error) {
      console.error("Error fetching classroom data:", error);
    }
  };

  const deleteStudent = async (studentId) => {
    try {
      await deleteDoc(doc(db, "classrooms", classroomId, "students", studentId));
      console.log(`Student with ID ${studentId} deleted`);
      const classroomRef = doc(db, "classrooms", classroomId);
      await updateDoc(classroomRef, {
        students: arrayRemove(studentId)
      });
      console.log(`Student with ID ${studentId} removed from classroom students array`);
      fetchClassroomData(); // Refresh data after deletion

    } catch (error) {
      console.error("Error deleting student:", error);
    }
  };

  useEffect(() => {
    if (!classroomId) return;

    fetchClassroomData(); // Initial fetch

    const unsubscribe = onSnapshot(doc(db, "classrooms", classroomId), () => {
      fetchClassroomData(); // Fetch data on snapshot changes
    });

    return () => unsubscribe();
  }, [classroomId]);













  
  return (
    <div className={styles.container}>
      <div className={styles.leftContainer}>
        <div className={styles.topLeft}>
          <h2 className='font-bold '>Students</h2>
          <div className={styles.tableContainer}>
            {studentsData && <Tables2 classroomData={classroomData} studentsData={studentsData} onDelete={deleteStudent} />}
          </div>
        </div>
        <div className={styles.bottomLeft}>
          <h2 className='font-bold'>Assignment List</h2>
          <div className={styles.tableContainer}>
          <Tables3 classroomData={classroomData} studentsData={studentsData} onDelete={deleteStudent} />
          </div>
        </div>
      </div>
      <div className={styles.rightContainer}>
        <h1 className='font-bold'>Assignment Details:</h1>
        <div className={styles.tableContainer}>
          {/* Add assignment details table here */}
        </div>
      </div>
    </div>
  );
};

export default ClassroomPage;
