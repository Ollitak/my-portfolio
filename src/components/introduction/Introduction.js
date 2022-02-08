import React from "react"
import "./introduction.css"
import Pic from "../../img/olli.jpg"

const Introduction = () => {
  return (
    <div>
      <div className="i">
        <div className="i-left">
          <div className="i-left-wrapper">
            <h2 className="i-beginning">Hello! My name is</h2>
            <h1 className="i-name">Olli Taka-Anttila</h1>
            <div className="i-title">
              <div className="i-title-wrapper">
                <div className="i-title-item">Front-end development</div>
                <div className="i-title-item">Back-end development</div>
                <div className="i-title-item">Former investment banker</div>
                <div className="i-title-item">Aspiring software developer</div>
                <div className="i-title-item">TBD</div>
              </div>
            </div>
            <div className="i-description">
              I focus on fullstack development currently specializing in JavaScript, React.js and Node.js.
            </div>
          </div>
        </div>
        <div className="i-right">
          <div className="i-right-background"></div>
          <img src={Pic} alt="picture" className="i-img"></img>
        </div>
      </div>
    </div>

  )
}

export default Introduction