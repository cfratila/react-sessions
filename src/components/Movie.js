import React from 'react';

const movie = ({ name, releaseYear, director, children = null }) => (
  <div>
    {name && <h2> Movie name: {name} </h2>}
    {releaseYear &&  <h3> Release year: {releaseYear} </h3>}
    {director && <h3> Director: {director} </h3>}
    {children}
  </div>
);

export default movie;
