import styles from './testimonial.module.css'
const Testimonial = () => {
  return (
    <div className={styles.container}>

      <div className={styles.headingWrapper}>
        <p>
         
        </p>
      <p className={styles.heading}>What our customers say 	  ”</p>
        
      </div>
      <div className={styles.user}>
        <p className={styles.name}>- Smith James</p>
        <p className={styles.company}>Tirlan Country life</p>
      </div>
    </div>
  );
};

export default Testimonial