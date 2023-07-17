import Slider from "react-slick";
import styles from "./ambition.module.css";
import AmbitionItem from "./ambitionItem";

const Ambition = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className={styles.container}>
      <div className={styles.head}>
        <div className={styles.headContent}>
          <p className={styles.title}>We are ambitious</p>
          <p className={styles.subTitle}>
            Lorem ipsum dolor sit amet consectetur. Aenean diam felis viverra
            risus sodales non volutpat. At dui bibendum feugiat faucibus at at.
          </p>
        </div>
      </div>
      <div className={styles.carouselContainer}>
        {/* <Slider> */}
          <AmbitionItem />
        {/* </Slider> */}
      </div>
    </div>
  );
};

export default Ambition;
