import React, { Component } from "react"
import { Link } from "react-router-dom"
// import SimpleSlider from '../../../components/Slider'
import TopNavigation from '../../../components/topnavigetion'
import './style.scss'
class Home extends Component {  
  render() {    
    return (
      <div>
        <div id="wrapper" className="membership__ctyrtion---page page--wrapper">
          <TopNavigation />
          <section className="bewnner__section">
            <img className="benner_img" src="/img/membershipc_country_recreation.png"/>
          </section>
          <section className="body__section">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-12">
                  <div className="page--heading">
                    <h1>COUNTRY & RECREATION</h1>
                  </div>
                  <div className="country__name--section">
                    <ul>
                      <li className="active"><img src="img/hong_kong.png"/><span>HONG KONG</span></li>
                      <li><img src="img/china.png"/><span>CHINA</span></li>
                      <li><img src="img/macau.png"/><span>MACAU</span></li>
                    </ul>
                  </div>
                  <div className="table__section">
                    {/*<table class="table table-striped">
                      <thead>
                        <tr>
                          <th scope="col">Place</th>
                          <th scope="col">Club Name</th>
                          <th scope="col">Type</th>
                          <th scope="col">Club Price </th>
                          <th scope="col">2nd Hand Market Price</th>
                          <th scope="col">Rental</th>
                          <th scope="col">Monthly Fee</th>
                          <th scope="col">Transfer Fee</th>
                          <th scope="col">Re-nomination Fee</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td colsPan="9">
                            <table className="table table__inner">
                              <tr>
                              <td scope="row">Hong Kong </td>
                              <td>Hong Kong Golf Club</td>
                              <td>Corporate</td>
                              <td>Closed</td>
                              <td>$17,200,000 </td>
                              <td> N/A</td>
                              <td>$3,000</td>
                              <td>$3,440,000 </td>
                              <td>$20,000</td>
                            </tr>
                            <tr>
                              <td scope="row">Hong Kong </td>
                              <td>Hong Kong Golf Club</td>
                              <td>Corporate</td>
                              <td>Closed</td>
                              <td>$17,200,000 </td>
                              <td> N/A</td>
                              <td>$3,000</td>
                              <td>$3,440,000 </td>
                              <td>$20,000</td>
                            </tr> 
                            <tr>
                              <td scope="row">Hong Kong </td>
                              <td>Hong Kong Golf Club</td>
                              <td>Corporate</td>
                              <td>Closed</td>
                              <td>$17,200,000 </td>
                              <td> N/A</td>
                              <td>$3,000</td>
                              <td>$3,440,000 </td>
                              <td>$20,000</td>
                            </tr>
                            <tr>
                              <td scope="row">Hong Kong </td>
                              <td>Hong Kong Golf Club</td>
                              <td>Corporate</td>
                              <td>Closed</td>
                              <td>$17,200,000 </td>
                              <td> N/A</td>
                              <td>$3,000</td>
                              <td>$3,440,000 </td>
                              <td>$20,000</td>
                            </tr> 
                            <tr>
                              <td scope="row">Hong Kong </td>
                              <td>Hong Kong Golf Club</td>
                              <td>Corporate</td>
                              <td>Closed</td>
                              <td>$17,200,000 </td>
                              <td> N/A</td>
                              <td>$3,000</td>
                              <td>$3,440,000 </td>
                              <td>$20,000</td>
                            </tr>
                            </table>
                          </td>
                        </tr>                      
                      </tbody>
                    </table>*/}
                    <div className="table table-striped table-responsive">
                      <div className="thead">
                        <div className="thead__list">
                          <div className="list--inner">
                            <div className="thead__item">Place</div>
                            <div className="thead__item">Club Name</div>
                            <div className="thead__item">Type</div>
                            <div className="thead__item">Club Price</div>
                            <div className="thead__item">2nd Hand Market Price</div>
                            <div className="thead__item">Rental</div>
                            <div className="thead__item">Monthly Fee</div>
                            <div className="thead__item">Transfer Fee </div>
                            <div className="thead__item">Re-nomination Fee</div>
                          </div>
                        </div>
                      </div>
                      <div className="tbody">
                        <div className="tbody__list">
                          <div className="list--inner">
                            <div className="tbody__item">Hong Kong  </div>
                            <div className="tbody__item">Hong Kong Golf Club</div>
                            <div className="tbody__item">Corporate</div>
                            <div className="tbody__item">Closed</div>
                            <div className="tbody__item">$17,200,000 </div>
                            <div className="tbody__item">N/A</div>
                            <div className="tbody__item">$3,000</div>
                            <div className="tbody__item">$3,440,000</div>
                            <div className="tbody__item">$20,000</div>
                          </div>
                          <div className="list--inner">
                            <div className="tbody__item">Hong Kong  </div>
                              <div className="tbody__item">Clearwater Bay Golf & Country Club (GOLF) </div>
                              <div className="tbody__item">Individual</div>
                              <div className="tbody__item">$3,000,000</div>
                              <div className="tbody__item">$5,500,000</div>
                              <div className="tbody__item">N/A</div>
                              <div className="tbody__item">$2,080</div>
                              <div className="tbody__item">Variable</div>
                              <div className="tbody__item">N/A</div>
                          </div>
                          <div className="list--inner">
                            <div className="tbody__item">Hong Kong</div>
                            <div className="tbody__item">Clearwater Bay Golf & Country Club (GOLF) </div>
                            <div className="tbody__item">Corporate </div>
                            <div className="tbody__item">$6,750,000</div>
                            <div className="tbody__item">$6,750,000 </div>
                            <div className="tbody__item">N/A</div>
                            <div className="tbody__item">$2,080</div>
                            <div className="tbody__item">Variable</div>
                            <div className="tbody__item">$34,350</div>
                          </div>
                          <div className="list--inner">
                            <div className="tbody__item">Hong Kong</div>
                            <div className="tbody__item">Clearwater Bay Golf & Country Club (GOLF) </div>
                            <div className="tbody__item">Corporate(Shelf Co.) </div>
                            <div className="tbody__item">$6,750,000</div>
                            <div className="tbody__item">$8,200,000</div>
                            <div className="tbody__item">N/A</div>
                            <div className="tbody__item">$2,205</div>
                            <div className="tbody__item">N/A</div>
                            <div className="tbody__item">N/A</div>
                          </div>
                          <div className="list--inner">
                          <div className="tbody__item">Hong Kong</div>
                            <div className="tbody__item">Discovery Bay Golf Club </div>
                            <div className="tbody__item">Individual(Debentrure)</div>
                            <div className="tbody__item">$6,750,000</div>
                            <div className="tbody__item">$8,200,000</div>
                            <div className="tbody__item">N/A</div>
                            <div className="tbody__item">$2,205</div>
                            <div className="tbody__item">N/A</div>
                            <div className="tbody__item">N/A</div>
                          </div>
                          <div className="list--inner">
                            <div className="tbody__item">Hong Kong</div>
                            <div className="tbody__item">Hong Kong Golf Club  </div>
                            <div className="tbody__item">Corporate</div>
                            <div className="tbody__item">Closed</div>
                            <div className="tbody__item">$17,200,000</div>
                            <div className="tbody__item">N/A</div>
                            <div className="tbody__item">$3,000</div>
                            <div className="tbody__item">$3,440,000 </div>
                            <div className="tbody__item">$20,000</div>
                          </div>
                          <div className="list--inner">
                            <div className="tbody__item">Hong Kong</div>
                            <div className="tbody__item">Clearwater Bay Golf & Country Club (GOLF) </div>
                            <div className="tbody__item">Individual  </div>
                            <div className="tbody__item">$3,000,000</div>
                            <div className="tbody__item">$5,500,000</div>
                            <div className="tbody__item">N/A</div>
                            <div className="tbody__item">$2,080</div>
                            <div className="tbody__item">Variable</div>
                            <div className="tbody__item">N/A</div>
                          </div>
                          <div className="list--inner">
                            <div className="tbody__item">Hong Kong</div>
                            <div className="tbody__item">Clearwater Bay Golf & Country Club (GOLF) </div>
                            <div className="tbody__item">Corporate</div>
                            <div className="tbody__item">$6,750,000</div>
                            <div className="tbody__item">$6,750,000</div>
                            <div className="tbody__item">N/A</div>
                            <div className="tbody__item">$2,205</div>
                            <div className="tbody__item">Variable</div>
                            <div className="tbody__item">$34,350</div>
                          </div>
                          <div className="list--inner">
                            <div className="tbody__item">Hong Kong</div>
                            <div className="tbody__item">Clearwater Bay Golf & Country Club (GOLF) </div>
                            <div className="tbody__item">Corporate(Shelf Co.) </div>
                            <div className="tbody__item">$6,750,000</div>
                            <div className="tbody__item">$8,200,000</div>
                            <div className="tbody__item">N/A</div>
                            <div className="tbody__item">$2,205</div>
                            <div className="tbody__item">N/A</div>
                            <div className="tbody__item">N/A</div>
                          </div>
                          <div className="list--inner">
                            <div className="tbody__item">Hong Kong</div>
                            <div className="tbody__item">Discovery Bay Golf Club </div>
                            <div className="tbody__item">Individual(Debentrure) </div>
                            <div className="tbody__item">$6,750,000</div>
                            <div className="tbody__item">$8,200,000</div>
                            <div className="tbody__item">N/A</div>
                            <div className="tbody__item">$2,205</div>
                            <div className="tbody__item">N/A</div>
                            <div className="tbody__item">N/A</div>
                          </div>
                          <div className="list--inner">
                            <div className="tbody__item">Hong Kong</div>
                            <div className="tbody__item">Hong Kong Golf Club</div>
                            <div className="tbody__item">Corporate</div>
                            <div className="tbody__item">Closed</div>
                            <div className="tbody__item">$17,200,000</div>
                            <div className="tbody__item">N/A</div>
                            <div className="tbody__item">$3,000</div>
                            <div className="tbody__item">$3,440,000</div>
                            <div className="tbody__item">$20,000</div>
                          </div>
                          <div className="list--inner">
                            <div className="tbody__item">Hong Kong</div>
                            <div className="tbody__item"> Clearwater Bay Golf & Country Club (GOLF)  </div>
                            <div className="tbody__item">Individual </div>
                            <div className="tbody__item">$3,000,000 </div>
                            <div className="tbody__item">$5,500,000</div>
                            <div className="tbody__item">N/A</div>
                            <div className="tbody__item">$2,080</div>
                            <div className="tbody__item">Variable</div>
                            <div className="tbody__item">N/A</div>
                          </div>
                          <div className="list--inner">
                            <div className="tbody__item">Hong Kong</div>
                            <div className="tbody__item">Clearwater Bay Golf & Country Club (GOLF) </div>
                            <div className="tbody__item">Corporate</div>
                            <div className="tbody__item">$6,750,000</div>
                            <div className="tbody__item">$6,750,000 </div>
                            <div className="tbody__item">N/A</div>
                            <div className="tbody__item">$2,205</div>
                            <div className="tbody__item">Variable</div>
                            <div className="tbody__item">$34,350</div>
                          </div>
                          <div className="list--inner">
                            <div className="tbody__item">Hong Kong</div>
                            <div className="tbody__item"> Clearwater Bay Golf & Country Club (GOLF) </div>
                            <div className="tbody__item">Corporate(Shelf Co.)</div>
                            <div className="tbody__item">$6,750,000</div>
                            <div className="tbody__item">$8,200,000</div>
                            <div className="tbody__item">N/A</div>
                            <div className="tbody__item">$2,205</div>
                            <div className="tbody__item">N/A</div>
                            <div className="tbody__item">N/A</div>
                          </div>
                          <div className="list--inner">
                            <div className="tbody__item">Hong Kong</div>
                            <div className="tbody__item">Discovery Bay Golf Club </div>
                            <div className="tbody__item">Individual(Debentrure)</div>
                            <div className="tbody__item">$6,750,000 </div>
                            <div className="tbody__item">$8,200,000 </div>
                            <div className="tbody__item">N/A</div>
                            <div className="tbody__item">$2,205</div>
                            <div className="tbody__item">N/A</div>
                            <div className="tbody__item">N/A</div>
                          </div>
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
