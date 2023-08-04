import Right from '@/icons/right';
import styles from './offerItem.module.css';


 const OfferItem = ({heading, content}: { heading: string; content: string }) => {

  return (
    <div
      className={styles.container}
    >
      <div className={styles.contentWrapper}>
        <p className={`${styles.heading}`}>
          {heading}
        </p>
        <p className={`${styles.content}`}>
         {content} 
        </p>
        <div className={styles.iconWrapper}>
        <Right height="22px" fill="#FFFFFF" />
      </div>
      </div>
    </div>
  );
};

export default OfferItem
