import Down from "@/icons/down";
import Linkedin from "@/icons/linkedin";
import Link from "next/link";
import classNames from "classnames";
import Dropdown from "./common/dropDown";
import Menu from "@/icons/menu";

const SubNav = ({ heading, items }: any) => {
  return (
    <div className="flex flex-col gap-4">
      <p className="font-semibold text-xl">{heading}</p>
      <ul>
        {items.map((item: any, index: number) => {
          return (
            <li className="font-normal text-base" key={`sub-menu-${index}`}>
              {item.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const Navbar = () => {
  return (
    <div className="w-full h-20 flex justify-between px-4 sm:px-52 fixed bg-white items-center z-10">
      <Link href="/" className="w-[40%] sm:w-44" >
        <img
          src="/static/images/mahrashi_dark.png"
        />
      </Link>
      {/* <Dropdown> */}
        <Menu className="sm:hidden" />
      {/* </Dropdown> */}
      <a className="hidden sm:block">
        <ul className="hidden sm:flex gap-12 align-middle h-20">
          <li>
            <Link className="text-slate-800 h-full" href="/">
              <p className="peer font-medium h-full flex items-center">
                Services
                <Down className="inline ml-1" />
              </p>
              <ul className="hidden hover:flex peer-hover:flex flex-col gap-6 absolute top-20 bg-white backdrop-blur-sm bg-opacity-80 p-3 rounded-b-lg rounded-br-lg">
                <li>
                  <Link href="/services/implementation-and-consulting-service">
                    <p>Implementation and Consulting Services</p>
                  </Link>
                </li>
                <li>
                  <Link href="/services/upgrade-migration-services">
                    <p>Upgrade and Migration Services (SAP/CRM) </p>
                  </Link>
                </li>
                <li>
                  <Link href="/services/support-maintenance-services">
                    <p>ERP/Cx Support and Maintenance Services</p>
                  </Link>
                </li>
                <li>
                  <Link href="/services/application-development-frontend-services">
                    <p>Application Developement and Front end Services</p>
                  </Link>
                </li>
                <li>
                  <Link href="/services/staffing-services">
                    <p>Staffing Services</p>
                  </Link>
                </li>
              </ul>
            </Link>
          </li>
          <li className="flex items-center">
            <Link className="text-slate-800" href="/case-studies">
              <p className="font-medium">Case studies</p>
            </Link>
          </li>
          <li className="flex items-center">
            <Link className="text-slate-800" href="/about-us">
              <p className="font-medium">About us</p>
            </Link>
          </li>
          <li className="flex items-center">
            <Link className="text-slate-800" href="/contact-us">
              <p className="font-medium">Contact us</p>
            </Link>
          </li>
        </ul>
      </a>
      <div className="hidden sm:flex items-center">
        <Linkedin fill="#146ebe" height={32} />
        <img className="h-10" src="/static/images/sap-silver.png" />
      </div>
    </div>
  );
};

export default Navbar;
