import React from "react"
import { getUserData } from "./api/getUserData"
import Body from "./components/Body"
import Project from "./components/Project"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Container from "./components/Container"

function App() {
  const [user, setUser] = React.useState({
    bio: '',
    twitter: null,
    avatar: null,
    projects: [
      { name: '', description: '', thumbnail: '', topics: [] }, { name: '', description: '', thumbnail: '', topics: [] }, { name: '', description: '', thumbnail: '', topics: [] }
    ]
  })

  React.useEffect(() => {
    getUserData()
      .then(res => {
        console.log(res);
        if (res) setUser(old => ({ ...old, ...res }))
        else alert('server down')
      })
      .catch(err => {
        alert('internal error')
      })
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Container user={user} />}>
          <Route path=':project_id' element={<Project projects={user.projects} />
          } />
          <Route path={'*' | ''} element={<Body projects={user.projects} avatar={user.avatar} bio={user.bio} />
          } />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
