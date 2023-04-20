import React from 'react'
import photo1 from '../img/FINAL DESIGN.jpg'
import photo3 from '../img/photo3.jpg'
import Choose from './Choose'
import Navbar from './Navbar'
import Footer from './Footer'

export default function LandingPage() {

    return (
        <>    
        <Navbar />
            <div className='wrapper'>

            <div className='topHeader'>
                <div className='name'>SHIVEEN DESIGN</div>
            </div>
            </div>

            <div className='descriptionSection'>
                <div className='description'>Interior Design Doesn't Have to Be Expensive or Complicated! It Should Be Smart & User Friendly</div>
            </div>

            <div className='img-slidder'>
                <div id="carouselExample" className="carousel slide">
                    <div className="carousel-inner">

                        <div className="carousel-item active">
                            <img src={photo1} className="d-block" alt="..." loading='lazy' />
                        </div>
                        <div className="carousel-item">
                            <img src={photo1} className="d-block" alt="..." loading='lazy' />
                        </div>
                        <div className="carousel-item">
                            <img src={photo3} className="d-block" alt="..." loading='lazy' />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            <section>
            </section>

        
        <Choose/>
        <Footer/>
        </>

    )
}
