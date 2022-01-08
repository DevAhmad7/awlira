import React from 'react';
import Slider from 'react-elastic-carousel';
import './style.scss';

////////////////////////////////////////////////
export default ({ techno }) => {
    ////////////////////////////////////////////
    return (
        <div className="awlira-techno">
            <h1>our technology</h1>
            <section className="techno-items">
                <div className="container">
                    <Slider itemsToShow={4} enableArrow={false}
                        breakPoints={[
                            { width: 50, itemsToShow: 2 },
                            { width: 450, itemsToShow: 3 },
                            { width: 770, itemsToShow: 4 },
                            { width: 1024, itemsToShow: 5 },
                            { width: 1360, itemsToShow: 5 },
                            { width: 1450, itemsToShow: 6 },
                            { width: 1750, itemsToShow: 6 },
                        ]}
                        initialFirstItem={4}
                        enableAutoPlay autoPlaySpeed={3000}>
                        {
                            techno.map(({ src, name }, key) => (
                                <div className="item" key={key}>
                                    <img src={src} alt="img" />
                                    <h1>{name}</h1>
                                </div>
                            ))
                        }
                    </Slider>
                </div>
            </section>
        </div>
    )
}