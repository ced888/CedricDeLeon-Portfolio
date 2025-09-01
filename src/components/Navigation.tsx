"use client";

import React, { useState } from "react";
import NavButton from "./NavButton";
import { ReactNode } from "react";
import { PiLineVerticalThin } from "react-icons/pi";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";
import SocialLinks from "./SocialLinks";
import MobileNav from "./MobileNav";
import { TypewriterEffect } from "./ui/typewriter-effect";
import { IoSearch } from "react-icons/io5";

export default function Navigation(): ReactNode {
  const [mobile, setMobile] = useState<boolean>(false);

  function handleMobile(): void {
    setMobile((prev) => !prev);
  }

  return (
    <nav>
      <div
        className={`flex flex-col bg-gray-300 max-md:mx-2 max-md:mt-2 mx-32 mt-4 p-1 rounded-full max-md:rounded-xl
         `}
      >
        <section className="flex flex-row w-full justify-between items-center max-md:px-4 max-md:py-1">
          {/*Mobile Mode*/}
          {mobile ? (
            <FaTimes className="text-4xl sm:hidden" onClick={handleMobile} />
          ) : (
            <GiHamburgerMenu
              className="text-4xl sm:hidden"
              onClick={handleMobile}
            />
          )}
          
          <a href="/" className="flex gap-2 text-4xl font-bold items-center">
            <IoSearch className="text-blue-500 w-[70px]" />
            <TypewriterEffect
              words={[
                { text: "Cedric", className: "text-4xl font-semibold" },
                { text: "De", className: "text-4xl font-semibold" },
                { text: "Leon", className: "text-4xl font-semibold" }
              ]}
              className="place-self-center max-lg:hidden mb-1"
            />
          </a>

          {/*Hidden on Mobile*/}
          <section className="flex flex-row gap-5 items-center max-sm:hidden">
            <SocialLinks />
            <PiLineVerticalThin className="text-gray-700 text-3xl" />
            <NavButton name="Resume" />
          </section>
        </section>
        {mobile && <MobileNav handleMobile={handleMobile} />}
      </div>
    </nav>
  );
}
