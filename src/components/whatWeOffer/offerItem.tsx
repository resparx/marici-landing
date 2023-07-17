import styles from "./offerItem.module.css";

const MetricItem = ({ value, label }: any) => {
  return (
    <div className={styles.metricWrapper}>
      <p className={styles.metricValue}>{value}</p>
      <p className={styles.metricLabel}>{label}</p>
    </div>
  );
};
const OfferItem = ({ direction }: { direction: string }) => {
  return (
    <div
      className={`${styles.container} ${
        direction === "REVERSE" ? "row-reverse" : "row"
      }`}
    >
      <div className={styles.contentWrapper}>
        <p className={styles.heading}>
          High-Performance Implementation Services
        </p>
        <p className={styles.content}>
          Lorem ipsum dolor sit amet consectetur. Consequat quam ut quis
          faucibus massa. Diam quis nec dictum velit laoreet facilisi nisl
          maecenas.Lorem ipsum dolor sit amet consectetur. Consequat quam ut
          quis faucibus massa. Diam quis nec dictum velit laoreet facilisi nisl
          maecenas.
        </p>
        <div className={styles.metricItemsWrapper}>
          <MetricItem value="200+" label="Customers" />
          <MetricItem value="1000+" label="Projects" />
          <MetricItem value="1500+" label="Deliveries" />
        </div>
        <button className={styles.button}>Know more</button>
      </div>
      <div className={styles.imageWrapper}>
        <img className={styles.image} src="https://i.imgur.com/sMcxEw4.jpg" />
      </div>
    </div>
  );
};

export default OfferItem;

const SubItem = () => {
  return (
    <div className={styles.subItemWrapper}>
      <div className={styles.subContentWrapper}>
        <p className={styles.miniHeading}>
          Lorem ipsum dolor sit amet consectetur.
        </p>
        <p className={styles.miniContent}>
          Lorem ipsum dolor sit amet consectetur. Condimentum proin facilisi
          eleifend ut.Lorem ipsum dolor sit amet consectetur. Condimentum proin
          facilisi eleifend ut.
        </p>
      </div>
      <div>
      </div>
    </div>
  );
};

export const OfferItem2 = ({ direction }: { direction: string }) => {
  return (
    <div
      className={`${styles.container} ${
        direction === "REVERSE" ? "row-reverse" : "row"
      }`}
    >
      <div className={styles.contentWrapper}>
        <p className={`${styles.heading} ${styles.textRight}`}>
          High-Performance Implementation Services
        </p>
        <p className={`${styles.content} ${styles.textRight}`}>
          Lorem ipsum dolor sit amet consectetur. Consequat quam ut quis
          faucibus massa. Diam quis nec dictum velit laoreet facilisi nisl
          maecenas.Lorem ipsum dolor sit amet consectetur. Consequat quam ut
          quis faucibus massa. Diam quis nec dictum velit laoreet facilisi nisl
          maecenas.
        </p>
        <div className={styles.subItemsWrapper}>
          <SubItem />
          <SubItem />
        </div>
        <button className={styles.button}>Know more</button>
      </div>
      <div>
        <img />
      </div>
    </div>
  );
};
