import React, { useEffect, useState, useCallback } from 'react'
import useDebounce from "../hooks/useDebounce";

import './Searchbar.scss';

function Searchbar(props) {

  const [value, setValue] = useState("")
  const query = useDebounce(value, 400);

  const onSearch = useCallback(props.onSearch, [query]);

  useEffect(() => {
    onSearch(query);
  }, [query, onSearch]);


  return (
    <div className="Searchbar">
      <form onSubmit={event => event.preventDefault()}>
        <input
          type="text"
          name="search"
          placeholder="Search for an artist..."
          value={value}
          onChange={event => setValue(event.target.value)}
        />
      </form>
    </div>
  );
}

export default Searchbar;