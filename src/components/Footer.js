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

  const profiles = [
    { icon: twitter_icon, href: twitter_url, user_handle: twitter },
    { icon: github_icon, href: github_url, user_handle: github },
    { icon: gmail_icon, href: mail_url, user_handle: handle_email },
    { icon: linkedin_icon, href: linkedin_url, user_handle: handle_linkedin },
  ]

  return (
    <div className=''>
      <footer className='' id='contact'>
        {
          twitter ? (
            <React.Fragment>
              {
                profiles.map((profile) => (
                  <div className=''>
                    <div className="">
                      <img src={profile.icon} className='' alt='indian flag' />
                    </div>
                    <div className="">
                      <a href={profile.href} target='blank' alt='twitter_username' className="">
                        @{profile.user_handle}
                      </a>
                    </div>
                  </div>
                ))
              }
            </React.Fragment>
          ) : (<></>)
        }
        <div className="">
          <img src={flag_icon_corner} className='w-12 aspect-square' alt='indian flag' />
        </div>
      </footer>
    </div>
  )
}

export default Footer