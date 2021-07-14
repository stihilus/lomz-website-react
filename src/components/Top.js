import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

function Top() {
    return (
      <div className="sectionFlex marginTop40px">
            <div className="divW50">
            </div>
            <div className="divW50">
                <a className="link" href="https://www.instagram.com/lomz.art/">Scroll to top, </a>
                <Link className="link" to='/'>
                    <a>Index</a>
                </Link>
            </div>
      </div>
    );
  }

export default Top;
