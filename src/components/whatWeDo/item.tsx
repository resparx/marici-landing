import styles from "./item.module.css";

const Item = ({ heading, content, icon }: any) => {
  return <div className={styles.container}>
    <div className={styles.iconBg}>{icon}</div>
    <p  className={styles.heading}>{heading}</p>
    <p className={styles.content}>{content}</p>
    <p className={styles.button}>learn more</p>
  </div>;
};

export default Item;
