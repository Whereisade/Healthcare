import React from "react";
import Link from "next/link";
import Container from "./Container";

export default function Foot() {
  return (
    <footer className="bg-[#13182F] text-white w-full py-8">
      <Container>
        <div className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h2 className="text-2xl font-bold text-[#2563EB]">ORI-IRE</h2>
              <p className="mt-4 text-gray-400">
                Providing trusted healthcare services with compassion and
                innovation to ensure your well-being.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-[#2563EB]">
                Quick Links
              </h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link href="./about" className="hover:text-blue-500">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="./services" className="hover:text-blue-500">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="./blog" className="hover:text-blue-500">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="./contact" className="hover:text-blue-500">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-[#2563EB]">
                Contact Us
              </h3>
              <ul className="mt-4 space-y-2 text-gray-400">
                <li>
                  <span className="font-semibold text-white">Phone:</span> +234
                  81-334-567-890
                </li>
                <li>
                  <span className="font-semibold text-white">Email:</span>{" "}
                  hello@oriire.com
                </li>
                <li>
                  <span className="font-semibold text-white">Address:</span> 123
                  Plot 15, Awolowo Road, Ikoyi, Lagos
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 border-t border-gray-700 pt-4 text-center">
            <p className="text-gray-500">
              &copy; {new Date().getFullYear()} Ori-Ire. All rights reserved.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
