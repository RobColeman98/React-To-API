import React, { Component, Fragment } from "react";
import "isomorphic-fetch";
import "es6-promise";
import Timeline from "./MovieTimeline";
import PeopleTimeline from "./PeopleTimeline";
import GhibliLogo from "../logo.png"

class App extends Component {
  state = {
    loadMovies: false,
    loadPeople: false,
    movies: [],
    people: [],
  };

  loadMovies = () => {
    fetch("https://ghibliapi.herokuapp.com/films/")
      .then((res) => res.json())
      // .then(res => console.log(res))
      .then((obj) => {
        this.setState({ movies: obj, loadMovies: true });
      });
  };

  loadPeople = () => {
    fetch("https://ghibliapi.herokuapp.com/people/")
      .then((res) => res.json())
      // .then(res => console.log(res))
      .then((obj) => {
        this.setState({ people: obj, loadPeople: true });
      });
  };

  render() {
    if (this.state.loadMovies == true) {
        console.log("loading movies")
      return (
        <Fragment>
       <img src={GhibliLogo} alt="studioGhibliLogo"/>
          <h1>Congratulations! You've enter...</h1>
          <h2>Films Galore!</h2>
          <p id="filmtag">
            Welcome To Films Galore, a place where you travel through time and
            relive legendary films!
          </p>
          <Timeline films={this.state.movies} />
        </Fragment>
        //loadMovies if statement
      );
    } else if (this.state.loadPeople == true) {
        console.log("loading people")
      return (
        <Fragment>
          <img src={GhibliLogo} alt="studioGhibliLogo"/>
          <h1>Congratulations! You've enter...</h1>
          <h2>The Actor Credits!</h2>
          <p id="filmtag">
            Here are some of the Actors that help made the movies possible!
          </p>
          <PeopleTimeline people={this.state.people} />
        </Fragment>
      );
      //loadPeople else if statemnt
    } else {
      return (
        <Fragment>
          <img src={GhibliLogo} alt="studioGhibliLogo"/>
          <h1>You Must Know the Password for Access!</h1>

          <button onClick={this.loadMovies} id="movie-button">
            Click to load movies!
          </button>
          <button onClick={this.loadPeople} id="load-people">
            Click to load people!
          </button>
        </Fragment>
        //loadMovies else statemnt
      );
    }
  }
}

export default App;
