"use client";

import { useContext } from "react";

import { SearchContext } from "@/context/search";
import { Searchbar } from "@/components/searchbar";

export const Hero = () => {
  const searchContext = useContext(SearchContext);

  return (
    <section className="h-screen xl:h-[90vh] bg-[#b2b7c2]/10" id="home">
      <div className="container mx-auto h-full xl:pt-10">hero container</div>
      {searchContext?.searchActive ? (
        <div className="z-10 fixed top-[80px] w-full max-w-[1920px]">
          <Searchbar />
        </div>
      ) : (
        <div className="-mt-12 w-full max-w-[1300px] mx-auto">
          <Searchbar />
        </div>
      )}
    </section>
  );
};
