"use client"

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import classNames from "classnames";

const Banner = () => {
  const ImageItem = ({ imgSrc, heading, content, theme }: any) => {
    return (
      <div className="h-screen w-screen relative flex items-center justify-center">
        <img className="absolute top-0 left-0" src={imgSrc} />
        <div className="w-full h-full flex flex-col z-10 backdrop-blur-md items-center justify-center gap-3">
          <h1 className={classNames("font-semibold", "text-7xl", {
            "text-slate-800": theme === 'DARK',
            "text-white": theme !== 'DARK'
          })}>{heading}</h1>
          <p className={classNames("font-medium", "text-xl", {
            "text-slate-800": theme === 'DARK',
            "text-white": theme !== 'DARK'
          })}>{content}</p>
          <button className={classNames("rounded-xl","px-4","py-3","bg-white", "font-semibold",{
            "text-slate-800": theme === 'DARK',
            "text-white": theme !== 'DARK'
          })}>Know more</button>
        </div>
      </div>
    );
  };
  return (
    <section className="w-screen">
      <Carousel infiniteLoop showStatus={false} showArrows={false}>
        <ImageItem
          theme="DARK"
          imgSrc="/static/images/banner1.jpg"
          heading="SAP SuccesFactors"
          content="Transform your human capital management experience to create a more flexible & engaged workforce"
        />
        <ImageItem
          theme="DARK"
          imgSrc="/static/images/banner2.jpg"
          heading="SAP Hybris"
          content="Understand your customers better and provide them with seamless & personalized products & services"
        />
      </Carousel>
    </section>
  );
};

export default Banner;
