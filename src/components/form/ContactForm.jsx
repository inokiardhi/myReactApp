import React, { Fragment } from 'react'

function ContactForm() {
    return (
        <Fragment>
            
            <div id="4" className="pt-5" style={{backgroundColor: 'azure'}}>

                <div className="container-xl">
                
                    <div className="row pt-5">          
                    
                        <div className="col-6">    
                                    
                            <div className="ftr-left-content" style={{color: 'rgb(133, 133, 133)'}}>
                                <p>Contact us and we'll get back to you within 24 hours.</p>
                                <p><span className="fa fa-map-marker me-1"></span>Sumbawa Besar, Nusa Tenggara Barat</p>
                                <p><span className="fa fa-instagram me-1"></span><a href={'https://www.instagram.com/inokiardhi'} target='_blank' style={{textDecoration: 'none', color: 'rgb(133, 133, 133)'}}>@inokiardhi</a></p>
                                <p><span className="fa fa-envelope me-1"></span>ardhiinoki@gmail.com</p>
                            </div>

                        </div>

                        <div className="col-6">
                        
                            <div className="ftr-right-content">
                                <input className="form-control mb-2" id="name" name="name" placeholder="Name" type="text" required/>
                                <input className="form-control mb-2" id="email" name="email" placeholder="Email" type="email" required/>
                                <textarea className="form-control mb-2" id="comments" name="comments" placeholder="Comment" rows="4"></textarea><br/>
                                <button className="btn btn-outline-secondary mb-4 w-100" type="submit">Send</button>
                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </Fragment>
    )
}

export default ContactForm
