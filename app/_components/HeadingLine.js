import React from 'react'

export default function HeadingLine({tophead, left, left2, color}) {
  return (
    <div className="py-8">
      <div className={`container mx-auto ${left ? "md:text-left" : "md:text-center"}`}>
        <h1 className={`text-4xl md:text-5xl font-bold ${color ? "text-white" : "text-gray-800"}`}>{tophead}</h1>
        <div className={`w-24 h-1 bg-blue-500 ${left2 ? "mx-auto" : "mx-0"} mt-4`}></div>
      </div>
    </div>
  );
}
