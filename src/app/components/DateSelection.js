"use client";

import { useState } from "react";
import React from "react";
import { Menu } from "@headlessui/react";
import { FaCalendarAlt } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { DateRange } from "react-date-range";
import { format, addDays } from "date-fns";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

const DateSelection = () => {
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: "selection",
    },
  ]);

  return (
    <Menu as="div" className="w-full h-full flex lg:flex-row">
      <div className="relative flex-1">
        {/* Button */}
        <Menu.Button className="dropdown-btn h-full w-full flex flex-col justify-center items-center lg:items-start lg:pl-8">
          <div className="flex flex-col lg:flex-row items-center lg:gap-x-2 gap-y-2 lg:gap-y-0 lg:border-r lg:border-black/10">
            <FaCalendarAlt className="text-accent" />
            <div className="text-[14px] uppercase font-bold">Select Date</div>
          </div>
          <div className="flex items-center gap-x-3 lg:ml-6">
            <div className="text-[13px] font-meduim text-secondary">
              {format(date[0].startDate, "dd/MM/yyyy")}
            </div>
            <FaArrowRightLong className="text-accent text-[12px]" />
            <div className="text-[13px] font-meduim text-secondary">
              {date[0].endDate ? ( 
              <div>{format(date[0].endDate, "dd/MM/yyyy")}</div> 
              ) : ( 
              <div>{format(date[0].startDate, "dd/MM/yyyy")}</div>
              )}
            </div>
          </div>
        </Menu.Button>
        {/* Items */}
        <Menu.Items className="dropdwon-menu shadow-lg absolute -top-96 lg:top-[90px] left-1/2 lg:left-0 z-10 transform -translate-x-1/2 lg:translate-x-0 rounded-[10px]">
          <DateRange
            onChange={(item) => setDate([item.selection])}
            editableDateInputs={true}
            moveRangeOnFirstSelection={false}
            ranges={date}
            rangeColors={["#ed1d24"]}
            minDate={addDays(new Date(), 0)}
          />
        </Menu.Items>
      </div>
    </Menu>
  );
};

export default DateSelection;
