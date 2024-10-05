"use client";

import { useContext } from "react";

import { SearchContext } from "@/context/search";
import { LocationSelection } from "@/components/location-selection";
import { DateSelection } from "@/components/date-selection";
import { HoursSelection } from "@/components/hours-selection";

export const Searchbar = () => {
  const searchContext = useContext(SearchContext);

  return (
    <div
      className={`${
        searchContext?.searchActive
          ? "bg-white rounded-none xl:h-[80px]"
          : "bg-white rounded-[20px] py-6 xl:pr-4 xl:h-[98px]"
      } hidden xl:block w-full relative shadow-lg`}
    >
      <div
        className={`flex h-full ${
          searchContext?.searchActive && "container mx-auto"
        }`}
      >
        <LocationSelection />
        <DateSelection />
        <HoursSelection />
        <div className="xl:h-full flex items-center px-6 xl:px-0">
          <button
            className={`${
              searchContext?.searchActive
                ? "btn btn-sm btn-accent xl:w-[164px]"
                : "btn btn-lg btn-accent xl:w-[184px]"
            }`}
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};
