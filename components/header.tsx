"use client";

import Image from "next/image";
import { Link } from "react-scroll";
import { useMediaQuery } from "react-responsive";
import { BiMenuAltRight, BiX } from "react-icons/bi";
import { useContext, useEffect, useState } from "react";

import { SearchContext } from "@/context/search";
import { SearchbarMobile } from "./searchbar-mobile";

export const Header = () => {
  const searchContext = useContext(SearchContext);

  const [header, setHeader] = useState(false);
  const [nav, setNav] = useState(false);

  const desctopMode = useMediaQuery({ query: "(min-width: 1300px)" });

  useEffect(() => {
    if (desctopMode) {
      const handleScroll = () => {
        if (window.scrollY > 40) {
          setHeader(true);
        } else {
          setHeader(false);
        }

        if (window.scrollY > 500) {
          searchContext?.setSearchActive(true);
        } else {
          searchContext?.setSearchActive(false);
        }
      };

      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    } else {
    }
  }, [desctopMode, searchContext]);

  return (
    <header
      className={`${
        header ? "bg-white shadow-md py-2" : "bg-transparent shadow-none py-4"
      } z-20 fixed mx-auto w-full max-w-[1920px] transition-all duration-300`}
    >
      <div className="xl:container mx-auto flex flex-col xl:flex-row xl:justify-between xl:items-center">
        <div className="flex justify-between items-center px-4">
          <Link
            to="home"
            spy={true}
            smooth={desctopMode}
            className="cursor-pointer"
          >
            <Image
              src="/assets/icons/logo.svg"
              width={194}
              height={64}
              alt="logo"
            />
          </Link>
          <div
            onClick={() => setNav(!nav)}
            className="cursor-pointer xl:hidden"
          >
            {nav ? (
              <BiX className="text-4xl" />
            ) : (
              <BiMenuAltRight className="text-4xl" />
            )}
          </div>
        </div>
        <nav
          className={`${
            nav ? "max-h-max px-4 py-8 xl:p-0" : "max-h-0 xl:max-h-max"
          } flex flex-col xl:flex-row gap-y-6 xl:gap-x-8 overflow-hidden w-full xl:w-max xl:h-max bg-white xl:bg-transparent xl:pb-0 font-bold xl:font-medium transition-all duration-150 text-center xl:text-left uppercase text-sm xl:text-[15px] xl:normal-case`}
        >
          <Link
            to="home"
            className="cursor-pointer"
            activeClass="active"
            smooth={desctopMode}
            spy={true}
          >
            Home
          </Link>
          <Link
            to="cars"
            className="cursor-pointer"
            activeClass="active"
            smooth={desctopMode}
            spy={true}
          >
            Cars
          </Link>
          <Link
            to="about"
            className="cursor-pointer"
            activeClass="active"
            smooth={desctopMode}
            spy={true}
          >
            About
          </Link>
          <Link
            to="why"
            className="cursor-pointer"
            activeClass="active"
            smooth={desctopMode}
            spy={true}
          >
            Why us
          </Link>
          <Link
            to="testimonial"
            className="cursor-pointer"
            activeClass="active"
            smooth={desctopMode}
            spy={true}
          >
            Testimonials
          </Link>
          <Link
            to="contact"
            className="cursor-pointer"
            activeClass="active"
            smooth={desctopMode}
            spy={true}
          >
            Contacts
          </Link>
          <Link
            to="/"
            className="xl:hidden btn btn-primary btn-sm max-w-[164px] mx-auto"
            activeClass="active"
            smooth={desctopMode}
            spy={true}
          >
            See all cars
          </Link>
          <SearchbarMobile />
        </nav>
      </div>
    </header>
  );
};
