import React from "react";
import Toolbar from "./ui/toolbar/Toolbar.jsx";
import Information from "./ui/information-block/Information.jsx";
import styles from "./Screen.module.css";

const Screen = () => {
  return (
    <div>
      <Toolbar />
      <div>
        <div>
          <div className={styles.stroke}>
            <p className={styles.stroke_header}>Автоподбор - </p>
            <p className={styles.stroke_fulltext}>Это сложный механизм</p>
          </div>
          <img className={styles.img} src={process.env.PUBLIC_URL + "img/header/vesta.png"} alt="" />
        </div>

        <p className={styles.quality}>Что такое качество?</p>
        <img className={styles.svg_support} src={process.env.PUBLIC_URL + "img/svg/support.svg"} alt="" />
        <img className={styles.svg_meticulousness} src={process.env.PUBLIC_URL + "img/svg/meticulousness.svg"} alt="" />
        <img className={styles.svg_carry} src={process.env.PUBLIC_URL + "img/svg/carry.svg"} alt="" />
        <p className={styles.p_timely}>Своевременная консультация</p>
        <p className={styles.p_meticulousness}>Дотошность к каждой мелочи</p>
        <p className={styles.p_carry}>Готовность нести ответственность; за свою работу</p>

        <div className={styles.feedback_block}>
          <div className={styles.feedback_first}>
            <img className={styles.feedback_img} src={process.env.PUBLIC_URL + "img/feedback/mazda.png"} alt="" />
            <p className={styles.car_information}>Mazda 3 2008 г.</p>
            <img className={styles.feedback_avatar} src={process.env.PUBLIC_URL + "img/avatar/feedback.png"} alt="" />
            <p className={styles.feedback}>Отзыв</p>
            <div className={styles.feedback_div}>
              <p className={styles.feedback_text}>Долго искал и т.д.</p>
            </div>
          </div>
          <div className={styles.feedback_second}>
            <img className={styles.feedback_img} src={process.env.PUBLIC_URL + "img/feedback/mazda.png"} alt="" />
            <p className={styles.car_information}>Mazda 3 2008 г.</p>
            <img className={styles.feedback_avatar} src={process.env.PUBLIC_URL + "img/avatar/feedback.png"} alt="" />
            <p className={styles.feedback}>Отзыв</p>
            <div className={styles.feedback_div}>
              <p className={styles.feedback_text}>Долго искал и т.д.</p>
            </div>
          </div>
          <div className={styles.feedback_third}>
            <img className={styles.feedback_img} src={process.env.PUBLIC_URL + "img/feedback/mazda.png"} alt="" />
            <p className={styles.car_information}>Mazda 3 2008 г.</p>
            <img className={styles.feedback_avatar} src={process.env.PUBLIC_URL + "img/avatar/feedback.png"} alt="" />
            <p className={styles.feedback}>Отзыв</p>
            <div className={styles.feedback_div}>
              <p className={styles.feedback_text}>Долго искал и т.д.</p>
            </div>
          </div>
        </div>

        <Information></Information>

        <button>
          <p>Оставить заявку для консультации</p>
        </button>

        <div className={styles.bottom}>
          <p className={styles.p_bottom}>
            Сайт является местом содержания краткой информации о услугах Иванова Ивана Ивановича и не содержит полной информации.
            Для консультации вы сможете уточнить по номеру - +7 (999) 999-99-99
          </p>
          <p>При обнаружении проблем с сайтом сообщайте по почте - gmail@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default Screen;
