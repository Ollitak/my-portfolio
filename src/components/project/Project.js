import React from "react"
import "./project.css"

const Project = ({ image, link, name, description }) => {
  return (
    <div className="p">
      <a href={link} target="_blank" rel="noreferrer">
        <div className="p-top">
          <div className="p-app-name">{name}</div>
          <div className="p-small-circle"></div>
          <div className="p-small-circle"></div>
          <div className="p-small-circle"></div>
        </div>
        <div className="p-description">
          <div className="p-description-text">{description}</div>
        </div>
        <img src={image} alt="" className="p-img"></img>
      </a>
    </div>
  )
}

export default Project