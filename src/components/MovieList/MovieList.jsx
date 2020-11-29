import React from "react";
import MovieCard from "../MovieCard/MovieCard";

var listMovies = [
  {
    title: "title1",
    description: "description1",
    posterUrl: "http://film1.com",
    rate: "1",
  },
  {
    title: "title2",
    description: "description2",
    posterUrl: "http://film2.com",
    rate: "2",
  },
  {
    title: "title3",
    description: "description3",
    posterUrl: "http://film1.com",
    rate: "3",
  },
  {
    title: "title4",
    description: "description4",
    posterUrl: "http://film4.com",
    rate: "4",
  },
];
const items = listMovies.map((item) => {
  return (<MovieCard
    title={item.title}
    description={item.description}
    posterUrl={item.posterUrl}
    rate={item.rate}
  ></MovieCard>)
});
function MovieList() {
  return (items);
}

export default MovieList;
