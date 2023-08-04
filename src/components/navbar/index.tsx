"use client";

import classNames from "classnames/bind";
import styles from "./navbar.module.css";
import { useEffect, useState } from "react";
import Menu from "@/icons/Menu";
import Down from "@/icons/Down";
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
    navItemActive: colorChange,
  });

  return (
    <div className={containerStyes}>
      <div className={styles.logoWrapper}>
        <img src="/static/images/logo.png" />
      </div>
      <div className={styles.navItems}>
        <p className={navStyles}>Home <Down height="12" fill="#444444" /></p>
        <p className={navStyles}>Solutions <Down height="12" fill="#444444" /></p>
        {/* <p className={navStyles}>Services</p> */}
        {/* <p className={navStyles}>Industries</p> */}
        <p className={navStyles}>Careers <Down height="12" fill="#444444" /></p>
        <p className={navStyles}>About us <Down height="12" fill="#444444" /></p>
        <p className={navStyles}>Contact <Down height="12" fill="#444444" /></p>
        {/* <p className={navStyles}>Impressum</p> */}
      </div>
      <div className={styles.menuWrapper}>
        <Menu height={24} fill="#444444"/>
      </div>
    </div>
  );
};

export default Navbar;
