import axios from "axios";
import React, { useEffect } from "react";
import CountryResult from "../UIComponents/CountryResult";

function FetchData({ region, setResult }) {
  useEffect(() => {
    axios
      .get(
        `${
          region === "filter by region"
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
  }, [region, setResult]);

  return <CountryResult />;
}

export default FetchData;
