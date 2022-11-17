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
    'Api\'s': ['Graphql', 'REST'],
    'libraries': ['reactjs', 'nodejs'],
    'database': ['mongodb', 'mysql'],
  }

  const grid_style = { 'gridTemplateColumns': `repeat(${projects.length},auto)` }

  return (
    <div className=''>
      <section className=''>
        <h1 className=''>{intro_heading}</h1>
        {avatar ? (<p className=''>{bio}</p>) : (
          <React.Fragment>
            <div className=""></div>
            <div className=""></div>
          </React.Fragment>
        )}
      </section>

      <section className='' id='projects'>
        <div className="">
          <h2 className=''>personal projects</h2>
          <img src={project_icon} alt="projects" className='' />
        </div>
        <hr />
        <div className='' style={grid_style}>
          {projects.map((project_object, index) => (<ProjectCard hasdata={avatar} project={project_object} key={index} />))}
        </div>
      </section>

      <section className='' id='skills'>
        <div className="">
          <h2 className=''>skills</h2>
          <img src={skill_icon} alt="projects" className='' />
        </div>
        <hr />
        <div className="">
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
      <div className=''>
        <div className=''></div>
        <div className="">
          <div className=''></div>
          <div className=''></div>
          <div className=''></div>
        </div>
      </div>
    )
  }
  return (
    <div className=''>
      <h2 className=''>{list[0]}</h2>
      <div className="">
        <ul>
          {list[1].map((skill, index) => (<li className=''>{skill}</li>))}
        </ul>
      </div>
    </div>
  )
}
