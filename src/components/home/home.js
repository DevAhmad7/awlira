import React from 'react';
// components
import View from './view/view';
import Choose from './choose/choose';
import Services from './services/services';
import Contact from './contact/contact';
import Projects from './projects/projects';
import Clients from './clients/clients';
////////////////////////////////////////////////////////
export default () => {
  return (
    <div className="awlira-home">
      <View />
      <Choose className="choose" title="why choose us" />
      <Services />
      <Contact />
      <Projects />
      <Clients />
    </div>
  )
}