import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';
////////////////////////////////////////////////
export default ({ title, subTitle, titleImg, subject, subjectImg, className, href = "/contact_us", hrefName = "contact us" }) => {
    ////////////////////////////////////////////
    const servCls = subject ? "services-web" : "services-web nopad";
    return (
        <div className={`awlira-services ${className}`}>
            <div className="container">
                <section className={servCls}>
                    <div className="section">
                        <h1>{title}</h1>
                        <p> {subTitle} </p>
                        <Link to={href}>
                            {hrefName}
                        </Link>
                    </div>
                    <div className="section">
                        <img src={titleImg} alt="img" />
                    </div>
                </section>
                {subject ? <section className="services-info">
                    <div className="section">
                        <img src={subjectImg} alt="img" />
                    </div>
                    <div className="section">
                        <p>{subject}</p>
                    </div>
                </section>
                    : null
                }
            </div>
        </div>
    )
}