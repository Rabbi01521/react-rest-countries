import React from "react";
import "./Country.css";

const Country = (props) => {
  console.log(props.country);
  const { name, flag, capital, population, region } = props.country;
  return (
    <div className="country">
      <h4>Name: {name}</h4>
      <img src={flag} alt="" />
      <p>
        <small>Region: {region}</small>
      </p>
      <p>Capital: {capital ? capital : "Not Found"}</p>
      <p>Population: {population}</p>
    </div>
  );
};

export default Country;
