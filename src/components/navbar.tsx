import Down from "@/icons/down";
import Linkedin from "@/icons/linkedin";
import Link from "next/link";
import classNames from "classnames";

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
    <div className="w-full h-20 flex justify-between px-32 fixed bg-white backdrop-blur-sm bg-opacity-80 items-center z-10">
      <div>
        <img className="w-44" src="/static/images/mahrashi_dark.png" />
      </div>
      <ul className="flex gap-12 align-middle h-20">
        <li>
          <Link className="text-slate-800 h-full" href="/">
            <p className="peer font-medium h-full flex items-center">
              Services
              <Down className="inline ml-1" />
            </p>
            <ul className="hidden hover:flex peer-hover:flex flex-col gap-6 absolute top-20 bg-white backdrop-blur-sm bg-opacity-80 p-3 rounded-b-lg rounded-br-lg">
              <li>
                <Link href="/services/digital-transformation-and-consulting-service">
                  <p>Digital transformation and Consulting Services</p>
                </Link>
              </li>
              <li>
                <Link href="/services/implementation-and-rollout-services">
                  <p>Implementation and Rollout Services</p>
                </Link>
              </li>
              <li>
                <Link href="/services/conversion-and-migration-services">
                  <p>Conversion and Migration Services</p>
                </Link>
              </li>
              <li>
                <Link href="/services/application-management-services">
                  <p>Application Management Service</p>
                </Link>
              </li>
              <li>
                <Link href="/services/integration-and-Analytic-Services">
                  <p>Integration and Analytic Services</p>
                </Link>
              </li>
              <li>
                <Link href="/services/testing-services">
                  <p>Testing Services</p>
                </Link>
              </li>
              <li>
                <Link href="/services/application-development-and-extension-services">
                  <p>Application Development & Extension Services</p>
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
            <p className="font-medium">
              Case studies
              {/* <Down className="inline ml-1" /> */}
            </p>
          </Link>
        </li>
        <li className="flex items-center">
          <Link className="text-slate-800" href="/">
            <p className="font-medium">
              About us
              {/* <Down className="inline ml-1" /> */}
            </p>
          </Link>
        </li>
        <li className="flex items-center">
          <Link className="text-slate-800" href="/contact-us">
            <p className="font-medium">
              Contact us
              {/* <Down className="inline ml-1" /> */}
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
