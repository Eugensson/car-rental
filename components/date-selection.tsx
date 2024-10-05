"use client";

import { useState } from "react";
import { format, addDays } from "date-fns";
import { DateRange, Range } from "react-date-range";
import { FaCalendarAlt } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { Menu, MenuButton, MenuItems } from "@headlessui/react";

import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

export const DateSelection = () => {
  const [date, setDate] = useState<Range[]>([
    {
      startDate: new Date(),
      endDate: undefined,
      key: "selection",
    },
  ]);

  return (
    <Menu as="div" className="w-full h-full flex xl:flex-row">
      <div className="relative flex-1">
        <MenuButton className="dropdown-btn w-full h-full flex flex-col justify-center items-center xl:items-start xl:pl-8">
          <p className="flex flex-col xl:flex-row items-center xl:gap-x-2 gap-y-2 xl:gap-y-0">
            <FaCalendarAlt className="text-accent" />
            <span className="text-[15px] uppercase font-bold">Select Date</span>
          </p>
          <div className="flex items-center gap-x-3 xl:ml-6">
            <span className="text-[13px] font-medium text-secondary">
              {date[0].startDate
                ? format(date[0].startDate, "dd/MM/yyyy")
                : "Not selected"}
            </span>
            <FaArrowRightLong className="text-accent text-[12px]" />
            <span className="text-[13px] font-medium text-secondary">
              {date[0].endDate
                ? format(date[0].endDate, "dd/MM/yyyy")
                : format(date[0].startDate!, "dd/MM/yyyy")}
            </span>
          </div>
        </MenuButton>
        <MenuItems className="dropdown-menu shadow-lg absolute -top-96 xl:top-[90px] left-1/2 xl:left-0 z-50 transfotm -translate-x-1/2 xl:-translate-x-0 rounded-[10px] overflow-hidden">
          <DateRange
            onChange={(item) => setDate([item.selection])}
            editableDateInputs={true}
            moveRangeOnFirstSelection={false}
            ranges={date}
            rangeColors={["#ed1d24"]}
            minDate={addDays(new Date(), 0)}
          />
        </MenuItems>
      </div>
    </Menu>
  );
};
