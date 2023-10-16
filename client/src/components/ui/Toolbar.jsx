import React from "react";
import styles from "./Toolbar.module.css";

const Toolbar = () => {
  return (
    <div>
      <div className={styles.header}>
        <p className={styles.name}>IVANOV</p>
      </div>
    </div>
  );
};

export default Toolbar;
