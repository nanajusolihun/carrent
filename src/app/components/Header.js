"use client";

import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-scroll";
import SearchMobile from "./SearchMobile";
import { useMediaQuery } from "react-responsive";
import { BiMenuAltRight, BiX } from "react-icons/bi";
import { SearchContext } from "../context/SearchContext";

const Header = () => {
  const { setSearchActive } = useContext(SearchContext)
  const [header, setHeader] = useState(false);
  const [nav, setNav] = useState(false);

  const desktopMode = useMediaQuery({
    query: "(min-width: 1028px)",
  });

  useEffect(() => {
    const handleScroll = () => {
      // Header
      if (window.scrollY > 40) {
        setHeader(true);
      } else {
        setHeader(false);
      }

      // Search
      if (window.scrollY > 450) {
        setSearchActive(true);
      } else {
        setSearchActive(false);
      }
    };

    // Add event listener
    window.addEventListener("scroll", handleScroll);

    // Remove event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <header className={`${header ? "bg-neutral-100 shadow-lg " : "bg-transparent shadow-none py-2"} fixed w-full mx-auto z-20 transition-all duration-300`}>
      <div className="lg:container mx-auto flex flex-col lg:flex-row lg:items-center lg:justify-beetwen">
        <div className="p-5 flex justify-between items-center">
          {/* Text Logo */}
          <Link to="home" smooth={desktopMode} spy={true} className="cursor-pointer ml-5 ">
            <h1 className="text-4xl font-extrabold font-serif">
              <span className="items-center text-accent">CAR</span>RENT
            </h1>
          </Link>
          {/* Nav Open Menu */}
          <div onClick={() => setNav(!nav)} className="cursor-pointer lg:hidden">
            {nav ? <BiX className="text-4xl" /> : <BiMenuAltRight className="text-4xl" />}
          </div>
        </div>
        {/* Navbar */}
        <nav
          className={`${
            nav 
            ? "max-h-max py-6 px-3 lg:py-0 lg:px-0" 
            : "max-h-0 lg:max-h-max"
          } mx-auto flex flex-col w-full bg-white gap-y-4 overflow-hidden font-bold lg:font-bold lg:flex-row lg:w-max lg:gap-x-6 lg:h-max lg:bg-transparent lg:items-center lg:pb-0 transition-all duration-150 text-center lg:text-[16px] lg:text-left `}
        >
          <Link className="cursor-pointer" to="home" activeClass="active" smooth={desktopMode} spy={true}>
            HOME
          </Link>
          <Link className="cursor-pointer" to="cars" activeClass="active" smooth={desktopMode} spy={true}>
            CARS
          </Link>
          <Link className="cursor-pointer" to="about" activeClass="active" smooth={desktopMode} spy={true}>
            ABOUT
          </Link>
          <Link className="cursor-pointer" to="why" activeClass="active" smooth={desktopMode} spy={true}>
            WHY US
          </Link>
          <Link className="cursor-pointer" to="testimonial" activeClass="active" smooth={desktopMode} spy={true}>
            TESTIMONIAL
          </Link>
          <Link className="cursor-pointer" to="contact" activeClass="active" smooth={desktopMode} spy={true}>
            CONTACT
          </Link>
          <Link className="lg:hidden font-bold btn btn-accent btn-sm max-w-[164px] mx-auto" to="/" activeClass="active" smooth={desktopMode} spy={true}>
            SEE ALL CARS
          </Link>
          <SearchMobile />
        </nav>
      </div>
    </header>
  );
};

export default Header;
