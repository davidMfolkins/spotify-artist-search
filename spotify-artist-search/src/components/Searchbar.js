import React, { useEffect, useState, useCallback } from 'react'
import useDebounce from "../hooks/useDebounce";
import searchIcon from "../images/Search_Icon.png"

import './Searchbar.scss';

function Searchbar(props) {

  const [value, setValue] = useState("")
  const query = useDebounce(value, 400);

  const onSearch = useCallback(props.onSearch, [query]);

  useEffect(() => {
    onSearch(query);
  }, [query, onSearch]);


  return (
    <div className="searchBarContainer">
        <form onSubmit={event => event.preventDefault()}>
          <input className="searchBar"
            type="text"
            name="search"
            placeholder="Search for an artist..."
            spellcheck="false"
            value={value}
            onChange={event => setValue(event.target.value)}
          />
        </form>
        <img className="searchIcon" src={searchIcon} alt="search-icon" />
    </div>
  );
}

export default Searchbar;