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
        <div className='header-option-container'>
          {
            options.map((option, index) => (
              <div className='header-option'>
                <a href={`/#${option}`} key={index} className='link'>{option}</a>
              </div>
            ))
          }
        </div>
      </header>
    </div>
  );
};

export default Header;
