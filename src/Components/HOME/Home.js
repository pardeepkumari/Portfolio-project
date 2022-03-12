import React from 'react'
import { NavLink } from 'react-bootstrap';
import About from '../ABOUT/About';
import Contact from '../CONTACT/Contact';

import './home.css';

const Home = () => {
    return (
        <div>
            <div className='Hero'>
            <div className="card bg-dark text-white border-0">
                <img src="/images/resume1.jpg" class="card-img" alt="background" height="550px" />
                <div className="card-img-overlay">
                    <div className='container'>
                    <h5 className="card-title display-3 fw-folder mb-1">PORTFOLIO</h5>
                    </div>
                    
                    {/* <p className="card-text lead fs-2">
                        CHECK OUT ALL THE TRENDS.
                    </p> */}
                    
                </div>
                </div>
                

                <section className="container my-3 py-4">
                    <div className="row">
                    <div className="col-12 text-center py-4">
                        <h1>Profile Information</h1>
                        <hr />
                        </div>
                        <div className="col-md-5 mt-5 mb-6">
                            <h1 className="display-5"> I'm WEB DEVELOPER <br/>
                                 Pardeep Kumari
                            </h1>
                            <p className="lead mb-4">
                            Skilled at developing reports, analyzing data,
                            and identifying solutions. Strong ability to
                            handle complex projects. Innovative, creative,
                            and willing to contribute ideas and
                            learn new things.

                            </p>
                            <NavLink className="btn btn-outline-primary me-4" to="/Contact_page"
                            role="button">Get Started</NavLink>
                              <NavLink className="btn btn-outline-primary" to="/about_page"
                            role="button">More About me</NavLink>

                        </div>
                        <div className="col-md-7 my-5 d-flex justify-content-center">
                            <img src="/images/pf4.jpg" alt="Pardeep Kumari"
                            height="300px" width="300px"/>
                        </div>

                    </div>

                </section>
                <About/>
                <Contact/>
            </div>
            {/* <Product/> */}
        </div>
    )
}
export default Home;
