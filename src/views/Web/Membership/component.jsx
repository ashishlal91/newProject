import React, { Component } from "react"
import { Link } from "react-router-dom"
// import SimpleSlider from '../../../components/Slider'
import TopNavigation from '../../../components/topnavigetion'
import './style.scss'
class Home extends Component {  
  render() {    
    return (
      <div>
        <div id="wrapper" className="membership__page">
          <TopNavigation />          
          <section className="body__section">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-12">
                  <div className="page--heading">
                    <h1>MEMBERSHIPS & DEBENTURES</h1>
                  </div>
                  <div className="membership_details">
                    <ul>
                      <li>   
                        <div className="overlay"></div>        
                        <img src="img/cover-img1.png"/>    
                        <Link to={'/membershipgolfclub'} target="_blanck">         
                          <div className="details-inner">
                            <h3>Golf Club</h3>
                            <button>Read More</button>
                          </div>
                        </Link>
                      </li>
                      <li>   
                        <div className="overlay"></div>        
                        <img src="img/cover-img2.png"/>        
                        <Link to={'/membershipcountryrecreation'} target="_blanck">     
                          <div className="details-inner">
                            <h3>Country & Recreation</h3>
                            <button>Read More</button>
                          </div>
                        </Link>
                      </li>
                      <li>   
                        <div className="overlay"></div>        
                        <img src="img/cover-img3.png"/>
                        <Link to={'/membershipmarina'} target="_blanck">             
                          <div className="details-inner">
                            <h3>Marina</h3>
                            <button>Read More</button>
                          </div>
                        </Link>
                      </li>
                      <li>   
                        <div className="overlay"></div>        
                        <img src="img/cover-img4.png"/> 
                        <Link to={'/membershipschooldebenture'} target="_blanck">            
                          <div className="details-inner">                          
                              <h3>School Debenture</h3>
                              <button>Read More</button>
                          </div>
                        </Link>
                      </li>
                    </ul>
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
