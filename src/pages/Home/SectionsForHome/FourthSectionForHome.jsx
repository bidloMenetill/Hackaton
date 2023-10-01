import React from 'react';
import style from './FourthSectionForHome.module.css'
import human from './Img_For_Section_Home/human.png'
import arrow1 from './Img_For_Section_Home/arrow_rewievs1.png'
import arrow2 from './Img_For_Section_Home/arrow_rewievs2.png'
import changeHuman from './Img_For_Section_Home/changeHumans.png'

const FourthSectionForHome = () => {
    return (
       <section className={style.section}>
        <div className={style.container}>
            <h2>Отзывы</h2>
            <div className={style.containerForReviews}>
                <p>I would definitely recommend this contractor, as <br /> I have worked with him in the past and he proven <br />to be an expert in lead generating and content <br />creation. He obviously has solid negotiation <br />skills and is adept in digital marketing, since he <br />managed to get me the best rates. And since he <br /> coordinated everyone involved for me, I reckon <br /> his team leading skills are also up to par.</p>
                <div className={style.containerinfoHuman}>
<img src={human} alt="" />
<h3>Andy Fox</h3>
<h4>Founder of X10.Agency. Worked with 50+ <br />blockchain/DeFi/STO projects. CBDO/CMO. Awarded as the <br />Author of The Year at HackerNoon (Bitcoin category)</h4>
                </div>
                <div className={style.reviewsArrow}><img src={arrow1} alt="" /></div>
                <div className={style.reviewsArrow2}><img src={arrow2} alt="" /></div>
                <img src={changeHuman} alt="" className={style.changeHuman} />
            </div>
        </div>
       </section>
    );
};

export default FourthSectionForHome;