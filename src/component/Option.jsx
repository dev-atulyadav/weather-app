import React from "react";

export default function Option({ b, countries, cities }) {
  return b ? (
    <>
      {countries.map((value) => (
        <option key={value.name}>{value.name}</option>
      ))}
    </>
  ) : (
    <>
      {cities.map((value) => (
        <option key={value.id}>
          {value.name}, {value.state}
        </option>
      ))}
    </>
  );
}
