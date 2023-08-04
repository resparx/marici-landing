import styles from "./whatWeOffer.module.css";
import OfferItem from "./offerItem";
const WhatWeOffer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.headingWrapper}>
        <p className={`${styles.heading} ${styles.headColorBlue}`}>
          Lets make you to
        </p>
        <p className={`${styles.heading} ${styles.headColorBlack}`}>
          Get the most from SAP
        </p>
      </div>
      <p className={styles.subHeading}>
      MARICI helps customers through the entire Project life cycle and even more. The journey starts with identifying your Strategic objectives, implementing solutions and also offer a continuous support. In short, we help you Strategize, Optimize and Operate. Our Team at Marici are glad to provide Advisory services that will help you identify the value points and make them work for you.
      </p>
      <div className={styles.itemContainer}>
        <OfferItem
          heading="High-Performance Implementation Services"
          content="On-premise, Cloud solutions and Multiple-system landscapes.Initial POC for our services & solutions"
        />
        <OfferItem heading="Digital Transformation" content="Business configuration for industry & LOB and Execution & Experience management. Analytics and Technology & Experience Management" />
        <OfferItem heading="Customized Applications and Extensions" content="Design & develop custom applications for your entire SAP landscape. We work with both cloud-based and on-premise systems, integrating SAP and non-SAP solutions to deliver safe and smooth integration between your business applications " />
        {/* <OfferItem heading="" /> */}
      </div>
    </div>
  );
};

export default WhatWeOffer;
