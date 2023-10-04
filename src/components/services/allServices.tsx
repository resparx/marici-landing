"use client";

import RenderIcon from "@/components/common/renderIcon";
import useGetServices from "@/hooks/useGetServices";
import classNames from "classnames";
import { useParams } from "next/navigation";
import { ReactNode } from "react";
import SubServices from "./subServices";

const Points = ({ points }) => {
  const renderPoints = points.length > 3 ? points.slice(0, 3) : points;
  return (
    <div>
      {renderPoints.map((point, index) => {
        return (
          <div key={`point-${index}`} className="flex">
            <div>
              <RenderIcon />
            </div>
            <div>
              <p>{point.title}</p>
              <p>{point.content}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

const Service = ({
  title,
  content,
  imgSrc,
  iconType,
  iconProps = {},
  reverse,
  points,
  subServices,
}: {
  title: string;
  content: string;
  imgSrc: string;
  iconType: string;
  iconProps?: {};
  reverse: boolean;
  points: any;
  subServices: any;
}): ReactNode => {
  const baseIconProps = {
    className: "h-6 w-6 fill-sky-700",
    ...iconProps,
  };
  console.log(subServices, points);
  return (
      <div
      className={classNames(
        "flex w-[100%] justify-between transition-all mb-40",
        {
          "flex-row-reverse": reverse,
        }
      )}
    >
      <div className="flex flex-col w-[45%] gap-4">
        <div className="flex gap-4 items-center">
          <RenderIcon type={iconType} {...baseIconProps} />
          <p className="text-sky-950 font-semibold text-xl">{title}</p>
        </div>
        <p className="text-sky-950 text-base9 mt-5">{content}</p>
        {subServices && <SubServices subServices={subServices} />}
        {points && <Points points={points} />}
        <button className="text-sky-700 text-lg font-semibold w-fit rounded-lg mt-auto">
          Know more
        </button>
      </div>
      <div className="w-[45%]">
        <img src="/static/images/services/service1.png" />
      </div>
    </div>
  );
};

const AllServices = () => {
  const { service } = useParams();
  const { subServices } = useGetServices(service.toString());
  return (
    <section className="flex flex-wrap mx-auto w-full px-52 gap-16">
      {subServices.map((item, index: number) => {
        return (
          <Service
            reverse={index % 2 !== 0}
            key={`service-${index}`}
            {...item}
          />
        );
      })}
    </section>
  );
};

export default AllServices;
