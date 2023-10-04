import RenderIcon from "../common/renderIcon";
import Link from "next/link";

const Service = ({
  title,
  content,
  ...rest
}: {
  title: string;
  content: string;
}) => {
  return (
    <div className="flex flex-col w-[44%] mb-11">
      <div className="w-fit">
        <RenderIcon height={32} />
      </div>
      <p className="text-slate-600 font-semibold text-lg">{title}</p>
      <p className="text-slate-500 text-base">{content}</p>
      <Link href="" className="flex items-center gap-2">
        <p className="text-black">LearnMore</p>
        <RenderIcon type="ARROW_RIGHT" />
      </Link>
    </div>
  );
};

const SubServices = ({ subServices }) => {
  return (
    <div className="flex flex-wrap gap-8 mt-10 justify-between">
      {subServices.map((service, index) => (
        <Service {...service} />
      ))}
    </div>
  );
};

export default SubServices;
