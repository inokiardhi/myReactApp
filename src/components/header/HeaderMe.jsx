import React, { Fragment } from 'react'
import image from '../../assets/img/image.jpg'
import image2 from '../../assets/img/image2.jpg'
import image3 from '../../assets/img/image3.jpg'

function HeaderMe() {
    return (
        <Fragment>
            <header id="1" className="py-3" style={{backgroundColor: 'rgb(247, 247, 247)'}}>

                <div className="container-xl mb-5">

                    <div className="row justify-content-md-around justify-content-sm-center ">

                        <div className="col-md-4 pt-4 text-md-start text-sm-center my-auto">
                            <h1>Hello!</h1>
                            <h3>My Name is Inoki Khalifatul Ardhi,</h3>
                            <p>A simple person that loves to learn a new things. Was born in 1997 at Sumbawa, October, 7th. love sport and art.</p>
                            <button type="button"  onclick="subscribe()" href="#" className="btn btn-dark">Start to Subscribe</button>
                        </div>
                    

                        <div className="col-md-8 card w-50 mt-5 mb-5">

                            <div id="carouselExampleIndicators" className="carousel slide " data-bs-ride="carousel">

                                <div className="carousel-indicators">
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                </div>

                                <div className="carousel-inner py-3">

                                    <div className="carousel-item active">
                                        <img src={image} className="d-block w-100" alt="..."/>
                                    </div>

                                    <div className="carousel-item">
                                        <img src={image2} className="d-block w-100" alt="..."/>
                                    </div>

                                    <div className="carousel-item">
                                        <img src={image3} className="d-block w-100" alt="..."/>
                                    </div>

                                </div>
                                
                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                
                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>

                            </div>   

                        </div>
                        
                    </div>
                    
                </div>
            </header>
        </Fragment>
    )
}

export default HeaderMe
