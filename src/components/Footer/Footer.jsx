import React from "react";
import style from "./Footer.module.css";
const Footer = () => {
  return (
    <footer>
      <section className={style.section}>
        <div className={style.text_footer}>
          <h2>
            бесплатный аудит социальных
            <br />
            сетей за 9 минут
          </h2>
          <p>
            проведите простой тест-драйв нашей работы и получите ценные
            <br />
            советы по продвижению вашего бренда
          </p>
        </div>
        <div className={style.wrapper_input}>
          <div className={style.el_input}>
            <input
              type="text"
              placeholder="НАЗВАНИЕ ПРОЕКТА"
              className={style.last_project}
            />
            <input
              type="text"
              placeholder="телеграм-юзернейм
"
              className={style.last_telegramm}
            />
          </div>
          <div className={style.el_input}>
            <input
              type="text"
              placeholder="e-mail"
              className={style.last_email}
            />

            <button>Получить</button>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
