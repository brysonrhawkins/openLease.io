import React, { useState } from "react";
import firebase from "../../../Auth/Firebase.config.js";
import "firebase/storage";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function PostImage(){
    const [selectedFiles, setSelectedFiles] = useState([]);
    const storage = firebase.storage();

    const handleFileSelection = (e) => {
        setSelectedFiles(e.target.files);
    };

    const handleUpload = () => {
        for(const file of selectedFiles){
            const storageRef = storage.ref(`images/${file.name}`);
            storageRef.put(file);
        }
        setSelectedFiles([]);
    };

    return(
        <div>
            <input type="file" multiple onChange={handleFileSelection}/>
            <button onClick={handleUpload}>Upload</button>
        </div>
    )
}

export default PostImage;