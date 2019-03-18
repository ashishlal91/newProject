import React, { Component } from "react"
import { Link } from "react-router-dom"


class Home extends Component {

  render() {

    return (
        <header>
  <nav className="navbar navbar-expand-lg navbar-light bg-lightsticky-top">
    <Link to={'/home'} className="navbar-brand">King Peak Membership Services Ltd</Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <div className="ml-auto d-flex flex-column">
        <div className="language__section ml-auto">
          <ul className="language">
            <li className="active"><a href="#">ENG</a></li>
            <li><a href="#"><img src="img/chiicon.png"/></a></li>
          </ul>
        </div>
      <ul className="navbar-nav">                  
        <li className="nav-item active">
          <Link to={'/home'} className="nav-link">Home <span className="sr-only">(current)</span></Link>
        </li>
        <li className="nav-item">
          <Link to={'/about'} className="nav-link">About </Link>
        </li>
        <li className="nav-item">
          <Link to={'/monthlyspecial'} a className="nav-link">MONTHLY SPECIAL</Link>
        </li>
        <li className="nav-item">
          <Link to={'/membership'} className="nav-link">MEMBERSHIPS & DEBENTURES</Link>
        </li>         
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            CLUB INFORMATION
          </a>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            <Link to={'/golfclub'} className="dropdown-item">Golf Club</Link>
            <Link to={'/countryrecreation'} className="dropdown-item">Country & Recreation</Link>
            <Link to={'/Marina'} className="dropdown-item">Marina</Link>
            <Link to={'/schooldebenture'} className="dropdown-item">School Debenture</Link>
            {/*<div className="dropdown-divider"></div>
            <a className="dropdown-item" href="#">Something else here</a>*/}
          </div>
        </li>               
        <li className="nav-item">
          <Link to={'/contact'} className="nav-link" href="#">CONTACT US</Link>
        </li>
      </ul>
      </div>
      {/*<form className="form-inline my-2 my-lg-0">
        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form>*/}
    </div>
  </nav>
</header>
    )
  }
}

export default Home
