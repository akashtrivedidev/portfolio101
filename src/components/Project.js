import React from 'react'
import { useParams } from 'react-router-dom'
import TechTopic from './TechTopic'

const screenshot_icon = 'https://img.icons8.com/cotton/344/gallery.png'
const link_icon = 'https://cdn-icons-png.flaticon.com/512/659/659999.png'

const Project = (props) => {
  let project_index = 0
  let { projects } = props
  const project_code = useParams().project_id

  while (project_index < projects.length) {
    if (projects[project_index].id === Number(project_code)) {
      break
    }
    project_index++
  }
  projects = projects[Number(project_index)]
  projects.name = `${projects.name.charAt(0).toUpperCase()}${projects.name.slice(1,)}`

  return (
    <React.Fragment>
      <div className='px-container'>
        <div className="px-thumbnail-container">
          <img src={projects.thumbnail} alt="" className="px-thumbnail" />
        </div>
        <div className="px-about-container">
          <div className="px-name-container">
            <img src={link_icon} alt="" className='project-icon' />
            {
              projects.homepage === "" ?
                (<h3 className="px-name">{projects.name}</h3>) :
                (
                  <React.Fragment>
                    <a href={projects.homepage} className='link'><h3 className="px-name">{projects.name}</h3></a>
                  </React.Fragment>
                )
            }

          </div>
          <hr />
          <div className="px-description">{projects.description}</div>
          <div className="px-topic-container">
            {
              projects.topics.map((topic, index) => (<TechTopic name={topic} />))
            }
          </div>
        </div>
      </div>
      <section className='section-container'>
        <div className="section-heading-container">
          <h2 className='heading'>screenshots</h2>
          <img src={screenshot_icon} alt="projects" className='project-icon' />
        </div>
        <hr />
      </section>
    </React.Fragment>
  )
}

export default Project