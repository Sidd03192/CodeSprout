"use client"

import React, { useEffect, useState } from 'react'
import { storage } from '@/app/firebase/firebase';
import { ref, uploadBytes,listAll, getDownloadURL } from 'firebase/storage';
function page() {

    const imageListRef = ref(storage, "codes/")
    const [imageUpload, setImageUpload]= useState(null);
    const [imageList, setImageList]=useState([]);
    useEffect(()=>{
      listAll(imageListRef).then((response)=>{
        response.items.forEach((item)=>{
          getDownloadURL(item).then((url)=>{
            fetch(url).then()
            
          })
        })
      })
    },[])
    console.log(imageList)
    const uploadImage =()=>{
        if (imageUpload ==null) return ;
        const imageRef = ref(storage, `codes/codes `)
        uploadBytes(imageRef, imageUpload).then(()=>{
            alert("image uploaded");
        })
    }
  return (
    <div>
      <input type="file" onChange={(event)=>{setImageUpload(event.target.files[0])}}/>
      <button onClick={uploadImage}> upload </button>
   
    
   
   
   
    </div>
  )
}

export default page
