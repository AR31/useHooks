import React from "react";
import "./App.css";
import MovieList from "./components/MovieList/MovieList";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Description from "./components/Description";
import Button from 'react-bootstrap/Button';
import Add from "./components/AddMovies/Add";


function App() {
  return (
    <>
      <div className="MovieList">
        <div className="row">
          <span className="titleMovie">List Movie</span>
        </div>
        <div className="row">
          <div className="col-4">
            <form class="form-inline my-2 my-lg-0">
              <input
                class="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                onChange={(e) => this.props.search(e.target.value)}
              />
              <button class="btn btn-outline-primary my-2 my-sm-0" type="submit">
                Search
            </button>
            </form>
          </div>
          <Add />
        </div>
        <div className="row">
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={MovieList} />
              <Route exact path="/desc/:id" component={Description} />
            </Switch>
          </BrowserRouter>
        </div>
      </div>
    </>
  );
}

export default App;
