import React from "react"
import DataSelection from "./DateSelection";
import HoursSelection from "./HoursSelection";
import LocationSelections from "./LocationSelection";

const SearchMobile = () => {
  return (
    <div className="lg:hidden font-medium">
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-4">
          {/* Location Selection */}
          <LocationSelections />
          {/* Data Selection */}
          <DataSelection />
          {/* Hours Selection */}
          <HoursSelection />

          {/* Button */}
          <div className="flex items-center px-6">
            <button className="btn btn-sm btn-primary w-[146px] mx-auto">Search</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchMobile