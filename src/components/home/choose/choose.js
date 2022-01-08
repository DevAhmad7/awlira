import React from 'react';
import './style.scss';

const Item = ({ img, name, subject }) => (
    <div className="item">
        <img src={img} alt="img" />
        <h1>{name}</h1>
        <p>{subject}</p>
    </div>
)
////////////////////////////////////////////////
export default ({ className, title }) => {
    const items = [
        {
            img: "/img/choose/speed.png",
            name: "speed",
            subject: "Speed and efficiency are among the most important factors for completing our projects and delivering them on time"
        },
        {
            img: "/img/choose/customized.png",
            name: "customized",
            subject: "We provide all the demands that the customer demands in terms of designs and we are creative in our work"
        },
        {
            img: "/img/choose/lowcost.png",
            name: "low cost",
            subject: "We care about our customers' satisfaction by providing the lowest cost for designing and building a successful site"
        }
    ];
    ////////////////////////////////////////////
    return (
        <div className="awlira-choose" id="about_us">
            <h1 className={className}>{title}</h1>
            <section className="choose-items">
                <div className="container">
                    {
                        items.map((date, key) => (<Item key={key} {...date} />))
                    }
                </div>
            </section>
        </div>
    )
}