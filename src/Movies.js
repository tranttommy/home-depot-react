import React, { Fragment } from "react";
import PropTypes from "prop-types";

const Movies = ({ movies, addToQueue }) => (
  <Fragment>
    <h1>Available Movies</h1>
    <ul className="movie__list">
      {movies &&
        movies.map(movie => (
          <li key={movie.id}>
            <h2>
              <button className="button" onClick={() => addToQueue(movie)}>
                +
              </button>
              {movie.title}
            </h2>
            <img src={movie.poster} alt={`${movie.title} poster`} />
          </li>
        ))}
    </ul>
  </Fragment>
);

Movies.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      poster: PropTypes.string,
      releaseDate: PropTypes.string
    })
  )
};

Movies.defaultProps = {
  movies: []
};

export default Movies;
