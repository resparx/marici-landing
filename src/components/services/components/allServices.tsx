"use client";

import RenderIcon from "@/components/common/renderIcon";
import useGetServices from "@/hooks/useGetServices";
import { useParams } from "next/navigation";
import { ReactNode } from "react";

const Service = ({
  heading,
  content,
  imgSrc,
  iconType,
  iconProps = {},
}: {
  heading: string;
  content: string;
  imgSrc: string;
  iconType: string;
  iconProps?: {};
}): ReactNode => {
  const baseIconProps = {
    className: "h-6 w-6 fill-sky-700",
    ...iconProps,
  };
  return (
    <div className="flex flex-col w-[30%] bg-slate-50 rounded-2xl p-8 gap-4 shadow-xl hover:shadow-2xl hover:scale-105 transition-all">
      <div className="flex gap-4 items-center">
        <RenderIcon type={iconType} {...baseIconProps} />
        <p className="text-sky-950 font-semibold text-xl">{heading}</p>
      </div>
      <p className="text-sky-950 text-base9 mt-5">{content}</p>
      <button className="text-sky-700 text-lg font-semibold w-fit rounded-lg mt-auto">  
        Know more
      </button>
    </div>
  );
};

const AllServices = () => {
  const { service } = useParams();
  const { title, subServices } = useGetServices(service.toString());
  return (
    <section className="flex flex-wrap mx-auto w-3/4 gap-16">
      {subServices.map((item, index: number) => {
        console.log(subServices, "subServices")
        return (
          <Service
            key={`service-${index}`}
            heading={item.title}
            content={item.content}
            imgSrc={item.imgSrc}
            iconType={item.iconType}
            iconProps={item.iconProps}
          />
        );
      })}
    </section>
  );
};

export default AllServices;
