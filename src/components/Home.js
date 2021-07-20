import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import ProjectsListHome from '../components/ProjectsListHome';

import ash from '../images/ash.jpg';
import boomfestival from '../images/boomfestival.jpg';
import cryptographics from '../images/cryptographics.jpg';
import drugstore from '../images/drugstore.jpg';

import presscyclage from '../images/Presscyclage.jpg';
import sekvencaOstatka from '../images/SekvencaOstatka.jpg';
import kolorfon from '../images/Kolorfon.jpg';
import generatedp5jsPortraits from '../images/Generatedp5jsPortraits.jpg';

import arrowDown from '../images/ArrowDown.svg';

function Home() {
  return (
    <div>

    <div className="divW50 marginBottom80px">
        <p className="marginBottom40px">Senior Designer based in Belgrade, Serbia. Currently at <a className="linkUnderline" href="https://www.defisaver.com">DeFi Saver</a>.</p>
        <p><a className="linkUnderline" href="mailto:stihilus@gmail.com">Contact</a> for freelance opportunities.</p>
    </div>

    <div>
      <div className="sectionFlex marginBottom10px marginTop10px">
            <div className="divW50">
              <p>Design:</p>
            </div>
            <div className="divW50">
              <img className="projectsImg arrowDown" src={arrowDown} alt="Down"></img>
            </div>
      </div>
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
        </div>
    </div>

    <div>
      <div className="sectionFlex marginBottom10px marginTop10px">
            <div className="divW50">
              <p>Multimedia:</p>
            </div>
            <div className="divW50">
              <img className="projectsImg arrowDown" src={arrowDown} alt="Down"></img>
            </div>
      </div>
    </div>

    <div className="projectsDiv marginBottom80px">
        <div>
            <Link className="link" to='/drugstore'>
              <img className="projectsImg" src={presscyclage} alt="drugstore"></img>
            </Link>
            <Link className="link" to='/drugstore'>
              <img className="projectsImg" src={kolorfon} alt="boomfestival"></img>
            </Link>
            <Link className="link" to='/drugstore'>
              <img className="projectsImg" src={sekvencaOstatka} alt="cryptographics"></img>
            </Link>
            <Link className="link" to='/drugstore'>
              <img className="projectsImg" src={generatedp5jsPortraits} alt="ash"></img>
            </Link>
        </div>
    </div>
    <ProjectsListHome />
    </div>
  );
}

export default Home;
