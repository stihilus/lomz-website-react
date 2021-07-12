import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

import ash from '../images/ash.jpg';
import boomfestival from '../images/boomfestival.jpg';
import cryptographics from '../images/cryptographics.jpg';
import drugstore from '../images/drugstore.jpg';
import noise from '../images/noise.jpg';
import sca from '../images/sca.jpg';
import uniondirect from '../images/uniondirect.jpg';
import zinemaker from '../images/zinemaker.jpg';

function Home() {
  return (
    <div>

    <div className="divW50 marginBottom80px">
        <p className="marginBottom40px">Senior Designer based in Belgrade, Serbia. Currently at <a className="linkUnderline" href="https://www.defisaver.com">DeFi Saver</a>.</p>
        <p><a className="linkUnderline" href="mailto:stihilus@gmail.com">Contact</a> for freelance opportunities.</p>
    </div>

    <div className="projectsDiv marginBottom80px">
        <div>
            <Link className="link" to='/drugstore'>
              <img className="projectsImg" src={drugstore} alt="drugstore"></img>
            </Link>
            <Link className="link" to='/drugstore'>
              <img className="projectsImg" src={boomfestival} alt="boomfestival"></img>
            </Link>
            <Link className="link" to='/drugstore'>
              <img className="projectsImg" src={cryptographics} alt="cryptographics"></img>
            </Link>
            <Link className="link" to='/drugstore'>
              <img className="projectsImg" src={ash} alt="ash"></img>
            </Link>
            <Link className="link" to='/drugstore'>
              <img className="projectsImg" src={sca} alt="sca"></img>
            </Link>
            <Link className="link" to='/noise'>
              <img className="projectsImg" src={noise} alt="noise"></img>
            </Link>
            <Link className="link" to='/drugstore'>
              <img className="projectsImg" src={zinemaker} alt="zinemaker"></img>
            </Link>
            <Link className="link" to='/drugstore'>
              <img className="projectsImg" src={uniondirect} alt="uniondirect"></img>
            </Link>
        </div>
    </div>
    </div>
  );
}

export default Home;
