import React from "react";

export default function Button({ text, bordercolo, tcolo, bcolo, hov }) {
  return (
    <button
      className={`py-[14px] px-[30px] hover:bg-blue-700 border ${hov} ${bcolo} ${tcolo} ${bordercolo} rounded-lg font-[500] relative w-full md:w-fit`}
    >
      {text}
    </button>
  );
}
