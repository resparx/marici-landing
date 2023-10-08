"use client";

import RenderIcon from "@/components/common/renderIcon";
import useGetServices from "@/hooks/useGetServices";
import classNames from "classnames";
import { useParams } from "next/navigation";
import { ReactNode } from "react";
import SubServices from "./subServices";
import Link from "next/link";

const Points = ({ points }: any) => {
  const renderPoints = points.length > 3 ? points.slice(0, 3) : points;
  return (
    <div className="mt-4 pl-4 flex flex-col gap-8">
      {renderPoints.map((point: any, index: number) => {
        return (
          <div
            key={`point-${index}`}
            className="flex flex-col items-start gap-4"
          >
            <div className="flex items-center gap-4">
              <RenderIcon />
              <p className="text-slate-900 font-semibold">{point.title}</p>
            </div>
            <p className="text-slate-900">{point.content}</p>
          </div>
        );
      })}
    </div>
  );
};

const Service = ({
  title,
  content,
  iconType,
  iconProps = {},
  reverse,
  points,
  subServices,
  imgSrc,
}: any): ReactNode => {
  const baseIconProps = {
    className: "h-6 w-6 fill-sky-700",
    ...iconProps,
  };
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
        <div className="flex gap-4 items-center pl-4">
          <RenderIcon type={iconType} {...baseIconProps} />
          <p className="text-sky-950 font-semibold text-xl">{title}</p>
        </div>
        <p className="text-sky-950 text-base mt-5 pl-4">{content}</p>
        <Link className="pl-4 text-slate-900" href="">Learn more</Link>
        {subServices && <SubServices subServices={subServices} />}
        {points && <Points points={points} />}
      </div>
      <div className="w-[45%]">
        <img src={imgSrc} />
      </div>
    </div>
  );
};

const AllServices = () => {
  const { service } = useParams();
  const { subServices } = useGetServices(service.toString());
  console.log(subServices, "subServices");
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
