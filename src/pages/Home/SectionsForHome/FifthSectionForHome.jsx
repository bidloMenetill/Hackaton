import React from 'react';
import style from './FifthSectionForHome.module.css'
const FifthSectionForHome = () => {
    return (
        <section className={style.section}>
        <div className={style.container}>
            <h2>Сравнение</h2>
            <div className={style.wrapperForCompration}>
             <div className={style.compration1}>  <div className={style.absolute}><div className={style.around}></div> </div>  <h3>Ваш сотрудник  </h3><div className={style.square}></div> <ul><li>Непрофильность</li> <li>Нет Опыта</li> <li>Плохое Качество Аккаунтов</li></ul></div>
                <div className={style.compration2}><h3>  Фрилансер  </h3>  <div  className={style.square}></div> <ul><li>Многозадачность</li> <li>Нет Знаний/Инструментария </li> <li>Слабая мотивация  </li></ul></div>
                <div className={style.compration3}><h3> Платформа  </h3>   <div  className={style.square}></div> <ul><li>Большое Количество Ботов </li>  <li>Сложный Интерфейс </li>
                <div  className={style.square}></div>   <li>Риск Слива Бюджета </li></ul></div>
            </div>
            <div className={style.wrapper_kol_promo}>
                <div className={style.kol_promo}>
                    <h4>KOL.PROMO</h4>
                    <p>предоставляем результат, о котором договорились!</p>
                    <p> головную боль (процесс привлечения ваших новых клиентов,<br /> время, платный софт, люди) - оставьте нам</p>
                    <div></div>
                </div>
            </div>
        </div>
        </section>
    );
};

export default FifthSectionForHome;