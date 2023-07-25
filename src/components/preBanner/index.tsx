"use client";

import ReactPlayer from "react-player";
import styles from "./preBanner.module.css";
import { useEffect, useRef, useState } from "react";
const PreBanner = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({
    width: 0,
    height: 0
  }) 

  useEffect(()=>{
  const width = (wrapperRef?.current?.clientWidth || 0)*.5
  const height = (width*9)/16
    setDimensions({
      width,
      height
    })
  },[wrapperRef])
  
  return (
    <div ref={wrapperRef} className={styles.videoWrapper}>
      <div className={styles.contentWrapper}>
        <h1 className={styles.heading}>
          The banner text comes here, a catchy content which sets the context to user about us
        </h1>
        <p className={styles.subContent}>
          A small detailed explanation about the company, how the company works and a small expanation about the usp we provide
        </p>
        <button className={styles.button}>
          Know more
        </button>
      </div>
      <ReactPlayer
        className={`${styles.video} react-player`}
        url="static/videos/preBanner_animated.mp4"
        playing
        muted
        autoPlay
        loop
        width={dimensions.width}
        height={dimensions.height}
      />
    </div>
  );
};

export default PreBanner;
