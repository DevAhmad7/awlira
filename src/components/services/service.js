import React from 'react';
import { Redirect } from 'react-router-dom';
// components
import Info from './info/info';
import Choose from '../home/choose/choose';
import Contact from '../home/contact/contact';
import Techno from './techno/techno';
import Process from './process/process';

export default ({ match }) => {
  const { id } = match.params;
  const data = {
    'web_design': {
      title: `web design 
      and development`,
      subTitle: `build your website with high quality`,
      subject: `
      We design all websites, including professional electronic store design, website content management for companies, website design, advertising, real estate and all designs for small, medium and large companies.
      We develop and configure the sites to be subject to modifications and permanent development with the distinctive interface of the site and our developed and easy control panels.
      `,
      titleImg: "/img/web/one.png",
      subjectImg: "/img/web/two.png"
    },
    'mobile_app': {
      title: `mobile app
      development`,
      subTitle: `build your mobile app with high quality`,
      subject: `
      We have a team of programmers and designers to ensure that you have a smart mobile application that fits with your business and reach it to your customers permanently and continuously.
      `,
      titleImg: "/img/mobile/one.png",
      subjectImg: "/img/mobile/two.png"
    },
    "ui_ux": {
      title: `UI & UX Design`,
      subTitle: `build your Design with high quality`,
      titleImg: "/img/uiux/uiux.png"
    },
    "process": [
      {
        src: '/img/process/understand.png',
        name: 'understand',
        subject: `Define the problem first. we need to understand clearly what are you trying to solve`
      },
      {
        src: '/img/process/research.png',
        name: 'research',
        subject: `This is the very first steps that any design process will need`
      },
      {
        src: '/img/process/analyze.png',
        name: 'analyze',
        subject: `Create User Stories/Scenario Map/Sitemap`
      },
      {
        src: '/img/process/design.png',
        name: 'design',
        subject: `Start creating Wireframes , Interaction Prototypes and UI pleasure and praising pain was born and I will give you a complete`
      },
      {
        src: '/img/process/testing.png',
        name: 'testing',
        subject: `dentifying problems in the design of the product or service`
      },
      {
        src: '/img/process/launch.png',
        name: 'launch',
        subject: `launch product to developers using zeplin`
      }
    ],
    "techno": [
      {
        src: '/img/techno/html5.png',
        name: 'html5'
      },
      {
        src: '/img/techno/css3.png',
        name: 'css3'
      },
      {
        src: '/img/techno/bootstrap.png',
        name: 'bootstrap'
      },
      {
        src: '/img/techno/javascript.png',
        name: 'javascript'
      },
      {
        src: '/img/techno/reactjs.png',
        name: 'react.js'
      },
      {
        src: '/img/techno/nodejs.png',
        name: 'node.js'
      },
      {
        src: '/img/techno/python.png',
        name: 'python'
      }
    ]
  }
  const serviceLink = ["web_design", "mobile_app", "ui_ux"];
  const process = id === "ui_ux" ? <Process process={data.process} /> : null;
  if (!(serviceLink.indexOf(id) > -1)) return (<Redirect to="/404" />);
  return (
    <div className="awlira-home">
      <Info {...data[id]} className={id} />
      {process}
      <Choose className="service" title="why awlira" />
      <Contact />
      <Techno techno={data.techno} />
    </div>
  )
}