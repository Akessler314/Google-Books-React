import React from "react";
import "./style.css";

function Card(props) {
  return (
    <div className="card" data={props.id}>
      <div className="row thumbnail">
      <img className="card-img-top bookThumb" src={props.image} alt={`Cover Image of the Book: ${props.title}`}></img>
      </div>
      <div className="card-body information">
        <h5 className="card-title">{`${props.title}`}</h5>
        <p className="Card-text">Author(s): {props.authors}</p>
        <p className="Card-text">Description: {props.description}</p>
        <a className="link" href = {props.link} target= "_blank">Link to Book on Google Books</a>
      </div>
      <div className="row">
        <button type="submit" className="btn saveBtn">Save</button>
      </div>

    </div>
  );
}

export default Card;
