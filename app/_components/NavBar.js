"use client";

import Link from "next/link";
import { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { MdClose } from "react-icons/md";
import Container from "./Container";
import Image from "next/image";



export default function Navbar() {
  const [display, setDisplay] = useState(false);

  return (
    <header className="bg-white md:rounded px-4 py-5 md:py-4 relative shadow-sm md:w-[1250px]  md:absolute md:top-4 md:mx-auto  ">
      <Container>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 "> 
            <Image src="https://res.cloudinary.com/ddrylpaqx/image/upload/v1728723102/first-med-logo-_1__q4i6sa.svg" width={30} height={30} className=" "/>

            <h1 className="text-[#00856f] text-[24px] font-[family-name:var(--font-proxnovabold)] font-[600]" >ORI-IRE</h1>
          </div>

          <div className="text-gray-500 font-extrabold text-xl md:hidden">
            {!display ? (
              <CiMenuBurger onClick={() => setDisplay(true)} size={28} />
            ) : (
              <MdClose onClick={() => setDisplay(false)} size={28} />
            )}
          </div>

          <nav
            className={`absolute left-0 top-[92px] w-full bg-white opacity-90 h-[80vh] lg:flex lg:relative lg:h-fit lg:top-0 lg:w-fit ${
              !display ? "hidden" : ""
            }`}
          >
            <ul className="flex flex-col justify-center items-center h-full gap-10 text-xl md:text-[18px] font-bold text-[#050505] lg:flex-row lg:w-fit lg:gap-10">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/About">About</Link>
              </li>
              <li>
                <Link href="/services">Services</Link>
              </li>
              <li>
                <Link href="/contact">Contact Us</Link>
              </li>
              
               
            </ul>

          </nav>
        </div>
      </Container>
    </header>
  );
}
