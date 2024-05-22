"use client"
import React, { useEffect, useState } from 'react';
import { storage } from '@/app/firebase/firebase';
import { ref, uploadBytes, listAll, getDownloadURL } from 'firebase/storage';
import { getFileData } from '../api/route';

function Page() {
  const imageListRef = ref(storage, "codes/");
  const [fileUpload, setFileUpload] = useState(null);
  const [fileContent, setFileContent] = useState("");

  // console.log(getFileData("codes"));

  const uploadAndReadFile = () => {
    if (fileUpload == null) return;

    const fileRef = ref(storage, `codes/${fileUpload.name}`);
    uploadBytes(fileRef, fileUpload).then(() => {
      alert("File uploaded");

      getDownloadURL(fileRef).then((url) => {
        fetch(url)
          .then(response => response.text())
          .then(data => {
            setFileContent(data);
          })
          .catch(error => {
            console.error("Error reading file:", error);
          });
      });
    });
  };

  return (
    <div>
      <input type="file" onChange={(event) => setFileUpload(event.target.files[0])} />
      <button onClick={uploadAndReadFile}>Upload</button>
      <div>
        <h2>File Content:</h2>
        <pre>{fileContent}</pre>
      </div>
    </div>
  );
}

export default Page;
