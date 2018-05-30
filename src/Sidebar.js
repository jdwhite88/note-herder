import React from 'react';
import { Link } from 'react-router-dom';

import './Sidebar.css';
import quill from './quill.svg';
import newIcon from './new.png';
import newHover from './new-hover.png';

const Sidebar = ({ signOut }) => {
    return (
        <nav className="Sidebar">
          <div className="logo">
            <img src={quill} alt="Noteherder" />
          </div>
          <Link to="/notes" className="new-note">
            <img 
                className="hover"
                src={newHover} 
                alt="New note" 
            />
            <img 
                className="outline" 
                src={newIcon} 
                alt="New note" 
            />
          </Link>
          <div className="SignOut">
            <button onClick={signOut}>
              <i 
                className="fas fa-sign-out-alt"
                title="Sign out"
              >
              </i>
            </button>
          </div>
        </nav>
    );
};

export default Sidebar;