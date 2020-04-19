import React, { Component, Fragment } from "react";
import logo from "../../assets/logo.png";
import "../CSS/adv.css";

class AdminHome extends Component {
  render() {
    return (
      <Fragment>
        {/* {/* End of Navbar */}

        {/* <section id="sectionF1">
          <div className="row container-fluid m-5 ">
            <div className="col-md-3">
              <div className="card p-3">
                <div class="card text-center">
                  <img class="card-img-top" src={logo} alt="" /> 
                  <i className="fa fa-book fa-5x "></i>
                  <div class="card-body">
                    <h4 class="card-title">Products</h4>
                    <p class="card-text">lists</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>  */}

        <section class="counts section-bg mt-5">
          <div class="container mt-5">
            <div class="row">
            
              <div
                class="col-lg-12 col-md-6 text-center animated fadeInUp wow animated"
                data-aos="fade-up"
                data-aos-delay="600"
              >
                <div >
                <div class="row">
                <div class="col-xl-6 col-lg-12 mb-50">
                  <h2>Search List</h2>
                  </div>
                        <div class="col-xl-6 col-lg-12 mb-50">
                <form class="form-inline my-2 my-lg-0">
                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
              </form>
              </div>
              </div>
                </div>
              </div>
              
            </div>
          </div>
        </section>
        <section class="counts section-bg mt-5 ">
        <div className=" container-fluid mt-5" id="product">
   

        <div className="container">
          <section className="contact" id="contact">
         
            <div className="row">
              <div className="col-lg-12 wow fadeInLeft animated">
              
                <div className="atop">
                  <h1>Videos</h1>
                  <div class="row justify-content-center">

                    <div class="col-lg-4 ">
                                      <div class="cardvideo">
                                <div class="single-room text-center" data-aos="fade-up" data-aos-duration="1200">
                                    <div class="room-thumb">
                                       
                                            <div class="video">
                                              <div class="video__frame">
                                                <iframe src="https://www.youtube.com/embed/riD0RlWC24g" width="500" height="213" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
                                              </div>
                                            </div>
                                       
                        
                                    </div>
                                    
                                    </div>
                            </div>
                                </div>
                                <div class="col-lg-4 ">
                                      <div class="cardvideo">
                                <div class="single-room text-center" data-aos="fade-up" data-aos-duration="1200">
                                    <div class="room-thumb">
                                       
                                            <div class="video">
                                              <div class="video__frame">
                                                <iframe src="https://www.youtube.com/embed/riD0RlWC24g" width="500" height="213" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
                                              </div>
                                            </div>
                                       
                        
                                    </div>
                                    
                                    </div>
                            </div>
                                </div>
                                <div class="col-lg-4 ">
                                      <div class="cardvideo">
                                <div class="single-room text-center" data-aos="fade-up" data-aos-duration="1200">
                                    <div class="room-thumb">
                                       
                                            <div class="video">
                                              <div class="video__frame">
                                                <iframe src="https://www.youtube.com/embed/riD0RlWC24g" width="500" height="213" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
                                              </div>
                                            </div>
                                       
                        
                                    </div>
                                    
                                    </div>
                            </div>
                                </div>
                                
                            </div>



                            <div class="row justify-content-center mtop">

<div class="col-lg-4 ">
                  <div class="cardvideo">
            <div class="single-room text-center" data-aos="fade-up" data-aos-duration="1200">
                <div class="room-thumb">
                   
                        <div class="video">
                          <div class="video__frame">
                            <iframe src="https://www.youtube.com/embed/riD0RlWC24g" width="500" height="213" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
                          </div>
                        </div>
                   
    
                </div>
                
                </div>
        </div>
            </div>
            <div class="col-lg-4 ">
                  <div class="cardvideo">
            <div class="single-room text-center" data-aos="fade-up" data-aos-duration="1200">
                <div class="room-thumb">
                   
                        <div class="video">
                          <div class="video__frame">
                            <iframe src="https://www.youtube.com/embed/riD0RlWC24g" width="500" height="213" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
                          </div>
                        </div>
                   
    
                </div>
                
                </div>
        </div>
            </div>
            <div class="col-lg-4 ">
                  <div class="cardvideo">
            <div class="single-room text-center" data-aos="fade-up" data-aos-duration="1200">
                <div class="room-thumb">
                   
                        <div class="video">
                          <div class="video__frame">
                            <iframe src="https://www.youtube.com/embed/riD0RlWC24g" width="500" height="213" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
                          </div>
                        </div>
                   
    
                </div>
                
                </div>
        </div>
            </div>
            
        </div>



        <div class="row justify-content-center mtop">

<div class="col-lg-4 ">
                  <div class="cardvideo">
            <div class="single-room text-center" data-aos="fade-up" data-aos-duration="1200">
                <div class="room-thumb">
                   
                        <div class="video">
                          <div class="video__frame">
                            <iframe src="https://www.youtube.com/embed/riD0RlWC24g" width="500" height="213" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
                          </div>
                        </div>
                   
    
                </div>
                
                </div>
        </div>
            </div>
            <div class="col-lg-4 ">
                  <div class="cardvideo">
            <div class="single-room text-center" data-aos="fade-up" data-aos-duration="1200">
                <div class="room-thumb">
                   
                        <div class="video">
                          <div class="video__frame">
                            <iframe src="https://www.youtube.com/embed/riD0RlWC24g" width="500" height="213" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
                          </div>
                        </div>
                   
    
                </div>
                
                </div>
        </div>
            </div>
            <div class="col-lg-4 ">
                  <div class="cardvideo">
            <div class="single-room text-center" data-aos="fade-up" data-aos-duration="1200">
                <div class="room-thumb">
                   
                        <div class="video">
                          <div class="video__frame">
                            <iframe src="https://www.youtube.com/embed/riD0RlWC24g" width="500" height="213" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
                          </div>
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
        </div>
    
          <div
            className="modal show product-view"
            id="quickModel"
            role="dialog"
          >
            <div className="modal-dialog">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal">
                  &times;
                </button>
              </div>
              <div className="modal-dialog product-big-img">
                <img
                  src="https://recipes.timesofindia.com/recipes/homemade-chocolate/photo/54407737.cms"
                  className=" mt-2"
                  alt=""
                />
              </div>
         
            </div>
          </div>
        </div>
        </section>


      </Fragment>
    );
  }
}

export default AdminHome;
