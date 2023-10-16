import React from "react";
import styles from "./Toolbar.module.css";

const Toolbar = () => {
  return (
    <div>
      <div className={styles.header}>
        <p className={styles.name}>IVANOV</p>
        <p className={styles.number}>+7 (999) 999 99 99</p>
        <p className={styles.number_information}>(Скажите, что вы с сайта и получите скидку!)</p>
        <button>Услуги</button>
        <button>Обо мне</button>
        <button>Гарантии</button>
        <button>Контакты</button>
      </div>
    </div>
  );
};

export default Toolbar;
