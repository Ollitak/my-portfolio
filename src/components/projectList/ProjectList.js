import React from "react"
import "./projectList.css"
import Project from "../project/Project"
import { images } from "../../data"

const ProjectList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Showcased projects</h1>
        <p className="pl-description-first">
          Below, I have presented three of my recent projects that I have built from scratch.
        </p>
        <p className="pl-description-second">
          The first is a web application for posting equity research analyses built with React and Node.js. Other two are related to visualizing common algorithms: one is built with Vanilla JS and the other with React.
        </p>
      </div>
      <div className="pl-list">
        {images.map((item) =>
          <Project key={item.id} image={item.img} link={item.link} name={item.name} description={item.description} />
        )}
      </div>
    </div>
  )
}

export default ProjectList