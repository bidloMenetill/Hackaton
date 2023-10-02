import React from 'react';
import style from './Prediction.module.css'
import first_img from './img-photo/image 36.png'
import first_img1 from './img-photo/image 37.png'
import last_img__ from './img-photo/Arrow 2.png'
import last_photo from './img-photo/image 21.png'
import last_photo_ from './img-photo/image 22.png'
const Prediction = () => {
    return (
        <main>
            <div className={style.right_text_last}>
                <p>
                    ДРУГИЕ ПОСТЫ
                </p>
            </div>
            <div className={style.wrapp_last}>
                <img src={last_photo} alt="" width={240} />
                <h2>
                    How To Stake ETH 2.0
                    <h3>
                        At the end of the last year, on December 1, the long-awaited new version of the Ethereum network was launched. So how to stake?
                        <h4>
                            Открыть пост
                        </h4>
                    </h3>
                </h2>
            </div>
            <div className={style.wrapp_last_}>
                <img src={last_photo_} alt="" width={240} />
                <h2>
                    How To Stake ETH 2.0
                    <h3>
                        At the end of the last year, on December 1, the long-awaited new version of the Ethereum network was launched. So how to stake?
                        <h4>
                            Открыть пост
                        </h4>
                    </h3>
                </h2>
            </div>
            <div className={style.first_text}>
                <h1>6 Predictions For Crypto Industry In 2021 (without trading)</h1>
            </div>
            <div className={style.photo}>
                <img src={first_img} alt="" />
            </div>
            <div className={style.text_center}>
                <p>
                    6 Predictions For Crypto Industry In 2021 (without trading)

                    Sergey BaloyanEntrepreneur, X10.Agency FounderThe Blockchain and Crypto world is changing in a blink of an eye. One trend replaces another, new promising tokens, fundraising methods, community interaction approaches appear every new month.

                    2020 was exciting for those who monitor and participate in the crypto market - DeFi and DEX boom, ETH 2.0 launch, new interesting projects and niches, and surely BTC broke through its ATH - caught everyone's attention.

                    As I cooperate with lots of fintech and blockchain companies, I'm able to detect new trends and I feel that sharing my opinion with you can be important. What should we expect from 2021. (But let's put aside trading advice and BTC or other currency price rate prediction).
                </p>
            </div>
            <div className={style.text_p}>
                <p>
                    1. DeFi and DEX will continue their growth
                </p>
            </div>
            <div className={style.style_text}>
                <p>
                    This year was truly impressive for the DeFi segment. A rapid growth of locked USD in different projects (currently it is estimated as 13.5 Billion), the rise of new interesting projects, the whole world got familiar with words 'staking', 'farming' and 'governance token'.
                </p>
            </div>
            <div className={style.img_container}>
                <img src={first_img1} alt="" />
            </div>
            <div className={style.last_center_p}>
                <p>
                    I guess that 2021 will bring more and more projects and a higher supply on DeFi market. Nevertheless, always mind financial security and doublecheck information about the projects and do not trust in super fast profits only by word.
                </p>
            </div>
            <div className={style.last_center_span}>
                <span>
                    Decentralized Exchanges, so-called DEX, are coming alongside with DeFi Industry. 2020 year was a real breakthrough for many of DEXs, UniSwap is the most vivid example. This tendency will only get stronger during the upcoming 2021 as well as the IDO trend.
                </span>
            </div>
            <div className={style.background}></div>
            <div className={style.background_right}>
                <img src={last_img__} alt="" className={style.left_img} />
            </div>
            <div className={style.right_img}>
                <img src={last_img__} alt="" className={style.right_img_} />
            </div>
        </main>

    );
};

export default Prediction;