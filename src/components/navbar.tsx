import Link from "next/link";

const Navbar = () => {
  return (
    <div className="w-full flex justify-between px-40 py-6 fixed bg-white align-middle">
      <div>
        <img className="w-44" src="/static/images/mahrashi_dark.png" />
      </div>
      <ul className="flex gap-12 align-middle">
        <li>
          <Link className="text-slate-800" href="/">
            Services
          </Link>
        </li>
        <li>
          <Link className="text-slate-800" href="/">
            Case studies
          </Link>
        </li>
        <li>
          <Link className="text-slate-800" href="/">
            About us
          </Link>
        </li>
        <li>
          <Link className="text-slate-800" href="/">
            Contact us
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
