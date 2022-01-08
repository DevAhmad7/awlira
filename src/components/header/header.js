import React, { useState, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import './style.scss';
import $ from "../../main/getter";

const scrollToTop = ()=> {
    let intervalId = setInterval(() => {
        if (window.pageYOffset === 0) {
            clearInterval(intervalId);
        }
        window.scroll(0, window.pageYOffset - 40);
    }, 10);
}
/////////////////////////////////////////////
const Link = ({ name, href }) => (
    <NavLink exact to={href} className="nav" activeClassName="active" onClick={scrollToTop} >
        {name}
    </NavLink>
);
//////////////////////////////////////////////

function DropDown() {
    let [show, setShow] = useState(false);
    const [actLink, setLink] = useState('/services/web_design');
    let dropDN = useRef(null);
    ////////////////////////////////////////////////
    const showDrop = () => {
        setShow(!show);
        dropDN.current.style = `height: ${show ? 0 : $(dropDN.current).heightOff}px`;
    }
    const drops = [
        {
            name: "web design",
            href: "/services/web_design"
        },
        {
            name: "mobile app",
            href: "/services/mobile_app"
        },
        {
            name: "ux design",
            href: "/services/ui_ux"
        }
    ];
    ////////////////////////////////////////////////
    let clsDrop = show ? 'nav-dropdown drop' : 'nav-dropdown';
    // let serviceACT = id.includes('services') ? "dropButton active" : "dropButton";
    // console.log('ss', id, actLink)
    return (
        <div className="nav-link">
            <div className="drop" onClick={showDrop}>
                {/* <button className={serviceACT} >services</button> */}
                <NavLink exact to={actLink} activeClassName="active" className="dropButton" onClick={(e) => {
                    e.preventDefault();
                }} >services</NavLink>
                <button className="dropIcon" ></button>
            </div>
            <div className={clsDrop} style={{ height: 0 }} ref={dropDN} onClick={showDrop}>
                {
                    drops.map(({ name, href }) => {
                        return (
                            <NavLink exact to={href} activeClassName="active"
                                key={href} className="nav" onClick={() => {
                                    setLink(href);
                                    scrollToTop();
                                }}>{name}</NavLink>
                        )
                    })
                }
            </div>
        </div>
    )
}

function Navigation() {
    ///////////////////////////////////
    return (
        <div className='nav-navigation'>
            <div className="nav-link" >
                <Link name="home" href="/" />
            </div>
            <DropDown />
            <div className="nav-link" >
                <Link name="about us" href="/about_us" />
            </div>
            <div className="nav-link" >
                <Link name="contact us" href="/contact_us" />
            </div>
        </div>
    )
}

class Header extends React.Component {
    state = {
        scroll: false,
        humbr: false
    }
    componentDidMount() {
        window.addEventListener('scroll', () => {
            const isTop = window.scrollY > 100;
            if (isTop && !this.state.scroll) this.setState({ scroll: true });
            if (!isTop && this.state.scroll) this.setState({ scroll: false });
        })
    }
    componentWillUnmount() {
        window.removeEventListener('scroll')
    }
    render() {
        let navClass = 'awlira-nav';
        let className = 'list-icon';
        let clsActive = 'navList-inner';
        let logo = '/img/logo/logoLap.png';
        ////////////////////////////////////////////
        if (this.state.scroll) {
            navClass = 'awlira-nav active';
            logo = '/img/logo/logoWht.png';
        }
        if (this.state.humbr) {
            className = 'list-icon active';
            clsActive = 'navList-inner active';
        }
        ////////////////////////////////////////////
        const closeHumbr = (e) => {
            if (!this.state.humbr) return;
            if (e.target.id === "closeHumber") this.setState({ humbr: !this.state.humbr });
        }
        ////////////////////////////////////////////
        return (
            <nav className={navClass} ref={ref => this.elem = ref}>
                <div className="container flexDisplay">
                    <div className="nav-logo">
                        <img className="logo" src={logo} alt="logo" />
                    </div>
                    <div className="awlira-spacer"></div>
                    <div className="navList-outer">
                        <button className={className} onClick={() => this.setState({ humbr: !this.state.humbr })}>
                            <span></span>
                        </button>
                        <div className={clsActive} id="closeHumber" onClick={closeHumbr} >
                            <Navigation />
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Header;