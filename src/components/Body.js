import React from 'react'
import ProjectCard from './ProjectCard'

const Body = (props) => {
  const { projects, avatar, bio } = props
  const intro_heading = 'myself'
  const skills = {
    'programming languages': ['Java', 'Javascript', 'python'],
    'frameworks': ['express', 'django'],
    'libraries': ['reactjs', 'nodejs'],
    'database': ['mongodb', 'mysql'],
  }

  return (
    <div className='body-container'>

      <section className='intro-section-container'>
        <h1 className='heading'>{intro_heading}</h1>
        {avatar ? (<p className='intro-paragraph'>{bio}</p>) : (
          <React.Fragment>
            <div className="empty-line"></div>
            <div className="empty-line"></div>
          </React.Fragment>
        )}
      </section>

      <section className='section-container' id='projects'>
        <h2 className='heading'>personal projects</h2>
        <hr />
        <div className='slider-container'>
          {projects.map((project_object, index) => (<ProjectCard hasdata={avatar} project={project_object} key={index} />))}
        </div>
      </section>

      <section className='section-container' id='skills'>
        <h2 className='heading'>skills</h2>
        <hr />
        <div className="skills-container">
          {Object.entries(skills).map((object, index) => (<SkillContainer hasdata={avatar} list={object} key={index} />))}
        </div>
      </section>
    </div>
  )
}

export default Body

const SkillContainer = (props) => {
  const { list, hasdata } = props
  if (!hasdata) {
    return (
      <div className='skill-container'>
        <div className='empty-line'></div>
        <div className="skill-list">
          <div className='empty-line'></div>
          <div className='empty-line'></div>
          <div className='empty-line'></div>
        </div>
      </div>
    )
  }
  return (
    <div className='skill-container'>
      <h2 className='skill-heading'>{list[0]}</h2>
      <div className="skill-list">
        <ul>
          {list[1].map((skill, index) => (<li className='skill'>{skill}</li>))}
        </ul>
      </div>
    </div>
  )
}
