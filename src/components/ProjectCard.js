import React from 'react'


const ProjectCard = (props) => {
  const { name, description, thumbnail, topics } = props.project

  return (
    <div className='project-card-container'>
      <div className="project-thumbnail-container">
        <img src={thumbnail} alt="" className="project-thumbnail" />
      </div>
      <div className="projection-about-container">
        <h3 className="project-name">{name}</h3>
        <hr />
        <div className="project-description">{description}</div>
        <div className="project-topic-container">
          {
            topics.map((topic, index) => (<TechTopic name={topic} />))
          }
        </div>
      </div>
    </div>
  )
}

export default ProjectCard


const TechTopic = (props) => {
  const { name } = props
  return (<div className="tech-topic">{name}</div>)
}