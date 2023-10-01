import React from "react";
import style from "./ThirdSectionForHome.module.css";
import imgForAlumSwap from "./Img_For_Section_Home/image10.png";
import arrow from "./Img_For_Section_Home/Arrow.png";
import changeImg from "./Img_For_Section_Home/Group229.png";
import leftArrow from "./Img_For_Section_Home/fi-rr-angle-small-right.png";
import rigthArrow from "./Img_For_Section_Home/fi-rr-angle-small-right1.png";
const ThirdSectionForHome = () => {
  return (
    <section className={style.section}>
      <div className={style.container}>
        <h2>Кейсы</h2>
        <div className={style.wrapper_alumswap}>
          <div className={style.alumswap}>
            <div className={style.alumswap_img}>
              <img src={imgForAlumSwap} alt="" />
            </div>
            <h4>AliumSwap</h4>
            <p>
              Decentralized AMM Exchange with multi-blockchain option and NFTs
            </p>
            <div className={style.arrow1}>
              <img src={arrow} alt="" />
              <h5>+46% подписчиков</h5>
            </div>
            <div className={style.arrow2}>
              <img src={arrow} alt="" />
              <h5>+1602 целевых перехода на сайт</h5>
            </div>
            <div className={style.info1}>
              <p className={style.info_p}>Сроки</p>
              <h6 className={style.info_h6}>9 дней</h6>
            </div>
            <div className={style.info2}>
              {" "}
              <p className={style.info_p}>Услуга</p>
              <h6 className={style.info_h6}> Influencer Marketing</h6>
            </div>
            <div className={style.info3}>
              {" "}
              <p className={style.info_p}>Цель</p>
              <h6 className={style.info_h6}>
                Привлечь инвесторов к покупке
                <br /> токена на пресейле
              </h6>
            </div>
          </div>

          <div className={style.alumswap_2}>
            <div className={style.alumswap_img}>
              <img src={imgForAlumSwap} alt="" />
            </div>
            <h4>AliumSwap</h4>
            <p>
              Decentralized AMM Exchange with multi-blockchain option and NFTs
            </p>
            <div className={style.arrow1}>
              <img src={arrow} alt="" />
              <h5>+46% подписчиков</h5>
            </div>
            <div className={style.arrow2}>
              <img src={arrow} alt="" />
              <h5>+1602 целевых перехода на сайт</h5>
            </div>
            <div className={style.info1}>
              <p className={style.info_p}>Сроки</p>
              <h6 className={style.info_h6}>9 дней</h6>
            </div>
            <div className={style.info2}>
              {" "}
              <p className={style.info_p}>Услуга</p>
              <h6 className={style.info_h6}> Influencer Marketing</h6>
            </div>
            <div className={style.info3}>
              {" "}
              <p className={style.info_p}>Цель</p>
              <h6 className={style.info_h6}>
                Привлечь инвесторов к покупке
                <br /> токена на пресейле
              </h6>
            </div>
          </div>

          <div className={style.alumswap_3}>
            <div className={style.alumswap_img}>
              <img src={imgForAlumSwap} alt="" />
            </div>
            <h4>AliumSwap</h4>
            <p>
              Decentralized AMM Exchange with multi-blockchain option and NFTs
            </p>
            <div className={style.arrow1_alumswap_3}>
              <img src={arrow} alt="" />
              <h5>+46% подписчиков</h5>
            </div>
            <div className={style.arrow2_alumswap_3}>
              <img src={arrow} alt="" />
              <h5>+1602 целевых перехода на сайт</h5>
            </div>
            <div className={style.info1}>
              <p className={style.info_p}>Сроки</p>
              <h6 className={style.info_h6}>9 дней</h6>
            </div>
            <div className={style.info2}>
              {" "}
              <p className={style.info_p}>Услуга</p>
              <h6 className={style.info_h6}> Influencer Marketing</h6>
            </div>
            <div className={style.info3}>
              {" "}
              <p className={style.info_p}>Цель</p>
              <h6 className={style.info_h6}>
                Привлечь инвесторов к покупке
                <br /> токена на пресейле
              </h6>
            </div>
          </div>
        </div>
        <div className={style.changeBar}>
          <div>
            <img src={leftArrow} alt="" className={style.arrow_change} />
          </div>
          <img src={changeImg} alt="" className={style.changeImg} />
          <div>
            <img src={rigthArrow} alt="" className={style.arrow_change} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThirdSectionForHome;
