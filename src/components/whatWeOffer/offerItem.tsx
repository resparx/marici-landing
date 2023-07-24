import Right from '@/icons/right';
import styles from './offerItem.module.css';


 const OfferItem = () => {

  return (
    <div
      className={styles.container}
    >
      <div className={styles.contentWrapper}>
        <p className={`${styles.heading}`}>
          High-Performance Implementation Services
        </p>
        <p className={`${styles.content}`}>
          Lorem ipsum dolor sit amet consectetur. Consequat quam ut quis
          faucibus massa. Diam quis nec dictum velit laoreet facilisi nisl
          maecenas.
        </p>
        <div className={styles.iconWrapper}>
        <Right height="22px" fill="#FFFFFF" />
      </div>
      </div>
    </div>
  );
};

export default OfferItem
