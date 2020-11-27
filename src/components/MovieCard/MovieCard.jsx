import React from "react";
import "./MovieCard.css";

function MovieCard(props) {
  return (
    <>
      <div className="card">
        <div class="container">
          <h4>
            <b>{props.title}</b>
          </h4>
          <p>{props.description}</p>
          <span>{props.rate}</span>
        </div>
      </div>
    </>
  );
}

export default MovieCard;
