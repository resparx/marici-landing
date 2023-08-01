"use client";

import ReactPlayer from "react-player";
import styles from "./preBanner.module.css";
import { useEffect, useRef, useState } from "react";

import { gsap } from "gsap";

const PreBanner = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      ".banner-heading",
      { scale: 3, opacity: 0, duration: 0.5 },
      { scale: 1, opacity: 1, duration: 0.5 },
      "=+0"
    );
  }, []);

  useEffect(() => {
    const width = (wrapperRef?.current?.clientWidth || 0) * 0.5;
    const height = (width * 9) / 16;
    setDimensions({
      width,
      height,
    });
  }, [wrapperRef]);

  return (
    <div
      ref={wrapperRef}
      className={`${styles.videoWrapper} prebanner-wrapper`}
    >
      <div className={styles.contentWrapper}>
        <h1 className={`${styles.heading} banner-heading`}>
          The banner text comes here, a catchy content which sets the context to
          user about us
        </h1>
        <p className={`${styles.subContent} banner-subcontent`}>
          A small detailed explanation about the company, how the company works
          and a small expanation about the usp we provide
        </p>
        <button className={`${styles.button} banner-button`}>Know more</button>
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
