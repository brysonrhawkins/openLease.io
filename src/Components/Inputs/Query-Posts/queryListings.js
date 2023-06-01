import React, { useState, useEffect } from "react";
import {Form, ListGroup} from 'react-bootstrap';
import firebase from "../../../Auth/Firebase.config.js";
import './createQuery.css';

function CreateQuery() {
  const [inputValue, setInputValue] = useState("");
  const [data, setData] = useState([]);


  const db = firebase.firestore();

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  useEffect(() => {
    const unsubscribe = db
      .collection("Listings")
      .where("location", "==", inputValue)
      .onSnapshot((querySnapshot) => {
        const documents = [];
        querySnapshot.forEach((doc) => {
          documents.push({
            id: doc.id,
            ...doc.data(),
          });
        });
        setData(documents);
      });
    return unsubscribe;
  }, [inputValue, db]);

  return (
    <div>
      <Form>
        <Form.Group>
          <Form.Label>Search for Availabilty</Form.Label>
          <Form.Control type="text" placeholder="city" value={inputValue} onChange={handleInputChange}></Form.Control>
        </Form.Group>
      </Form>
      {data.length > 0 && (
        <ListGroup>
          {data.map((item)=>(
            <ListGroup.Item key={item.id}>
              {item.title}<br/>
              {item.priceMo}<br/>
              {item.description}
              </ListGroup.Item>
          ))}
        </ListGroup>
      )}
    </div>


    // <div className="query-input-card">
    //   <form className="query-input-form">
    //     <h1 className="query-title-title">Search Available Leases</h1>
    //     <label className="query-label-location">Search by Location: </label>
    //     <input
    //       classname="query-input-location"
    //       type="text"
    //       value={inputValue}
    //       onChange={handleInputChange}
    //     />
    //   </form>
    //   <div className="query-result-card">
    //     {" "}
    //     <h2 className="query-result-title">Database Search Results:</h2>
    //     <ul className="query-result-list">
    //       {data.map((item) => (
    //         <li className="query-result-item" key={item.id}>
    //           <h3 className="query-result-item-title">{item.title}</h3>
    //           <h5 className="query-result-item-quick-info">{item.priceMo} /mo, in {item.location}</h5>
    //           <img className="query-result-image" src={item.image} href="Image"></img>
    //           <h6>test</h6>
    //         </li>
    //       ))}
    //     </ul>
    //   </div>
    // </div>
  );
}

export default CreateQuery;
