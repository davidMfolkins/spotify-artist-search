import React, { useEffect } from 'react'
import axios from 'axios'
import './Album.scss';

function Album(props) {
  const { albums } = props

  const allAlbums = albums.map(album => {
    console.log(album)
    return (
      <div className="albums">
        <div>{album.name}</div>
        <div>Released on {album.release_date}</div>
        <div>{album.total_tracks} tracks</div>
      </div>
    )
  })
  return (
    <div className="Album">
      {allAlbums}
    </div>
  );
}

export default Album;