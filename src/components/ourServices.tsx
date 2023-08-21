import Bolt from "@/icons/bolt";
import SectionPill from "./common/sectionPill";
import Chart from "@/icons/chart";
import People from "@/icons/people";
import Phone from "@/icons/phone";
import Chip from "@/icons/chip";
import Gear from "@/icons/gear";

const ServiceItem = ({
  title,
  content,
  icon,
}: {
  icon: any;
  title: string;
  content: string;
}) => {
  return (
    <div className="flex flex-col gap-4 w-80">
      <div className="flex justify-center">
        <div className="rounded-2xl bg-green-600 p-4">{icon}</div>
      </div>
      <p className="text-xl font-bold text-gray-900 text-center">{title}</p>
      <p className="text-base text-gray-500 font-medium text-center">
        {content}
      </p>
    </div>
  );
};

const OurServices = () => {
  return (
    <section className="p-24 px-64 flex flex-col gap-12 bg-white w-full">
      <div className="flex flex-col items-center gap-4 mb-12">
        <SectionPill title="Our Services" />
        <p className="text-gray-900 text-4xl font-bold text-center">
          Gain more insight into how people use your
        </p>
        <p className="text-gray-500 font-normal w-2/5 text-center">
          With our integrated CRM, project management, collaboration and
          invoicing capabilities, you can manage every aspect of your business
          in one secure platform.
        </p>
      </div>
      <div className="flex gap-36 justify-center flex-wrap">
        <ServiceItem
          icon={<Bolt className="fill-white h-8" />}
          title="Measure your performance"
          content="Stay connected with your team and make quick decisions wherever you are."
        />
        <ServiceItem
          icon={<Chart className="fill-white h-8" />}
          title="Custom analytics"
          content="Get a complete sales dashboard in the cloud. See activity, revenue and social metrics all in one place."
        />
        <ServiceItem
        icon={<People className="fill-white h-8" />}
          title="Team management"
          content="Our calendar lets you know what is happening with customer and projects so you"
        />
        <ServiceItem
        icon={<Chip className="fill-white h-8" />}
          title=" Build your website"
          content="A tool that lets you build a dream website even if you know nothing about web design or programming."
        />
        <ServiceItem
        icon={<Phone className="fill-white h-8" />}
          title="connect multiple apps"
          content="The first business platform to bring together all of your products from one place."
        />
        <ServiceItem
        icon={<Gear className="fill-white h-8" />}
          title="Easy setup"
          content="End to End Business Platform, Sales Management, Marketing Automation, Help Desk"
        />
      </div>
    </section>
  );
};

export default OurServices;
