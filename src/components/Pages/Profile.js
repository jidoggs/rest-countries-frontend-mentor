import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { displayAll, displayOne } from "../../partials/helperFunctions";
import BackIcon from "../../static/images/BackIcon";

function Profile() {
  const [borderCountries, setBorderCountries] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();

  const { state, pathname } = location;

  const {
    borders,
    name,
    population,
    region,
    subregion,
    capital,
    tld,
    currencies,
    languages,
    flags,
  } = state;

  useEffect(() => {
    const fetchBorderCountries = async (itm) => {
      const result = await axios(`https://restcountries.com/v3.1/alpha/${itm}`);
      setBorderCountries((prevData) => [...prevData, result.data[0]]);
    };
    if (borders) {
      borders.forEach((borderCountry) => {
        fetchBorderCountries(borderCountry);
      });
    }
  }, [pathname, borders]);

  const mark = borderCountries.map((itm, i) => {
    return (
      <Link
        key={i}
        to={`/${itm.name.common}`}
        state={itm}
        onClick={() => setBorderCountries([])}
        className="profile__border--link"
      >
        {itm.name.common}
      </Link>
    );
  });

  return (
    <main className="profile">
      <button
        className="profile__back-btn"
        onClick={() => {
          navigate(-1);
          setBorderCountries([]);
        }}
        style={{ width: 136 }}
      >
        <BackIcon />
        <span>Back</span>
      </button>
      <div
        className="profile__flag"
        style={{ backgroundImage: `url(${flags.png})` }}
      ></div>
      <section className="profile__info">
        <h2 className="profile__name">{name.common}</h2>
        <div className="profile__info--left">
          <p className="profile__sub">
            Native Name:
            <span className="profile__sub--result">
              {" "}
              {displayOne(name.nativeName)}
            </span>
          </p>
          <p className="profile__sub">
            Population:
            <span className="profile__sub--result">
              {new Intl.NumberFormat("us-US").format(population)}
            </span>
          </p>
          <p className="profile__sub">
            Region:
            <span className="profile__sub--result"> {region}</span>
          </p>
          <p className="profile__sub">
            Sub Region:
            <span className="profile__sub--result"> {subregion}</span>
          </p>
          <p className="profile__sub">
            Capital:
            <span className="profile__sub--result"> {capital}</span>
          </p>
        </div>
        <div className="profile__info--right">
          <p className="profile__sub">
            Top Level Domain:
            <span className="profile__sub--result"> {tld[0]}</span>
          </p>
          <p className="profile__sub">
            Currencies:
            <span className="profile__sub--result">
              {" "}
              {displayAll(currencies)}
            </span>
          </p>
          <p className="profile__sub">
            Languages:
            <span className="profile__sub--result">
              {" "}
              {displayAll(languages)}
            </span>
          </p>
        </div>
        <p className="profile__border">
          <span>Border Countries: </span>
          <span>
            {borders ? mark : "Country is an island No bordering Country"}
          </span>
        </p>
      </section>
    </main>
  );
}

export default Profile;
