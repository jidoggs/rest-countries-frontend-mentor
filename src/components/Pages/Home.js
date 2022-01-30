import React, { createContext, useState } from "react";
import FetchData from "../request/FetchData";
import Search from "../UIComponents/Search";
import Select from "../UIComponents/Select";

export const FilterContext = createContext(null);
function Home() {
  const initialResultState = {
    data: [],
    isloading: true,
    isError: null,
  };
  const [inputFilter, setInputFilter] = useState("");
  const [regionFilter, setRegionFilter] = useState("filter by region");
  const [result, setResult] = useState(initialResultState);

  const onChangeSelectValue = (e) => {
    setRegionFilter(e.target.value);
    setResult(initialResultState);
  };

  return (
    <main className="home">
      <Search value={inputFilter} setValue={setInputFilter} />
      <Select
        selectValue={regionFilter}
        changeSelectValue={onChangeSelectValue}
      />
      <FilterContext.Provider value={[inputFilter, result]}>
        <FetchData region={regionFilter} setResult={setResult} />
      </FilterContext.Provider>
    </main>
  );
}

export default Home;
