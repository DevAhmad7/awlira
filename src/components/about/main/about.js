import React from 'react';
import './style.scss';
////////////////////////////////////////////////
export default () => {
    ////////////////////////////////////////////
    return (
        <div className="awlira-about">
            <div className="container">
                <section className="about-web">
                    <div className="section">
                        <h1>
                            About Us
                        </h1>
                        <p>
                            The Awlira Company is a pioneer in this field where we have the expertise and tools that qualify us to be the optimal solution for your company or factory and we continue to succeed to provide all the needs our customers need from web design services and hosting and development of web sites and design and development of mobile applications and e-marketing and consulting in E-marketing and social networking sites. <br />
                            Also, Awlira makes design for faces and graphic designs (designs for all of your company's publications) with the highest quality and best prices.
                            we love what we do and we want you to achieve your goals with us in the best and most appropriate way.
                        </p>
                    </div>
                    <div className="section">
                        <img src="/img/about/about.png" alt="img" />
                    </div>
                </section>
            </div>
            <section className="about-info">
                <div className="container">
                    <div className="section">
                        <img src="/img/about/map.png" alt="img" />
                    </div>
                    <div className="section">
                        <p>
                            Having started in Egypt’s largest <br />
                            seaport, Elmahalla EL-kubra,cairo  it <br />
                            did not limit our services to one <br />
                            location. We work with customers <br />
                            across<strong> Europe, Middle East and the US.</strong>
                        </p>
                    </div>
                </div>
            </section>
        </div>
    )
}