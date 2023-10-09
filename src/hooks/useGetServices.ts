import { useState, useEffect } from "react";

import implementationContent from "../constants/content/services/implementationConsultingService"
import erpCoversionMigrationContent from "../constants/content/services/erpConversionMigrationService"
import supportMaintenanceServices from "../constants/content/services/ERP-CRMSupportMaintenanceServices"
import applicationContent from "../constants/content/services/applicationDevelopmentFrontendServices "
import staffingContent from "../constants/content/services/staffingServices"

type Services = {
  title: string;
  image: string;
  subTitle: string;
  content: string;
  subServices: {
    title: string;
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
  const [services, setServices] = useState<Services | any>({
    title: "",
    content: "",
    subTitle: "",
    subServices: [],
    image: "",
  });
  useEffect(() => {
    switch (serviceType) {
      case "implementation-and-consulting-service":
        setServices(implementationContent);
        break;
      case "upgrade-migration-services":
        setServices(erpCoversionMigrationContent);
        break;
      case "support-maintenance-services":
        setServices(supportMaintenanceServices);
        break;
      case "application-development-frontend-services":
        setServices(applicationContent);
        break;
      case "staffing-services":
        setServices(staffingContent);
        break;
      default: {
        setServices({
          title: "",
          image: "",
          subServices: [],
        });
        break;
      }
    }
  }, [serviceType, ...deps]);

  return services;
};

export default useGetServices;
