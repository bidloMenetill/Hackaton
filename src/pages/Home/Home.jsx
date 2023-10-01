import React from 'react';
import style from './Home.module.css'
import FirstSectionForHome from './SectionsForHome/FirstSectionForHome';
import SecondSectionForHome from './SectionsForHome/SecondSectionForHome';
import ThirdSectionForHome from './SectionsForHome/ThirdSectionForHome';
import FourthSectionForHome from './SectionsForHome/FourthSectionForHome';
import FifthSectionForHome from './SectionsForHome/FifthSectionForHome';
import SixthSectionForHome from './SectionsForHome/SixthSectionForHome';

const Home = () => {
    return (
    <main className={style.main}>
<section className={style.section}>
<div className={style.container_lending}>
<h3>3000+</h3>
<hr />
<p>Лидеров мнений, готовых <br /> порекомендовать продукт<br /> своей аудитории </p>
</div>
<div className={style.container_lending}>
<h3>89%</h3>
<hr />
<p>Покупателей доверяют<br />
отзывам принимая решение<br /> о покупке</p>
</div>
<div className={style.container_lending}>
<h3>25 млн+</h3>
<hr />
<p>Потенциальных юзеров,<br /> инвесторов, адвокатов<br /> бренда</p>
</div>
<div className={style.container_lending}>
<h3>7х</h3>
<hr />
<p>Окупаемость influencer <br />marketing выше, чем в <br />традиционной рекламе</p>
</div>
<div className={style.message}>
    <div className={style.circle}></div>
</div>

</section>
<FirstSectionForHome/>
<SecondSectionForHome/>
<ThirdSectionForHome/>
<FourthSectionForHome/>
<FifthSectionForHome/>
<SixthSectionForHome/>
    </main>
    
    
    
    
    
    
    
    )
      
    
    
        
    
};

export default Home;