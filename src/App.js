import React from "react"
import Header from "./components/Header"
import Body from "./components/Body"
import Footer from "./components/Footer"
import { getUserData } from "./api/getUserData"
import "./App.css"

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
    <React.Fragment>
      <Header avatar={user.avatar} />
      <Body projects={user.projects} avatar={user.avatar} bio={user.bio} />
      <Footer twitter={user.twitter} />
    </React.Fragment>
  )
}

export default App
