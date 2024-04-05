import React from "react";

export default function Info({
  info,
  loc,
  hrsData,
  daysData,
  handleConditionImg,
}) {
  return (
    info > 0 && (
      <main className="bg-[#00000013] shadow-inset-2xl backdrop-blur-[3.5px] border-[1px] rounded-lg h-full w-[95%] flex justify-center items-center flex-col p-4 text-white text-xl">
        <h1 className="self-start font-extrabold text-3xl">{loc.name}</h1>
        <div className="flex justify-between w-full p-4">
          <div>
            <h3 className="font-semibold">Now</h3>
            <h1 className="text-5xl font-bold">{loc.temp_c}°</h1>
            <span className="flex gap-1 text-sm">
              <small>High:{loc.maxtemp_c}°</small>
              <small>Low:{loc.mintemp_c}°</small>
            </span>
          </div>
          <div className="flex flex-col gap-2 items-end">
            <span className="flex gap-2 justify-center items-center">
              <img
                src={handleConditionImg()}
                className="inline-block h-10"
                alt=""
              />
              <p className="font-semibold">{loc.condition}</p>
            </span>
            <small className="text-sm">Feels like {loc.feelslike_c}°</small>
          </div>
        </div>
        <div className="flex flex-col w-full gap-1">
          <h4 className="font-bold">Hourly forecast</h4>
          <div className="flex gap-16 items-center text-sm overflow-scroll p-4 border shadow-inset-3xl rounded-xl">
            {hrsData}
          </div>
          <h4 className="font-bold">3 days forecast</h4>
          <div className="xsm-div flex items-center justify-between border p-2 rounded-xl overflow-auto shadow-inset-3xl">
            {daysData}
          </div>
        </div>
      </main>
    )
  );
}
