"use client";

import { useState } from "react";
import React from "react";
import { Menu } from "@headlessui/react";
import { FaClock } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
const hours = ["10:00 AM", "12:00 AM", "14:00 AM", "16:00 AM"];

const HoursSelection = () => {
  const [hour, setHour] = useState("10:00 AM");

  return (
    <Menu as="div" className="w-full h-full flex lg:flex-row">
      <div className="relative flex-1">
        {/* Button */}
        <Menu.Button className="dropdown-btn h-full w-full flex flex-col justify-center items-center lg:items-start lg:pl-8">
          <div className="flex flex-col lg:flex-row items-center lg:gap-x-2 gap-y-2 lg:gap-y-0">
            <FaClock className="text-accent" />
            <div className="text-[14px] uppercase font-bold lg:items-center">
              Select Hours
            </div>
          </div>

          <div className="flex justify-center items-center gap-x-3">
            <div className="font-medium text-[12px] text-secondary text-center lg:text-left lg:ml-6">
              {hour}
            </div>
            <FaArrowRightLong className="text-accent text-[12px]" />
            <div className="font-medium text-[13px] text-secondary text-center lg:text-left ">
              {hour}
            </div>
          </div>
        </Menu.Button>
        {/* Items */}
        <Menu.Items className="dropdwon-menu shadow-lg absolute -top-72 lg:top-[90px] left-1/2 lg:left-0 z-10 transform -translate-x-1/2 lg:translate-x-0 text-sm w-full bg-white max-w-[310px] py-3 rounded-[10px]">
          {hours.map((hour, index) => {
            return (
              <div 
                key={index} 
                className="cursor-pointer text-center py-4 hover:bg-gray-100" 
                onClick={() => setHour(hour)}>
                {hour}
              </div>
            );
          })}
        </Menu.Items>
      </div>
    </Menu>
  );
};

export default HoursSelection;
