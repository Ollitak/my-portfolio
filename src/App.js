import React from "react"
import Introduction from "./components/introduction/Introduction"
import ProjectList from "./components/projectList/ProjectList"
import Contact from "./components/contact/Contact"

function App() {
  return (
    <div className="App">
      <Introduction />
      <ProjectList />
      <Contact />
    </div>
  )
}

export default App
