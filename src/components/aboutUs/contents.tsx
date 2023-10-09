import classNames from "classnames";
import aboutUsContent from "../../constants/content/about/blocks";

const ContentBlock = ({ title, content, imgSrc, reverse }: any) => {
  return (
    <div
      className={classNames("flex justify-center items-center gap-20", {
        "flex-row-reverse": reverse,
      })}
    >
      <div className="flex flex-col w-[35%]">
        <p className="text-slate-800 font-semibold text-4xl mb-8">{title}</p>
        <p className="text-slate-800 text-lg">{content}</p>
      </div>
      <div className="w-[35%]">
        <img src={imgSrc} />
      </div>
    </div>
  );
};

const Content = () => {
  return (
    <section className="px-52 mb-32 flex flex-col gap-40">
      {aboutUsContent.map((content, index) => (
        <ContentBlock
          key={`content-${index}`}
          reverse={index % 2 === 0}
          {...content}
        />
      ))}
    </section>
  );
};

export default Content;
