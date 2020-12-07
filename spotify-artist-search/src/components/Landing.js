import './Landing.scss';
import React, { Component } from 'react';

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

class Landing extends Component {
  constructor() {
    super();
    this.state = {
      token: null
    }
  }
  componentDidMount() {
    let _token = hash.access_token;
 
    if (_token) {
      this.setState({
        token: _token
      });
    }
  }
  render() {
    return (
      <div className="Landing">
        {!this.state.token && (
          <a
            className="btn btn--loginApp-link"
            href={`${authUrl}?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=token&show_dialog=true`}
          >
            Login to Spotify
          </a>
        )}
        {this.state.token && (
          console.log("hello")
        )}
      </div>
    );
  }
}

export default Landing;