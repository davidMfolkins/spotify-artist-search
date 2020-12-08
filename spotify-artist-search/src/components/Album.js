import React from 'react'
import './Album.scss';

function Album(props) {
  const { albums } = props

  const allAlbums = albums.map(album => {
    console.log(album.external_urls.spotify)
    return (
      <div className="albums">
        <img src={album.images[2] && album.images[2].url} alt={album.name} />
        <div>{album.name}</div>
        <div>Released on {album.release_date}</div>
        <div>{album.total_tracks} tracks</div>
        <a href={album.external_urls.spotify} target="_blank">PREVIEW</a>
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