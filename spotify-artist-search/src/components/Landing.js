import './Landing.scss';
import React, { useEffect, useState } from 'react';
import axios from 'axios'
import Searchbar from './Searchbar'

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
    const [value, setValue] = useState("")
  const [results, setResults] = useState("")

  useEffect(() => {
    const testURL = `https://api.spotify.com/v1/search?q=${value}&type=artist`;
    axios.get(testURL).then(response => {
      console.log(response.data.results);
      setResults([...response.data.results])
    });
  }, [value])

  useEffect(() => {
    let _token = hash.access_token;
    if (_token) {
      setToken(_token)
    }
  }) 
    
    return (
      <div className="Landing">
        {!token && (
          <a
            className="btn btn--loginApp-link"
            href={`${authUrl}?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=token&show_dialog=true`}
          >
            Login to Spotify
          </a>
        )}
        {token && (
          <Searchbar />
        )}
      </div>
    );
}

export default Landing;