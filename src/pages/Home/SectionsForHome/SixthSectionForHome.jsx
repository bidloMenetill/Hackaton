import React from 'react';
import style from './SixthSectionForHome.module.css'
import blog1_img from './Img_For_Section_Home/blog1.png'
import blog2_img from './Img_For_Section_Home/blog2.png'
import blog3_img from './Img_For_Section_Home/blog3.png'
import arrowBlog from './Img_For_Section_Home/ArrowBlog.png'
const SixthSectionForHome = () => {
    return (
     <section className={style.section}>
        <div className={style.container}>
<h2>Блог</h2>
<div className={style.wrapper_blog}>
    <div className={style.blog1}><img src={blog1_img}alt="" /> <h3>How To Stake ETH 2.0</h3> <h4>At the end of the last year, on December 1, the long- <br /> awaited new version of the Ethereum network was <br /> launched. So how to stake?</h4> <p>Открыть пост</p> <img src={arrowBlog} alt="" className={style.arrowBlog} /></div>
    <div className={style.blog2}><img src={blog2_img}alt="" /> <h3>How to create NFT?</h3> <h4>NFT Is everywhere, how to become one of these?</h4> <p>Открыть пост</p> <img src={arrowBlog} alt="" className={style.arrowBlog}/></div>
    <div className={style.blog3}><img src={blog3_img}alt="" /> <h3>5 Most Expensive NFT ever sold</h3> <h4>NFT caught everyone's eye, let's take a look a bit <br /> closer...</h4> <p>Открыть пост</p> <img src={arrowBlog} alt=""  className={style.arrowBlog} /></div>
</div>
<button >Посмотреть все</button>
        </div>
     </section>
    );
};

export default SixthSectionForHome;