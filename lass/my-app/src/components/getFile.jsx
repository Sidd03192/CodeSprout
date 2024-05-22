import React, { useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/storage';

const App = () => {
  const [inputValue, setInputValue] = useState('');

  // Function to handle input change
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  // Function to save input as a text file and upload to Firebase Storage
  const saveInputToFile = async () => {
    try {
      // Convert input to text file format
      const textFileContent = inputValue.toString(); // Convert input to string if needed
      const textFileBlob = new Blob([textFileContent], { type: 'text/plain' });

      // Generate a unique file name or use a predefined name
      const fileName = 'example.txt';

      // Upload file to Firebase Storage
      const storageRef = firebase.storage().ref();
      const fileRef = storageRef.child(fileName);
      await fileRef.put(textFileBlob);

      console.log('File uploaded successfully');
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  // Function to retrieve file content from Firebase Storage based on its name
  const getFileContent = async (fileName) => {
    try {
      // Get file reference
      const storageRef = firebase.storage().ref();
      const fileRef = storageRef.child(fileName);

      // Download file
      const fileSnapshot = await fileRef.getDownloadURL();
      const fileUrl = fileSnapshot.toString();
      const response = await fetch(fileUrl);

      // Read file content
      const fileContent = await response.text();

      console.log('File content:', fileContent);
      return fileContent;
    } catch (error) {
      console.error('Error retrieving file:', error);
      return null;
    }
  };

  // Function to handle file retrieval
  const handleRetrieveFile = async () => {
    const fileName = 'example.txt'; // Specify the file name to retrieve
    const fileContent = await getFileContent(fileName);
    if (fileContent) {
      // Do something with the file content, such as displaying it
      console.log('Retrieved file content:', fileContent);
    }
  };

  return (
    <div>
      <textarea value={inputValue} onChange={handleChange} />
      <button onClick={saveInputToFile}>Save Input to File</button>
      <button onClick={handleRetrieveFile}>Retrieve File Content</button>
    </div>
  );
};

export default App;
