import React from 'react';
import Typical from 'react-typical';
import './style.scss';
import { Link } from 'react-router-dom';
////////////////////////////////////////////////
export default () => {
    ////////////////////////////////////////////
    return (
        <div className="awlira-view">
            <div className="view">
                <h1>
                    contact us and we will be happy to assist<br />
                    you with any of our services
                </h1>
                <Typical
                    steps={
                        [
                            'web design', 1500,
                            'Web development', 1500,
                            'Mobile app', 1500,
                            'UI/UX design', 1500,
                            'brand identity', 1500,
                            'Web hosting', 1500,
                            'Domain reservation', 1500,
                            'Fully secure websites', 1500,
                            'E-Marketing', 1500
                        ]
                    }
                    loop={Infinity}
                    wrapper="p"
                />
                <Link to="">
                    contact us
                </Link>
            </div>
        </div>
    )
}