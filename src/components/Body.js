import React from 'react'
import ProjectCard from './ProjectCard'

const Body = (props) => {
  const { projects } = props
  const intro_heading = 'myself'
  const intro_paragraph = 'I am a full stack Web Application Developer. Currently i am working on personal projects and actively looking for amazing job opportunites.'
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
        <p className='intro-paragraph'>{intro_paragraph}</p>
      </section>

      <section className='section-container' id='projects'>
        <h2 className='heading'>personal projects</h2>
        <hr />
        <div className='slider-container'>
          {projects.map((project_object, index) => (<ProjectCard project={project_object} key={index} />))}
        </div>
      </section>

      <section className='section-container' id='skills'>
        <h2 className='heading'>skills</h2>
        <hr />
        <div className="skills-container">
          {Object.entries(skills).map((object, index) => (<SkillContainer list={object} key={index} />))}
        </div>
      </section>
    </div>
  )
}

export default Body

const SkillContainer = (props) => {
  const { list } = props
  return (
    <div className='skill-container'>
      <h2 className='heading'>{list[0]}</h2>
      <div className="skill-list">
        <ul>
          {list[1].map((skill, index) => (<li className='skill'>{skill}</li>))}
        </ul>
      </div>
    </div>
  )
}
