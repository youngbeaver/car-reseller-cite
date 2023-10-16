import React from "react";
import Toolbar from "./ui/Toolbar.jsx";
import styles from "./Screen.module.css";
import vesta from "./vesta.png";

const Screen = () => {
  return (
    <div>
      <Toolbar />
      <div>
        <div className={styles.stroke}>
          <p>Автоподбор - </p>
          <p>Это сложный механизм</p>
        </div>
        <img className={styles.img} src={vesta} alt="" />
      </div>
      <p>Что такое качество?</p>
      <img src="" alt="" />
      <img src="" alt="" />
      <img src="" alt="" />
      <p>Своевременная консультация</p>
      <p>Дотошность к каждой мелочи</p>
      <p>Готовность нести ответственность за свою работу</p>
      <div>
        <img src="" alt="" />
        <p>Mazda 3 2008 г.</p>
        <img src="" alt="" />
        <p>Отзыв</p>
        <div>
          <p>Долго искал и т.д.</p>
        </div>
      </div>
      <div>
        <img src="" alt="" />
        <p>Mazda 3 2008 г.</p>
        <img src="" alt="" />
        <p>Отзыв</p>
        <div>
          <p>Долго искал и т.д.</p>
        </div>
      </div>
      <div>
        <img src="" alt="" />
        <p>Mazda 3 2008 г.</p>
        <img src="" alt="" />
        <p>Отзыв</p>
        <div>
          <p>Долго искал и т.д.</p>
        </div>
      </div>
      <div>
        <div></div>
      </div>
    </div>
  );
};

export default Screen;
