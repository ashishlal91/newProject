import React, { Component } from "react"
import { Link } from "react-router-dom"
// import SimpleSlider from '../../../components/Slider'
import TopNavigation from '../../../components/topnavigetion'
import './style.scss'
class Home extends Component {  
  render() {    
    return (
      <div>
        <div id="wrapper" className="monthlyspecial---page page--wrapper">
          <TopNavigation />
          <section className="bewnner__section">
            <img className="benner_img" src="/img/monthlyspecial.png"/>
          </section>
          <section className="body__section">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-12">
                  <div className="page--heading">
                    <h1>MONTHLY SPECIAL</h1>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">Aberdeen Marina Club</h5>
                      <p className="card-text">Type:  Corporate (1) 2nd Hand Market Price:  $3,700,000 Rental: N/A</p>
                      {/*<a href="#" className="btn btn-primary">Go somewhere</a>*/}
                    </div>
                    <img className="card-img-top" src="img/blog_1.png" alt="Card image cap"/>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">Hong Kong Cricket Club</h5>
                      <p className="card-text">Type:  Corporate (1) 2nd Hand Market Price:  $3,700,000 Rental: N/A</p>
                      {/*<a href="#" className="btn btn-primary">Go somewhere</a>*/}
                    </div>
                    <img className="card-img-top" src="img/blog_2.png" alt="Card image cap"/>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">Hong Kong Football Club</h5>
                      <p className="card-text">Type:  Corporate (1) 2nd Hand Market Price:  $3,700,000 Rental: N/A</p>
                      {/*<a href="#" className="btn btn-primary">Go somewhere</a>*/}
                    </div>
                    <img className="card-img-top" src="img/blog_3.png" alt="Card image cap"/>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">Aberdeen Marina Club</h5>
                      <p className="card-text">Type:  Corporate (1) 2nd Hand Market Price:  $3,700,000 Rental: N/A</p>
                      {/*<a href="#" className="btn btn-primary">Go somewhere</a>*/}
                    </div>
                    <img className="card-img-top" src="img/blog_1.png" alt="Card image cap"/>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">Hong Kong Cricket Club</h5>
                      <p className="card-text">Type:  Corporate (1) 2nd Hand Market Price:  $3,700,000 Rental: N/A</p>
                      {/*<a href="#" className="btn btn-primary">Go somewhere</a>*/}
                    </div>
                    <img className="card-img-top" src="img/blog_2.png" alt="Card image cap"/>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">Hong Kong Football Club</h5>
                      <p className="card-text">Type:  Corporate (1) 2nd Hand Market Price:  $3,700,000 Rental: N/A</p>
                      {/*<a href="#" className="btn btn-primary">Go somewhere</a>*/}
                    </div>
                    <img className="card-img-top" src="img/blog_3.png" alt="Card image cap"/>
                  </div>
                </div>
                 
                
                                 
              </div>
              <div className="row">
                <div className="col-md-12 text-center">
                  <p className="blog-text">*The above prices are just for reference only, please contact us for further details.</p>
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
