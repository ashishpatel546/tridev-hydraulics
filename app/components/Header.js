"use client";

import Image from "next/image";
import styles from "./header.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const Header = () => {
  const pathName = usePathname();
  const [isHamburgerOpen, setisHamburgerOpen] = useState(false);

  useEffect(() => {
    console.log("pathName", pathName);
  }, [pathName]);

  return (
    <div className={styles.header_section_1}>
      <div className={styles.header_right_section_1}>
        <span className={styles.company_name}>Tridev Hydraulics</span>
        {/* <Image
          className={styles.logo_image_1}
          src="/tridev-hydraulics-logo.jpg"
          // layout="responsive"
          height={110}
          width={240}
        /> */}
      </div>
      <div className={styles.navigation_section}>
        <ul className={styles.navigation_list}>
          <li
            className={`${styles.navigation_list_element} ${
              styles.transitionStyle
            } ${pathName === "/" ? styles.active_page : ""}`}
            key={"home"}
          >
            <Link className={styles.list_element_name} href="/">
              HOME
            </Link>
          </li>
          <li
            className={`${styles.navigation_list_element} ${
              styles.transitionStyle
            } ${pathName === "/about" ? styles.active_page : ""}`}
            key={"about"}
          >
            <Link className={styles.list_element_name} href="/about">
              ABOUT US
            </Link>
          </li>
          <li
            className={`${styles.navigation_list_element} ${
              styles.transitionStyle
            } ${pathName === "/product" ? styles.active_page : ""}`}
            key={"products"}
          >
            <Link className={styles.list_element_name} href="/product">
              PRODUCTS
            </Link>
          </li>
          <li
            className={`${styles.navigation_list_element} ${
              styles.transitionStyle
            } ${pathName === "/career" ? styles.active_page : ""}`}
            key={"about"}
          >
            <Link className={styles.list_element_name} href="/career">
              CAREERS
            </Link>
          </li>
          <li
            className={`${styles.navigation_list_element} ${
              styles.transitionStyle
            } ${pathName === "/contact" ? styles.active_page : ""}`}
            key={"contact"}
          >
            <Link className={styles.list_element_name} href="/contact">
              CONTACT US
            </Link>
          </li>
        </ul>
      </div>
      <div className={styles.hamburger_navigaion_section}>
        <div className={`${styles.hamburger_icon} ${isHamburgerOpen ? styles.active : ''}`} onClick={() => !isHamburgerOpen ? setisHamburgerOpen(true) : setisHamburgerOpen(false)}>
          <div className={styles.bar}></div>
        </div>
        {isHamburgerOpen && (
          <ul className={styles.hamburger_menu}>
            <Link className={styles.hamburger_list_item} href="/">
              Home
            </Link>
            <Link className={styles.hamburger_list_item} href="/about">
              About
            </Link>
            <Link className={styles.hamburger_list_item} href="/product">
              Products
            </Link>
            <Link className={styles.hamburger_list_item} href="/career">
              Careers
            </Link>
            <Link className={styles.hamburger_list_item} href="/contact">
              Contact
            </Link>
          </ul>
        )}
      </div>
      <marquee direction="left" className={styles.header_cin_section_1}>
        <div>
          <span className={styles.header_cin}>CIN -</span>
          <span className={styles.header_cin_number}>
            U29190HR2022PTC107769
          </span>
        </div>
      </marquee>
    </div>
  );
};

export default Header;
