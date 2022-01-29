import React from "react";
import { Link } from "react-router-dom";

function CountryCard({
  flag,
  countryName,
  population,
  region,
  capital,
  linkTo,
  wholeElement,
}) {
  return (
    <Link to={`/${linkTo}`} state={wholeElement}>
      <div className="card">
        <div
          className="card__flag"
          style={{ backgroundImage: `url(${flag})` }}
        ></div>
        <h3 className="card__country"> {countryName}</h3>
        <p className="card__sub-pop">
          Population:
          <span className="card__sub--result"> {population}</span>
        </p>
        <p className="card__sub-reg">
          Region:
          <span className="card__sub--result"> {region}</span>
        </p>
        <p className="card__sub-cap">
          Capital:
          <span className="card__sub--result"> {capital}</span>
        </p>
      </div>
    </Link>
  );
}

export default CountryCard;
