import React, { useContext } from "react";
import { FilterContext } from "../Pages/Home";
import CountryCard from "./CountryCard";
import ResultNotFound from "./ResultNotFound";

function CountryResult({ result }) {
  const inputFilter = useContext(FilterContext);

  const cards = result
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
          linkTo={name.common}
          flag={flags.svg}
          countryName={name.common.length < 22 ? name.common : altSpellings[0]}
          population={new Intl.NumberFormat("us-US").format(population)}
          region={region}
          capital={capitol}
          wholeElement={el}
        />
      );
    });
  console.log(cards);

  return (
    <section
      className={`countries ${cards.length <= 4 ? "resultNotFound" : ""}`}
    >
      {cards.length > 0 ? cards : <ResultNotFound />}
    </section>
  );
}

export default CountryResult;
