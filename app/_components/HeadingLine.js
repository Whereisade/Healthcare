import React from "react";

export default function HeadingLine({ tophead, left, left2, color }) {
  return (
    <div className="py-8">
      <div
        className={`container mx-auto ${
          left ? "md:text-left" : "md:text-center"
        }`}
      >
        <h1
          className={`text-4xl md:text-5xl font-[family-name:var(--font-domainer)] font-bold ${
            color ? "text-white" : "text-[#13182F]"
          }`}
        >
          {tophead}
        </h1>
        <div
          className={`w-24 h-1 bg-blue-500 ${
            left2 ? "md:mx-auto" : "mx-0"
          } mt-4`}
        ></div>
      </div>
    </div>
  );
}
