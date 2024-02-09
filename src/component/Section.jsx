import React from "react";
import SVG from "../svg/welcome.svg";

export default function Section({ handleSearchPart }) {
  return (
    <section className="xsm-section w-[95%] flex justify-center items-center flex-row-reverse bg-[#00000017] rounded-2xl shadow-inset-3xl overflow-hidden relative">
      <span className="pattern"></span>
      <img src={SVG} alt="" className="inline-block h-[30rem] " />
      <article className="h-full w-2/4 text-center p-8 flex justify-center items-center flex-col gap-2">
        <main className="flex flex-col justify-center items-center gap-2 uppercase">
          <h2 className="text-4xl font-bold text-white">
            Welcome at WeatherInfo.in
          </h2>
          <p className="text-white text-2xl">Get accurate data here...</p>
        </main>
        <button
          onClick={handleSearchPart}
          className="px-4 py-3 bg-blue-500 hover:bg-blue-400 border-2 border-blue-500 shadow-inset-3xl rounded-3xl uppercase text-sm font-bold text-white"
        >
          Check Now
        </button>
      </article>
    </section>
  );
}
