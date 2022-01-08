import React from 'react';
import './style.scss';

const Item = ({ className, img, name, tags, subject }) => (
    <div className={className}>
        <div className="section">
            <h1>{name}</h1>
            <p>{subject}</p>
            <div className="tags">
                {
                    tags.map((tag, key) => (<span key={key} className="tag" >{tag}</span>))
                }
            </div>
        </div>
        <div className="section">
            <img src={img} alt="img" />
        </div>
    </div>
)
////////////////////////////////////////////////
export default () => {
    const items = [
        {
            img: "/img/projects/win.png",
            name: "meetoor",
            tags: ['web design', 'ios', 'Android'],
            subject: `An integrated website was designed and developed based on meetings and communication between individuals and companies to manage business and projects, and new features were made available to be the first in the Middle East in terms of idea and creativity.`
        },
        {
            img: "/img/projects/fit.png",
            name: "khan",
            tags: ['ios', 'Android'],
            subject: `This site is designed to buy and sell specific products, especially silverware, and how to communicate with the customer through electronic purchase or through payment on delivery.`
        }
    ];
    ////////////////////////////////////////////
    return (
        <div className="awlira-projects">
            <section className="project-items">
                <div className="container">
                    {
                        items.map((date, key) => {
                            let cls = (key % 2) ? "item rev" : "item";
                            return (<Item key={key} {...date} className={cls} />)
                        })
                    }
                </div>
            </section>
        </div>
    )
}