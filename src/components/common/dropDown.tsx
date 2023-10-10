"use client";
import { useRef, useState } from "react";
import Popper from "popper.js";
import Link from "next/link";

const Dropdown = ({ color, children, menu = [] }: any) => {
  const [dropdownPopoverShow, setDropdownPopoverShow] = useState(false);
  const btnDropdownRef = useRef<any>();
  const popoverDropdownRef = useRef<any>();
  const openDropdownPopover = () => {
    // new Popper(btnDropdownRef.current, popoverDropdownRef.current);
    // setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };
  // bg colors
  let bgColor;
  color === "white"
    ? (bgColor = "bg-gray-800")
    : (bgColor = "bg-" + color + "-500");
  return (
    <div className="flex flex-wrap">
      <div className="w-full sm:w-6/12 md:w-4/12 px-4">
        <div className="relative inline-flex align-middle w-full">
          <div
            style={{ transition: "all .15s ease" }}
            ref={btnDropdownRef}
            onClick={() => {
              dropdownPopoverShow
                ? closeDropdownPopover()
                : openDropdownPopover();
            }}
          >
            {children}
          </div>
          <div
            ref={popoverDropdownRef}
            className={
              (dropdownPopoverShow ? "block " : "hidden ") +
              (color === "white" ? "bg-white " : bgColor + " ") +
              "text-base z-50 float-right py-2 list-none text-left rounded shadow-lg mt-1"
            }
            style={{ minWidth: "12rem", right: 0, left: "-200px !important"}}
          >
            <Link
              href="#pablo"
              className={
                "text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent " +
                (color === "white" ? " text-gray-800" : "text-white")
              }
              onClick={(e) => e.preventDefault()}
            >
              Action
            </Link>
            {menu.filter((item: any) => !item.separated).map((item: any, index: number) => <Link
            key={`nav-unseparated-${index}`}
              {...menu}
              className={
                "text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent " +
                menu.className
              }
            >
              Action
            </Link>)}
            {menu.filter((item: any) => !item.separated).map((item: any, index: number) => <Link
                key={`nav-separated-${index}`}
              {...menu}
              className={
                "text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent " +
                menu.className
              }
            >
              Seprated link
            </Link>)}
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
