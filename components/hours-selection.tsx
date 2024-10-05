"use client";

import { useState } from "react";
import { FaClock } from "react-icons/fa";
import { Menu, MenuButton, MenuItems } from "@headlessui/react";

import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { FaArrowRightLong } from "react-icons/fa6";

const hours = ["10:00 AM", "12:00 AM", "02:00 PM", "04:00 PM", "06:00 PM"];

export const HoursSelection = () => {
  const [hour, setHour] = useState("10:00 AM");

  return (
    <Menu as="div" className="w-full h-full flex xl:flex-row">
      <div className="relative flex-1">
        <MenuButton className="dropdown-btn w-full h-full flex flex-col justify-center items-center xl:items-start xl:pl-8">
          <p className="flex flex-col xl:flex-row items-center xl:gap-x-2 gap-y-2 xl:gap-y-0">
            <FaClock className="text-accent" />
            <span className="text-[15px] uppercase font-bold">
              Select Hours
            </span>
          </p>
          <div className="flex justify-center items-center gap-x-3 xl:ml-6">
            <span className="font-medium text-[13px] text-secondary">
              {hour}
            </span>
            <FaArrowRightLong className="text-accent text-[12px]" />
            <span className="font-medium text-[13px] text-secondary">
              {hour}
            </span>
          </div>
        </MenuButton>
        <MenuItems className="dropdown-menu shadow-lg absolute -top-56 xl:top-[90px] left-1/2 xl:left-0 z-10 transfotm -translate-x-1/2 xl:-translate-x-0 text-sm w-full bg-white max-w-[332px] py-6 rounded-[10px]">
          {hours.map((hour, index) => (
            <div
              onClick={() => setHour(hour)}
              key={index}
              className="cursor-pointer py-4 text-center hover:bg-gray-50"
            >
              {hour}
            </div>
          ))}
        </MenuItems>
      </div>
    </Menu>
  );
};
