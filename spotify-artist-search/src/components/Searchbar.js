import React, { useState, useEffect } from 'react'

import './Searchbar.scss';

function Searchbar() {


  return (
    <div className="Searchbar">
      <form>
        <input
          type="text"
          name="search"
          placeholder="Search for an artist..."
        />
      </form>
    </div>
  );
}

export default Searchbar;