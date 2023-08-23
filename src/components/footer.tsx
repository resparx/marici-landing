import Email from "@/icons/email";
import Facebook from "@/icons/facebook";
import Linkedin from "@/icons/linkedin";
import Twitter from "@/icons/twitter";

const Li = ({ children }: { children: any }) => {
  return <li className="text-lg font-normal text-gray-50">{children}</li>;
};

const Footer = () => {
  return (
    <footer className="flex w-full bg-slate-900 px-32 py-24 justify-between">
      <ul className="w-52">
        <li className="mb-9">
          <img className="w-full" src="/static/images/maharshi_light.png" />
        </li>
        <Li>Email: info@maricisolutions.com</Li>
        <Li>Phone: +49 17641848023</Li>
      </ul>
      <ul className="flex flex-col w-48 gap-3">
        <li className="text-2xl font-semibold text-white mb-8">About us</li>
        <Li>Who We Are</Li>
        <Li>Why MARICI</Li>
        <Li>Our Value Propositions</Li>
        <Li>How we deliver</Li>
      </ul>
      <ul className="flex flex-col w-48 gap-3">
        <li className="text-2xl font-semibold text-white mb-8">Solutions</li>
        <Li>Solutions</Li>
        <Li>S/4 HANA</Li>
        <Li>Digital Transformation for Retail</Li>
        <Li>SAP Hybris</Li>
        <Li>SAP SuccessFactors</Li>
        <Li>Master Data Management</Li>
        <Li>RPA</Li>
      </ul>
      <ul className="flex flex-col w-48 gap-3">
        <li className="text-2xl font-semibold text-white mb-8">Services</li>
        <Li>Consulting</Li>
        <Li>Implementations</Li>
        <Li>AppLication Development</Li>
        <Li>Business IntelLigence & Performance Optimization</Li>
        <Li>Training & Support</Li>
      </ul>
      <ul className="flex flex-col w-48 gap-3">
        <li className="text-2xl font-semibold text-white mb-8">Address</li>
        <Li>HQ – Germany: Maxfeldstraße 52, 90409 Nürnberg</Li>
        <Li>USA Subsidiary: Maharshi Solutions Inc</Li>
        <Li>1912 Eastchester Dr Suite 108, High Point, North CaroLina</Li>
      </ul>
      <ul className="flex flex-col w-48 gap-3">
        <li className="text-2xl font-semibold text-white mb-8">Follow Us</li>
        <li>
          <div className="flex gap-2">
            <Twitter className="h-8 fill-slate-200" />
            <Linkedin className="h-8 fill-slate-200" />
            <Facebook className="h-8 fill-slate-200" />
            <Email className="h-8 fill-slate-200" />
          </div>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
