import React from "react";
import MovieCard from "../MovieCard/MovieCard";
import film1 from "../../img/film1.jpg";
import film2 from "../../img/film2.jpg";
import film3 from "../../img/film3.jpg";
import film4 from "../../img/film4.jpg";

var listMovies = [
  {
    id: "film1",
    title: "My the best compaign win",
    description: "action movie",
    imgSrc: film1,
    posterUrl: "http://film1.com",
    rate: "4",
  },
  {
    id: "film2",
    title: "Big business just cut the wrong guys",
    description: "action movie",
    imgSrc: film2,
    posterUrl: "http://film2.com",
    rate: "2",
  },
  {
    id: "film3",
    title: "Coffee and kareem",
    description: "action movie",
    imgSrc: film3,
    posterUrl: "http://film1.com",
    rate: "3",
  },
  {
    id: "film4",
    title: "waves",
    description: "action movie",
    imgSrc: film4,
    posterUrl: "http://film4.com",
    rate: "4",
  },
];
const items = listMovies.map((item) => {
  return (
    <>
      <MovieCard
        id={item.id}
        title={item.title}
        description={item.description}
        imgSrc={item.imgSrc}
        posterUrl={item.posterUrl}
        rate={item.rate}
      ></MovieCard>
    </>
  )
});
function MovieList() {
  return (items);
}

export default MovieList;
