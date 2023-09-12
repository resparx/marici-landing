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
    className: "h-8 w-8 fill-green-500",
    ...iconProps,
  };
  return (
    <div className="flex flex-col w-[30%] bg-green-50 rounded-2xl p-8 gap-4">
      <RenderIcon type={iconType} {...baseIconProps} />
      <p className="text-slate-800 font-semibold text-2xl">{heading}</p>
      <p className="text-slate-600 text-lg">{content}</p>
      <button className="text-green-700 text-base font-semibold w-fit rounded-lg">
        Know more
      </button>
    </div>
  );
};

const AllServices = () => {
  const { service } = useParams();
  const { title, subServices } = useGetServices(service.toString());
  return (
    <section>
      <p>{title}</p>
      <p>
        Reprehenderit quis voluptate elit incididunt laboris et consectetur nisi
        sit nulla esse commodo dolor.
      </p>
      <div className="flex flex-wrap mx-auto w-3/4 gap-16">
        {subServices.map((item, index: number) => {
          return (
            <Service
              key={`service-${index}`}
              heading={item.name}
              content={item.content}
              imgSrc={item.imgSrc}
              iconType={item.iconType}
              iconProps={item.iconProps}
            />
          );
        })}
      </div>
    </section>
  );
};

export default AllServices;
