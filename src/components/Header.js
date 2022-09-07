import React from 'react';

const Header = () => {
  const username = 'akash trivedi';
  const options = ['projects', 'skills', 'about', 'contact', 'open source']
  return (
    <div className='header-container'>
      <header className='header'>
        <div className='header-app-name-container'>
          <div className='header-app-name'>{username}</div>
        </div>
        {
          options.map((option, index) => (
            <div className='header-option-container' key={index}>
              <a href={`/#${option}`} className='header-option link'>{option}</a>
            </div>
          ))
        }
      </header>
    </div>
  );
};

export default Header;
