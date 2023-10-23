"use client";

// search context
import { useContext } from "react";
import { SearchContext } from "../context/SearchContext";
import LocationSelections from "./LocationSelection";
import DateSelection from "./DateSelection";
import HoursSelection from "./HoursSelection";

const Search = () => {
  const { searchActive } = useContext(SearchContext);
  return (
    <div
      className={`${
        searchActive 
        ? " bg-neutral-100 rounded-none lg:h-[80px] shadow" 
        : " bg-neutral-100 rounded-[20px] py-6 lg:pr-4 lg:h-[98px] shadow"
      } px-3 hidden lg:block w-full relative shadow-lg`}
    >
      <div className={`${searchActive && "container mx-auto"} flex h-full`}>
        <LocationSelections />
        <DateSelection />
        <HoursSelection />

        {/* Button */}
        <div className=" flex items-center px-6 lg:h-full lg:px-0">
          <button className={`${searchActive ? "btn btn-sm btn-accent lg:w-[140px]" : "btn btn-lg btn-accent lg:w-[160px]"}`}>
            Search
          </button>
        </div>
      </div>
    </div>
  );
}

export default Search