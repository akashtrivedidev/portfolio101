import React from "react"
import Header from "./components/Header"
import Body from "./components/Body"
import Footer from "./components/Footer"
import { getUserData } from "./api/getUserData"
import "./App.css"

function App() {
  const [user, setUser] = React.useState({
    avatar: 'https://avatars.githubusercontent.com/u/56351314?v=4'
  })
  React.useEffect(() => {
    getUserData()
      .then(res => {
        if (res) setUser(res)
        else alert('server down')
      })
      .catch(err => {
        alert('internal error')
      })
  }, [])
  return (
    <React.Fragment>
      <Header avatar={user.avatar} />
      <Body />
      <Footer />
    </React.Fragment>
  )
}

export default App
