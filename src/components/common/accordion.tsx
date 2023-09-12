"use client";

import Right from "@/icons/right";
import { useEffect } from "react";
import { Collapse, initTE } from "tw-elements";

const Accordion = ({ items = [] }: { items: any }) => {
  useEffect(() => {
    initTE({ Collapse });
  }, []);
  return (
    <div id="accordionExample">
      {items.map((item: any, index: number) => (
        <div className="bg-white" key={`accordion${index}`}>
          <h2 className="mb-0" id={`heading${index}`}>
            <button
              className="group relative flex w-full items-center rounded-none border-0 bg-white py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] :bg-neutral-800"
              type="button"
              data-te-collapse-init
              data-te-collapse-collapsed
              data-te-target={`#collapse${index}`}
              aria-expanded="false"
              aria-controls={`collapse${index}`}
            >
              {item.heading}
              <span className="flex justify-center items-center ml-auto h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none">
                <Right/>
              </span>
            </button>
          </h2>
          <div
            id={`collapse${index}`}
            className="!visible hidden"
            data-te-collapse-item
            data-te-collapse-show
            aria-labelledby={`heading${index}`}
            data-te-parent="#accordionExample"
          >
            <div className="px-5 py-4 text-gray-800">{item.content}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
