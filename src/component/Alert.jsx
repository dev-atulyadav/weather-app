import React from "react";

export default function Alert({ alert }) {
  return alert ? (
    <div className=" p-1.5 w-[90%] absolute bottom-8 bg-[#f0333381] backdrop-blur-[2px] text-white border-[1.5px] border-red-600 rounded-md">
      Please Enter a vaild location!!!
    </div>
  ) : (
    <></>
  );
}
