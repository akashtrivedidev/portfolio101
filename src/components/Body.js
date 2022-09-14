import React from 'react'
import ProjectCard from './ProjectCard'

const project_icon = 'https://img.icons8.com/dotty/344/group-of-projects.png'
const skill_icon = 'https://img.icons8.com/cotton/344/source-code--v4.png'

const Body = (props) => {
  const { projects, avatar, bio } = props
  const intro_heading = 'myself'
  const skills = {
    'programming languages': ['Java', 'Javascript', 'python'],
    'frameworks': ['express', 'django'],
    'libraries': ['reactjs', 'nodejs'],
    'database': ['mongodb', 'mysql'],
  }

  const grid_style = { 'gridTemplateColumns': `repeat(${projects.length},auto)` }

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
        <div className="section-heading-container">
          <h2 className='heading'>personal projects</h2>
          <img src={project_icon} alt="projects" className='project-icon' />
        </div>
        <hr />
        <div className='slider-container' style={grid_style}>
          {projects.map((project_object, index) => (<ProjectCard hasdata={avatar} project={project_object} key={index} />))}
        </div>
      </section>

      <section className='section-container' id='skills'>
        <div className="section-heading-container">
          <h2 className='heading'>skills</h2>
          <img src={skill_icon} alt="projects" className='project-icon' />
        </div>
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
