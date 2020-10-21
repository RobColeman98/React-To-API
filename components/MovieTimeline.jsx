import React, { Fragment } from "react";
import MovieCard from "./MovieCard";

class Timeline extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    //figure out how to reference the movie array, map over it, pass it to MovieCard component
    return this.props.films.map(movie => (
      <h1>
        <MovieCard movie={movie} />
      </h1>
    ));
  }
}

export default Timeline;
