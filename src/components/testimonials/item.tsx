import StarFill from "@/icons/StarFill";
import styles from "./item.module.css";

const Item = ({ company, content, name }: any) => {
  return (
    <div className={`${styles.container}`}>
      <p className={styles.content}>{content}</p>
      <div>
        <img />
        <div>
          <div>
            <p className={styles.name}>{name}</p>
            <p className={styles.company}>{company}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
