import Image from "next/image";
import styles from "./header.module.css";
import Link from "next/link";

const Header = () => {
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
          <li className={`${styles.navigation_list_element} ${styles.transitionStyle}`} key={"home"}>
            <Link className={styles.list_element_name} href="/">HOME</Link>
          </li>
          <li className={`${styles.navigation_list_element} ${styles.transitionStyle}`} key={"about"}>
            <Link className={styles.list_element_name} href="/about">ABOUT US</Link>
          </li>
          <li className={`${styles.navigation_list_element} ${styles.transitionStyle}`} key={"products"}>
            <Link className={styles.list_element_name} href="/product">PRODUCTS</Link>
          </li>
          <li className={`${styles.navigation_list_element} ${styles.transitionStyle}`} key={"about"}>
            <Link className={styles.list_element_name} href="/career">CAREERS</Link>
          </li>
          <li className={`${styles.navigation_list_element} ${styles.transitionStyle}`} key={"contact"}>
            <Link className={styles.list_element_name} href="/contact">CONTACT US</Link>
          </li>
        </ul>
      </div>
      <marquee  direction="left" className={styles.header_cin_section_1}>
      <div>
        <span className={styles.header_cin}>CIN -</span>
        <span className={styles.header_cin_number}>U29190HR2022PTC107769</span>
      </div>
      </marquee>
    </div>
  );
};

export default Header;
