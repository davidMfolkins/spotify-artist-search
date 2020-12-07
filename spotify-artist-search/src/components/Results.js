import React from 'react'

import './Results.scss';

function Results(props) {
  const { results } = props
  
  const result = results.map(artist => {
    console.log(artist)
    return artist.name
  })
  return (
    <div className="Results">
      {result}
    </div>
  );
}

export default Results;