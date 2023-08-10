"use client";

import Video from "../fullScreenVideo";
import styles from "./index.module.css";
import classNames from "classnames/bind";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Roboto } from "next/font/google";
import { useEffect } from "react";

const robotoRegular = Roboto({
  weight: ["300", "400", "500", "700"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

const Item = ({ vidSrc, heading, content, theme }: any) => {
  const bindStyles = classNames.bind(styles);
  const itemHeading = bindStyles("itemHeading", {
    darkContent: theme === "DARK",
  });

  const itemContent = bindStyles("itemContent", {
    darkContent: theme === "DARK",
  });

  const button = bindStyles("button", {
    darkButton: theme === "DARK",
  });
  return (
    <div className={`${styles.itemWrapper} ${robotoRegular.className}`}>
      <Video vidSrc={vidSrc} />
      <div className={styles.itemBackdrop}>
        <h1 className={itemHeading}>{heading}</h1>
        <p className={itemContent}>{content}</p>
        <button className={button}>Know more</button>
      </div>
    </div>
  );
};

const ImageItem = ({ imgSrc, heading, content, theme }: any) => {
  const bindStyles = classNames.bind(styles);
  const itemHeading = bindStyles("itemHeading", {
    darkContent: theme === "DARK",
  });

  const itemContent = bindStyles("itemContent", {
    darkContent: theme === "DARK",
  });

  const button = bindStyles("button", {
    darkButton: theme === "DARK",
  });
  return (
    <div className={`${styles.itemWrapper} ${robotoRegular.className}`}>
      <img className={styles.bgImage} src={imgSrc} />
      <div className={styles.itemBackdrop}>
        <h1 className={itemHeading}>{heading}</h1>
        <p className={itemContent}>{content}</p>
        <button className={button}>Know more</button>
      </div>
    </div>
  );
};

const V4 = () => {
  useEffect(() => {}, []);
  return (
    <div className={styles.container}>
      <Carousel showArrows={false} autoPlay infiniteLoop interval={5000}>
        <Item
          heading="SAP Hybris"
          content="Understand your customers better and provide them with seamless & personalized products & services"
          vidSrc="/static/videos/abstract4.mp4"
        />
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
        <Item
          heading="SAP SuccesFactors"
          content="Transform your human capital management experience to create a more flexible & engaged workforce"
          vidSrc="/static/videos/abstract1.mp4"
        />
        <Item
          heading="Master Data Managememt"
          content="Boost your business with smart & reliable master data"
          vidSrc="/static/videos/abstract2.mp4"
        />
        <Item
          heading="SAP S/4 HANA"
          content="Intelligent Transformation Into The Digital Future"
          vidSrc="/static/videos/abstract3.mp4"
          theme="DARK"
        />
      </Carousel>
    </div>
  );
};

export default V4;
