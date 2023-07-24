import styles from "./ambition.module.css";
import StarFill from "@/icons/StarFill";

const Item = ({ heading, content }) => {
  return (
    <div className={styles.item}>
      <p className={styles.itemHeading}>{heading}</p>
      <div className={styles.itemContent}>{content}</div>
    </div>
  );
};

const Ambition = () => {
  return (
    <div className={styles.container}>
      <div className={`${styles.mb60}`}>
        <p className={`${styles.heading} ${styles.headColorBlue}`}>
          Building our Expertise,
        </p>
        <p className={`${styles.heading} ${styles.headColorBlack}`}>For you</p>
      </div>
      <div className={styles.cardContainer}>
        <div className={`${styles.card} ${styles.cardBGYello}`}>
        <img src="https://i.imgur.com/e5sRtNS.png" className={styles.bgImage} />
          <p className={`${styles.cardHeading} ${styles.colorGrey}`}>
            Lorem ipsum dolor{" "}
          </p>
          <p
            className={`${styles.contentFontSize} ${styles.colorGrey} ${styles.fontBold}`}
          >
            Diam quis nec dictum velit laoreet facilisi nisl maecenas.Lorem
            ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet
            consectetur. Consequat quam ut quis faucibus massa
          </p>
          <div className={`${styles.mtAuto} ${styles.transGreyBG} ${styles.iconBg}`}>
          <StarFill fill="#515151"/>
          </div>
        </div>
        <div className={`${styles.card} ${styles.cardBGBlue}`}>
        <img src="https://i.imgur.com/eKOBxu9.png" className={styles.bgImage} />
          <p className={`${styles.cardHeading} ${styles.colorWhite}`}>
            Lorem ipsum dolor
          </p>
          <p
            className={`${styles.contentFontSize} ${styles.colorWhite} ${styles.fontBold}`}
          >
            Lorem ipsum dolor sit amet consectetur. Consequat quam ut quis
            faucibus massa. Diam quis nec dictum velit laoreet facilisi nisl
            maecenas.Lorem ipsum dolor sit amet consectetur. Consequat quam ut
            quis faucibus massa. Diam quis nec dictum velit laoreet facilisi
            nisl maecenas.
          </p>
          <div className={`${styles.mtAuto} ${styles.transWhiteBG} ${styles.iconBg}`}>
          <StarFill fill="#FFFFFF"/>
          </div>
        </div>
        <div className={styles.card}>
          <img src="https://i.imgur.com/e5sRtNS.png" className={styles.bgImage} />
          <p className={`${styles.cardHeading} ${styles.colorGrey}`}>
            Lorem ipsum dolor si
          </p>
          <div className={styles.itemContainer}>
            <Item heading="60+" content="Diam quis nec dictum" />
            <Item heading="150+" content="Diam quis nec dictum" />
          </div>
          <p>
            Diam quis nec dictum velit laoreet facilisi
            nisl maecenas.
            </p>
          <div className={`${styles.mtAuto} ${styles.transGreyBG} ${styles.iconBg}`}>
          <StarFill fill="#515151"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ambition;
