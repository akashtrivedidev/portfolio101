import React from 'react'
import { Link } from 'react-router-dom'
import TechTopic from './TechTopic'

const ProjectCard = (props) => {
  const { name, description, thumbnail, topics, id } = props.project
  const { hasdata } = props
  let project_name = hasdata ? name.replace(/-/, ' ') : ''
  project_name = `${project_name.charAt(0).toUpperCase()}${project_name.slice(1,)}`

  if (!hasdata) {
    return (
      <div className=''>
        <div className="">
          <div className=""></div>
        </div>
        <div className="">
          <div className=""></div>
        </div>
      </div>
    )
  }
  return (
    <div className=''>
      <Link to={`/${id}`} className=''>
        <div className="">
          <img src={thumbnail} alt="" className="" />
        </div>
        <div className="">
          <h3 className="">{project_name}</h3>
          <hr />
          <div className="">{description}</div>
          <div className="">
            {
              topics.map((topic, index) => (<TechTopic name={topic} />))
            }
          </div>
        </div>
      </Link>
    </div>
  )
}

export default ProjectCard