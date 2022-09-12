import React from 'react';

const flag_icon_rounded = 'https://cdn-icons-png.flaticon.com/512/330/330439.png'

const Header = () => {
  const username = 'akash trivedi';
  const options = ['projects', 'skills', 'contact', 'open source']

  return (
    <div className='header-container'>
      <header className='header'>
        <div className='header-app-name-container'><div className='header-app-name'>{username}</div></div>
        <div className='header-option-container'>
          <div className='header-option'>
            {
              options.map((option, index) => (
                <a className='header-link' href={`/#${option}`} key={index}>{option}</a>
              ))
            }
          </div>
          <div className="header-flag"><img src={flag_icon_rounded} className='flag' /></div>
        </div>
      </header>
    </div>
  );
};

export default Header;
