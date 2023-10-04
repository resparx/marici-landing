"use client";

import RenderIcon from "@/components/common/renderIcon";
import useGetServices from "@/hooks/useGetServices";
import classNames from "classnames";
import { useParams } from "next/navigation";

const Pill = ({ title }: { title: string }) => {
  return (
    <div className="flex items-center justify-center rounded-full bg-sky-300 p-3 w-fit">
      <p className="text-sky-900 text-xs font-semibold">{title}</p>
    </div>
  );
};

const Point = ({
  iconProps = {
    height: 32  ,
    className: "mt-1",
  },
  title,
  content,
}) => {
  return (
    <div className={"w-[30%] flex gap-4 items-start"}>
      <RenderIcon {...iconProps} />
      <div className="flex flex-col gap-4 items-start">
        <p className="text-slate-800 text-lg font-semibold">{title}</p>
        <p className="text-slate-800">{content}</p>
      </div>
    </div>
  );
};

const DetailsType = ({
  reverse,
  name,
  subContent,
  points = [],
}: {
  reverse?: boolean;
}) => {
  return (
    <div className="flex w-3/4 mx-auto gap-16 flex-col">
      <div
        className={classNames("w-full flex justify-between", {
          "flex-row-reverse": reverse,
        })}
      >
        <img
          className="relative overflow-hidden rounded-2xl w-[45%]"
          src="https://placehold.co/600x400/sky/white"
        />
        <div className="w-[45%] flex flex-col gap-4">
          <Pill title="Nostrud ea" />
          <p className="text-slate-900 font-bold text-3xl w-[75%]">{name}</p>
          <p className="text-slate-700 font-medium text-lg w-full mb-8">
            {subContent}
          </p>
        </div>
      </div>
      <div className="flex gap-12 flex-wrap">
          {points.map((item, index) => (
            <Point {...item} key={`point-${index}`} />
          ))}
        </div>
    </div>
  );
};

const Details = () => {
  const { service } = useParams();
  const { subServices } = useGetServices(service.toString());
  return (
    <div className="flex flex-col mt-24 gap-40">
      {subServices.map((items, index) => (
        <DetailsType {...items} key={`service-${index}`} reverse={index % 2 != 0} />
      ))}
    </div>
  );
};

export default Details;
