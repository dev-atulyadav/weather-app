import React from "react";

export default function Option({ b, countries, cities }) {
  return b ? (
    <>
      {countries.map((value, index) => (
        <option key={index}>{value.name}</option>
      ))}
    </>
  ) : (
    <>
      {cities.map((value, index) => (
        <option key={index}>
          {value.name}, {value.state}
        </option>
      ))}
    </>
  );
}
