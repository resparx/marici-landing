import styles from "./ambitionItem.module.css"

const AmbitionItem = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgWrapper}>
        <img className={styles.contextImg} src="https://i.imgur.com/ysctOvt.png" alt="test" />
      </div>
      <div className={styles.contentWrapper}>
        <p className={styles.heading}>Lorem ipsum</p>
        <p className={styles.subHeading}>Lorem ipsum dolor sit amet consectetur.</p>
        <p className={styles.content}>
          Lorem ipsum dolor sit amet consectetur. Ligula non volutpat adipiscing
          at egestas etiam.Lorem ipsum dolor sit amet consectetur. Ligula non
          volutpat adipiscing at egestas etiam.
        </p>
      </div>
    </div>
  );
};

export default AmbitionItem
