import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Album from './Album';
import './Results.scss';

function Results(props) {
  let { results, token } = props
  const [id, setId] = useState("")
  const [albums, setAlbums] = useState([])

  useEffect(() => {
    if (results[0] && results[0].id) {
      setId(results[0].id)
    }
  })

  const albumDisplay = async function () {
    console.log("hello")
    const config = {
      headers: { Authorization: `Bearer ${token}` }
    };
    const URL = `https://api.spotify.com/v1/artists/${id}/albums`;
    await axios.get(URL, config).then(response => {
      setAlbums([...response.data.items])
    });
  }
  const result = results.map(artist => {
    return (
        <div className="artists" onClick={e => albumDisplay()}>
          <img className="resultImages" src={artist.images[1] && artist.images[1].url} alt="No image available" />
          <div className="artistName">{artist.name}</div>
          <div>{artist.followers.total.toLocaleString()} followers</div>
          <div>{artist.popularity} popularity</div>
        </div>
    )
  })
  return (
    <div className="results">
      {result}
      <Album albums={albums} />
    </div>
  );
}

export default Results;