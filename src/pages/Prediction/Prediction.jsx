import React from 'react';
import style from './Prediction.module.css'
import photo_img from './img-photo/image 36.png'
import photo_karta from './img-photo/image 37.png'
import left_img from './img-photo/image 22.png'
import left_botm_img from './img-photo/image 21.png'

const Prediction = () => {
    return (
        <main>
            <div className={style.main_text}>
                <h1>
                    6 Predictions For Crypto Industry In 2021 (without trading)
                </h1>
            </div>
            <div className={style.left_text}>
                <span>
                    ДРУГИЕ ПОСТЫ
                </span>
                <div className={style.left_img_}>
                    <img src={left_img} alt="" width={300} />
                    <h2>
                        How To Stake ETH 2.0
                        <h3>
                            At the end of the last year, on December 1, the long-awaited new version of the Ethereum network was launched. So how to stake?
                            <h4>
                                Открыть пост
                            </h4>
                        </h3>
                    </h2>
                    <div className={style.left_botm_img_}>
                        <img src={left_botm_img} alt="" width={300} />
                    </div>
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

            </div>
            <div className={style.main_img}>
                <img src={photo_img} alt="" />
            </div>
            <div className={style.center_text}>
                <p>
                    6 Predictions For Crypto Industry In 2021 (without trading)
                    Sergey BaloyanEntrepreneur, X10.Agency FounderThe Blockchain and Crypto world is changing in a blink of an eye. One trend replaces another, new promising tokens, fundraising methods, community interaction approaches appear every new month.
                    2020 was exciting for those who monitor and participate in the crypto market - DeFi and DEX boom, ETH 2.0 launch, new interesting projects and niches, and surely BTC broke through its ATH - caught everyone's attention.
                    As I cooperate with lots of fintech and blockchain companies, I'm able to detect new trends and I feel that sharing my opinion with you can be important. What should we expect from 2021. (But let's put aside trading advice and BTC or other currency price rate prediction).
                </p>
            </div>
            <div className={style.span_text}>
                <span>
                    1. DeFi and DEX will continue their growth
                </span>
            </div>
            <div className={style.h5_text}>
                <h5>
                    This year was truly impressive for the DeFi segment. A rapid growth of locked USD in different projects (currently it is estimated as 13.5 Billion), the rise of new interesting projects, the whole world got familiar with words 'staking', 'farming' and 'governance token'.
                </h5>
            </div>
            <div className={style.img_karta}>
                <img src={photo_karta} alt="" />
            </div>
            <div className={style.last_text}>
                <h6>
                    I guess that 2021 will bring more and more projects and a higher supply on DeFi market. Nevertheless, always mind financial security and doublecheck information about the projects and do not trust in super fast profits only by word.
                </h6>
            </div>
            <div className={style.last_text1}>
                <h6>
                    Decentralized Exchanges, so-called DEX, are coming alongside with DeFi Industry. 2020 year was a real breakthrough for many of DEXs, UniSwap is the most vivid example. This tendency will only get stronger during the upcoming 2021 as well as the IDO trend.
                </h6>
            </div>
        </main>
    );
};

export default Prediction;