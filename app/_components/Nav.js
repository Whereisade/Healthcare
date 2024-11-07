"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { CiMenuBurger } from "react-icons/ci";
import { MdClose } from "react-icons/md";
import Container from "./Container";
import Image from "next/image";

export default function Nav() {
  const [display, setDisplay] = useState(false);
  const pathname = usePathname(); 

  useEffect(() => {
    
    setDisplay(false);
  }, [pathname]);

  return (
    <header className="bg-[#F9FAFb] z-50 md:rounded px-4 md:px-8 py-5 md:py-3 relative shadow-sm md:w-[1250px] md:absolute md:top-2 md:mx-auto">
      <Container>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer">
            <Image
              src="https://res.cloudinary.com/ddrylpaqx/image/upload/v1730321856/Mask_group_new_zslsji.svg"
              width={24}
              height={24}
              alt="Logo"
            />
            <h1 className="text-[#3A7DFF] text-[22px] font-[family-name:var(--font-proxnovabold)] font-[600] cursor-pointer">
              ORI-IRE
            </h1>
          </div>

          <div className="text-gray-500 font-extrabold text-xl md:hidden">
            {!display ? (
              <CiMenuBurger onClick={() => setDisplay(true)} size={28} />
            ) : (
              <MdClose onClick={() => setDisplay(false)} size={28} />
            )}
          </div>

          <nav
            className={`absolute left-0 top-[80px] w-full bg-gray-300 md:bg-[#F9FAFb]  opacity-90 h-[80vh] md:flex md:relative md:h-fit md:top-0 md:w-fit ${
              !display ? "hidden" : ""
            }`}
          >
            <ul className="flex flex-col justify-center items-center h-full gap-10 text-xl md:text-[17px] font-medium text-[#050505] lg:flex-row lg:w-fit lg:gap-10">
              <li className="hover:text-[#3D65FF] hover:transition-colors">
                <Link href="/">Home</Link>
              </li>
              <li className="hover:text-[#3D65FF] hover:transition-colors">
                <Link href="/about">About</Link>
              </li>
              <li className="hover:text-[#3D65FF] hover:transition-colors">
                <Link href="/services">Services</Link>
              </li>
              <li className="hover:text-[#3D65FF] hover:transition-colors">
                <Link href="/blog">Blog</Link>
              </li>
              <li className="hover:text-[#3D65FF] hover:transition-colors">
                <Link href="/contact">Contact Us</Link>
              </li>
            </ul>
          </nav>
        </div>
      </Container>
    </header>
  );
}