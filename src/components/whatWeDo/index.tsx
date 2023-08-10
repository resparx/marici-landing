"use client";

import Item from "./item";
import styles from "./whatWeDo.module.css";
import { Carousel } from "react-responsive-carousel";
import Rocket from "@/icons/Rocket";
import Team from "@/icons/Team";
import Graph from "@/icons/Graph";
import Gears from "@/icons/Gears";

const WhatWeDo = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageWrapper}>
        <img className={styles.image} src="/static/images/whatwedo.png" />
      </div>
      <div className={styles.contentWrapper}>
        <p className={styles.heading}>
          Embark Your Journey To Digital Transformation With Us
        </p>
        <p className={styles.subHeading}>
          The journey starts with identifying your Strategic objectives,
          implementing solutions and also offer a continuous support. In short,
          we help you Strategize, Optimize and Operate. Our Team at Marici are
          glad to provide Advisory services that will help you identify the
          value points and make them work for you.
        </p>
        <div className={styles.itemsWrapper}>
          {/* <Carousel
            autoPlay
            infiniteLoop
            showStatus
            selectedItem={3}
          > */}
          <Item
            icon={<Team fill="#2e45a5" height={32} />}
            heading="Digital Supply Chain"
            content="Transparent and customer-driven supply networks to fulfill demand from anywhere by forecasting demand and getting the right products to stores and customers at the right time."
          />
          <Item
            icon={<Rocket fill="#2e45a5" height={32} />}
            heading="Intelligent Enterprise"
            content="Unlock the full power of your data and automate your operations & integrate intelligence into every process to improve customer, employee, product, and brand experiences."
          />
          <Item
            icon={<Gears fill="#2e45a5" height={32} />}
            heading="Network & Sourcing"
            content="Supplier Management, Strategic Sourcing, Procurement, Selling and Fulfillment."
          />
          <Item
            icon={<Graph fill="#2e45a5" height={32} />}
            heading="E-commerce"
            content="Customer Touchpoints, Supporting Applications, Master Data & Core Processes."
          />
          
          {/* <Item
              icon={<Gears fill="#febd00" height={32} />}
              heading="Point of sale"
              content="Lorem ipsum dolor sit amet consectetur. Aenean diam felis viverra risus sodales non volutpat."
            />
            <Item
              icon={<Gears fill="#febd00" height={32} />}
              heading="Analytics"
              content="Lorem ipsum dolor sit amet consectetur. Aenean diam felis viverra risus sodales non volutpat."
            /> */}
          {/* </Carousel> */}
        </div>
        <button className={styles.button}>Connect with us</button>
      </div>
    </div>
  );
};

export default WhatWeDo;
