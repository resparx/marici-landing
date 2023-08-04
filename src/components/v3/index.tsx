"use client";

import { useEffect, useRef, useState } from "react";
import ReactPlayer from "react-player";
import styles from "./v3.module.css";

const Heading = ({ title, key, vidSrc, mouseOverCB }: any) => {
  return (
    <div>
         <h1
      onMouseOver={() => mouseOverCB({vidSrc})}
      className={styles.heading}
      key={key}
    >
      {title}
    </h1>
    <p>

    </p>
    </div>
   
  );
};

const V3 = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [vidSrc, setVidSrc] = useState<string>("/static/videos/cycling.mp4");
  const [dimensions, setDimensions] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const width = (wrapperRef?.current?.clientWidth || 0);
    const height = (width * 9) / 16;
    setDimensions({
      width,
      height,
    });
  }, [wrapperRef]);
  const topics = [
    {
      title: "SAP Hybris",
      vidSrc: "/static/videos/cycling.mp4",
    },
    {
      title: "Master data management",
      vidSrc: "/static/videos/boat.mp4",
    },
    {
      title: "RPA",
      vidSrc: "/static/videos/building.mp4",
    },
    {
      title: "SAP S4/HANA",
      vidSrc: "/static/videos/city_walk.mp4",
    },
    {
      title: "SAP SuccessFactors",
      vidSrc: "/static/videos/city_walk.mp4",
    },
    {
      title: "Digital transformation for Retail",
      vidSrc: "/static/videos/city_walk.mp4",
    },
  ];

  const mouseOverCB = ({ vidSrc }: any) => {
    setVidSrc(vidSrc);
  };
  return (
    <div ref={wrapperRef} className={styles.container}>
      <div className={styles.videoWrapper}>
        <ReactPlayer
          className={`${styles.video} react-player`}
          url={vidSrc}
          playing
          muted
          autoPlay
          loop
          width={dimensions.width}
          height={dimensions.height}
        />
      </div>
      <div className={styles.headingContainer}>
        {topics.map((item, index) => (
          <Heading {...item} key={index} mouseOverCB={mouseOverCB} />
        ))}
      </div>
    </div>
  );
};

export default V3;
