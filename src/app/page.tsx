"use client";
import styles from "./page.module.css";

import Navbar from "@/components/navbar";
import Banner from "@/components/banner";
import Ambition from "@/components/ambition";
import WhatWeOffer from "@/components/whatWeOffer";
import WhatWeDo from "@/components/whatWeDo";
import Testimonial from "@/components/testimonials";
import PreBanner from "@/components/preBanner";
import Partners from "@/components/partners";
import V3 from "@/components/v3";
import V4 from "@/components/v4";
import Footer from "@/components/footer";
import Social from "@/components/social";
import CTA from "@/components/cta";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [showFooter, setShowFooter] = useState(true);
  const ref = useRef(null);
  // useEffect(() => {
  //   console.log(ref?.current?.clientHeight, "ref?.current?.clientHeight");
  //   const displaySocial = () => {
  //     if (ref?.current?.clientHeight - window.scrollY >= 10) {
  //       setShowFooter(true);
  //     } else {
  //       setShowFooter(false);
  //     }
  //   };
  //   window.addEventListener("scroll", displaySocial);
  // });
  return (
    <div ref={ref} className={styles.pageContainer}>
      {showFooter && <Social type="REGULAR" />}
      <Navbar />
      <V4 />
      <WhatWeDo />
      <WhatWeOffer />
      <Ambition />
      <Partners />
      {/* <Testimonial /> */}
      <CTA />
      <Footer />
    </div>
  );
}
