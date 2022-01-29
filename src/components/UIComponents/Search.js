import React from "react";
import SearchIcon from "../../static/images/SearchIcon";

function Search({ value, setValue }) {
  return (
    <form className="search__form">
      <label
        htmlFor="countryInputFilter"
        className="search__input--label"
      ></label>
      <SearchIcon />
      <input
        className="search__input"
        type="search"
        name="countryInputFilter"
        id="countryInputFilter"
        placeholder="Search for a country..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </form>
  );
}

export default Search;
