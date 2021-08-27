import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

function ProjectsListHome() {
    return (
      
      <div className="marginTop40px">

      {/* DESIGN */}  

      <div className="sectionFlex marginBottom40px marginTop80px">
            <div className="divW50">
            <Link className="link" to='/drugstore'>
                <a>More design projects:</a>
            </Link>
            </div>
            <div className="divW50">
            </div>
      </div>

      <div className="sectionFlex marginBottom10px marginTop10px">
            <div className="divW50">
            <Link className="link" to='/drugstore'>
                <a>Agora</a>
            </Link>
            </div>
            <div className="divW50">
              <p>Shop, Concept</p>
            </div>
      </div>
      <div className="horisontalLine"></div>

      <div className="sectionFlex marginBottom10px marginTop10px">
            <div className="divW50">
            <Link className="link" to='/drugstore'>
                <a>Union Music</a>
            </Link>
            </div>
            <div className="divW50">
              <p>Music, Landing</p>
            </div>
      </div>
      <div className="horisontalLine"></div>

      <div className="sectionFlex marginBottom10px marginTop10px">
            <div className="divW50">
            <Link className="link" to='/drugstore'>
                <a>Noise</a>
            </Link>
            </div>
            <div className="divW50">
              <p>News, Magazine</p>
            </div>
      </div>
      <div className="horisontalLine"></div>

      <div className="sectionFlex marginBottom10px marginTop10px">
            <div className="divW50">
            <Link className="link" to='/drugstore'>
                <a>Smart Contract Audits</a>
            </Link>
            </div>
            <div className="divW50">
              <p>Audits, Crypto</p>
            </div>
      </div>
      <div className="horisontalLine"></div>

      <div className="sectionFlex marginBottom10px marginTop10px">
            <div className="divW50">
            <Link className="link" to='/drugstore'>
                <a>Three Colors</a>
            </Link>
            </div>
            <div className="divW50">
              <p>Social, Template</p>
            </div>
      </div>
      <div className="horisontalLine"></div>

      {/* MULTIMEDIA */}  

      <div className="sectionFlex marginBottom40px marginTop80px">
            <div className="divW50">
            <Link className="link" to='/drugstore'>
                <a>More multimedia projects:</a>
            </Link>
            </div>
            <div className="divW50">
            </div>
      </div>

      <div className="sectionFlex marginBottom10px marginTop10px">
            <div className="divW50">
            <Link className="link" to='/drugstore'>
                <a>Drugstore</a>
            </Link>
            </div>
            <div className="divW50">
              <p>Shop, Concet</p>
            </div>
      </div>
      <div className="horisontalLine"></div>

      <div className="sectionFlex marginBottom10px marginTop10px">
            <div className="divW50">
            <Link className="link" to='/drugstore'>
                <a>Drugstore</a>
            </Link>
            </div>
            <div className="divW50">
              <p>Shop, Concet</p>
            </div>
      </div>
      <div className="horisontalLine"></div>

      </div>
    );
  }

export default ProjectsListHome;
