import React, { startTransition } from 'react';
import style from './SecondSectionForHome.module.css'
import investor1 from './Img_For_Section_Home/image1.png'
import investor2 from './Img_For_Section_Home/image2.png'
import investor3 from './Img_For_Section_Home/image3.png'
import investor4 from './Img_For_Section_Home/image4.png'
import investor5 from './Img_For_Section_Home/image5.png'
import investor6 from './Img_For_Section_Home/image6.png'
import investor7 from './Img_For_Section_Home/image7.png'
import investor8 from './Img_For_Section_Home/image8.png'
import investor9 from './Img_For_Section_Home/image9.png'
import investor10 from './Img_For_Section_Home/image10.png'
import investor11 from './Img_For_Section_Home/image11.png'
import investor12 from './Img_For_Section_Home/image12.png'
import investor13 from './Img_For_Section_Home/image13.png'
import investor14 from './Img_For_Section_Home/image14.png'
import investor15 from './Img_For_Section_Home/image15.png'
import investor16 from './Img_For_Section_Home/image16.png'
import investor17 from './Img_For_Section_Home/image17.png'
const SecondSectionForHome = () => {
    return (
      <section className={style.section}>
        <div className={style.container}>
            <h2>БИЗНЕС - ПАРТНЕРЫ</h2>
<div className={style.conatiner_investors}>
    <div className={style.row_of_investors1}>
    <img src={investor1} alt="" />
    <img src={investor2} alt="" />
    <img src={investor3} alt="" />
    <img src={investor4} alt="" />
    <img src={investor5} alt="" />
    </div>
    <div className={style.row_of_investors2}>
   
    <img src={investor7} alt="" />
    <img src={investor8} alt="" />
    <img src={investor9} alt="" />
    <img src={investor10} alt="" />
    <img src={investor11} alt="" />
    </div>
    <div className={style.row_of_investors3}>
    <img src={investor12} alt="" />
    <img src={investor13} alt="" />
    <img src={investor14} alt="" />
    <img src={investor15} alt="" />
    <img src={investor16} alt="" />
    <img src={investor17} alt="" />
    </div>
</div>
        </div>
      </section>
    );
};

export default SecondSectionForHome;