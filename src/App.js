import React from "react"
import Header from "./components/Header"
import Body from "./components/Body"
import Footer from "./components/Footer"
import { getUserData } from "./api/getUserData"
import "./App.css"

function App() {
  const [user, setUser] = React.useState({
    avatar: 'https://avatars.githubusercontent.com/u/56351314?v=4',
    projects: [
      {
        name: 'discord 2.0',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti ipsum molestias nisi asperiores distinctio sunt tenetur reprehenderit explicabo maiores, maxime tempore iure aperiam aspernatur deleniti repudiandae obcaecati. Laudantium, amet maxime!',
        thumbnail: 'https://cdn2.unrealengine.com/what-is-discord-1920x1080-c3d90ca45f57.jpg',
        topics: []
      },
      {
        name: 'whatsapp 2.0',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti ipsum molestias nisi asperiores distinctio sunt tenetur reprehenderit explicabo maiores, maxime tempore iure aperiam aspernatur deleniti repudiandae obcaecati. Laudantium, amet maxime!',
        thumbnail: 'https://cdn2.unrealengine.com/what-is-discord-1920x1080-c3d90ca45f57.jpg',
        topics: []
      },
      {
        name: 'bussiness hosting',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti ipsum molestias nisi asperiores distinctio sunt tenetur reprehenderit explicabo maiores, maxime tempore iure aperiam aspernatur deleniti repudiandae obcaecati. Laudantium, amet maxime!',
        thumbnail: 'https://cdn2.unrealengine.com/what-is-discord-1920x1080-c3d90ca45f57.jpg',
        topics: []
      }
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
    <React.Fragment>
      <Header avatar={user.avatar} />
      <Body projects={user.projects} />
      <Footer />
    </React.Fragment>
  )
}

export default App
