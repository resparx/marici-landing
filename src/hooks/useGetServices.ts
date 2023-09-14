import { useState, useEffect } from "react";
type Services = {
  title: string;
  image: string;
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
  deps: unknown[] = [],
): Services => {
  const [services, setServices] = useState<Services>({
    title: "",
    subServices: [],
    image: ""
  });
  useEffect(() => {
    switch (serviceType) {
      case "digital-transformation-and-consulting-service":
        setServices({
          title: "Digital transformation and Consulting Service",
          image: 'https://i.imgur.com/MFm2n85.jpg',
          subServices: [
            {
              name: "Sap assesment and roadmap planning",
              imgSrc: "9WNYYwg.png",
              iconType: "LIST_CHECKED",
              content:
                "Nulla excepteur in sit sunt cillum et nulla est. Enim sint occaecat reprehenderit ",
            },
            {
              name: "Digital transformation and advisory services",
              imgSrc: "x3HkRK0.png",
              iconType: "HAND_POINT_UP",
              content:
                "Nulla excepteur in sit sunt cillum et nulla est. Enim sint occaecat reprehenderit ",
            },
            {
              name: "SAP Audit services",
              imgSrc: "457FVGj.png",
              iconType: "FILE_CONTRACT",
              content:
                "Nulla excepteur in sit sunt cillum et nulla est. Enim sint occaecat reprehenderit ",
            },
            {
              name: "Digital Authority services",
              imgSrc: "7XygyR8.png",
              iconType: "STAMP",
              content:
                "Nulla excepteur in sit sunt cillum et nulla est. Enim sint occaecat reprehenderit ",
            },
          ],
        });
        break;

      case "implementation-and-rollout-services":
        setServices({
          title: "Implementation and Rollout Services",
          image: 'https://i.imgur.com/MFm2n85.jpg',
          subServices: [
            {
              name: "SAP ECC",
              imgSrc: "mBR3r3r.png",
              iconType: "SAP",
              content:
                "Nulla excepteur in sit sunt cillum et nulla est. Enim sint occaecat reprehenderit ",
            },
            {
              name: "SAP S/4 HANA",
              imgSrc: "59fmkNr.png",
              iconType: "SAP",
              content:
                "Nulla excepteur in sit sunt cillum et nulla est. Enim sint occaecat reprehenderit ",
            },
            {
              name: "Rise with cloud",
              imgSrc: "Y5lQIy0.png",
              iconType: "SAP",
              content:
                "Nulla excepteur in sit sunt cillum et nulla est. Enim sint occaecat reprehenderit ",
            },
            {
              name: "SAP Commerce Cloud",
              imgSrc: "dDUD0S2.png",
              iconType: "SAP",
              content:
                "Nulla excepteur in sit sunt cillum et nulla est. Enim sint occaecat reprehenderit ",
            },
            {
              name: "SAP Customer data cloud",
              imgSrc: "ujSVdoP.png",
              iconType: "SAP",
              content:
                "Nulla excepteur in sit sunt cillum et nulla est. Enim sint occaecat reprehenderit ",
            },
            {
              name: "SAP Marketing cloud",
              imgSrc: "6s1NSHs.png",
              iconType: "SAP",
              content:
                "Nulla excepteur in sit sunt cillum et nulla est. Enim sint occaecat reprehenderit ",
            },
            {
              name: "SAP Customer data platform",
              imgSrc: "RZYkJbC.png",
              iconType: "SAP",
              content:
                "Nulla excepteur in sit sunt cillum et nulla est. Enim sint occaecat reprehenderit ",
            },
          ],
        });
        break;

      case "conversion-and-migration-services":
        setServices({
          title: "Conversion and Migration Services",
          image: 'https://i.imgur.com/MFm2n85.jpg',
          subServices: [
            {
              name: " On Prem Update/Conversion",
              imgSrc: "vyIvdHW.png",
              iconType: "CUBE",
              content:
                "Nulla excepteur in sit sunt cillum et nulla est. Enim sint occaecat reprehenderit ",
            },
            {
              name: "On Prem to Cloud Migration",
              imgSrc: "zeD68sF.png",
              iconType: "CLOUD",
              content:
                "Nulla excepteur in sit sunt cillum et nulla est. Enim sint occaecat reprehenderit ",
            },
          ],
        });
        break;

      case "application-management-services":
        setServices({
          title: "Application Management Services",
          image: 'https://i.imgur.com/MFm2n85.jpg',
          subServices: [
            {
              name: "Managed Services",
              imgSrc: "hZkxCpg.png",
              iconType: "GEAR",
              content:
                "Nulla excepteur in sit sunt cillum et nulla est. Enim sint occaecat reprehenderit ",
            },
            {
              name: "Shared Services",
              imgSrc: "UNfknd4.png",
              iconType: "SHARE_NODES",
              content:
                "Nulla excepteur in sit sunt cillum et nulla est. Enim sint occaecat reprehenderit ",
            },
          ],
        });
        break;

      case "integration-and-Analytic-Services":
        setServices({
          title: "Integration and Analytic Services",
          image: 'https://i.imgur.com/MFm2n85.jpg',
          subServices: [
            {
              name: "SAP BTP",
              imgSrc: "zeD68sF.png",
              iconType: "SAP",
              content:
                "Nulla excepteur in sit sunt cillum et nulla est. Enim sint occaecat reprehenderit ",
            },
            {
              name: "PI/PO/ CPI",
              imgSrc: "W0rAHuh.png",
              iconType: "GEAR",
              content:
                "Nulla excepteur in sit sunt cillum et nulla est. Enim sint occaecat reprehenderit ",
            },
            {
              name: "RPA",
              imgSrc: "mBR3r3r.png",
              iconType: "GEAR",
              content:
                "Nulla excepteur in sit sunt cillum et nulla est. Enim sint occaecat reprehenderit ",
            },
            {
              name: "SAP SAC",
              imgSrc: "x3HkRK0.png",
              iconType: "SAP",
              content:
                "Nulla excepteur in sit sunt cillum et nulla est. Enim sint occaecat reprehenderit ",
            },
            {
              name: "BW",
              imgSrc: "457FVGj.png",
              iconType: "GEAR",
              content:
                "Nulla excepteur in sit sunt cillum et nulla est. Enim sint occaecat reprehenderit ",
            },
          ],
        });
        break;

      case "testing-services":
        setServices({
          title: "Testing Services",
          image: 'https://i.imgur.com/MFm2n85.jpg',
          subServices: [
            {
              name: "Manual testing",
              imgSrc: "7XygyR8.png",
              iconType: "GEAR",
              content:
                "Nulla excepteur in sit sunt cillum et nulla est. Enim sint occaecat reprehenderit ",
            },
            {
              name: "Selenium",
              imgSrc: "mBR3r3r.png",
              iconType: "SELENIUM",
              content:
                "Nulla excepteur in sit sunt cillum et nulla est. Enim sint occaecat reprehenderit ",
            },
            {
              name: "Tosca",
              imgSrc: "dDUD0S2.png",
              iconType: "TOSCA",
              content:
                "Nulla excepteur in sit sunt cillum et nulla est. Enim sint occaecat reprehenderit ",
            },
          ],
        });
        break;

      case "application-development-and-extension-services":
        setServices({
          title: "Application Development & Extension Services",
          image: 'https://i.imgur.com/MFm2n85.jpg',
          subServices: [
            {
              name: "Mobile application development",
              imgSrc: "6s1NSHs.png",
              iconType: "PHONE",
              content:
                "Nulla excepteur in sit sunt cillum et nulla est. Enim sint occaecat reprehenderit ",
            },
            {
              name: "S/4 Fiori Application development",
              imgSrc: "RZYkJbC.png",
              iconType: "SAP",
              content:
                "Nulla excepteur in sit sunt cillum et nulla est. Enim sint occaecat reprehenderit ",
            },
            {
              name: "UI/UX Development - CX",
              imgSrc: "vyIvdHW.png",
              iconType: "PAINT",
              content:
                "Nulla excepteur in sit sunt cillum et nulla est. Enim sint occaecat reprehenderit ",
            },
          ],
        });
        break;

      case "staffing-services":
        setServices({
          title: "Staffing Services",
          image: 'https://i.imgur.com/MFm2n85.jpg',
          subServices: [
            {
              name: "Technology roles",
              imgSrc: "ujSVdoP.png",
              iconType: "CHIP",
              content:
                "Nulla excepteur in sit sunt cillum et nulla est. Enim sint occaecat reprehenderit ",
            },
            {
              name: "Generic roles",
              imgSrc: "RZYkJbC.png",
              iconType: "GEAR",
              content:
                "Nulla excepteur in sit sunt cillum et nulla est. Enim sint occaecat reprehenderit ",
            },
          ],
        });
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
