import React from "react";
import Logo from "../images/logo.png";

export default function Header() {
  return (
    <header className="flex justify-center px-8 items-center h-20 w-[98%] rounded-b-3xl shadow-xl relative z-10">
      <div className="flex gap-4 justify-center items-center cursor-pointer text-white">
        <img src={Logo} className="inline-block h-16" alt="" />
        <h3 className="font-bold text-2xl">WeatherInfo.in</h3>
      </div>
    </header>
  );
}
