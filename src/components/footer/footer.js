import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

////////////////////////////////////////////////
const Arct = ({ name, to }) => {
    return (
        <Link className="link" to={to}>
            {name}
        </Link>
    )
}
////////////////////////////////////////////////
const Anrm = ({ icon, name, href }) => {
    return (
        <a className="link" href={href}>
            <i className={`fab fa-${icon}`}></i>
            {name}
        </a>
    )
}
////////////////////////////////////////////////
export default () => {
    const services = [
        {
            name: "web design",
            to: "/services/web_design"
        },
        {
            name: "mobile app",
            to: "/services/mobile_app"
        },
        {
            name: "ui ux design",
            to: "/services/ui_ux"
        },
        {
            name: "brand identity",
            to: ""
        },
        {
            name: "hosting",
            to: ""
        },
        {
            name: "Marketing",
            to: ""
        }

    ];

    const follow = [
        {
            name: "follow us",
            icon: "facebook-square",
            href: "https://www.facebook.com/awlira"
        },
        {
            name: "twitter",
            icon: "twitter-square",
            href: "https://twitter.com/awlira"
        },
        {
            name: "linked in",
            icon: "linkedin",
            href: ""
        }
    ];

    return (
        <div className="awlira-footer">
            <div className="container">
                <div className="footer-info">
                    <img src="/img/logo/logoWht.png" alt="img" />
                    <p>
                        The Awlira Company is a pioneer in this field where we have the expertise and tools that qualify us to be the optimal solution for your company or factory and we continue to succeed to provide all the needs our customers need from web design services and hosting and development of web sites and design and development of mobile applications and e-marketing and consulting in E-marketing and social networking sites.
                    </p>
                </div>
                <div className="footer-links">
                    <div className="links">
                        <h1>services</h1>
                        {
                            services.map((data, key) => {
                                return (<Arct key={key} {...data} />)
                            })
                        }
                    </div>
                    <div className="links">
                        <h1>follow us</h1>
                        {
                            follow.map((data, key) => {
                                return (<Anrm key={key} {...data} />)
                            })
                        }
                    </div>
                    <div className="links">
                        <h1>contact us</h1>
                        <p className="link">
                            El-Mahalla
                            El-kubra,
                            El-Gharbia,
                            cairo,egypt.
                        </p>
                        <p className="link">
                            awlira.help@gmail
                            .com
                        </p>
                        <p className="link">
                            +201100630555
                        </p>
                        <p className="link">
                            +201100630555
                        </p>
                        <p className="link">
                            +201091791564
                        </p>
                    </div>
                </div>
            </div>
            <div className="footer-copy">
                © 2020 Awlira.com all rights reserved
            </div>
        </div>
    )
}