import React, { Component } from "react"
import { Link } from "react-router-dom"

class Club extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Link to={"/home"}>Home</Link>
          <Link to={"/about"}>About</Link>
          <Link to={"/golfclub"}>Golf Club</Link>
          <Link to={"/contact-us"}>Contact Us</Link>
          <Link to={"/club"}>Club</Link>
          <p>Club</p>
        </header>
      </div>
    )
  }
}

export default Club
