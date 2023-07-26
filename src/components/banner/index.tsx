"use client";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./banner.module.css";
import { gsap } from "gsap";
import { useEffect, useState } from "react";

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
    <section className={`${styles.container} ${styles[assets?.bgProps?.className]} panel`}>
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
    </section>
  );
};

const Banner = () => {
  const [panels, setPanels] = useState<any>([])

  useEffect(()=>{
    gsap.registerPlugin(ScrollTrigger)
    const panelArr = gsap.utils.toArray(".panel")
    setPanels(panelArr)
   
  },[])

  gsap.to(panels,{
    xPercent: -100 * (panels.length - 1),
    ease: "none",
    scrollTrigger: {
      trigger: ".panelContainer",
      pin: true,
      scrub: 1,
      snap: 1/ (panels.length - 1),
      end: () => "+=3500",
      anticipatePin: 1
    }
  })

  

  
  return (
    <div className={`${styles.bannerContainer} panelContainer`}>
    <Layout assets={data[0]} />
    <Layout assets={data[1]} />
    <Layout assets={data[2]} />
    <Layout assets={data[3]} />
    <Layout assets={data[4]} />
  </div>
  )
}

export default Banner;
