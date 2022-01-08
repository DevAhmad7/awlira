import React from 'react';
import './style.scss';

const Item = ({ img, name, subject }) => (
    <div className="item">
        <div>
            <img src={img} alt="img" />
        </div>
        <h1>{name}</h1>
        <p>{subject}</p>
    </div>
)
////////////////////////////////////////////////
export default () => {
    const items = [
        {
            img: "/img/service/develope.png",
            name: "Web design",
            subject: `We design all websites, including professional electronic store design, website content management for companies, website design, advertising, real estate and all designs for small, medium and large companies.`
        },
        {
            img: "/img/service/develope.png",
            name: "Web development",
            subject: `We develop and configure the sites to be subject to modifications and permanent development with the distinctive interface of the site and our developed and easy control panels.`
        },
        {
            img: "/img/service/mobileApp.png",
            name: "Mobile app development",
            subject: `We have a team of programmers and designers to ensure that you have a smart mobile application that fits with your business and reach it to your customers permanently and continuously.`
        },
        {
            img: "/img/service/uiux.png",
            name: "UI/UX design",
            subject: `Template is easy to customize for your company’s needs. We have experience that qualifies us to do so.`
        },
        {
            img: "/img/service/brand.png",
            name: "brand identity",
            subject: `We have knowledge of market indicators, ability to lead, plan and interact with clients and creative skills. To design your brand.`
        },
        {
            img: "/img/service/hosting.png",
            name: "Web hosting",
            subject: `We have the strongest servers that guarantee you continuous
                communication without interruption and secure company emails
                with the ease of the backup process.`
        },
        {
            img: "/img/service/domain.svg",
            name: "Domain reservation",
            subject: `Reserve the name of your domain name on the Internet from anywhere in the world with easy and easy steps for customers and keep the ownership of your domain with the activation of your domain's domain at once (.com - .net - .org - ... etc).`
        },
        {
            img: "/img/service/secuirty.svg",
            name: "Fully secure websites against hacking",
            subject: `Before final delivery of your site, we perform a penetration test process to ensure the security of this site against any hacking.`
        },
        {
            img: "/img/service/marketing.svg",
            name: "E-Marketing",
            subject: `We have a distinguished team in the electronic marketing of your business on most of the social networking platforms for your business in a way that guarantees professional marketing of your business.`
        }
    ];
    ////////////////////////////////////////////
    return (
        <div className="awlira-services-info" id="services">
            <h1>our services</h1>
            <section className="services-items">
                <div className="container">
                    {
                        items.map((date, key) => (<Item key={key} {...date} />))
                    }
                </div>
            </section>
        </div>
    )
}