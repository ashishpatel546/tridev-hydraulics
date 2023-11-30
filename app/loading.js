import React from "react";
import styles from "./loading.module.css";

const loading = () => {
  return (
    <div className={styles.body}>
      <div className={styles.center_body}>
        <div className={styles.loader_circle_9}>
          Loading
          <span className={styles.loader_span}></span>
        </div>
      </div>
    </div>
  );
};

export default loading;
