import React, { Component } from "react"
import { Link } from "react-router-dom"
// import SimpleSlider from '../../../components/Slider'
import TopNavigation from '../../../components/topnavigetion'
import './style.scss'
class Home extends Component {  
  render() {    
    return (
      <div>
        <div id="wrapper" className="golf__club--page page--wrapper">
          <TopNavigation />
          <section className="bewnner__section">
            <img className="benner_img" src="/img/golf_benner.png"/>
          </section>
          <section className="body__section">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="page--heading">
                    <h1>GOLF CLUB</h1>
                  </div>
                  <div className="accordion__section">
                    <div className="accordion" id="accordionExample">
                      <div className="card">
                        <div className="card-header" id="headingOne">
                          <div className="d-flex align-items-center">
                            <div className="golf__profile-pic">
                              <img src="img/accordian_1.png"/>
                            </div>
                            <h2 className="mb-0">
                              <button className="btn btn-link" type="button">
                                Clearwater Bay Golf & Country Club
                              </button>
                            </h2>
                          </div>
                          <div className="accordion__right--icon" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <img className="accordion_plus" src="img/accordion_plus.png"/>
                            <img className="accordion_mins" src="img/accordion_plus.png"/>
                          </div>
                        </div>

                        <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                          <div className="card-body">
                            <div className="accordion__body--inner">
                              <p className="web--link">Website : www.cwbgolf.org</p>
                              <address>
                                <p>139 Tai Au Mun Road, Clearwater Bay ,</p>
                                <p>New Territories, Hong Kong</p>
                                <p>Tel : 27191595 Fax : 23580564 </p>
                              </address>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="card">
                        <div className="card-header" id="headingTwo">
                          <div className="d-flex align-items-center">
                            <div className="golf__profile-pic">
                              <img src="img/accordian_12.png"/>
                            </div>
                            <h2 className="mb-0">
                              <button className="btn btn-link collapsed" type="button">
                                Discovery Bay Golf Club
                              </button>
                            </h2>
                          </div>
                          <div className="accordion__right--icon" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            <img className="accordion_plus" src="img/accordion_plus.png"/>
                            <img className="accordion_mins" src="img/accordion_plus.png"/>
                          </div>
                        </div>
                        <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                          <div className="card-body">
                            <div className="accordion__body--inner">
                              <p className="web--link">Website : www.cwbgolf.org</p>
                              <address>
                                <p>139 Tai Au Mun Road, Clearwater Bay ,</p>
                                <p>New Territories, Hong Kong</p>
                                <p>Tel : 27191595 Fax : 23580564 </p>
                              </address>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="card">
                        <div className="card-header" id="headingThree">
                          <div className="d-flex align-items-center">
                            <div className="golf__profile-pic">
                              <img src="img/accordian_3.png"/>
                            </div>
                            <h2 className="mb-0">
                              <button className="btn btn-link collapsed" type="button">
                               Clearwater Bay Golf & Country Club
                              </button>
                            </h2>
                          </div>
                          <div className="accordion__right--icon" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            <img className="accordion_plus" src="img/accordion_plus.png"/>
                            <img className="accordion_mins" src="img/accordion_plus.png"/>
                          </div>
                        </div>
                        <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                          <div className="card-body">
                            <div className="accordion__body--inner">
                              <p className="web--link">Website : www.cwbgolf.org</p>
                              <address>
                                <p>139 Tai Au Mun Road, Clearwater Bay ,</p>
                                <p>New Territories, Hong Kong</p>
                                <p>Tel : 27191595 Fax : 23580564 </p>
                              </address>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="card">
                        <div className="card-header" id="headingFour">
                          <div className="d-flex align-items-center">
                            <div className="golf__profile-pic">
                              <img src="img/accordian_4.png"/>
                            </div>
                            <h2 className="mb-0">
                              <button className="btn btn-link collapsed" type="button">
                                Agile Golf & Country Club
                              </button>
                            </h2>
                          </div>
                          <div className="accordion__right--icon" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                            <img className="accordion_plus" src="img/accordion_plus.png"/>
                            <img className="accordion_mins" src="img/accordion_plus.png"/>
                          </div>
                        </div>
                        <div id="collapseFour" className="collapse" aria-labelledby="headingFour" data-parent="#accordionExample">
                          <div className="card-body">
                            <div className="accordion__body--inner">
                              <p className="web--link">Website : www.cwbgolf.org</p>
                              <address>
                                <p>139 Tai Au Mun Road, Clearwater Bay ,</p>
                                <p>New Territories, Hong Kong</p>
                                <p>Tel : 27191595 Fax : 23580564 </p>
                              </address>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="card">
                        <div className="card-header" id="headingFive">
                          <div className="d-flex align-items-center">
                            <div className="golf__profile-pic">
                              <img src="img/accordian_5.png"/>
                            </div>
                            <h2 className="mb-0">
                              <button className="btn btn-link collapsed" type="button">
                                Chung Shan Hot Spring Golf Club
                              </button>
                            </h2>
                          </div>
                          <div className="accordion__right--icon" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                            <img className="accordion_plus" src="img/accordion_plus.png"/>
                            <img className="accordion_mins" src="img/accordion_plus.png"/>
                          </div>
                        </div>
                        <div id="collapseFive" className="collapse" aria-labelledby="headingFive" data-parent="#accordionExample">
                          <div className="card-body">
                            <div className="accordion__body--inner">
                              <p className="web--link">Website : www.cwbgolf.org</p>
                              <address>
                                <p>139 Tai Au Mun Road, Clearwater Bay ,</p>
                                <p>New Territories, Hong Kong</p>
                                <p>Tel : 27191595 Fax : 23580564 </p>
                              </address>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="card">
                        <div className="card-header" id="headingSix">
                          <div className="d-flex align-items-center">
                            <div className="golf__profile-pic">
                              <img src="img/accordian_6.png"/>
                            </div>
                            <h2 className="mb-0">
                              <button className="btn btn-link collapsed" type="button">
                               Hillview Golf Club
                              </button>
                            </h2>
                          </div>
                          <div className="accordion__right--icon" data-toggle="collapse" data-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                            <img className="accordion_plus" src="img/accordion_plus.png"/>
                            <img className="accordion_mins" src="img/accordion_plus.png"/>
                          </div>
                        </div>
                        <div id="collapseSix" className="collapse" aria-labelledby="headingSix" data-parent="#accordionExample">
                          <div className="card-body">
                            <div className="accordion__body--inner">
                              <p className="web--link">Website : www.cwbgolf.org</p>
                              <address>
                                <p>139 Tai Au Mun Road, Clearwater Bay ,</p>
                                <p>New Territories, Hong Kong</p>
                                <p>Tel : 27191595 Fax : 23580564 </p>
                              </address>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="card">
                        <div className="card-header" id="headingSeven">
                          <div className="d-flex align-items-center">
                            <div className="golf__profile-pic">
                              <img src="img/accordian_1.png"/>
                            </div>
                            <h2 className="mb-0">
                              <button className="btn btn-link" type="button">
                                Clearwater Bay Golf & Country Club
                              </button>
                            </h2>
                          </div>
                          <div className="accordion__right--icon" data-toggle="collapse" data-target="#collapseSeven" aria-expanded="true" aria-controls="collapseSeven">
                            <img className="accordion_plus" src="img/accordion_plus.png"/>
                            <img className="accordion_mins" src="img/accordion_plus.png"/>
                          </div>
                        </div>

                        <div id="collapseSeven" className="collapse" aria-labelledby="headingSeven" data-parent="#accordionExample">
                          <div className="card-body">
                            <div className="accordion__body--inner">
                              <p className="web--link">Website : www.cwbgolf.org</p>
                              <address>
                                <p>139 Tai Au Mun Road, Clearwater Bay ,</p>
                                <p>New Territories, Hong Kong</p>
                                <p>Tel : 27191595 Fax : 23580564 </p>
                              </address>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="card">
                        <div className="card-header" id="headingEight">
                          <div className="d-flex align-items-center">
                            <div className="golf__profile-pic">
                              <img src="img/accordian_7.png"/>
                            </div>
                            <h2 className="mb-0">
                              <button className="btn btn-link collapsed" type="button">
                                Discovery Bay Golf Club
                              </button>
                            </h2>
                          </div>
                          <div className="accordion__right--icon" data-toggle="collapse" data-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
                            <img className="accordion_plus" src="img/accordion_plus.png"/>
                            <img className="accordion_mins" src="img/accordion_plus.png"/>
                          </div>
                        </div>
                        <div id="collapseEight" className="collapse" aria-labelledby="headingEight" data-parent="#accordionExample">
                          <div className="card-body">
                            <div className="accordion__body--inner">
                              <p className="web--link">Website : www.cwbgolf.org</p>
                              <address>
                                <p>139 Tai Au Mun Road, Clearwater Bay ,</p>
                                <p>New Territories, Hong Kong</p>
                                <p>Tel : 27191595 Fax : 23580564 </p>
                              </address>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="card">
                        <div className="card-header" id="headingNine">
                          <div className="d-flex align-items-center">
                            <div className="golf__profile-pic">
                              <img src="img/accordian_8.png"/>
                            </div>
                            <h2 className="mb-0">
                              <button className="btn btn-link collapsed" type="button">
                                Clearwater Bay Golf & Country Club
                              </button>
                            </h2>
                          </div>
                          <div className="accordion__right--icon" data-toggle="collapse" data-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
                            <img className="accordion_plus" src="img/accordion_plus.png"/>
                            <img className="accordion_mins" src="img/accordion_plus.png"/>
                          </div>
                        </div>
                        <div id="collapseNine" className="collapse" aria-labelledby="headingNine" data-parent="#accordionExample">
                          <div className="card-body">
                            <div className="accordion__body--inner">
                              <p className="web--link">Website : www.cwbgolf.org</p>
                              <address>
                                <p>139 Tai Au Mun Road, Clearwater Bay ,</p>
                                <p>New Territories, Hong Kong</p>
                                <p>Tel : 27191595 Fax : 23580564 </p>
                              </address>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="card">
                        <div className="card-header" id="headingTen">
                          <div className="d-flex align-items-center">
                            <div className="golf__profile-pic">
                              <img src="img/accordian_9.png"/>
                            </div>
                            <h2 className="mb-0">
                              <button className="btn btn-link collapsed" type="button">
                               Agile Golf & Country Club
                              </button>
                            </h2>
                          </div>
                          <div className="accordion__right--icon" data-toggle="collapse" data-target="#collapseTen" aria-expanded="false" aria-controls="collapseTen">
                            <img className="accordion_plus" src="img/accordion_plus.png"/>
                            <img className="accordion_mins" src="img/accordion_plus.png"/>
                          </div>
                        </div>
                        <div id="collapseTen" className="collapse" aria-labelledby="headingTen" data-parent="#accordionExample">
                          <div className="card-body">
                            <div className="accordion__body--inner">
                              <p className="web--link">Website : www.cwbgolf.org</p>
                              <address>
                                <p>139 Tai Au Mun Road, Clearwater Bay ,</p>
                                <p>New Territories, Hong Kong</p>
                                <p>Tel : 27191595 Fax : 23580564 </p>
                              </address>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="card">
                        <div className="card-header" id="headingEleven">
                          <div className="d-flex align-items-center">
                            <div className="golf__profile-pic">
                              <img src="img/accordian_10.png"/>
                            </div>
                            <h2 className="mb-0">
                              <button className="btn btn-link collapsed" type="button">
                                Chung Shan Hot Spring Golf Club
                              </button>
                            </h2>
                          </div>
                          <div className="accordion__right--icon" data-toggle="collapse" data-target="#collapseEleven" aria-expanded="false" aria-controls="collapseEleven">
                            <img className="accordion_plus" src="img/accordion_plus.png"/>
                            <img className="accordion_mins" src="img/accordion_plus.png"/>
                          </div>
                        </div>
                        <div id="collapseEleven" className="collapse" aria-labelledby="headingEleven" data-parent="#accordionExample">
                          <div className="card-body">
                            <div className="accordion__body--inner">
                              <p className="web--link">Website : www.cwbgolf.org</p>
                              <address>
                                <p>139 Tai Au Mun Road, Clearwater Bay ,</p>
                                <p>New Territories, Hong Kong</p>
                                <p>Tel : 27191595 Fax : 23580564 </p>
                              </address>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="card">
                        <div className="card-header" id="headingTwelve">
                          <div className="d-flex align-items-center">
                            <div className="golf__profile-pic">
                              <img src="img/accordian_11.png"/>
                            </div>
                            <h2 className="mb-0">
                              <button className="btn btn-link collapsed" type="button">
                                Hillview Golf Club
                              </button>
                            </h2>
                          </div>
                          <div className="accordion__right--icon" data-toggle="collapse" data-target="#collapseTwelve" aria-expanded="false" aria-controls="collapseTwelve">
                            <img className="accordion_plus" src="img/accordion_plus.png"/>
                            <img className="accordion_mins" src="img/accordion_plus.png"/>
                          </div>
                        </div>
                        <div id="collapseTwelve" className="collapse" aria-labelledby="headingTwelve" data-parent="#accordionExample">
                          <div className="card-body">
                            <div className="accordion__body--inner">
                              <p className="web--link">Website : www.cwbgolf.org</p>
                              <address>
                                <p>139 Tai Au Mun Road, Clearwater Bay ,</p>
                                <p>New Territories, Hong Kong</p>
                                <p>Tel : 27191595 Fax : 23580564 </p>
                              </address>
                            </div>
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
