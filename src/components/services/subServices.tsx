import RenderIcon from "../common/renderIcon";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowRight from "@/icons/arrow-right";
import ArrowLeft from "@/icons/arrowLeft";

const Service = ({
  title,
  content,
  ...rest
}: {
  title: string;
  content: string;
}) => {
  return (
    <div className="flex flex-col w-[300px] mb-11 rounded-xl shadow-xl p-4 mx-4">
      <div className="w-fit mb-4">
        <RenderIcon height={32} />
      </div>
      <p className="text-slate-600 font-bold text-lg mb-4">{title}</p>
      <p className="text-slate-500 text-base mb-4 overflow-hidden text-ellipsis line-clamp-2">{content}</p>
      <Link href="" className="flex items-center gap-2 mt-auto">
        <p className="text-black">LearnMore</p>
        <RenderIcon type="ARROW_RIGHT" />
      </Link>
    </div>
  );
};

const NextArrow = ({ className, ...rest }: any) => {
  return (
    <div
      className={` bg-slate-800 p-4 rounded-md mt-5 absolute top-[100%] left-20`}
      {...rest}
    >
      <ArrowRight className="fill-white h-4" />
    </div>
  );
};

const PrevArrow = ({ className, ...rest }: any) => {
  return (
    <div
      className={`bg-slate-800 p-4 rounded-md mt-5 absolute top-[100%] left-4`}
      {...rest}
    >
      <ArrowLeft className="fill-white h-4" />
    </div>
  );
};

const SubServices = ({ subServices }: any) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    variableWidth: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <div className="w-60%">
      <Slider {...settings}>
        {subServices.map((service: any, index: number) => (
          <Service key={`subservice-${index}`} {...service} />
        ))}
      </Slider>
    </div>
  );
};

export default SubServices;
