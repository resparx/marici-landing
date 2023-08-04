import ReactPlayer from "react-player";
import styles from "./video.module.css";
import { useEffect, useRef, useState } from "react";

const Video = ({ vidSrc, dimensions: dimensionsProp, ...otherProps }: any) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({
    width: 0,
    height: 0,
  });
  useEffect(() => {
    const width = wrapperRef?.current?.clientWidth || 0;
    const height = (width * 9) / 16;
    setDimensions({
      width,
      height,
    });
  }, [wrapperRef]);
  return (
    <div ref={wrapperRef} className={styles.videoWrapper}>
      <ReactPlayer
        className={`${styles.video} react-player`}
        url={vidSrc}
        playing
        muted
        autoPlay
        loop
        width={(dimensionsProp || dimensions).width}
        height={(dimensionsProp || dimensions).height}
        {...otherProps}
      />
    </div>
  );
};

export default Video;
