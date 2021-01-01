import React from "react";
import { Link } from "react-router-dom";
import "./MovieCard.css";

function MovieCard(props) {
  return (
    <div className="col-4">
      <div className="card">
        <h4>
          <b>{props.title}</b>
        </h4>
        <a href="{props.posterUrl}">url for movie</a>
        <img
          src={props.imgSrc}
          style={{ width: 'auto', height: 200 }}
        ></img>
        <p>description: {props.description}</p>
        <span>rate: {props.rate}</span>

        <Link to={`desc/${props.id}`} className="btn btn-primary" >
          See more...
        </Link>
      </div>
    </div>
  );
}

export default MovieCard;
