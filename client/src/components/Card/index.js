import React from "react";
import "./style.css";

function Card(props) {
  return (
    <div
      className="card"
      
    >
      <img className="card-img-top" src= {props.image} alt={`Employee at Kessler Corp: ${props.firstName} ${props.lastName}`}></img>
      <div className="card-body information">
      <h5 className="card-title">{`${props.firstName} ${props.lastName}`}</h5>
  <p className ="Card-text">Email: {props.email}</p>
    <p className ="Card-text">Phone: {props.phoneNum}</p>
    <p className ="Card-text">Age: {props.age}</p>
    <p className ="Card-text">SSN: {props.ssn}</p>
      </div>
   
    </div>
  );
}

export default Card;
