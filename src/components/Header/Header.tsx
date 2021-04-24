import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Header.scss';

const Header = () => {
  const history = useHistory();

  const handleInboxClick = () => {
    history.push('/inbox');
  };
  const handleHomeClick = () => {
    history.push('/');
  };

  return (
    <div className='header-wrapper'>
      <div className='header-content'>
        <div className='header-logo' onClick={handleHomeClick}>
          <h1>AnShare</h1>
        </div>
        <button className='btn' onClick={handleInboxClick}>
          Inbox
        </button>
      </div>
    </div>
  );
};

export default Header;
