import Right from '@/icons/right';
import styles from './offerItem.module.css';


 const OfferItem = ({heading, content, imgSrc}: { heading: string; content: string; imgSrc: string; }) => {

  return (
    <div
      className={styles.container}
    >
      <div className={styles.contentWrapper}>
        <img className={styles.contentImage} src={imgSrc} />
        <p className={`${styles.heading}`}>
          {heading}
        </p>
        <p className={`${styles.content}`}>
         {content} 
        </p>
        <div className={styles.iconWrapper}>
          Learn more
        <Right height="16px" fill="#FFFFFF" />
      </div>
      </div>
    </div>
  );
};

export default OfferItem
