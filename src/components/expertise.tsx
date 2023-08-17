import SectionPill from "./common/sectionPill";

const Expertise = () => {
  return (
    <div className="flex flex-col w-full px-40 py-20">
      <div className="flex flex-col gap-4 w-2/3">
        <SectionPill title="Our expertise" />
        <p className="text-4xl font-bold text-gray-900">
          Gain more insight into how people use your
        </p>
        <p className="text-xl font-medium text-gray-500">
          With our integrated CRM, project management, collaboration and
          invoicing capabilities, you can manage every aspect of your business
          in one secure platform.
        </p>
      </div>
    </div>
  );
};

export default Expertise;
