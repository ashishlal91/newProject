import React, { Component } from "react"
import { Link } from "react-router-dom"
// import SimpleSlider from '../../../components/Slider'
import TopNavigation from '../../../components/topnavigetion'
import './style.scss'
class Home extends Component {  
  render() {    
    return (
      <div>
        <div id="wrapper" className="contact__page page--wrapper">
          <TopNavigation />
          <section className="map__section">
            <img className="benner_img" src="/img/contact_benner.png"/>
          </section>
          <section className="body__section">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="page--heading">
                    <h1>CONTACT US</h1>
                  </div>                 
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 text-center">
                  <h2 className="form--title">King Peak Membership Service Ltd</h2>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="contact__section">
                        <div className="contact__address text-left">                      
                          <ul>
                            <li>
                              <span className="address__left"><img src="img/map_icon.png"/>Address:</span>
                              <span className="address__right">Unit 806, 8/F, Winning Centre,Yau Street,San Po Kong, Kowloon </span>
                            </li>
                            <li>
                              <span className="address__left"><img src="img/emai_iconl.png"/>Email:</span>
                              <span className="address__right">info@kpmembership.com</span>
                            </li>
                            <li>
                              <span className="address__left">
                              <img src="img/phone_icon.png"/>Phone:
                              </span>
                              <span className="address__right">+852  2660 0336</span>
                            </li>
                            <li>
                              <span className="address__left">
                                <img src="img/fax_icon.png"/>Fax:
                              </span>
                              <span className="address__right"> +852  2660 0962</span>
                            </li>
                          </ul>                        
                        </div>
                        <div className="contact__form">
                          <form>
                            <div className="form-group row">
                              <label for="uname" className="col-sm-3 col-form-label">Your Name</label>
                              <div className="col-sm-9">
                                <input type="text" className="form-control" id="uname" placeholder=""/>
                              </div>
                            </div>
                            <div className="form-group row">
                              <label for="inputEmail3" className="col-sm-3 col-form-label">Your Email</label>
                              <div className="col-sm-9">
                                <input type="email" className="form-control" id="inputEmail3" placeholder=""/>
                              </div>
                            </div>
                            <div className="form-group row">
                              <label for="phone" className="col-sm-3 col-form-label">Phone</label>
                              <div className="col-sm-9">
                                <input type="phone" className="form-control" id="phone" placeholder=""/>
                              </div>
                            </div>
                            <div className="form-group row">
                              <label for="massage" className="col-sm-3 col-form-label">Massage</label>
                              <div className="col-sm-9">
                                <textarea rows="6" type="text" className="form-control" id="massage" placeholder=""/>
                              </div>
                            </div>                            
                          </form>
                        </div>
                      </div>
                    </div>                      
                  </div>                  
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
