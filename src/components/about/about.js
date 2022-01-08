import React from 'react';
// components
import About from './main/about';
import Contact from '../home/contact/contact';
import Techno from '../services/techno/techno';
///////////////////////////////////////////
export default () => {
  const techno = [
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
  ];
  /////////////////////////////////////////////////
  return (
    <div className="awlira-home">
      <About />
      <Contact />
      <Techno techno={techno} />
    </div>
  )
}