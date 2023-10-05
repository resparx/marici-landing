"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import classNames from "classnames";

const ImageItem = ({ imgSrc, heading, content, theme }: any) => {
  return (
    <div className="h-screen w-screen relative flex items-center justify-center">
      <img className="absolute top-0 left-0" src={imgSrc} />
      <div className="w-full h-full flex flex-col z-10 backdrop-blur-md items-center justify-center gap-3">
        <h1
          className={classNames("font-semibold", "text-7xl", {
            "text-slate-800": theme === "DARK",
            "text-white": theme !== "DARK",
          })}
        >
          {heading}
        </h1>
        <p
          className={classNames("font-medium", "text-xl", {
            "text-slate-800": theme === "DARK",
            "text-white": theme !== "DARK",
          })}
        >
          {content}
        </p>
        <button
          className={classNames(
            "rounded-xl",
            "px-4",
            "py-3",
            "bg-white",
            "font-semibold",
            {
              "text-slate-800": theme === "DARK",
              "text-white": theme !== "DARK",
            }
          )}
        >
          Know more
        </button>
      </div>
    </div>
  );
};

const ImageItem2 = ({ imgSrc, heading, content, theme }: any) => {
  return (
    <div className="flex flex-col items-center w-full pt-40 ">
      <h1 className="text-6xl text-slate-900 font-semibold mb-4">{heading}</h1>
      <p className=" w-1/3 text-center text-lg text-slate-600 font-normal mb-4">
        {content}
      </p>
      <div className="flex gap-4 mb-10">
        <button
          className={classNames(
            "rounded-xl",
            "px-4",
            "py-3",
            "bg-white",
            "font-semibold",
            "border-slate-900",
            "border-2",
            {
              "text-slate-800": theme === "DARK",
              "text-white": theme !== "DARK",
            }
          )}
        >
          Know more
        </button>
        <button
          className={classNames(
            "rounded-xl",
            "px-4",
            "py-3",
            "bg-slate-900",
            "font-semibold",
            "text-white"
          )}
        >
          Contact us
        </button>
      </div>
      <div className="flex justify-center">
        <img className="w-[55%]" src="/static/images/landing/landing.png" />
      </div>
    </div>
  );
};

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <section className="w-screen">
      <Slider {...settings}>
        {/* <ImageItem
          theme="DARK"
          imgSrc="/static/images/banner1.jpg"
          heading="SAP SuccesFactors"
          content="Transform your human capital management experience to create a more flexible & engaged workforce"
        /> */}
        <ImageItem2
          theme="DARK"
          imgSrc="/static/images/banner2.jpg"
          heading="SAP Hybris"
          content="Understand your customers better and provide them with seamless & personalized products & services"
        />
      </Slider>
    </section>
  );
};

export default Banner;
