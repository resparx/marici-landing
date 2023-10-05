import SectionPill from "./common/sectionPill";
import classNames from "classnames";

const Sub = ({ title, content }: { title: string; content: string }) => {
  return (
    <div className="flex">
      <div className="flex bg-sky-500 rounded-2xl"></div>
      <div className="flex flex-col gap-4">
        <p className="text-2xl font-bold text-gray-900">{title}</p>
        <p className="text-base font-medium text-gray-500 w-2/3">{content}</p>
      </div>
    </div>
  );
};

const ExpertiseTypeA = () => {
  return (
    <div className="flex gap-28 mt-28 items-center mb-24">
      <div className="flex flex-col gap-10 w-1/2">
        <Sub
          title="Measure your performance"
          content="Stay connected with your team and make quick Decisions wherever you are"
        />
        <Sub
          title="Build your website"
          content="A tool that lets you build a dream website even if you know nothing about web design or programming."
        />
        <Sub
          title="Connect multiple apps"
          content="The first business platform to bring together all of your products from one place."
        />
      </div>
      <div className="w-1/2 rounded-2xl overflow-hidden">
        <img className="w-full" src="https://placehold.co/600x400.png" />
      </div>
    </div>
  );
};

const ExpertiseTypeB = ({ reverse }: { reverse?: boolean }) => {
  return (
    <div className={classNames('flex', 'mb-24', 'items-center', 'gap-28', {
      'flex-row-reverse': reverse
    })}>
      <div className="w-1/2 rounded-2xl overflow-hidden">
        <img className="w-full" src="https://placehold.co/600x400.png" />
      </div>
      <div className="flex flex-col w-1/2 gap-4">
        <SectionPill title="Features" />
        <p className="text-5xl text-gray-900 font-bold w-2/3">
          Gain more insight into how people use your
        </p>
        <p className="text-xl font-medium text-gray-500 mt-4 w-2/3">
          With our integrated CRM, project management, collaboration and
          invoicing capabilities, you can manage every aspect of your business
          in one secure platform.
        </p>
        <button className="bg-sky-500 text-white py-3 px-5 rounded-xl w-fit">
          Know more
        </button>
      </div>
    </div>
  );
};

const Expertise = () => {
  return (
    <div className="flex flex-col w-full px-52 py-20">
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
      <div className="flex flex-col gap-24">
        <ExpertiseTypeA />
        <ExpertiseTypeB />
        <ExpertiseTypeB reverse />
      </div>
    </div>
  );
};

export default Expertise;
