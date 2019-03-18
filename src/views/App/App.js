import React, { Component } from "react"
import "./App.css"
import { Router, Route, Redirect, Switch } from "react-router-dom"
import createHistory from "history/createBrowserHistory"

import Home from "../Web/Home/container"
import About from "../Web/About/container"
import Club from "../Web/Club/component"
import GolfClub from "../Web/GolfClub/component"
import MembershipCountryRecreation from "../Web/MembershipCountryRecreation/component"
import CountryRecreation from "../Web/CountryRecreation/component"
import Marina from "../Web/Marina/component"
import SchoolDebenture from "../Web/SchoolDebenture/component"
import Contact from "../Web/Contact/component"
import MembershipGolfclub from "../Web/MembershipGolfclub/component"
import MembershipMarina from "../Web/MembershipMarina/component"
import MembershipSchooldebenture from "../Web/MembershipSchooldebenture/component"
import MonthlySpecial from "../Web/MonthlySpecial/component"
import Membership from "../Web/Membership/component"

const history = createHistory()

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/home" />} />
          <Route path={"/home"} component={Home} />
          <Route path={"/about"} component={About} />
          <Route path={"/golfclub"} component={GolfClub} />
          <Route path={"/membershipcountryrecreation"} component={MembershipCountryRecreation} />
          <Route path={"/countryrecreation"} component={CountryRecreation} />
          <Route path={"/marina"} component={Marina} />
          <Route path={"/schooldebenture"} component={SchoolDebenture} />
          <Route path={"/contact"} component={Contact} />
          <Route path={"/membership"} component={Membership} />
          <Route path={"/membershipgolfclub"} component={MembershipGolfclub} />
          <Route path={"/membershipmarina"} component={MembershipMarina} />
          <Route path={"/membershipschooldebenture"} component={MembershipSchooldebenture} />
          <Route path={"/monthlyspecial"} component={MonthlySpecial} />
          <Route path={"/club"} component={Club} />
        </Switch>
      </Router>
    )
  }
}

export default App
