    
// route.js

import { doc, getDoc } from "firebase/firestore"; // Import Firestore functions
import { db } from "../firebase/firebase"; // Import your Firebase configuration

// Function to retrieve user data based on userId
async function getUserData(userId) {
    console.log(userId);
    try {
        const docRef = doc(db, "users", userId); // Reference to the user document
        const docSnap = await getDoc(docRef); // Fetch the document data

        if (docSnap.exists()) {
            const userData = docSnap.data(); // Extract user data
            console.log("User Data:", userData);
            // You can set the retrieved data to your state variables here
        } else {
            console.log("User data not found.");
        }
    } catch (error) {
        console.error("Error fetching user data:", error);
    }
}

export default getUserData;
