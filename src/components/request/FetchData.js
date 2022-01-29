import axios from "axios";
import React, { useEffect, useState } from "react";
import CountryResult from "../UIComponents/CountryResult";

function FetchData({ region }) {
  const [result, setResult] = useState([]);
  useEffect(() => {
    axios
      .get(
        `${
          region === "Filter by Region"
            ? "https://restcountries.com/v3.1/all"
            : `https://restcountries.com/v3.1/region/${region}`
        }`
      )
      .then((res) => setResult(res.data))
      .catch((error) => console.warn(error));
  }, [region]);

  return <CountryResult result={result} />;
}

export default FetchData;
