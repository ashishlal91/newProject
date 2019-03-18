import React, { Component } from "react"
import { Link } from "react-router-dom"
// import SimpleSlider from '../../../components/Slider'
import TopNavigation from '../../../components/topnavigetion'
import './style.scss'
class Home extends Component {
  componentWillMount = () => {
    this.props.fetchMenus()
  }
  render() {    
    return (
      <div>
        <div id="wrapper" className="about__page page--wrapper">
          <TopNavigation />
          <section className="bewnner__section">
            <img className="benner_img" src="/img/about_benner.png"/>
          </section>
          <section className="body__section">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="page--heading">
                    <h1>About</h1>
                  </div>
                  <p><strong>King Peak Membership Services Ltd</strong> is an agency which offers services in buying, selling & renting membership of golf club, social & recreation and marina club as well as school debenture in Hong Kong, Macau & China regions. In order to deliver highest level of satisfaction to customers, we devote to give sophisticated advice, professional, quality and one stop service to every customer from the time of receiving an enquiry through to the completion of a membership transaction. In addition, we have various types of memberships to suit the needs of different customers through our enormous customer base. We are delighted to serve you at anytime and anywhere, give us a call or e-mail us now.</p>
                  <h5>King Peak Membership Services Ltd</h5>
                  <p>We strive to provide the most-updated and effective membership information or suggestion to assist customers to solve difficulties on decision making and membership transfer.</p>
                  <p>We strive to become a fully-fledged club membership agency through continuously improving the quality of services we offer.</p>
                  <p>We strive to provide comprehensive range of value-added services by seriously attending to the valuable comments from customers.</p>
                </div>
              </div>
            </div>
          </section>
          <footer>
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-12">
                  <div className="copyright__text">
                    <p>Copyright @ King Peak Membership Services Ltd. All Right Reserved. Powered by Web Design City I Hong Kong Web Design</p>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    )
  }
}

export default Home
