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
        "items-end": reverse,
      })}
    >
      <div>
        <RenderIcon className="h-6 fill-slate-600" type={icon} />
      </div>
      <p
        className={classNames("text-2xl font-bold text-gray-900", {
          "text-right": reverse,
        })}
      >
        {title}
      </p>
      <p
        className={classNames("text-base font-medium text-gray-500 w-2/3", {
          "text-right": reverse,
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
}) => {
  return (
    <div
      className={classNames("flex gap-28 items-center mb-20", {
        "flex-row-reverse": reverse,
      })}
    >
      <div className="w-1/2 rounded-2xl overflow-hidden">
        <img className="w-[80%]" src={img} />
      </div>
      <div className="flex flex-col gap-10 w-1/2">
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
      className={classNames("flex", "mb-24", "items-center", "gap-28", {
        "flex-row-reverse": reverse,
      })}
    >
      <div className="w-1/2 rounded-2xl overflow-hidden">
        <img className="w-full" src={img} />
      </div>
      <div className="flex flex-col w-1/2 gap-4">
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
  const expertise1 = {
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

  const expertise3 = {
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
  return (
    <section className="flex flex-col w-full px-52 gap-16">
      <div className="flex gap-4 items-end mb-12">
        <div className="flex flex-col w-[40%] gap-6">
          <SectionPill title="Our expertise" />
          <p className="text-5xl font-bold text-gray-900">
            Gain more insight into how people use your
          </p>
        </div>
        <p className="text-xl font-medium text-gray-500 w-2/5">
          With our integrated CRM, project management, collaboration and
          invoicing capabilities, you can manage every aspect of your business
          in one secure platform.
        </p>
      </div>
      <div className="flex flex-col gap-24">
        <ExpertiseTypeA {...expertise1} />
        <ExpertiseTypeB img={"/static/images/landing/expertise2.png"} />
        <ExpertiseTypeA {...expertise3} />
      </div>
    </section>
  );
};

export default Expertise;
