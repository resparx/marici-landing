import {useRef, useState} from "react";
import Popper from "popper.js";

const Dropdown = ({ color, children }) => {
  const [dropdownPopoverShow, setDropdownPopoverShow] = useState(false);
  const btnDropdownRef = useRef();
  const popoverDropdownRef = useRef();
  const openDropdownPopover = () => {
    new Popper(btnDropdownRef?.current, popoverDropdownRef.current, {
      placement: "bottom-start"
    });
    setDropdownPopoverShow(true);
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
    <>
      <div className="flex flex-wrap">
        <div className="w-full sm:w-6/12 md:w-4/12 px-4">
          <div className="relative inline-flex align-middle w-full">
            <div
              style={{ transition: "all .15s ease" }}
              type="button"
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
                "text-base z-50 float-left py-2 list-none text-left rounded shadow-lg mt-1"
              }
              style={{ minWidth: "12rem" }}
            >
              <a
                href="#pablo"
                className={
                  "text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent " +
                  (color === "white" ? " text-gray-800" : "text-white")
                }
                onClick={e => e.preventDefault()}
              >
                Action
              </a>
              <a
                href="#pablo"
                className={
                  "text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent " +
                  (color === "white" ? " text-gray-800" : "text-white")
                }
                onClick={e => e.preventDefault()}
              >
                Seprated link
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dropdown
