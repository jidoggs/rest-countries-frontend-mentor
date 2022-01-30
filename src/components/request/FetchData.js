import axios from "axios";
import React, { useEffect, useState } from "react";
import CountryResult from "../UIComponents/CountryResult";

function FetchData({ region }) {
  const [result, setResult] = useState({
    data: [],
    isloading: true,
    isError: null,
  });
  useEffect(() => {
    axios
      .get(
        `${
          region === "Filter by Region"
            ? "https://restcountries.com/v3.1/all"
            : `https://restcountries.com/v3.1/region/${region}`
        }`
      )
      .then((res) =>
        setResult((prev) => ({
          ...prev,
          data: res.data,
          isloading: false,
          isError: null,
        }))
      )
      .catch((error) =>
        setResult((prev) => ({
          ...prev,
          isError: error,
          isloading: false,
        }))
      );
  }, [region]);

  return <CountryResult result={result} />;
}

export default FetchData;
