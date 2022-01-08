import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

////////////////////////////////////////////////
export default () => {
    return (
        <div className="awlira-contact" id="contact_us">
            <div className="container">
                <div className="contact-info">
                    <h1>contact us now!</h1>
                    <p>
                        contact us and we will be happy to assist
                        you with any of our services<br /><br />
                        The Awlira Company is a pioneer in this field <br />
                        where we have the expertise and tools that qualify us <br />
                        to be the optimal solution for your company or factory <br />
                        and we continue to succeed to provide all the needs our <br />
                        customers need from web design services and hosting <br />
                        and development of web sites and design and <br />
                        development of mobile applications and e-marketing <br />
                        and consulting in E-marketing and social networking sites.
                    </p>
                </div>
                <Link to="/contact_us">
                    contact us
                </Link>
            </div>
        </div>
    )
}