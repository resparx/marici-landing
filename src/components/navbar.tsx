import Down from "@/icons/down";
import Linkedin from "@/icons/linkedin";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="w-full flex justify-between px-64 py-6 fixed bg-white backdrop-blur-sm bg-opacity-80 items-center z-10">
      <div>
        <img className="w-44" src="/static/images/mahrashi_dark.png" />
      </div>
      <ul className="flex gap-12 align-middle">
        <li>
          <Link className="text-slate-800" href="/">
            <p className="font-medium">
              Services
              <Down className="inline ml-1" />
            </p>
          </Link>
        </li>
        <li>
          <Link className="text-slate-800" href="/">
            <p className="font-medium">
              Case studies
              <Down className="inline ml-1" />
            </p>
          </Link>
        </li>
        <li>
          <Link className="text-slate-800" href="/">
            <p className="font-medium">
              About us
              <Down className="inline ml-1" />
            </p>
          </Link>
        </li>
        <li>
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
