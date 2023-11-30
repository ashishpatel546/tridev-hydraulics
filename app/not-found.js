import React from "react";
import styles from './not-found.module.css'
import Link from "next/link";

const NotFound = () => {
  return (
    <div className={styles.not_fount_body}>
      <div className={styles.mars}></div>
      <img src="https://assets.codepen.io/1538474/404.svg" className={styles.logo_404} />
      <img src="https://assets.codepen.io/1538474/meteor.svg" className={styles.meteor} />
      <p className={styles.title}>Oh no!!</p>
      <p className={styles.subtitle}>
        You’re either misspelling the URL <br /> or requesting a page that's no
        longer here.
      </p>
      <div align="center">
      <Link className={styles.btn_back} href="/">
          Back to previous page
          </Link>
      </div>
      <img
        src="https://assets.codepen.io/1538474/astronaut.svg"
        className={styles.astronaut}
      />
      <img
        src="https://assets.codepen.io/1538474/spaceship.svg"
        className={styles.spaceship}
      />
    </div>
  );
};

export default NotFound;
