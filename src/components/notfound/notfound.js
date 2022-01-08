import React from 'react';
// components
import Info from '../services/info/info';

export default () => {
  const data = {
      title: `we're sorry.`,
      titleImg: "/img/notfound/notfound.svg",
      subTitle: `Error 404!`,
      href: "/",
      hrefName: "back home"
  }
  return (
    <div className="awlira-home">
      <Info {...data} className="notfound" />
    </div>
  )
}