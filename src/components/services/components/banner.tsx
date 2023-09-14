"use client";

import Commonbanner from "@/components/common/commonBanner";
import useGetServices from "@/hooks/useGetServices";
import { useParams } from "next/navigation";

const Banner = () => {
  const { service } = useParams();
  const { title, image } = useGetServices(service.toString());
  return (
    <Commonbanner
      title={title}
      image={image}
      subTitle="Amet sint proident occaecat occaecat officia ea occaecat do incididunt
  irure pariatur consectetur amet officia."
    />
  );
};

export default Banner;
