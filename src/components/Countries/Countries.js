import React, { useEffect, useState } from "react";
import Country from "../Country/Country";
import "./countries.css";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.eu/rest/v2/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);
  //   console.log(countries);
  return (
    <div>
      <h1>Travaling Around The World!!!</h1>
      <p>Countries Found: {countries.length}</p>
      <div className="countries-container">
        {countries.map((country) => (
          <Country key={country.numericCode} country={country}></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
