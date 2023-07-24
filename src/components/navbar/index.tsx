'use client'

import classNames from "classnames/bind";
import styles from "./navbar.module.css";
import { useEffect, useState } from "react";
const Navbar = () => {
  const [colorChange, setColorChange] = useState(false);
  const bindStyles = classNames.bind(styles);
  

  useEffect(() => {
    const changeNavbarColor = () => {
      if (window.scrollY >= 80) {
        setColorChange(true);
      } else {
        setColorChange(false);
      }
    };
    window.addEventListener("scroll", changeNavbarColor);
  }, []);

  const containerStyes = bindStyles("container", {
    containerActive: colorChange,
  });

  const navStyles = bindStyles("navItem", {
    navItemActive: colorChange
  })
  return (
    <div className={containerStyes}>
      <div>
        <img src="/static/images/logo.png" />
      </div>
      <div className={styles.navItems}>
        <p className={navStyles}>Home</p>
        <p className={navStyles}>Solutions</p>
        <p className={navStyles}>Services</p>
        <p className={navStyles}>Industries</p>
        <p className={navStyles}>Careers</p>
        <p className={navStyles}>About us</p>
        <p className={navStyles}>Contact</p>
        <p className={navStyles}>Impressum</p>
      </div>
    </div>
  );
};

export default Navbar;
