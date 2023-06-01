import React, { useState } from "react";
import firebase from "../../../Auth/Firebase.config.js";
import "firebase/storage";
import { Button } from 'react-bootstrap';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./createListing.css";

function NewListing() {
  const [listingTitle, setListingTitle] = useState("");
  const [listingDescription, setListingDescription] = useState("");
  const [listingLocation, setListingLocation] = useState("");
  const [listingPriceMo, setListingPriceMo] = useState("");
  const [selectedFiles, setSelectedFiles] = useState([]);

  const storage = firebase.storage();
  const db = firebase.firestore();

  const handleFileSelection = (e) => {
    setSelectedFiles(e.target.files);
};


  const submit = (e) => {
    e.preventDefault();

    db.collection("Listings").add({
      title: listingTitle,
      description: listingDescription,
      location: listingLocation,
      priceMo: listingPriceMo,
    });

    
    for(const file of selectedFiles){
      const time = Date();
      const storageRef = storage.ref(`images/${file.name}${time}`);
      storageRef.put(file);

    }

    setListingTitle("");
    setListingDescription("");
    setListingLocation("");
    setListingPriceMo("");
    setSelectedFiles([]);

    toast.success("Lease Posted!");
  };
  
  return (
    <div className="listing-card">
      <ToastContainer />
      <form className="listing-card-form">
        <div className="listing-card-title">
          <h2 className="listing-card-title-text">Post a Lease </h2>
        </div>
        <div className="listing-card-info">
          <h3 className="listing-card-info-title-text">
            Required Info:{" "}
            <h6 className="listing-card-info-subtext">
              Let people know exactly what to expect.
            </h6>
          </h3>
        </div>
        <div className="listing-card-input-one">
          <input
            type="text"
            placeholder="Title"
            value={listingTitle}
            onChange={(e) => setListingTitle(e.target.value)}
          />
        </div>
        <div className="listing-card-input-two">
          <input
            type="text"
            class="description"
            placeholder="description"
            value={listingDescription}
            onChange={(e) => setListingDescription(e.target.value)}
          />
        </div>
        <div className="listing-card-input-three">
          <input
            type="text"
            class="location"
            placeholder="location"
            maxLength={50}
            size={50}
            value={listingLocation}
            onChange={(e) => setListingLocation(e.target.value)}
          />
        </div>
        <div className="listing-card-input-four">
          <input
            type="text"
            placeholder="price (monthly)"
            maxLength={10}
            size={10}
            value={listingPriceMo}
            onChange={(e) => setListingPriceMo(e.target.value)}
          />
        </div>
        <div className="listing-card-input-five">
            <input type="file" multiple onChange={handleFileSelection}/>
        </div>
        <div className="listing-card-submit-button">
          <Button onClick={submit}>Post Lease</Button>
        </div>
      </form>
    </div>
  );
}

export default NewListing;
