import React, { Fragment } from 'react'
import sd from '../../assets/img/sd.png'
import smp from '../../assets/img/smp.png'
import sma from '../../assets/img/sma.png'
import clg from '../../assets/img/clg.png'

function Education() {
    return (
        
        <Fragment>
            <div id="2" className="container-xl py-5">

                <div className="row justify-content-sm-around">

                    <h2 className="text-center mb-3">Education</h2>

                    <div className="col-6 col-md-3 mb-3 mb-lg-3 px-sm-5 px-md-3">
         
                        <div className="card">

                            <img src={sd} className="card-img-top" alt=""/>
                            <div className="card-body text-center">
                                <h5 className="card-title">Elementary</h5>
                                <p className="card-text">SDN 2 Sumbawa Besar</p>
                            </div>

                        </div>

                    </div>

                    <div className="col-6 col-md-3 mb-3 mb-lg-3 px-sm-5 px-md-3">
                    
                        <div className="card">

                            <img src={smp} className="card-img-top" alt=""/>
                            <div className="card-body text-center">
                                <h5 className="card-title">Junior High</h5>
                                <p className="card-text">SMPN 1 Sumbawa Besar</p>
                            </div>

                        </div>
                            
                    </div>

                    <div className="col-6  col-md-3 mb-3 mb-lg-3 px-sm-5 px-md-3">
                    
                        <div className="card">

                            <img src={sma} className="card-img-top" alt=""/>
                            <div className="card-body text-center">
                                <h5 className="card-title">Senior High</h5>
                                <p className="card-text">SMAN 1 Sumbawa Besar</p>
                            </div>

                        </div>
                    
                    </div>

                    <div className="col-6  col-md-3 mb-3 mb-lg-3 px-sm-5 px-md-3">
                    
                        <div className="card">

                            <img src={clg} className="card-img-top" alt=""/>
                            <div className="card-body text-center">
                                <h5 className="card-title">Graduate</h5>
                                <p className="card-text">Universitas Brawijaya</p>
                            </div>
                            
                        </div>
                    
                    </div>
        
                    <div className="container">
                        <div className="border-bottom border-4 rounded-pill border-secondary"></div>
                    </div>

                </div>

            </div>
        </Fragment>
    )
}

export default Education
