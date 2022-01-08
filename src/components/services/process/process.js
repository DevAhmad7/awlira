import React from 'react';
import './style.scss';

////////////////////////////////////////////////
export default ({ process }) => {
    ////////////////////////////////////////////
    return (
        <div className="awlira-process">
            <h1>our process</h1>
            <section className="process-items">
                <div className="container">
                    {
                        process.map(({ src, name, subject }, key) => (
                            <div className="item" key={key}>
                                <img src={src} alt="img" />
                                <div className="overlay">
                                    <h1>{name}</h1>
                                    <p>{subject}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </section>
        </div>
    )
}