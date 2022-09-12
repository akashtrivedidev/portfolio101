import React from 'react'


const ProjectCard = (props) => {
  const { name, description, thumbnail, topics } = props.project
  const { hasdata } = props
  let project_name = hasdata ? name.replace(/-/, ' ') : ''
  project_name = `${project_name.charAt(0).toUpperCase()}${project_name.slice(1,)}`

  if (!hasdata) {
    return (
      <div className='project-card-container'>
        <div className="project-thumbnail-container">
          <div className="empty-project-thumbnail"></div>
        </div>
        <div className="projection-about-container">
          <div className="empty-line"></div>
        </div>
      </div>
    )
  }
  return (
    <div className='project-card-container'>
      <div className="project-thumbnail-container">
        <img src={thumbnail} alt="" className="project-thumbnail" />
      </div>
      <div className="projection-about-container">
        <h3 className="project-name">{project_name}</h3>
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