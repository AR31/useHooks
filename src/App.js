import React from "react";
import "./App.css";
import MovieList from "./components/MovieList/MovieList";
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <>
    <div className="row"><p className="titleMovie">List Movie</p></div>
    <div className="MovieList">
      <MovieList></MovieList>
    </div>
    </>
  );
}

export default App;
