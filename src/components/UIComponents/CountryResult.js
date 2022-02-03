import React, { useContext } from "react";
import {
  checkYourNetwork,
  dataIsLoading,
} from "../../partials/helperFunctions";
import { FilterContext } from "../Pages/Home";
import CountryCard from "./CountryCard";
import ResultNotFound from "./ResultNotFound";

function CountryResult() {
  const [inputFilter, result] = useContext(FilterContext);

  const cards = result.data
    .filter((itm) =>
      itm?.name?.common?.toLowerCase().includes(inputFilter.toLowerCase())
    )
    .map((el, id) => {
      const { name, flags, population, region, capital, altSpellings } = el;
      const capitol = `${
        Array.isArray(capital)
          ? capital[0]
          : name.common.toLowerCase() === "macau"
          ? "Beijing"
          : "Washington, D.C."
      }`;

      return (
        <CountryCard
          key={id}
          linkTo={name.common.replace(/\s/g, "")}
          flag={flags.png}
          countryName={name.common.length < 22 ? name.common : altSpellings[0]}
          population={new Intl.NumberFormat("us-US").format(population)}
          region={region}
          capital={capitol}
          wholeElement={el}
        />
      );
    });

  return (
    <div className={`countries ${cards.length <= 4 ? "resultNotFound" : ""}`}>
      {result.isError?.message === "Network Error" && checkYourNetwork()}
      {result.isloading && dataIsLoading()}
      {cards.length > 0
        ? cards
        : result.isloading === false &&
          result.isError === null && <ResultNotFound />}
    </div>
  );
}

export default CountryResult;
