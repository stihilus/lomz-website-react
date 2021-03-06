import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

function Footer() {
    return (
      <div className="sectionFlex marginBottom80px marginTop40px">
            <div className="divW50">
            <Link className="link" to='/'>
                <a>Lomz — ©2021</a>
            </Link>
            </div>
            <div className="divW50">
                <Link className="link" to='/about'>
                <a>About, </a>
                </Link>
                <a className="link" href="https://www.instagram.com/lomz.art/">Instagram, </a>
                <a className="link" href="mailto:stihilus@gmail.com">Email</a>
            </div>
      </div>
    );
  }

export default Footer;
