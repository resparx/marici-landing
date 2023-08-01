"use client";

import styles from "./testimonial.module.css";

import Item from "./item";
const Testimonial = () => {
  // const containerRef = useRef<any>(null);
  // const containerRefReverse = useRef<any>(null);
  // gsap.registerPlugin(ScrollTrigger);

  // const sections = gsap.utils.toArray(".panel");

  // const anim = gsap.to(sections, {
  //   xPercent: 100 * (sections.length - 1),
  //   ease: "none",
  //   scrollTrigger: {
  //     trigger: ".panelWrapper",
  //     pin: true,
  //     scrub: 1,
  //     // base vertical scrolling on how wide the container is so it feels more natural.
  //     end: () => "+=" + containerRef?.current?.offsetWidth || 0,
  //   },
  // });

  // const animateReverse = gsap.to(sections, {
  //   xPercent: 100 * (sections.length - 1),
  //   ease: "none",
  //   scrollTrigger: {
  //     trigger: ".panelWrapperReverse",
  //     pin: true,
  //     scrub: 1,
  //     // base vertical scrolling on how wide the container is so it feels more natural.
  //     end: () => "+=" + containerRefReverse?.current?.offsetWidth || 0,
  //   },
  // });

  // const auto = gsap.timeline({ repeat: 1 }).to(anim, {
  //   duration: 100,
  //   progress: 1,
  //   ease: "none",
  // });

  //   const autoReverse = gsap.timeline({ repeat: -1 }).to(animateReverse, {
  //     duration: 50,
  //     progress: -1,
  //     ease: "none",
  //   });
  return (
    <div className={styles.container}>
      <div className={styles.blur}></div>
      <div className={styles.headWrapper}>
        <p className={`${styles.headColorBlue} ${styles.heading}`}>
          Happy customers
        </p>
        <p className={`${styles.headColorGrey} ${styles.heading}`}>
          are our true Wealth
        </p>
      </div>
      <div className={styles.scrollWrapper}>
        <div className={styles.panelWrapper}>
          <Item
            company="Samsung"
            name="Billie Eilish"
            content="Aenean diam felis viverra risus sodales non volutpat isus sodales non volutpat."
          />
          <Item
            company="Samsung"
            name="Billie Eilish"
            content="Aenean diam felis viverra risus sodales non volutpat isus sodales non volutpat."
          />
          <Item
            company="Samsung"
            name="Billie Eilish"
            content="Aenean diam felis viverra risus sodales non volutpat isus sodales non volutpat."
          />
          <Item
            company="Samsung"
            name="Billie Eilish"
            content="Aenean diam felis viverra risus sodales non volutpat isus sodales non volutpat."
          />
          <Item
            company="Samsung"
            name="Billie Eilish"
            content="Aenean diam felis viverra risus sodales non volutpat isus sodales non volutpat."
          />
          <Item
            company="Samsung"
            name="Billie Eilish"
            content="Aenean diam felis viverra risus sodales non volutpat isus sodales non volutpat."
          />
          <Item
            company="Samsung"
            name="Billie Eilish"
            content="Aenean diam felis viverra risus sodales non volutpat isus sodales non volutpat."
          />
          <Item
            company="Samsung"
            name="Billie Eilish"
            content="Aenean diam felis viverra risus sodales non volutpat isus sodales non volutpat."
          />
          <Item
            company="Samsung"
            name="Billie Eilish"
            content="Aenean diam felis viverra risus sodales non volutpat isus sodales non volutpat."
          />
          <Item
            company="Samsung"
            name="Billie Eilish"
            content="Aenean diam felis viverra risus sodales non volutpat isus sodales non volutpat."
          />
          <Item
            company="Samsung"
            name="Billie Eilish"
            content="Aenean diam felis viverra risus sodales non volutpat isus sodales non volutpat."
          />
          <Item
            company="Samsung"
            name="Billie Eilish"
            content="Aenean diam felis viverra risus sodales non volutpat isus sodales non volutpat."
          />
          <Item
            company="Samsung"
            name="Billie Eilish"
            content="Aenean diam felis viverra risus sodales non volutpat isus sodales non volutpat."
          />
          <Item
            company="Samsung"
            name="Billie Eilish"
            content="Aenean diam felis viverra risus sodales non volutpat isus sodales non volutpat."
          />
          <Item
            company="Samsung"
            name="Billie Eilish"
            content="Aenean diam felis viverra risus sodales non volutpat isus sodales non volutpat."
          />
          <Item
            company="Samsung"
            name="Billie Eilish"
            content="Aenean diam felis viverra risus sodales non volutpat isus sodales non volutpat."
          />
          <Item
            company="Samsung"
            name="Billie Eilish"
            content="Aenean diam felis viverra risus sodales non volutpat isus sodales non volutpat."
          />
          <Item
            company="Samsung"
            name="Billie Eilish"
            content="Aenean diam felis viverra risus sodales non volutpat isus sodales non volutpat."
          />
        </div>
        <div className={styles.panelWrapperReverse}>
          <Item
            company="Samsung"
            name="Billie Eilish"
            content="Aenean diam felis viverra risus sodales non volutpat isus sodales non volutpat."
          />
          <Item
            company="Samsung"
            name="Billie Eilish"
            content="Aenean diam felis viverra risus sodales non volutpat isus sodales non volutpat."
          />
          <Item
            company="Samsung"
            name="Billie Eilish"
            content="Aenean diam felis viverra risus sodales non volutpat isus sodales non volutpat."
          />
          <Item
            company="Samsung"
            name="Billie Eilish"
            content="Aenean diam felis viverra risus sodales non volutpat isus sodales non volutpat."
          />
          <Item
            company="Samsung"
            name="Billie Eilish"
            content="Aenean diam felis viverra risus sodales non volutpat isus sodales non volutpat."
          />
          <Item
            company="Samsung"
            name="Billie Eilish"
            content="Aenean diam felis viverra risus sodales non volutpat isus sodales non volutpat."
          />
          <Item
            company="Samsung"
            name="Billie Eilish"
            content="Aenean diam felis viverra risus sodales non volutpat isus sodales non volutpat."
          />
          <Item
            company="Samsung"
            name="Billie Eilish"
            content="Aenean diam felis viverra risus sodales non volutpat isus sodales non volutpat."
          />
          <Item
            company="Samsung"
            name="Billie Eilish"
            content="Aenean diam felis viverra risus sodales non volutpat isus sodales non volutpat."
          />
          <Item
            company="Samsung"
            name="Billie Eilish"
            content="Aenean diam felis viverra risus sodales non volutpat isus sodales non volutpat."
          />
          <Item
            company="Samsung"
            name="Billie Eilish"
            content="Aenean diam felis viverra risus sodales non volutpat isus sodales non volutpat."
          />
          <Item
            company="Samsung"
            name="Billie Eilish"
            content="Aenean diam felis viverra risus sodales non volutpat isus sodales non volutpat."
          />
          <Item
            company="Samsung"
            name="Billie Eilish"
            content="Aenean diam felis viverra risus sodales non volutpat isus sodales non volutpat."
          />
          <Item
            company="Samsung"
            name="Billie Eilish"
            content="Aenean diam felis viverra risus sodales non volutpat isus sodales non volutpat."
          />
          <Item
            company="Samsung"
            name="Billie Eilish"
            content="Aenean diam felis viverra risus sodales non volutpat isus sodales non volutpat."
          />
          <Item
            company="Samsung"
            name="Billie Eilish"
            content="Aenean diam felis viverra risus sodales non volutpat isus sodales non volutpat."
          />
          <Item
            company="Samsung"
            name="Billie Eilish"
            content="Aenean diam felis viverra risus sodales non volutpat isus sodales non volutpat."
          />
          <Item
            company="Samsung"
            name="Billie Eilish"
            content="Aenean diam felis viverra risus sodales non volutpat isus sodales non volutpat."
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
