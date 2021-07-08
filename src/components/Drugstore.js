import React from 'react';
import '../App.css';

import ds01 from '../images/ds01.gif';
import ds02 from '../images/ds02.png';
import ds03 from '../images/ds03.gif';
import ds04 from '../images/ds04.png';
import ds05 from '../images/ds05.gif';
import ds06 from '../images/ds06.png';
import ds07 from '../images/ds07.png';
import ds08 from '../images/ds08.png';
import ds09 from '../images/ds09.png';
import ds10 from '../images/ds10.png';
import ds11 from '../images/ds11.gif';
import ds12 from '../images/ds12.gif';
import ds13 from '../images/ds13.gif';
import ds14 from '../images/ds14.gif';

function Drugstore() {
  return (
    <div>
    <div className="divW50 marginBottom80px">
        <p className="marginBottom40px">Drugstore</p>
        <p className="marginBottom40px">Design concept</p>
        <p className="marginBottom40px">My main challenge was to make the animations that follow the user clear from desktop all the way to mobile screen sizes and we believe we have done just that.</p>
    </div>
    
    <div className="projectsDiv marginBottom80px">
        <div>
        <img className="projectImg" src={ds01} alt="drugstore"></img>
        <img className="projectImg" src={ds02} alt="drugstore"></img>
        <img className="projectImg" src={ds03} alt="drugstore"></img>
        <img className="projectImg" src={ds04} alt="drugstore"></img>
        <img className="projectImg" src={ds05} alt="drugstore"></img>
        <img className="projectImg" src={ds06} alt="drugstore"></img>
        <img className="projectImg" src={ds07} alt="drugstore"></img>
        <img className="projectImg" src={ds08} alt="drugstore"></img>
        <img className="projectImg" src={ds09} alt="drugstore"></img>
        <img className="projectImg" src={ds10} alt="drugstore"></img>
        <img className="projectImg" src={ds11} alt="drugstore"></img>
        <img className="projectImg" src={ds12} alt="drugstore"></img>
        <img className="projectImg" src={ds13} alt="drugstore"></img>
        <img className="projectImg" src={ds14} alt="drugstore"></img>
        </div>
    </div>
    </div>
  );
}

export default Drugstore;