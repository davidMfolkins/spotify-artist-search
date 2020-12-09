import './Landing.scss';
import React, { useEffect, useState } from 'react';
import axios from 'axios'
import Searchbar from './Searchbar'
import Results from './Results'
import icon from '../images/Spotify_Icon_Green.png'


export const authUrl = 'https://accounts.spotify.com/authorize';

const clientId = "ae3e3f2a31ec4ee49017d7d61db6602b";
const redirectUri = "http://localhost:3000/";


const hash = window.location.hash
  .substring(1)
  .split("&")
  .reduce(function (initial, item) {
    if (item) {
      var parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);
    }
    return initial;
  }, {});
window.location.hash = "";

function Landing() {
  const [token, setToken] = useState(null)
  const [query, setQuery] = useState("")
  const [results, setResults] = useState([])

  const config = {
    headers: { Authorization: `Bearer ${token}` }
  };
  useEffect(() => {
    const URL = `https://api.spotify.com/v1/search?q=${query}&type=artist`;
    axios.get(URL, config).then(response => {
      setResults([...response.data.artists.items])

    });
  }, [query])

  useEffect(() => {
    let _token = hash.access_token;
    if (_token) {
      setToken(_token)
    }
  })

  return (
    <div className="landing">
      <div className="loginSearch">
        {!token && (
          <a className="buttonContainer" href={`${authUrl}?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=token&show_dialog=true`}>
            <p>
              Login
          </p>
            <img className="spotifyIcon" src={icon} alt="spotify-icon" />
          </a>
        )}
        {token && (
          <Searchbar onSearch={query => setQuery(query)} />
        )}
      </div>
      <div>
        <Results results={results} token={token} />
      </div>
    </div>
  );
}

export default Landing;