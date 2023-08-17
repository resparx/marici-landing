import SectionPill from "./common/sectionPill";

const ServiceItem = ({
  title,
  content,
}: // icon
{
  // icon: any;
  title: string;
  content: string;
}) => {
  return (
    <div className="flex flex-col gap-4 w-80 mx-10">
      {/* <div>
        {icon}
      </div> */}
      <p className="text-xl font-bold text-gray-900 text-center">{title}</p>
      <p className="text-base text-gray-500 font-medium text-center">
        {content}
      </p>
    </div>
  );
};

const OurServices = () => {
  return (
    <section className="p-24 flex flex-col gap-12 bg-white w-full">
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
          title="Measure your performance"
          content="Stay connected with your team and make quick decisions wherever you are."
        />
        <ServiceItem
          title="Custom analytics"
          content="Get a complete sales dashboard in the cloud. See activity, revenue and social metrics all in one place."
        />
        <ServiceItem
          title="Team management"
          content="Our calendar lets you know what is happening with customer and projects so you"
        />
        <ServiceItem
          title=" Build your website"
          content="A tool that lets you build a dream website even if you know nothing about web design or programming."
        />
        <ServiceItem
          title="connect multiple apps"
          content="The first business platform to bring together all of your products from one place."
        />
        <ServiceItem
          title="Easy setup"
          content="End to End Business Platform, Sales Management, Marketing Automation, Help Desk"
        />
      </div>
    </section>
  );
};

export default OurServices;
