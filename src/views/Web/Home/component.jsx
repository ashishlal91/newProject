import React, { Component } from "react"
import { Link } from "react-router-dom"
// import SimpleSlider from '../../../components/Slider'
import TopNavigation from '../../../components/topnavigetion'
import Slider from 'react-slick';
import './style.scss'
class Home extends Component {
  componentWillMount = () => {
    this.props.fetchMenus()
  }
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div>
        <div id="wrapper" className="home__page">
          <TopNavigation />
          <section className="hero__slider--section">
            {/*<SimpleSlider></SimpleSlider>*/}
            <Slider {...settings}>
              <div>
                <div className="slider__item" style={{  backgroundImage: "url(" + "/img/home_benner.png" + ")"}}>
                  <h1>King Peak Membership Services Ltd</h1>
                  <p>Provide comprehensive range of value-added services</p>
                </div>
              </div>
              <div>
                <div className="slider__item" style={{  backgroundImage: "url(" + "/img/home_benner.png" + ")"}}>
                  <h1>King Peak Membership Services Ltd</h1>
                  <p>Provide comprehensive range of value-added services</p>
                </div>
              </div>
              <div>
                <div className="slider__item" style={{  backgroundImage: "url(" + "/img/home_benner.png" + ")"}}>
                  <h1>King Peak Membership Services Ltd</h1>
                  <p>Provide comprehensive range of value-added services</p>
                </div>
              </div>
              <div>
                <div className="slider__item" style={{  backgroundImage: "url(" + "/img/home_benner.png" + ")"}}>
                  <h1>King Peak Membership Services Ltd</h1>
                  <p>Provide comprehensive range of value-added services</p>
                </div>
              </div>
              <div>
                <div className="slider__item" style={{  backgroundImage: "url(" + "/img/home_benner.png" + ")"}}>
                  <h1>King Peak Membership Services Ltd</h1>
                  <p>Provide comprehensive range of value-added services</p>
                </div>
              </div>
              <div>
                <div className="slider__item" style={{  backgroundImage: "url(" + "/img/home_benner.png" + ")"}}>
                  <h1>King Peak Membership Services Ltd</h1>
                  <p>Provide comprehensive range of value-added services</p>
                </div>
              </div>
            </Slider>
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
