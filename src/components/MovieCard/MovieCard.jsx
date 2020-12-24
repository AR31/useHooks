import React from "react";
import "./MovieCard.css";
import { Button } from 'react-bootstrap';

function MovieCard(props) {
  return (
    <div className="card">
      <div className="container">
        <h4>
          <b>{props.title}</b>
        </h4>
        <a href="{props.posterUrl}">url for movie</a>
        <img
          src={props.imgSrc}
          style={{ width: 300, height: 200 }}
        ></img>          
        <p>{props.description}</p>
        <span>{props.rate}</span>
      </div>
    </div>
  );
}

export default MovieCard;
