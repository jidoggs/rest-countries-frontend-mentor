import React from "react";

function Search({ value, setValue }) {
  return (
    <form>
      <label htmlFor="countryInputFilter"></label>
      <input
        type="search"
        name="countryInputFilter"
        id="countryInputFilter"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </form>
  );
}

export default Search;
