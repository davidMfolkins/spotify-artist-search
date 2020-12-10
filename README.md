# Spotify Artist Search

A React single page application (SPA) for searching artists and viewing their albums

!["login"](https://github.com/davidMfolkins/spotify-artist-search/blob/master/spotify-artist-search/docs/loginpage.png?raw=true)

!["searchflow"](https://github.com/davidMfolkins/spotify-artist-search/blob/master/spotify-artist-search/docs/searchflow.gif?raw=true)

!["album"](https://github.com/davidMfolkins/spotify-artist-search/blob/master/spotify-artist-search/docs/albumpage.png?raw=true)


## Functionality

- Users can login using the account associated with their spotify account
- Once logged in, users can search for any artist on spotify. Search results update on key press
- Users can select an artist to view all of their albums
- Each album has a redirect button that brings the user to the Spotify album page where users can preview the album

## Getting Started
- in the root folder, `npm install` to grab all of the dependencies
- in the root folder, open a terminal and type `npm start` to start react server
- navigate to `http://localhost:3000/` in your browser to view app

## Dependencies
- React
- Node-Sass
- Axios

## Issues
- After clicking on album, user cannot search for a new artist and must refresh the app to search a new artist
- Spotify's api gives some broken images for artist and album artwork
- Spotify's api will sometimes give duplicate results because of some minor difference in content
