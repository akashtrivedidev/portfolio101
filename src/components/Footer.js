import React from 'react'

const flag_icon_corner = 'https://cdn-icons-png.flaticon.com/512/206/206606.png'

const Footer = (props) => {
  const { twitter } = props
  const github = 'akashtrivedig'
  const handle_email = 'sunnytrivedi321@gmail.com'
  const handle_linkedin = 'Akash Trivedi'

  const twitter_url = `https://twitter.com/${twitter}`
  const github_url = `https://github.com/${github}`
  const mail_url = `mailto:${handle_email}`
  const linkedin_url = `https://www.linkedin.com/in/akashtrivedil/`

  const twitter_icon = 'https://cdn-icons-png.flaticon.com/512/3670/3670211.png'
  const github_icon = 'https://cdn-icons-png.flaticon.com/512/536/536452.png'
  const gmail_icon = 'https://cdn-icons-png.flaticon.com/512/5968/5968534.png'
  const linkedin_icon = 'https://cdn-icons-png.flaticon.com/512/1377/1377213.png'

  return (
    <div className='footer-container'>
      <footer className='footer' id='contact'>
        {
          twitter ? (
            <React.Fragment>
              <div className='flex-container'>
                <div className="social-container">
                  <img src={twitter_icon} className='social-icon' alt='indian flag' />
                </div>
                <div className="social-container">
                  <a href={twitter_url} target='blank' alt='twitter_username' className="social">@{twitter}</a>
                </div>
              </div>
              <div className='flex-container'>
                <div className="social-container">
                  <img src={github_icon} className='social-icon' alt='github icon' />
                </div>
                <div className="social-container">
                  <a href={github_url} target='blank' alt='twitter_username' className="social">@{github}</a>
                </div>
              </div>
              <div className='flex-container'>
                <div className="social-container">
                  <img src={gmail_icon} className='social-icon' alt='gmail icon' />
                </div>
                <div className="social-container">
                  <a href={mail_url} target='blank' alt='twitter_username' className="social">{handle_email}</a>
                </div>
              </div>
              <div className='flex-container'>
                <div className="social-container">
                  <img src={linkedin_icon} className='social-icon' alt='gmail icon' />
                </div>
                <div className="social-container">
                  <a href={linkedin_url} target='blank' alt='twitter_username' className="social">{handle_linkedin}</a>
                </div>
              </div>
            </React.Fragment>
          ) : (<></>)
        }
        <div className="footer-flag"><img src={flag_icon_corner} className='flag' alt='indian flag' /></div>
      </footer>
    </div >
  )
}

export default Footer