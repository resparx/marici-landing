"use client";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import styles from "./banner.module.css";
import { useState } from "react";
import useInterval from "@/hooks/useInterval";
import "@/css/bannerTransition.css";
const Banner = () => {
  const data = [
    {
      heading: "Heading for POS",
      subHeading:
        "Lorem ipsum dolor sit amet consectetur. Etiam proin tristique ultricies sit varius a massa ac. Viverra get sit euismod lorem. Diam pellentesque id eros vel.",
      buttonText: "Learn More",
      buttonProps: {
        colorTheme: "#299648",
      },
      blobProps: {
        bg: "#D6FFE1",
      },
      imageSrc: "https://i.imgur.com/URaBfmM.png",
      imgAlt: "pos",
    },
    {
      heading: "Heading for Analytics",
      subHeading:
        "Lorem ipsum dolor sit amet consectetur. Etiam proin tristique ultricies sit varius a massa ac. Viverra get sit euismod lorem. Diam pellentesque id eros vel.",
      buttonText: "Learn More",
      buttonProps: {
        colorTheme: "#E8505B",
      },
      blobProps: {
        bg: "#F8B0B6",
      },
      imageSrc: "https://i.imgur.com/CVR1orZ.png",
      imgAlt: "Dash",
    },
    {
      heading: "Heading for E commerce",
      subHeading:
        "Lorem ipsum dolor sit amet consectetur. Etiam proin tristique ultricies sit varius a massa ac. Viverra get sit euismod lorem. Diam pellentesque id eros vel.",
      buttonText: "Learn More",
      buttonProps: {
        colorTheme: "#FFD25A",
      },
      blobProps: {
        bg: "#FFEAB0",
      },
      imageSrc: "https://i.imgur.com/8TyRIzz.png",
      imgAlt: "Ecomm",
    },
    {
      heading: "Heading for Full scale projects",
      subHeading:
        "Lorem ipsum dolor sit amet consectetur. Etiam proin tristique ultricies sit varius a massa ac. Viverra get sit euismod lorem. Diam pellentesque id eros vel.",
      buttonText: "Learn More",
      buttonProps: {
        colorTheme: "#4E1F82",
      },
      blobProps: {
        bg: "#DBBBFF",
      },
      imageSrc: "https://i.imgur.com/QE0AJsb.png",
      imgAlt: "Proj",
    },
    {
      heading: "Heading for Network and sourcing",
      subHeading:
        "Lorem ipsum dolor sit amet consectetur. Etiam proin tristique ultricies sit varius a massa ac. Viverra get sit euismod lorem. Diam pellentesque id eros vel.",
      buttonText: "Learn More",
      buttonProps: {
        colorTheme: "#4E1F82",
      },
      blobProps: {
        bg: "#DBBBFF",
      },
      imgSrc: "https://i.imgur.com/txULSNo.png",
      imgAlt: "netWork",
    },
    {
      heading: "Heading for Intelligent enterprise",
      subHeading:
        "Lorem ipsum dolor sit amet consectetur. Etiam proin tristique ultricies sit varius a massa ac. Viverra get sit euismod lorem. Diam pellentesque id eros vel.",
      buttonText: "Learn More",
      buttonProps: {
        colorTheme: "#4E1F82",
      },
      blobProps: {
        bg: "#DBBBFF",
      },
      imgSrc: "https://i.imgur.com/9pp0ZzH.png",
      imgAlt: "netWork",
    },
  ];

  const [assets, setAssets] = useState(data[4]);
  const [generatedArr, setGeneratedArr] = useState<any>([]);

  const generateRandom = (maxNr: number): number => {
    console.log(generatedArr, "generatedArr");
    let random = Number((Math.random() * maxNr).toFixed());
    random = Number(random);
    console.log(random, "rand");
    if (!generatedArr.includes(random)) {
      generatedArr.push(random);
      setGeneratedArr(generatedArr);
      return random;
    } else {
      if (generatedArr.length === maxNr + 1) {
        setGeneratedArr([]);
        return 0;
      } else return 0;
    }
  };

  const setBannerData = () => {
    const index = generateRandom(data.length - 1);
    setAssets(data[index]);
  };

  useInterval(setBannerData, 5000);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {/* <TransitionGroup> */}
        {/* <CSSTransition
          timeout={{ enter: 1000, exit: 1000 }}
          key={assets.heading}
        > */}
          <h1 className={styles.bannerHeading}>
            {assets.heading}
          </h1>
        {/* </CSSTransition> */}
        {/* </TransitionGroup> */}
        <CSSTransition
          timeout={{ enter: 1000, exit: 1000 }}
          key={assets.heading}
        >
           <p className={styles.subHeading}>
        {assets.subHeading}
        </p>
        </CSSTransition>
        <button className={styles.button}>Know more</button>
      </div>
      <div className={styles.imgContainer}>
      <CSSTransition
            timeout={{ enter: 1000, exit: 1000 }}
            key={assets.imgAlt}
          >
            <img
              className={styles.bannerImage}
              src={assets.imageSrc}
              alt={assets.imgAlt}
            />
          </CSSTransition>
      </div>
    </div>
  );
};

export default Banner;
