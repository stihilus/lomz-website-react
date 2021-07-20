import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

function ProjectsListHome() {
    return (
      <div className="marginTop40px">
      <div className="sectionFlex marginBottom40px marginTop80px">
            <div className="divW50">
            <Link className="link" to='/drugstore'>
                <a>All Projects:</a>
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
                <a>Boom Festival</a>
            </Link>
            </div>
            <div className="divW50">
              <p>Web, Print</p>
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
              <p>Magazine, Web</p>
            </div>
      </div>
      <div className="horisontalLine"></div>

      <div className="sectionFlex marginBottom10px marginTop10px">
            <div className="divW50">
            <Link className="link" to='/drugstore'>
                <a>Cryptographics</a>
            </Link>
            </div>
            <div className="divW50">
              <p>Web, Crypto</p>
            </div>
      </div>
      <div className="horisontalLine"></div>

      <div className="sectionFlex marginBottom10px marginTop10px">
            <div className="divW50">
            <Link className="link" to='/drugstore'>
                <a>Ash Clothing</a>
            </Link>
            </div>
            <div className="divW50">
              <p>Photography, Clothing, Brand</p>
            </div>
      </div>
      <div className="horisontalLine"></div>

      <div className="sectionFlex marginBottom10px marginTop10px">
            <div className="divW50">
            <Link className="link" to='/drugstore'>
                <a>SekvencaOstatka</a>
            </Link>
            </div>
            <div className="divW50">
              <p>Math, Sound</p>
            </div>
      </div>
      <div className="horisontalLine"></div>

      <div className="sectionFlex marginBottom10px marginTop10px">
            <div className="divW50">
            <Link className="link" to='/drugstore'>
                <a>Presscyclage</a>
            </Link>
            </div>
            <div className="divW50">
              <p>Sound</p>
            </div>
      </div>
      <div className="horisontalLine"></div>

      <div className="sectionFlex marginBottom10px marginTop10px">
            <div className="divW50">
            <Link className="link" to='/drugstore'>
                <a>Kolorfone</a>
            </Link>
            </div>
            <div className="divW50">
              <p>Sound, Instalations</p>
            </div>
      </div>
      <div className="horisontalLine"></div>

      <div className="sectionFlex marginBottom10px marginTop10px">
            <div className="divW50">
            <Link className="link" to='/drugstore'>
                <a>p5js Portraits</a>
            </Link>
            </div>
            <div className="divW50">
              <p>Programming, Art</p>
            </div>
      </div>
      <div className="horisontalLine"></div>

      </div>
    );
  }

export default ProjectsListHome;
