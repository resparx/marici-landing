import Down from "@/icons/down";
import Linkedin from "@/icons/linkedin";
import Link from "next/link";
import classNames from "classnames";

const SubNav = ({ heading, items }: any) => {
  return (
    <div className="flex flex-col gap-4">
      <p className="font-semibold text-xl" >{heading}</p>
      <ul>
        {items.map((item: any, index: number) => {
          return <li className="font-normal text-base" key={`sub-menu-${index}`}>{item.name}</li>;
        })}
      </ul>
    </div>
  );
};

const Navbar = () => {
  return (
    <div className="w-full flex justify-between px-32 fixed bg-white backdrop-blur-sm bg-opacity-80 items-center z-10">
      <div>
        <img className="w-44" src="/static/images/mahrashi_dark.png" />
      </div>
      <ul className="flex gap-12 align-middle h-20">
        <li>
          <Link className="text-slate-800 relative h-full" href="/">
            <p className="peer font-medium h-full flex items-center">
              Services
              <Down className="inline ml-1" />
            </p>
            <div className="hidden hover:flex peer-hover:flex w-[1080px] flex-wrap gap-6 absolute top-[90px] -left-8 bg-white backdrop-blur-sm bg-opacity-80 p-3 rounded-xl ">
              <SubNav
                heading="Digital transformation and Consulting Services"
                items={[
                  { name: "Sap assesment and roadmap planning" },
                  { name: "Digital transformation and advisory services" },
                  { name: "SAP Audit services" },
                  { name: "Digital Authority services" },
                ]}
              />
              <SubNav
                heading="Implementation and Rollout Services"
                items={[
                  { name: "SAP ECC" },
                  { name: "SAP S/4 HANA" },
                  { name: "Rise with cloud" },
                  { name: "SAP Commerce Cloud" },
                  { name: "SAP Customer data cloud" },
                  { name: "SAP Marketing cloud" },
                  { name: "SAP Customer data platform" },
                ]}
              />
              <SubNav
                heading="Conversion and Migration Services"
                items={[
                  { name: " On Prem Update/Conversion" },
                  { name: "On Prem to Cloud Migration" },
                ]}
              />
              <SubNav
                heading="Application Management Service"
                items={[
                  { name: "Managed Services" },
                  { name: "Shared Services" },
                ]}
              />
              <SubNav
                heading="Integration and Analytic Services"
                items={[
                  { name: "SAP BTP" },
                  { name: "PI/PO/ CPI" },
                  { name: "RPA" },
                  { name: "SAP SAC" },
                  { name: "BW" },
                ]}
              />
              <SubNav
                heading="Testing Services"
                items={[
                  { name: "Manual testing" },
                  { name: "Selenium" },
                  { name: "Tosca" },
                ]}
              />
              <SubNav
                heading="Application Development & Extension Services"
                items={[
                  { name: "Mobile application development" },
                  { name: "S/4 Fiori Application development" },
                  { name: "UI/UX Development - CX" },
                ]}
              />
              <SubNav
                heading="Staffing Services"
                items={[
                  { name: "Technology roles" },
                  { name: "Generic roles" },
                ]}
              />
            </div>
          </Link>
        </li>
        <li className="flex items-center">
          <Link className="text-slate-800" href="/">
            <p className="font-medium">
              Case studies
              <Down className="inline ml-1" />
            </p>
          </Link>
        </li>
        <li className="flex items-center">
          <Link className="text-slate-800" href="/">
            <p className="font-medium">
              About us
              <Down className="inline ml-1" />
            </p>
          </Link>
        </li>
        <li className="flex items-center">
          <Link className="text-slate-800" href="/">
            <p className="font-medium">
              Contact us
              <Down className="inline ml-1" />
            </p>
          </Link>
        </li>
      </ul>
      <div className="flex items-center">
        <Linkedin fill="#146ebe" height={32} />
        <img className="h-10" src="/static/images/sap-silver.png" />
      </div>
    </div>
  );
};

export default Navbar;
