import { Content } from "next/font/google";
import styles from "./navbar.module.css";
const Navbar = () => {
  return (
    <div className={styles.container}>
      <div>
        <img src="/static/images/logo.png" />
      </div>
      <div className={styles.navItems}>
        <p className={styles.navItem}>Home</p>
        <p className={styles.navItem}>Solutions</p>
        <p className={styles.navItem}>Services</p>
        <p className={styles.navItem}>Industries</p>
        <p className={styles.navItem}>Careers</p>
        <p className={styles.navItem}>About us</p>
        <p className={styles.navItem}>Contact</p>
        <p className={styles.navItem}>Impressum</p>
      </div>
    </div>
  );
};

export default Navbar;
