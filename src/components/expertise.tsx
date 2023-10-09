import RenderIcon from "./common/renderIcon";
import SectionPill from "./common/sectionPill";
import classNames from "classnames";

const Sub = ({
  title,
  content,
  reverse,
  icon,
}: {
  title: string;
  content: string;
  reverse?: boolean;
  icon: string;
}) => {
  return (
    <div
      className={classNames("flex flex-col gap-4", {
        "sm:items-end": reverse,
      })}
    >
      <div className="flex justify-center">
        <RenderIcon className="h-6 fill-slate-600" type={icon} />
      </div>
      <p
        className={classNames("text-center text-2xl font-bold text-gray-900", {
          "sm:text-right": reverse,
          "sm:text-left": !reverse
        })}
      >
        {title}
      </p>
      <p
        className={classNames("text-center text-base font-medium text-gray-500 w-full sm:w-2/3", {
          "sm:text-right": reverse,
        })}
      >
        {content}
      </p>
    </div>
  );
};

const ExpertiseTypeA = ({
  points,
  reverse,
  img,
}: {
  reverse?: boolean;
  img: string;
  points: any
}) => {
  return (
    <div
      className={classNames("flex flex-col gap-28 items-center sm:mb-20", {
        "sm:flex-row-reverse": reverse,
        "sm:flex-row": !reverse
      })}
    >
      <div className="w-full sm:w-1/2 rounded-2xl overflow-hidden">
        <img className="w-full sm:w-[80%]" src={img} />
      </div>
      <div className="flex flex-col gap-10 w-full sm:w-1/2">
        {points?.map((point: any, index: number) => (
          <Sub key={`subpoint-${index}`} reverse={reverse} {...point} />
        ))}
      </div>
    </div>
  );
};

const ExpertiseTypeB = ({
  reverse,
  img,
}: {
  reverse?: boolean;
  img: string;
}) => {
  return (
    <div
      className={classNames("flex flex-col sm:mb-24 items-center gap-28", {
        "sm:flex-row-reverse": reverse,
        "sm:flex-row": !reverse
      })}
    >
      <div className="w-full sm:w-1/2 rounded-2xl overflow-hidden">
        <img className="w-full" src={img} />
      </div>
      <div className="flex flex-col items-center sm:items-start w-full sm:w-1/2 gap-4">
        <p className="text-center sm:text-left text-2xl sm:text-5xl text-gray-900 font-bold w-full sm:w-2/3">
          Gain more insight into how people use your
        </p>
        <p className="text-center sm:text-left text-base sm:text-xl font-medium text-gray-500 mt-0 sm:mt-4 w-full sm:w-2/3">
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

const expertiseTypeB = {
  img: "/static/images/landing/expertise3.png",
  reverse: true,
  points: [
    {
      icon: "VEST",
      title: "Measure your performance",
      content:
        "Stay connected with your team and make quick Decisions wherever you are",
    },
    {
      icon: "BUG_SLASH",
      title: "Build your website",
      content:
        "A tool that lets you build a dream website even if you know nothing about web design or programming.",
    },
    {
      icon: "BOLT",
      title: "Connect multiple apps",
      content:
        "The first business platform to bring together all of your products from one place.",
    },
  ],
};

const expertiseTypeA = {
  img: "/static/images/landing/expertise1.png",
  reverse: true,
  points: [
    {
      icon: "HEART",
      title: "Measure your performance",
      content:
        "Stay connected with your team and make quick Decisions wherever you are",
    },
    {
      icon: "GLOBE",
      title: "Build your website",
      content:
        "A tool that lets you build a dream website even if you know nothing about web design or programming.",
    },
    {
      icon: "HAND_SHAKE",
      title: "Connect multiple apps",
      content:
        "The first business platform to bring together all of your products from one place.",
    },
  ],
};

const Expertise = () => {
  return (
    <section className="flex flex-col w-full gap-16 mt-[60px] sm:mt-[160px] px-4 sm:px-52">
      <div className="block sm:flex gap-4 items-end mb-0 sm:mb-12">
        <div className="flex flex-col w-full sm:w-[40%] gap-6 mb-4 sm:m-0">
          <SectionPill title="Our expertise" />
          <p className="text-2xl sm:text-5xl font-bold text-gray-900">
            Gain more insight into how people use your
          </p>
        </div>
        <p className="text-base sm:text-xl font-medium text-gray-500 w-full sm:w-2/5">
          With our integrated CRM, project management, collaboration and
          invoicing capabilities, you can manage every aspect of your business
          in one secure platform.
        </p>
      </div>
      <div className="flex flex-col gap-24">
        <ExpertiseTypeA {...expertiseTypeA} />
        <ExpertiseTypeB img={"/static/images/landing/expertise2.png"} />
        <ExpertiseTypeA {...expertiseTypeB} />
      </div>
    </section>
  );
};

export default Expertise;
