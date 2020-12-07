import React, { useEffect } from 'react'
import axios from 'axios'
import './Album.scss';

function Album(props) {
  const {album} = props
  console.log(album)
  return (
    <div className="Album">
      <div></div>
    </div>
  );
}

export default Album;