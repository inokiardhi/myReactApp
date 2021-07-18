import React, { Fragment } from 'react';


function NavbarMe() {
  return (
    <Fragment>
      <div className="navbar navbar-expand-md navbar-light sticky-top" style={{backgroundColor: '#e3f2fd'}}>
          <div className= "container-xl" >
              <a className="navbar-brand" href="/">Inoki</a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                      <a className="nav-link" href="#1">Hello</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#2">Education</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#3">Experience</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#4">Info</a>
                    </li>
                    <li className="nav-item ">
                      <button type="button" className="btn btn-outline-dark my-2 my-sm-0">Subscribe</button>
                    </li>
                </ul>
                
            </div>
          </div>

      </div>
    </Fragment>
    
  );
}

export default NavbarMe
