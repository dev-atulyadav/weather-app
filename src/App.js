import React, { useState } from "react";
import "./index.css";
import Header from "./component/Header";
import Section from "./component/Section";
import Searchbox from "./component/Searchbox";

export default function App() {
  const [countries, setCountries] = useState([]);
  const [cities, setCities] = useState([]);
  const [user, setUser] = useState(true);
  const [data, setData] = useState({});
  const [alert, setAlert] = useState(false);
  
  const handleSearchPart = (e) => {
    e.preventDefault();
    setUser(!user);
    handleCountries();
    handleCities();
  };
  
  async function handleCountries() {
    fetch(
      "https://gist.githubusercontent.com/almost/7748738/raw/575f851d945e2a9e6859fb2308e95a3697bea115/countries.json"
      )
      .then((response) => response.json())
      .then((json) => setCountries(json));
    }
    async function handleCities() {
      fetch(
        "https://raw.githubusercontent.com/nshntarora/Indian-Cities-JSON/master/cities.json"
        )
        .then((response) => response.json())
        .then((json) => setCities(json));
      }
      async function apiCall(name) {
        const key = process.env.REACT_APP_WEATHER_API_KEY;
        fetch(
          "http://api.weatherapi.com/v1/forecast.json?key="+key+"&q=" +
          name +
          "&days=7"
          )
      .then((response) => response.json())
      .then((json) => {
        if (json.error === undefined) {
          setData(json);
        } else {
          setAlert(!alert);
          setTimeout(() => {
            setAlert(false);
          }, 2000);
        }
      });
  }
  return user ? (
    <>
      <Header />
      <Section handleSearchPart={handleSearchPart} />
    </>
  ) : (
    <>
      <Header />
      <Searchbox
        handleSearchPart={handleSearchPart}
        countries={countries}
        cities={cities}
        apiCall={apiCall}
        data={data}
        alert={alert}
      />
    </>
  );
}
