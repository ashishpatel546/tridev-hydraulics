import Image from "next/image";
import styles from "./header.module.css";

const Header = () => {
  return (
    <div className={styles.header_section}>
      <div className={styles.header_left_section}>
        <Image
          className={styles.logo_image}
          src="/tridev-hydraulics-logo.jpg"
          // layout="responsive"
          height={130}
          width={400}
        />
      </div>
      <div className={styles.header_right_section}>
        <span className={styles.header_cin}>CIN -</span>
        <span className={styles.header_cin_number}>1234567890</span>
      </div>
    </div>
  );
};

export default Header;
