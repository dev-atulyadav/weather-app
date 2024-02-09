import React, { useState } from 'react'

export default function LocationOption({b}) {
    if (b) {
      return (
        <span className="p-3.5 shadow-inset-3xl w-[50%] h-[98%] -z-1 right-[0rem] absolute bg-[#00000055] rounded-full transition-all"></span>
      );
    } else {
      return (
        <span className="p-3.5 shadow-inset-3xl w-[50%] h-[98%] -z-1 left-[0rem] absolute bg-[#00000055] transition-all rounded-full"></span>
      );
    }
}
