import React from 'react';
import './About.css';


const About = () => {
  return (
    <div>
      <section className="cpntainer">
        <div className="myimg">
          <div className="row">
            <div className="col-12 text-center py-4">
              <h1>About</h1>
              <hr />
            </div>
          </div>
        </div>
        <div className=" container my-5">
          <div className="row">
            <div className="col-md-6 mx-auto">
              <img src="/images/pf3.jpg" alt="Pardeep Kumari"
                height="300px" width="300px" className="image" />
            </div>
            <div className="col-md-6 my-5">
              <h1 className="display-2 mb-4">
                Pardeep Kumari
              </h1>
              <p className="lead ">
                A profile summary is like a headline to the rest of the resume.
                It is not only for experienced individuals but also for freshers.
                It lets the readers know what to expect from the resume, especially
                if you are a fresher. While some include the profile summary in the
                cover letter, many include it in the resume. For most of us, profile
                summary feature in our resumes but no matter where we place it, a summary
                is essential as it summarizes in a line what the resume is all about.
                </p>

              <div>
                <div className="progress my-4">
                  <div className="progress-bar bg-success" 
                  role="progressbar" style={{width : "80%"}} 
                  aria-valuenow="25" aria-valuemin="0" 
                  aria-valuemax="100">HTML/HTML5</div>
                  <span className="pro">80%</span>
                </div>
                <div className="progress my-4">
                  <div className="progress-bar bg-info" 
                  role="progressbar" style={{width : "70%"}} 
                  aria-valuenow="50" aria-valuemin="0" 
                  aria-valuemax="100">CSS</div>
                  <span className="pro">70%</span>
                </div>
                <div className="progress my-4">
                  <div className="progress-bar bg-warning" 
                  role="progressbar" style={{width : "60%"}} 
                  aria-valuenow="75" aria-valuemin="0" 
                  aria-valuemax="100">Javascript</div>
                  <span className="pro">60%</span>
                </div>
                <div className="progress my-4">
                  <div className="progress-bar bg-danger" 
                  role="progressbar" style={{width : "50%"}} 
                  aria-valuenow="100" aria-valuemin="0" 
                  aria-valuemax="100">React</div>
                  <span className="pro">50%</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  )
}

export default About