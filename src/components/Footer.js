import React from 'react'

const flag_icon_corner = 'https://cdn-icons-png.flaticon.com/512/206/206606.png'

const Footer = () => {
  const handle_email = 'sunnytrivedi321@gmail.com'

  return (
    <div className='footer-container'>
      <footer className='footer' id='contact'>
        <div className="email-container"><div className="email">{handle_email}</div></div>
        <div className="footer-flag"><img src={flag_icon_corner} className='flag' alt='indian flag' /></div>
      </footer>
    </div>
  )
}

export default Footer