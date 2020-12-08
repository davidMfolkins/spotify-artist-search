import React from 'react'
import './Album.scss';

function Album(props) {
  const { albums } = props

  const allAlbums = albums.map(album => {
    console.log(album.external_urls.spotify)
    return (
      <div className="albums">
        <img className="albumImages" src={album.images[1] && album.images[1].url} alt={album.name} />
        <div className="albumName">{album.name}</div>
        <div>Released on {album.release_date}</div>
        <div>{album.total_tracks} tracks</div>
        <a href={album.external_urls.spotify} target="_blank">PREVIEW</a>
      </div>
    )
  })
  return (
    <div className="album">
      {allAlbums}
    </div>
  );
}

export default Album;