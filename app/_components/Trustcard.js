import React from "react";
import Image from "next/image";

export default function Trustcard({ pic, head, para }) {
  return (
    <div className="bg-[#E0EDFF] flex p-5 items-center gap-4 rounded-lg">
      <div className="rounded-full bg-white p-3  max-w-[45px]">
        <Image src={pic} width={30} height={30} className="rounded-full" />
      </div>
      <div className="">
        <h1 className="font-bold font-[family-name:var(--font-domainer)] ">
          {head}
        </h1>
        <p className="font-[family-name:var(--font-proxnovar)]">{para}</p>
      </div>
    </div>
  );
}
