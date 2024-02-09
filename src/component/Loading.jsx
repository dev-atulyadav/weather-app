import React from "react";
import Loading_gif from "../images/loading.gif";

export default function Loading({ loading }) {
  return loading === 1 ? (
    <span className="xsm-loader flex flex-col text-black font-bold justify-center items-center absolute">
      <img src={Loading_gif} className="inline-block h-16 rounded-full z-30 " alt="" />
      <span>Press find...</span>
    </span>
  ) : (
    <></>
  );
}
