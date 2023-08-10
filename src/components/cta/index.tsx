import styles from './cta.module.css'

const CTA = () => {
  return (
    <div className={styles.container}>
      <div className={styles.contentWrapper}>
        <p className={styles.heading}>Stay in the Loop</p>
        <p className={styles.subHeading}>Join our news letter to get top news before anyone else</p>
      </div>
      <div>
        <button className={styles.button}>Contact us</button>
      </div>
    </div>
  );
};

export default CTA;
