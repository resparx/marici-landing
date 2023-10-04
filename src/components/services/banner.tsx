"use client";

import Commonbanner from "@/components/common/commonBanner";
import useGetServices from "@/hooks/useGetServices";
import { useParams } from "next/navigation";

const Banner = () => {
  const { service } = useParams();
  const { title, image, content } = useGetServices(service.toString());
  return (
    <Commonbanner
      title={title}
      image={image}
      subTitle={content}
    />
  );
};

export default Banner;
