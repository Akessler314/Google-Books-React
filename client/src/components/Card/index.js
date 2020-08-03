import React from "react";
import "./style.css";

function Card(props) {
  return (
    <div
      className="card"

    >
      <img className="card-img-top" src={props.image} alt={`Cover Image of the Book: ${props.image}`}></img>
      <div className="card-body information">
        <h5 className="card-title">{`${props.image}`}</h5>
        <p className="Card-text">author(s): {props.phoneNum}</p>
        <p className="Card-text">link: {props.age}</p>
        <p className="Card-text">Description: {props.description}</p>
      </div>

    </div>
  );
}

export default Card;
