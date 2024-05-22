    
// route.js

import { doc, getDocs,getDoc,collection,query,where } from "firebase/firestore"; // Import Firestore functions
import { db } from "../firebase/firebase"; // Import your Firebase configuration

// Function to retrieve user data based on userId
async function getUserData(userId) {
    console.log("Searching for user with ID:", userId);
    try {
        const docRef = doc(db, "users", userId); // Reference to the user document
        // console.log("Document reference:", docRef.path);
        const docSnap = await getDoc(docRef); // Fetch the document data

        if (docSnap.exists()) {
            const userData = docSnap.data(); // Extract user data
            console.log("User Data:", userData);
            return userData;
            // You can set the retrieved data to your state variables here
        } else {
            console.log("User data not found For user:"+ userId);
        }
    } catch (error) {
        console.error("Error fetching user data:", error);
    }
}
export async function getAllUsers() { // can be used by the teacher
    try {
        const querySnapshot = await getDocs(collection(db, "users"));
        const documents = [];
        querySnapshot.forEach((doc) => {
            documents.push({ id: doc.id, data: doc.data() });
        });
        console.log(documents)
        return documents;

    } catch (error) {
        console.error('Error getting documents:', error);
        return []; // Return an empty array in case of error
    }
}
export async function getStudentDocuments() { // gets all the students
    try {
        const q = query(collection(db, "users"), where("role", '==', "student"));
        const querySnapshot = await getDocs(q);
        console.log(querySnapshot)
        const documents = [];
        querySnapshot.forEach((doc) => {
            documents.push({ id: doc.id, data: doc.data() });
        });
        console.log(documents)
        return documents;
    } catch (error) {
        console.error('Error getting documents:', error);
        return []; // Return an empty array in case of error
    }
}
export default getUserData;

export async function getClassrooms(teacherId) {
    try {
      const classroomsRef = collection(db, "classrooms");
      const q = query(classroomsRef, where("teacher", "==", teacherId));
      const querySnapshot = await getDocs(q);
  
      const classroomsData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
  
      return classroomsData;
    } catch (error) {
      console.error("Error getting classrooms:", error);
      throw error; // Re-throw the error so it can be handled by the caller
    }
  }


  export async function getStudentsData(studentIds){
    try {
        console.log("geting data for "+studentIds)
      // Create an array of promises to fetch each student's data
      const studentPromises = studentIds.map(async (studentId) => {
        return await getUserData(studentId);
      });
  
      // Resolve all promises and filter out any null results
      const studentsData = await Promise.all(studentPromises);

      console.log("students data"+studentPromises);
      return studentsData.filter((student) => student !== null);
    } catch (error) {
      console.error("Error getting students data:", error);
      throw error; // Re-throw the error so it can be handled by the caller
    }
  };