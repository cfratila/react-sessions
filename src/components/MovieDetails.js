import React from 'react';

const movieDetails = ({ oscarsNominations, oscarsWon}) => (
  <div>
    {oscarsNominations && <h4>Oscars Nominations: { oscarsNominations }</h4>}
    {oscarsWon && <h4>Oscars Won: { oscarsWon }</h4>}
  </div>
);

export default movieDetails;
