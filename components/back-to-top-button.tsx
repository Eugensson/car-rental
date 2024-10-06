"use client";

import { Link } from "react-scroll";
import { useEffect, useState } from "react";
import { FaChevronUp } from "react-icons/fa";

export const BackToTopButton = () => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setIsActive(true);
      } else {
        setIsActive(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Link
      to="home"
      spy={true}
      smooth={true}
      className={`${
        !isActive && "hidden"
      } z-50 fixed bottom-11 right-16 w-12 h-12 bg-accent hover:bg-accent-hover cursor-pointer flex justify-center items-center text-white border-2 border-white`}
    >
      <FaChevronUp size={20} />
    </Link>
  );
};
