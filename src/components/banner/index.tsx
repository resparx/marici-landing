"use client";
import { useState } from "react";
import { CSSTransition} from "react-transition-group";
import styles from "./banner.module.css";
import "@/css/bannerTransition.css";

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
    bgProps: {
      className: 'bgPOS'
    }
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
    bgProps: {
      className: 'bgAnalytics'
    }
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
    bgProps: {
      className: 'bgEcommerce'
    }
  },
  // {
  //   heading: "Heading for Network and sourcing",
  //   subHeading:
  //     "Lorem ipsum dolor sit amet consectetur. Etiam proin tristique ultricies sit varius a massa ac. Viverra get sit euismod lorem. Diam pellentesque id eros vel.",
  //   buttonText: "Learn More",
  //   buttonProps: {
  //     colorTheme: "#4E1F82",
  //   },
  //   blobProps: {
  //     bg: "#DBBBFF",
  //   },
  //   imageSrc: "https://i.imgur.com/txULSNo.png",
  //   imgAlt: "netWork",
  //   bgProps: {
  //     className: 'bgNAS'
  //   }
  // },
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
    bgProps: {
      className: 'bgFSP'
    }
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
    imageSrc: "https://i.imgur.com/9pp0ZzH.png",
    imgAlt: "netWork",
    bgProps: {
      className: 'bgIE'
    }
  },
];
const Layout = ({assets}: any) => {




  return (
    <div className={`${styles.container} ${styles[assets?.bgProps?.className]}`}>
      <div className={styles.imgContainer}>
      <img
            className={styles.bannerImage}
            src={assets?.imageSrc}
            alt={assets?.imgAlt}
          />
      </div>
      <div className={styles.content}>
        <h1 className={styles.bannerHeading}>{assets?.heading}</h1>
        <p className={styles.subHeading}>{assets?.subHeading}</p>
        <button className={styles.button}>Know more</button>
      </div>
      
    </div>
  );
};

const Banner = () => {
  return <div>
    <Layout assets={data[0]} />
    <Layout assets={data[1]} />
    <Layout assets={data[2]} />
    <Layout assets={data[3]} />
    <Layout assets={data[4]} />
    <Layout assets={data[5]} />
  </div>
}

export default Banner;
