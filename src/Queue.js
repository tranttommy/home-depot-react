import React, { Fragment } from "react";
import PropTypes from "prop-types";
// TODO:
// Fill out the list item card with Title, Image, year
// Create a button that will remove a movie from the queue
// create a button that will clear the queue

const Queue = ({ queue, removeFromQueue, clearQueue }) => (
  <Fragment>
    <h2>Queue</h2>
    <button onClick={clearQueue}>Clear</button>
    <ul>
      {queue.map(({ id, movie }) => (
        <li key={id}>
          <button onClick={() => removeFromQueue(id)}>-</button>
          {movie.title}
        </li>
      ))}
    </ul>
  </Fragment>
);

Queue.propTypes = {
  queue: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      movieId: PropTypes.number
    })
  )
};

Queue.defaultProps = {
  queue: []
};

export default Queue;
