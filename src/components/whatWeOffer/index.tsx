import styles from "./whatWeOffer.module.css";
import OfferItem from "./offerItem";
const WhatWeOffer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.headingWrapper}>
        <p className={`${styles.heading} ${styles.headColorBlue}`}>
          Let's make you to
        </p>
        <p className={`${styles.heading} ${styles.headColorBlack}`}>
          Get the most from SAP
        </p>
      </div>
      <p className={styles.subHeading}>
            A short brief for the topic getting the most from SAP, explaining what are the things that we do to obtain that. Lorem ipsum dolor sit amet consectetur. Consequat quam ut quis faucibus massa.
        </p>
      <div className={styles.itemContainer}>
        <OfferItem />
        <OfferItem />
        <OfferItem />
        <OfferItem />
      </div>
    </div>
  );
};

export default WhatWeOffer;
