import React from 'react'

import './Results.scss';

function Results(props) {
  const { results } = props
  
  const result = results.map(artist => {
    return (
      <div className="artists">
        <img src={artist.images[1] && artist.images[1].url} alt={artist.name} />
        <div>{artist.name}</div>
        <div>{artist.followers.total} followers</div>
        <div>{artist.popularity} popularity</div>
      </div>
      )
  })
  return (
    <div className="Results">
      {result}
    </div>
  );
}

export default Results;