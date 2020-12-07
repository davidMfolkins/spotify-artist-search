import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Album from './Album';
import './Results.scss';

function Results(props) {
  const { results, token } = props
  const [id, setId] = useState("")
  const [album, setAlbum] = useState([])

  useEffect(() => {
    if (results[0] && results[0].id) {
      setId(results[0].id)
    }
  })
  const albumDisplay = function () {
    const config = {
      headers: { Authorization: `Bearer ${token}` }
    };
    const URL = `https://api.spotify.com/v1/artists/${id}/albums`;
    axios.get(URL, config).then(response => {
      setAlbum(response.data.items[0])
    });
  }
  const result = results.map(artist => {
    return (
      <div className="artists" onClick={e => albumDisplay()}>
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
      <Album album={album} />
    </div>
  );
}

export default Results;