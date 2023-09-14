"use client"

import CaretDown from "@/icons/caret-down";
import CaretUp from "@/icons/caret-up";
import { useRef, useState } from "react";

type AccordionPropType = {
  title: string
  content: string
}

const Accordion = ({ title, content }: AccordionPropType) => {
  const [isOpened, setOpened] = useState<boolean>(false);
  const [height, setHeight] = useState<string>("0px");
  const contentElement = useRef<HTMLDivElement>(null);

  const HandleOpening = () => {
    setOpened(!isOpened);
    setHeight(
      !isOpened
        ? `${
            contentElement.current ? contentElement.current.scrollHeight : 0
          }px`
        : "0px"
    );
  };
  return (
    <div onClick={HandleOpening}>
      <div className={"p-4 flex justify-between text-slate-800 cursor-pointer hover:bg-sky-50"}>
        <h4 className="font-semibold">{title}</h4>
        {isOpened ? <CaretUp /> : <CaretDown />}
      </div>
      <div
        ref={contentElement}
        style={{ height: height }}
        className="overflow-hidden transition-all duration-200"
      >
        <p className="p-4 text-slate-700">{content}</p>
      </div>
    </div>
  );
};

export default Accordion;
