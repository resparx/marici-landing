"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import classNames from "classnames";

const ImageItem = ({ imgSrc, heading, content, theme }: any) => {
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
        <img className="w-[55%]" src={imgSrc} />
      </div>
    </div>
  );
};

const Banner = () => {
 
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoPlaySpeed: 1000
  };

  return (
    <section className="w-screen">
      <Slider {...settings}>
        <ImageItem
          theme="DARK"
          imgSrc="/static/images/landing/banner_sap-hybris.png"
          heading="SAP Hybris"
          content="Understand your customers better and provide them with seamless & personalized products & services"
        />
        <ImageItem
          theme="DARK"
          imgSrc="/static/images/landing/banner_digital-transformation.png"
          heading="Digital Transformation for Retail"
          content="Understand your customers better and provide them with seamless & personalized products & services"
        />
        <ImageItem
          theme="DARK"
          imgSrc="/static/images/landing/banner_sap-s4.png"
          heading="S/4 HANA"
          content="Understand your customers better and provide them with seamless & personalized products & services"
        />
        <ImageItem
          theme="DARK"
          imgSrc="/static/images/landing/banner_sap-successfactors.png"
          heading="SAP SuccessFactors"
          content="Understand your customers better and provide them with seamless & personalized products & services"
        />
        <ImageItem
          theme="DARK"
          imgSrc="/static/images/landing/banner_sap-master-data-management.png"
          heading="Master Data Management"
          content="Understand your customers better and provide them with seamless & personalized products & services"
        />
      </Slider>
    </section>
  );
};

export default Banner;
