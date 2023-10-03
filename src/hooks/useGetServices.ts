import { useState, useEffect } from "react";

import implementationContent from "../constants/content/services/implementationConsultingService"

type Services = {
  title: string;
  image: string;
  subTitle: string;
  subServices: {
    name: string;
    imgSrc: string;
    content: string;
    iconType: string;
    iconProps?: {};
  }[];
};

const useGetServices = (
  serviceType: string,
  deps: unknown[] = []
): Services => {
  const [services, setServices] = useState<Services>({
    title: "",
    subTitle: "",
    subServices: [],
    image: "",
  });
  useEffect(() => {
    switch (serviceType) {
      case "implementation-and-consulting-service":
        setServices(implementationContent);
        break;

      default: {
        setServices({
          title: "",
          image: "",
          subServices: [],
        });
      }
    }
  }, [serviceType, ...deps]);

  return services;
};

export default useGetServices;
