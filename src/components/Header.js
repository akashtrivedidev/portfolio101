import React from 'react';
import { NavLink } from 'react-router-dom';

const flag_icon_rounded = 'https://cdn-icons-png.flaticon.com/512/330/330439.png'

const Header = (props) => {
  const { avatar } = props
  const username = 'akash trivedi';
  const options = ['projects', 'skills', 'contact', 'open source']
  if (!avatar) {
    return (
      <div className="">
        <div className=""></div>
        <div className="">
          <div className=""></div>
        </div>
      </div>
    )
  }
  return (
    <div className=''>
      <header className=''>
        <div className=''>
          <img src={avatar} className='w-12 rounded-xl aspect-square' alt='avatar' />
        </div>
        <div className=''>
          <NavLink className='' to={'/'}>
            <div className=''>{username}</div>
          </NavLink>
        </div>
        <div className=''>
          <div className=''>
            {
              options.map((option, index) => (
                <a className='' href={`/#${option}`}>{option}</a>
              ))
            }
          </div>
          <div className="">
            <img src={flag_icon_rounded} className='' alt='indian flag' />
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
