import React from "react";
import styles from "./Toolbar.module.css";

const Toolbar = () => {
  return (
    <div className={styles.header}>
      <p className={styles.name}>IVANOV</p>
      <p className={styles.number}>+7 (999) 999 99 99</p>
      <p className={styles.number_information}>(Скажите, что вы с сайта и получите скидку!)</p>
      <button className={styles.services}>Услуги</button>
      <button className={styles.about_me}>Обо мне</button>
      <button className={styles.guarantees}>Гарантии</button>
      <button className={styles.contacts}>Контакты</button>
    </div>
  );
};

export default Toolbar;
