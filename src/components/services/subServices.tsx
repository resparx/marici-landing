import RenderIcon from "../common/renderIcon";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Service = ({
  title,
  content,
  ...rest
}: {
  title: string;
  content: string;
}) => {
  return (
    <div className="flex flex-col w-[300px] mb-11 rounded-xl shadow-xl p-4">
      <div className="w-fit mb-4">
        <RenderIcon height={32} />
      </div>
      <p className="text-slate-600 font-bold text-lg mb-4">{title}</p>
      <p className="text-slate-500 text-base mb-4">{content}</p>
      <Link href="" className="flex items-center gap-2 mt-auto">
        <p className="text-black">LearnMore</p>
        <RenderIcon type="ARROW_RIGHT" />
      </Link>
    </div>
  );
};

const SubServices = ({ subServices }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        className: "p-10"
      };
  return (
    <Slider {...settings}>
      {subServices.map((service, index) => (
        <Service {...service} />
      ))}
    </Slider>
  );
};

export default SubServices;
