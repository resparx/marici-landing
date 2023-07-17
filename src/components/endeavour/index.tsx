"use client";
import { useRef } from "react";
import styles from "./endeavour.module.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Item from "./item";
const Endeavour = () => {
  const containerRef = useRef();
  const containerRefReverse = useRef();
  gsap.registerPlugin(ScrollTrigger);

  const sections = gsap.utils.toArray(".panel");

  const anim = gsap.to(sections, {
    xPercent: 100 * (sections.length - 1),
    ease: "none",
    scrollTrigger: {
      trigger: ".panelWrapper",
      pin: true,
      scrub: 1,
      // base vertical scrolling on how wide the container is so it feels more natural.
      end: () => "+=" + containerRef?.current?.offsetWidth || 0,
    },
  });

  const animateReverse = gsap.to(sections, {
    xPercent: 100 * (sections.length - 1),
    ease: "none",
    scrollTrigger: {
      trigger: ".panelWrapperReverse",
      pin: true,
      scrub: 1,
      // base vertical scrolling on how wide the container is so it feels more natural.
      end: () => "+=" + containerRefReverse?.current?.offsetWidth || 0,
    },
  })

  const auto = gsap.timeline({ repeat: 1 }).to(anim, {
    duration: 100,
    progress: 1,
    ease: "none",
  });

//   const autoReverse = gsap.timeline({ repeat: -1 }).to(animateReverse, {
//     duration: 50,
//     progress: -1,
//     ease: "none",
//   });
  return (
    <div className={styles.container}>
      <div className={styles.headWrapper}>
        <p className={`${styles.headColorBlue} ${styles.heading}`}>Our endeavours</p>
        <p className={`${styles.headColorBlack} ${styles.heading}`}>are our true Wealth</p>
      </div>
      <div>
        <div className={styles.panelWrapper} ref={containerRef}>
          <Item
            heading="Samsung"
            content="Aenean diam felis viverra risus sodales non volutpat isus sodales non volutpat."
          />
          <Item
            heading="Samsung"
            content="Aenean diam felis viverra risus sodales non volutpat isus sodales non volutpat."
          />
          <Item
            heading="Samsung"
            content="Aenean diam felis viverra risus sodales non volutpat isus sodales non volutpat."
          />
          <Item
            heading="Samsung"
            content="Aenean diam felis viverra risus sodales non volutpat isus sodales non volutpat."
          />
          <Item
            heading="Samsung"
            content="Aenean diam felis viverra risus sodales non volutpat isus sodales non volutpat."
          />
          <Item
            heading="Samsung"
            content="Aenean diam felis viverra risus sodales non volutpat isus sodales non volutpat."
          />
          <Item
            heading="Samsung"
            content="Aenean diam felis viverra risus sodales non volutpat isus sodales non volutpat."
          />
          <Item
            heading="Samsung"
            content="Aenean diam felis viverra risus sodales non volutpat isus sodales non volutpat."
          />
          <Item
            heading="Samsung"
            content="Aenean diam felis viverra risus sodales non volutpat isus sodales non volutpat."
          />
          <Item
            heading="Samsung"
            content="Aenean diam felis viverra risus sodales non volutpat isus sodales non volutpat."
          />
          <Item
            heading="Samsung"
            content="Aenean diam felis viverra risus sodales non volutpat isus sodales non volutpat."
          />
          <Item
            heading="Samsung"
            content="Aenean diam felis viverra risus sodales non volutpat isus sodales non volutpat."
          />
          <Item
            heading="Samsung"
            content="Aenean diam felis viverra risus sodales non volutpat isus sodales non volutpat."
          />
          <Item
            heading="Samsung"
            content="Aenean diam felis viverra risus sodales non volutpat isus sodales non volutpat."
          />
          <Item
            heading="Samsung"
            content="Aenean diam felis viverra risus sodales non volutpat isus sodales non volutpat."
          />
          <Item
            heading="Samsung"
            content="Aenean diam felis viverra risus sodales non volutpat isus sodales non volutpat."
          />
          <Item
            heading="Samsung"
            content="Aenean diam felis viverra risus sodales non volutpat isus sodales non volutpat."
          />
          <Item
            heading="Samsung"
            content="Aenean diam felis viverra risus sodales non volutpat isus sodales non volutpat."
          />
        </div>
        <div className={styles.panelWrapperReverse} ref={containerRefReverse}>
          <Item
            heading="Samsung"
            content="Aenean diam felis viverra risus sodales non volutpat isus sodales non volutpat."
          />
          <Item
            heading="Samsung"
            content="Aenean diam felis viverra risus sodales non volutpat isus sodales non volutpat."
          />
          <Item
            heading="Samsung"
            content="Aenean diam felis viverra risus sodales non volutpat isus sodales non volutpat."
          />
          <Item
            heading="Samsung"
            content="Aenean diam felis viverra risus sodales non volutpat isus sodales non volutpat."
          />
          <Item
            heading="Samsung"
            content="Aenean diam felis viverra risus sodales non volutpat isus sodales non volutpat."
          />
          <Item
            heading="Samsung"
            content="Aenean diam felis viverra risus sodales non volutpat isus sodales non volutpat."
          />
          <Item
            heading="Samsung"
            content="Aenean diam felis viverra risus sodales non volutpat isus sodales non volutpat."
          />
          <Item
            heading="Samsung"
            content="Aenean diam felis viverra risus sodales non volutpat isus sodales non volutpat."
          />
          <Item
            heading="Samsung"
            content="Aenean diam felis viverra risus sodales non volutpat isus sodales non volutpat."
          />
          <Item
            heading="Samsung"
            content="Aenean diam felis viverra risus sodales non volutpat isus sodales non volutpat."
          />
          <Item
            heading="Samsung"
            content="Aenean diam felis viverra risus sodales non volutpat isus sodales non volutpat."
          />
          <Item
            heading="Samsung"
            content="Aenean diam felis viverra risus sodales non volutpat isus sodales non volutpat."
          />
          <Item
            heading="Samsung"
            content="Aenean diam felis viverra risus sodales non volutpat isus sodales non volutpat."
          />
          <Item
            heading="Samsung"
            content="Aenean diam felis viverra risus sodales non volutpat isus sodales non volutpat."
          />
          <Item
            heading="Samsung"
            content="Aenean diam felis viverra risus sodales non volutpat isus sodales non volutpat."
          />
          <Item
            heading="Samsung"
            content="Aenean diam felis viverra risus sodales non volutpat isus sodales non volutpat."
          />
          <Item
            heading="Samsung"
            content="Aenean diam felis viverra risus sodales non volutpat isus sodales non volutpat."
          />
          <Item
            heading="Samsung"
            content="Aenean diam felis viverra risus sodales non volutpat isus sodales non volutpat."
          />
        </div>
      </div>
    </div>
  );
};

export default Endeavour;
