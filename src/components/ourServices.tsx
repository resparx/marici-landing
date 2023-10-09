"use client";

import Bolt from "@/icons/bolt";
import SectionPill from "./common/sectionPill";
import Chart from "@/icons/chart";
import People from "@/icons/people";
import Phone from "@/icons/phone";
import Chip from "@/icons/chip";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import ArrowRight from "@/icons/arrow-right";
import ArrowLeft from "@/icons/arrowLeft";

const ServiceItem = ({
  title,
  content,
  icon,
}: {
  icon: any;
  title: string;
  content: string;
}) => {
  return (
    <div className="flex flex-col gap-4 w-full sm:w-[400px] rounded-xl bg-slate-800 shadow-xl p-8 mr-8 mt-8">
      <div className="flex justify-start">
        <div className="rounded-full bg-sky-600 p-4">{icon}</div>
      </div>
      <p className="text-2xl font-bold text-white">{title}</p>
      <p className="text-base text-gray-300 font-normal overflow-hidden text-ellipsis line-clamp-2">
        {content}
      </p>
      <Link
        className="text-gray-100 flex items-center gap-3 mt-2 text-base font-semibold"
        href=""
      >
        Learn more <ArrowRight className="fill-gray-100" />
      </Link>
    </div>
  );
};

const NextArrow = ({ className, ...rest }: any) => {
  return (
    <div
      className={` bg-slate-800 p-4 rounded-md mt-5 absolute top-[100%] right-0`}
      {...rest}
    >
      <ArrowRight className="fill-white h-4" />
    </div>
  );
};

const PrevArrow = ({ className, ...rest }: any) => {
  return (
    <div
      className={`bg-slate-800 p-4 rounded-md mt-5 absolute top-[100%] right-20`}
      {...rest}
    >
      <ArrowLeft className="fill-white h-4" />
    </div>
  );
};

const OurServices = () => {
  const sliderSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    variableWidth: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <section className="sm:pt-24 px-4 sm:px-52 flex flex-col gap-4 sm:gap-12 bg-white w-full mt-[60px] sm:mt-[120px]">
      <div className="block sm:flex items-end gap-4">
        <div className="flex flex-col w-full sm:w-[40%] gap-6 mb-4 sm:m-0">
          <SectionPill title="Our Services" />
          <p className="text-gray-900 text-2xl sm:text-5xl font-bold">
            Gain more insight into how people use your
          </p>
        </div>
        <p className="text-gray-500 text-base sm:text-xl font-medium w-full sm:w-2/5">
          With our integrated CRM, project management, collaboration and
          invoicing capabilities, you can manage every aspect of your business
          in one secure platform.
        </p>
      </div>
      <div className="hidden sm:block w-full">
        <Slider {...sliderSettings}>
          <ServiceItem
            icon={<Bolt className="fill-white h-6" />}
            title="Digital transformation and Consulting Services"
            content="Our consulting services empower your organization to navigate the digital landscape, optimize operations, and enhance customer experiences. Unlock your digital potential with Marici"
          />
          <ServiceItem
            icon={<Chart className="fill-white h-6" />}
            title="Implementation and Rollout Services"
            content="Get a complete sales dashboard in the cloud. See activity, revenue and social metrics all in one place."
          />
          <ServiceItem
            icon={<People className="fill-white h-6" />}
            title="Conversion and Migration Services"
            content="Our calendar lets you know what is happening with customer and projects so you"
          />
          <ServiceItem
            icon={<Chip className="fill-white h-6" />}
            title="Application Management Services"
            content="A tool that lets you build a dream website even if you know nothing about web design or programming."
          />
          <ServiceItem
            icon={<Phone className="fill-white h-6" />}
            title="Integration and Analytic Services"
            content="The first business platform to bring together all of your products from one place."
          />
        </Slider>
      </div>
      <div className="flex flex-col sm:hidden">
        <ServiceItem
          icon={<Bolt className="fill-white h-6" />}
          title="Digital transformation and Consulting Services"
          content="Our consulting services empower your organization to navigate the digital landscape, optimize operations, and enhance customer experiences. Unlock your digital potential with Marici"
        />
        <ServiceItem
          icon={<Chart className="fill-white h-6" />}
          title="Implementation and Rollout Services"
          content="Get a complete sales dashboard in the cloud. See activity, revenue and social metrics all in one place."
        />
        <ServiceItem
          icon={<People className="fill-white h-6" />}
          title="Conversion and Migration Services"
          content="Our calendar lets you know what is happening with customer and projects so you"
        />
        <ServiceItem
          icon={<Chip className="fill-white h-6" />}
          title="Application Management Services"
          content="A tool that lets you build a dream website even if you know nothing about web design or programming."
        />
        <ServiceItem
          icon={<Phone className="fill-white h-6" />}
          title="Integration and Analytic Services"
          content="The first business platform to bring together all of your products from one place."
        />
      </div>
    </section>
  );
};

export default OurServices;
