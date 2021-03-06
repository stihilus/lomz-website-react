import React from 'react';
import '../App.css';
import Top from '../components/Top';
import ProjectsList from '../components/ProjectsList';

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

function Cryptographics() {
  return (
    <div>
    <div className="divW50 marginBottom80px">
        <p className="marginBottom40px">Cryptographics</p>
        <p className="marginBottom40px">NFT</p>
        <p className="marginBottom40px">Cryptographics is a fully decentralized digital art creation platform that allows users to create, store and trade unique randomly generated digital artwork on the blockchain. It is a place where Artists, Creators and Collectors come together to create graphical assets, generate cryptographics and collect or trade them.</p>
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
        <Top />
        <ProjectsList />
        </div>
    </div>
    </div>

  );
}

export default Cryptographics;
