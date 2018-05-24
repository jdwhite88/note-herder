import React from 'react';

import './Sidebar.css';
import quill from './quill.svg';
import newIcon from './new.png';
import newHover from './new-hover.png';

const Sidebar = ({ resetCurrentNote, signOut }) => {
    return (
        <nav className="Sidebar">
          <div className="logo">
            <img src={quill} alt="Noteherder" />
          </div>
          <a 
            className="new-note" 
            href="/notes"
            onClick={(ev) => {
              ev.preventDefault();
              resetCurrentNote();
            }}
          >
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
          </a>
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