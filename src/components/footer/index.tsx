import Social from "../social";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={`${styles.flex} ${styles.container}`}>
      <div>
        <img src="/static/images/logo.png" />
      </div>
      <ul className={styles.list__wrapper}>
        <li className={styles.list__Heading}>About us</li>
        <li className={styles.list__item}>Who We Are</li>
        <li className={styles.list__item}>Why MARICI</li>
        <li className={styles.list__item}>Our Value propositions</li>
        <li className={styles.list__item}>How we deliver</li>
      </ul>
      <ul className={styles.list__wrapper}>
        <li className={styles.list__Heading}>Solutions</li>
        <li className={styles.list__item}>S/4 HANA</li>
        <li className={styles.list__item}>Digital Transformation for Retail</li>
        <li className={styles.list__item}>SAP Hybris</li>
        <li className={styles.list__item}>SAP SuccessFactors</li>
        <li className={styles.list__item}>Master Data Management</li>
        <li className={styles.list__item}>RPA</li>
      </ul>
      <ul className={styles.list__wrapper}>
        <li className={styles.list__Heading}>Services</li>
        <li className={styles.list__item}>Consulting</li>
        <li className={styles.list__item}>Implementations</li>
        <li className={styles.list__item}>Application Development</li>
        <li className={styles.list__item}>Business Intelligence & Performance Optimization</li>
        <li className={styles.list__item}>Training & Support</li>
      </ul>
      <ul className={styles.list__wrapper}>
      <li className={styles.list__Heading}>Address</li>
        <li className={styles.list__item}>HQ – Germany: Maxfeldstraße 52, 90409 Nürnberg</li>
        <li className={styles.list__item}>USA Subsidiary: Maharshi Solutions Inc</li>
        <li className={styles.list__item}>1912 Eastchester Dr Suite 108, High Point, North Carolina</li>
      </ul>
      <ul className={styles.list__wrapper}>
        <li className={styles.list__Heading}>Follow Us</li>
        <li className={styles.list__item}>
          <Social type="FOOTER"/>
        </li>
        <li className={styles.list__item}>Email: info@maricisolutions.com Phone: +49 17641848023</li>
      </ul>
    </div>
  );
};

export default Footer;
