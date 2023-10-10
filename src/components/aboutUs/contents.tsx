import classNames from "classnames";
import aboutUsContent from "../../constants/content/about/blocks";

const ContentBlock = ({ title, content, imgSrc, reverse }: any) => {
  return (
    <div
      className={classNames(
        "flex flex-col justify-center items-center gap-10 sm:gap-20",
        {
          "sm:flex-row-reverse": reverse,
          "sm:flex": !reverse,
        }
      )}
    >
      <div className="flex flex-col w-full sm:w-[35%]">
        <p className="text-slate-800 font-semibold text-4xl mb-8">{title}</p>
        <p className="text-slate-800 text-lg">{content}</p>
      </div>
      <div className="w-full sm:w-[35%]">
        <img src={imgSrc} />
      </div>
    </div>
  );
};

const Content = () => {
  return (
    <section className="px-4 sm:px-52 mb-7 sm:mb-32 flex flex-col gap-20 sm:gap-40">
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
