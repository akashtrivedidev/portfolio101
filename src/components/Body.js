import React from 'react'
import ProjectCard from './ProjectCard'

const Body = () => {
  const intro_heading = 'myself'
  const intro_paragraph = 'I am Akash Trivedi. Web Application Developer.I am Akash Trivedi. Web Application Developer.I am Akash Trivedi. Web Application Developer.I am Akash Trivedi. Web Application Developer.I am Akash Trivedi. Web Application Developer.I am Akash Trivedi. Web Application Developer.'

  return (
    <div className='body-container'>
      <section className="intro-section-container">
        <h1 className='intro-heading'>{intro_heading}</h1>
        <p className="intro-paragraph">{intro_paragraph}</p>
      </section>
      <section className='section-project-container'>
        <h2>personal projects</h2>
        <hr className='divider' />
        <div className="projects-container">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
      </section>

      <section className="section-skills-container">
        <h2>skills</h2>
        <hr className='divider' />
      </section>
    </div>
  )
}

export default Body