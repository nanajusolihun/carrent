"use client";

import React, { useState } from "react";
import { Menu } from "@headlessui/react";
import { FaMapMarkerAlt } from "react-icons/fa";
const locations = [
  "Jakarta",
  "Bandung",
  "Yogyakarta",
  "Surabaya",
  "Semarang"
];

const LocationSelection = () => {
  const [location, setLocation] = useState("Search Location");
  return (
    <Menu as="div" className="w-full h-full flex lg:flex-row">
      <div className="relative flex-1">
        {/* Button */}
        <Menu.Button className="dropdown-btn h-full w-full flex flex-col justify-center items-center lg:items-start lg:pl-8">
          <div className="w-full h-16 lg:h-full flex justify-center items-center lg:justify-start ">
            <div className="felx flex-col justify-center items-center">
              <div className="flex flex-col lg:flex-row items-center lg:gap-x-2 gap-y-2 lg:gap-y-0">
                <FaMapMarkerAlt className="text-accent" />
                <div className="text-[14px] uppercase font-bold lg:items-center"
                >
                  Select Location
                </div>
              </div>
              <div className="uppercase font-medium text-[12px] text-secondary text-center lg:text-left lg:ml-6"
              >
                {location}
              </div>
            </div>
          </div>
        </Menu.Button>
        {/* Items */}
        <Menu.Items 
          className="dropdwon-menu shadow-lg absolute -top-56 lg:top-[90px] left-1/2 lg:left-0 z-10 transform -translate-x-1/2 lg:translate-x-0 text-sm text-center lg:text-left w-full bg-white max-w-[310px] py-3 rounded-[10px]"
        >
          {locations.map((location, index) => {
            return (
              <div 
                onClick={() => setLocation(location)} 
                key={index} 
                className="uppercase text-center cursor-pointer py-4 hover:bg-gray-100 text-[12px]"
              >
                {location}
              </div>
            );
          })}
        </Menu.Items>
      </div>
    </Menu>
  );
}

export default LocationSelection