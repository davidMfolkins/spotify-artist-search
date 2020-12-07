import React, { useEffect } from 'react'
import axios from 'axios'
import './Album.scss';

function Album(props) {
  const {album} = props
  console.log(album)
  return (
    <div className="Album">
      <div>{album.name}</div>
      <div>Released on {album.release_date}</div>
      <div>{album.total_tracks} tracks</div>
    </div>
  );
}

export default Album;