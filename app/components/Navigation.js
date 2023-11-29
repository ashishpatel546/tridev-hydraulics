import Link from "next/link";
import styles from './navigation.module.css'

const Navigation = () => {
  return (
    <div className={styles.navigation_section}>
      <ul className={styles.navigation_list}>
        <li className={styles.navigation_list_element} key={"home"}>
          <Link href="/">HOME</Link>
        </li>
        <li className={styles.navigation_list_element} key={"about"}>
          <Link href="/about">ABOUT US</Link>
        </li>
        <li className={styles.navigation_list_element} key={"products"}>
          <Link href="/product">PRODUCTS</Link>
        </li>
        <li className={styles.navigation_list_element} key={"about"}>
          <Link href="/about">CAREERS</Link>
        </li>
        <li className={styles.navigation_list_element} key={"contact"}>
          <Link href="/contact">CONTACT US</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;