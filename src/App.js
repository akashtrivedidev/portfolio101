import React from "react"
import Header from "./components/Header"
import Body from "./components/Body"
import Footer from "./components/Footer"
// import { getUserData } from "./api/getUserData"
import "./App.css"

function App() {
  // const [user, setUser] = React.useState({

  // })
  // React.useEffect(() => {
  //   getUserData()
  //     .then((res) => {
  //       if (res.status === 200) setUser(res.data)
  //       else alert('server down')
  //     })
  //     .catch(err => {
  //       alert('internal error')
  //     })
  // }, [])
  return (
    <React.Fragment>
      <Header />
      <Body />
      <Footer />
    </React.Fragment>
  )
}

export default App
