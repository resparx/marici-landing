"use client";

import Commonbanner from "@/components/common/commonBanner";
import useGetServices from "@/hooks/useGetServices";
import { useParams } from "next/navigation";

const Banner = () => {
  const { service } = useParams();
  const { title, image, subTitle } = useGetServices(service.toString());
  return (
    <Commonbanner
      title={title}
      image={image}
      subTitle={subTitle}
    />
  );
};

export default Banner;
