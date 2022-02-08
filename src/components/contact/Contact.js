import React from "react"
import "./contact.css"
import GithubLogo from "../../img/github-logo.png"
import GmailLogo from "../../img/gmail-logo.png"
import LinkedinLogo from "../../img/linkedin-logo.png"


const Contact = () => {
  return (
    <div className="c">
      <div className="c-left">
        <div className="c-left-background"></div>
        <div className="c-texts">
          <h1 className="c-title">Contact and socials</h1>
          <p className="c-description">Please, find here my email, GitHub and LinkedIn</p>
        </div>
      </div>
      <div className="c-right">
        <a href={"https://github.com/Ollitak"} target="_blank" rel="noreferrer">
          <img src={GithubLogo} alt="" className="c-github"></img>
        </a>
        <a href={"https://github.com/Ollitak"} target="_blank" rel="noreferrer">
          <img src={GmailLogo} alt="" className="c-gmail"></img>
        </a>
        <a href={"https://github.com/Ollitak"} target="_blank" rel="noreferrer">
          <img src={LinkedinLogo} alt="" className="c-linkedin"></img>
        </a>
      </div>
    </div>
  )
}

export default Contact