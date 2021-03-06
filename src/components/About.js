import React from 'react';
import '../App.css';

import AboutCover from '../images/AboutCover.jpg';

function About() {
  return (
    <div>
    <img className="projectImg marginBottom40px" src={AboutCover} alt="About"></img>
    <div className="divW50 marginBottom80px">
        <p className="marginBottom40px">Senior Designer based in Belgrade, Serbia. Currently at <a className="linkUnderline" href="https://www.defisaver.com">DeFi Saver</a>.</p>
        <p><a className="linkUnderline" href="mailto:stihilus@gmail.com">Contact</a> for freelance opportunities.</p>
        <div className="marginTop40px"><a className="linkUnderline" href="https://dribbble.com/leftlife">Dribbble</a>, <a className="linkUnderline" href="https://www.behance.net/leftlife">Behance</a></div>
    </div>
    </div>
  );
}

export default About;
