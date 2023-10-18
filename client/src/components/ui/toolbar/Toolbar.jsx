import React, { useState } from "react";
import styles from "./Toolbar.module.css";

const Toolbar = () => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = (e) => {
    console.log(e);
    setIsHovering(true);
  };

  const handleMouseOut = (e) => {
    setIsHovering(false);
  };

  return (
    <div>
      <div className={styles.header}>
        <p className={styles.name}>IVANOV</p>
        <p className={styles.number}>+7 (999) 999 99 99</p>
        <p className={styles.number_information}>(Скажите, что вы с сайта и получите скидку!)</p>
        <button onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} className={styles.services}>
          Услуги
        </button>
        <button onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} className={styles.about_me}>
          Обо мне
        </button>
        <button onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} className={styles.guarantees}>
          Гарантии
        </button>
        <button onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} className={styles.contacts}>
          Контакты
        </button>
      </div>
    </div>
  );
};

export default Toolbar;
