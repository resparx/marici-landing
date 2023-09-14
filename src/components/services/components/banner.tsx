"use client";

import useGetServices from "@/hooks/useGetServices";
import { useParams } from "next/navigation";

const Banner = () => {
  const { service } = useParams();
  const { title, image } = useGetServices(service.toString());
  console.log(image,"image")
  return (
    <section
      className="flex flex-col gap-8 justify-center items-start h-[600px] bg-no-repeat bg-cover bg-center"
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className="w-full h-full pb-32 px-32 bg-opacity-80 bg-slate-900 flex justify-end flex-col gap-4">
        <h1 className="text-white font-bold text-4xl w-[30%]">{title}</h1>
        <p className="text-white w-1/3 text-lg">
          Amet sint proident occaecat occaecat officia ea occaecat do incididunt
          irure pariatur consectetur amet officia.
        </p>
      </div>
    </section>
  );
};

export default Banner;
