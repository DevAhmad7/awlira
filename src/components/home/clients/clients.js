import React from 'react';
import Slider from 'react-elastic-carousel';
import './style.scss';
////////////////////////////////////////////////
export default () => {
    const items = [
        "/img/logo/logoLap.png",
        "/img/logo/logoLap.png",
        "/img/logo/logoLap.png",
        "/img/logo/logoLap.png",
        "/img/logo/logoLap.png",
        "/img/logo/logoLap.png"
    ];
    ////////////////////////////////////////////
    return (
        <div className="awlira-clients">
            <h1>our clients</h1>
            <p>
                At Awlira we believe in partnership. Over the years we have developed many long-term relationships with our great clients from UK, USA, Germany, Egypt and KSA, building reliable
                solutions in both web and mobile app development.
                </p>
            <section className="clients-items">
                <div className="container">
                    <Slider itemsToShow={4} enableArrow={false}
                        breakPoints={[
                            { width: 50, itemsToShow: 1 },
                            { width: 450, itemsToShow: 2 },
                            { width: 770, itemsToShow: 3 },
                            { width: 1024, itemsToShow: 5 },
                            { width: 1360, itemsToShow: 5 },
                            { width: 1450, itemsToShow: 6 },
                            { width: 1750, itemsToShow: 6 },
                        ]}
                        initialFirstItem={4}
                        enableAutoPlay autoPlaySpeed={3000}>
                        {
                            items.map((src, key) => (
                                <div className="item" key={key}>
                                    <img src={src} alt="img" />
                                </div>
                            ))
                        }
                    </Slider>
                </div>
            </section>
        </div>
    )
}