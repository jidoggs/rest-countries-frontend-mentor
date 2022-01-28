import React, { createContext, useState } from "react";
import FetchData from "../request/FetchData";
import Search from "../UIComponents/Search";
import Select from "../UIComponents/Select";

export const FilterContext = createContext(null);
function Home() {
  const [inputFilter, setInputFilter] = useState("");
  const [regionFilter, setRegionFilter] = useState("asia");

  return (
    <main>
      <Search value={inputFilter} setValue={setInputFilter} />
      <Select selectValue={regionFilter} changeSelectValue={setRegionFilter} />
      <FilterContext.Provider value={inputFilter}>
        <FetchData region={regionFilter} inputFilter={inputFilter} />
      </FilterContext.Provider>
    </main>
  );
}

export default Home;
