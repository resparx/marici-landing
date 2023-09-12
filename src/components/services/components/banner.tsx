"use client";

import useGetServices from "@/hooks/useGetServices";
import { useParams } from "next/navigation";

const Banner = () => {
  const { service } = useParams();
  const { title, subServices } = useGetServices(service.toString());
  return (
    <section className="flex flex-col gap-8 justify-center items-center pt-44 h-screen">
      <h1 className="text-slate-800 font-bold text-5xl w-1/3 text-center">
        {title}
      </h1>
      <p className="text-slate-700 w-1/3 text-xl text-center">
        Amet sint proident occaecat occaecat officia ea occaecat do incididunt
        irure pariatur consectetur amet officia.
      </p>
      <button className="rounded-lg px-4 py-4 bg-green-500 text-gray-900">
        Know more
      </button>
      <img src="" alt="" />
    </section>
  );
};

export default Banner;
