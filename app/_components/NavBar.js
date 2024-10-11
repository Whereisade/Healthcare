"use client";

import Link from "next/link";
import { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { MdClose } from "react-icons/md";
import Container from "./Container";


export default function Navbar() {
  const [display, setDisplay] = useState(false);

  return (
    <header className="bg-[#eee] md:rounded px-4 py-8 md:py-4 relative shadow-sm md:w-[1038px]  md:absolute md:top-5 md:mx-auto">
      <Container>
        <div className="flex items-center justify-between">
          <div className="text-[#00856f] text-xl font-[family-name:var(--font-proxnovabold)] font-[600]">ORI-IRE</div>

          <div className="text-gray-500 font-extrabold text-xl lg:hidden">
            {!display ? (
              <CiMenuBurger onClick={() => setDisplay(true)} size={28} />
            ) : (
              <MdClose onClick={() => setDisplay(false)} size={28} />
            )}
          </div>

          <nav
            className={`absolute left-0 top-[108px] w-full opacity-90 h-[70vh] lg:flex lg:relative lg:h-fit lg:top-0 lg:w-fit ${
              !display ? "hidden" : ""
            }`}
          >
            <ul className="flex flex-col justify-center items-center h-full gap-10 text-xl md:text-[16px] font-bold text-[#050505] lg:flex-row lg:w-fit lg:gap-10">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
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
