import React, { useState, useEffect } from "react";
import Search from "../images/search.png";
import Cloud from "../images/cloudy.png";
import Cold from "../images/cold.png";
import Fog from "../images/fog.png";
import Humidity from "../images/humidity.png";
import LightRain from "../images/light-rain.png";
import Overcast from "../images/overcast.png";
import PatchyRain from "../images/patchy-rain.png";
import Rain from "../images/rainy.png";
import Snow from "../images/snowing.png";
import Clear from "../images/sun.png";
import Thunderstorm from "../images/thunderstorm.png";
import Tornado from "../images/tornado.png";
import Wind from "../images/wind.png";
import India from "../images/flag.png";
import Global from "../images/worldwide.png";
import Info from "./Info";
import Loading from "./Loading";
import LocationOption from "./LocationOption";
import Option from "./Option";
import Alert from "./Alert";

export default function Searchbox({
  handleSearchPart,
  countries,
  cities,
  apiCall,
  data,
  alert,
}) {
  const [input, setInput] = useState("");
  const [loc, setLoc] = useState({
    name: "",
    feelslike_c: "",
    temp_c: "",
    condition: "",
    forecast: "",
    maxtemp_c: "",
    mintemp_c: "",
  });
  const [hrsData, setHrsData] = useState([]);
  const [daysData, setDaysData] = useState([]);
  let [loading, setLoading] = useState(0);
  let [info, setInfo] = useState(0);
  const [b, setB] = useState(false);

  const handleInput = (e) => {
    let temp = 0;
    let val = e.target.value;
    setInput();
    if (!b) {
      cities.map((value) => {
        let temp = val.split(",")[0];
        if (temp === value.name) {
          setInput(value.name);
          apiCall(value.name);
          temp++;
        }
      });
    } else {
      countries.map((value) => {
        if (val === value.name) {
          setInput(value.name);
          apiCall(value.name);
          temp++;
        }
      });
    }
    if (temp == 0) {
      setInput(val);
    }
    setLoading(0);
  };

  const handleBtn = (e) => {
    e.preventDefault();
    if (input !== "") {
      apiCall(input);
      if (data.location !== undefined) {
        setLoading(++loading);
        setLoc({
          name: data.location.name,
          feelslike_c: data.current.feelslike_c,
          temp_c: data.current.temp_c,
          condition: data.current.condition.text,
          forecast: data.forecast.forecastday,
          maxtemp_c: data.forecast.forecastday[0].day.maxtemp_c,
          mintemp_c: data.forecast.forecastday[0].day.mintemp_c,
        });
        setHrsData(handleHourForecast(data.forecast.forecastday[0].hour));
        setDaysData(handleDaysForecast(data.forecast.forecastday));
        setTimeout(() => {
          setLoading(++loading);
          setInfo(++info);
        }, 2000);
      }
    }
  };
  const handleHourForecast = (hrsforecast) => {
    return hrsforecast.map((value) => {
      let time = value.time.split(" ")[1];
      let temp_c = value.temp_c;
      return (
        <span className="flex justify-center items-center flex-col">
          <small className="text-sm">{temp_c}°</small>
          <p>{time}</p>
        </span>
      );
    });
  };

  const handleConditionImg = () => {
    if (loc.condition === "Partly cloudy") return Cloud;
    if (loc.condition === "Cold" || loc.condition === "Snow") return Cold;
    if (loc.condition === "Fog" || loc.condition === "Mist") return Fog;
    if (loc.condition === "Humidity") return Humidity;
    if (
      loc.condition === "Patchy rain possible" ||
      loc.condition === "Light rain" ||
      loc.condition === "Light rain shower"
    )
      return LightRain;
    if (loc.condition === "Overcast") return Overcast;
    if (loc.condition === "Patchy light drizzle") return PatchyRain;
    if (loc.condition === "Moderate or heavy rain shower") return Rain;
    if (loc.condition === "Light snow") return Snow;
    if (loc.condition === "Clear" || loc.condition === "Sunny") return Clear;
    if (loc.condition === "Moderate or heavy rain with thunder")
      return Thunderstorm;
    if (loc.condition === "Moderate or heavy rain shower") return Rain;
    if (loc.condition === "Tornado") return Tornado;
    if (loc.condition === "Wind") return Wind;
  };

  const handleDaysForecast = (daysforecast) => {
    let day = +new Date().toDateString().split(" ")[2];
    return daysforecast.map((value) => {
      let maxtemp_c = value.day.maxtemp_c;
      let mintemp_c = value.day.mintemp_c;
      let today = +value.date.split("-")[2] == day ? "Today" : value.date;

      return (
        <span className="flex justify-center items-center flex-col">
          <p className="font-semibold text-sm">{today}</p>
          <div className="flex font-semibold text-sm">
            <small>{maxtemp_c}°</small>
            <small>/</small>
            <small>{mintemp_c}°</small>
          </div>
        </span>
      );
    });
  };

  return (
    <article className="xsm-article shadow-inset-3xl flex flex-col gap-4 bg-[#00000017] justify-center items-center h-[30rem] w-3/4 p-3 rounded-xl relative">
      <span className="bg-img rounded-xl"></span>

      <button
        onClick={handleSearchPart}
        className="close absolute text-white top-5 right-5 bg-red-700 rounded-full flex justify-center items-center h-7 w-7 hover:text-xl
    pb-[0.2rem] hover:bg-red-600 hover:rotate-180  transition-all font-bold font-mono z-10"
      >
        x
      </button>
      <form
        autoComplete="off"
        action=""
        className="xsm-form w-[80%] flex items-center gap-4"
      >
        <div className="relative  h-full w-full flex justify-center items-center">
          <span className="icon" />
          <input
            onChange={handleInput}
            className="shadow-inset-3xl pl-12 w-full h-full outline-none bg-[#ffffff14] backdrop-blur-sm text-white placeholder:text-white border-[1px] border-white rounded-full "
            type="search"
            placeholder="Enter Location"
            list="searchbox"
          />
          <button
            onClick={(e) => {
              e.preventDefault();
              setB(!b);
            }}
            className="shadow-inset-3xl text-white flex justify-between items-center bg-[#00000000] absolute right-[0rem] border-l-[1.1px] w-[7rem] h-[3rem] cursor-pointer backdrop:blur-[3px] p-3.5 rounded-full overflow-hidden"
          >
            <LocationOption b={b} setB={setB} />
            <img
              src={India}
              className=" z-10 inline-block  border-[2px] rounded-full h-7"
              alt=""
            />
            <img
              src={Global}
              className="z-10  border-[2px] rounded-full inline-block h-7"
              alt=""
            />
          </button>
        </div>
        <datalist id="searchbox">
          <Option b={b} cities={cities} countries={countries} />
        </datalist>
        <button
          onClick={handleBtn}
          className="shadow-xl text-white flex justify-center items-center bg-green-500 gap-1 px-10 py-3 rounded-full hover:bg-green-600"
        >
          <img src={Search} className="inline-block h-4" alt="" />
          Find
        </button>
      </form>
      <Info
        info={info}
        loc={loc}
        hrsData={hrsData}
        daysData={daysData}
        handleConditionImg={handleConditionImg}
      />
      <Loading loading={loading} />
      <Alert alert={alert} />
    </article>
  );
}
