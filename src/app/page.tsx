import Image from "next/image";
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

export default function Home() {
  return (
    <div className={styles.pageContainer}>
      <Social />
      <Navbar />
      <V4 />
      <WhatWeDo />
      <Ambition />
      {/* <Partners /> */}
      <WhatWeOffer />
      <Testimonial />
      <Footer />
    </div>
  );
}
