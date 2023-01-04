import Slider from "react-slick";
import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from "./assets/images/slider/01.png"
import image2 from "./assets/images/slider/05.png"
import image3 from "./assets/images/slider/03.png"

export default function SliderC() {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade:true
      };

  return (
    <div>

        <section className="slider-section">
    <div className="first-slider">
        <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">  
            <div className="carousel-inner">
            <Slider {...settings}>
                <div className="carousel-item active bg-dark-gery">
                    <div className="row d-flex align-items-center">
                        <div className="col d-none d-lg-flex justify-content-center">
                            <div className="">
                                <h3 className="h3 fw-light">Has just arrived!</h3>
                                <h1 className="h1">Huge Summer Collection</h1>
                                <p className="pb-3">Swimwear, Tops, Shorts, Sunglasses &amp; much more...</p>
                                <div className=""> <a className="btn btn-dark btn-ecomm" href="">Shop Now <i className='bx bx-chevron-right'></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <img src={image1} className="img-fluid" alt="..." />
                        </div>
                    </div>
                </div>
                <div className="carousel-item bg-dark-gery">
                    <div className="row d-flex align-items-center">
                        <div className="col d-none d-lg-flex justify-content-center">
                            <div className="">
                                <h3 className="h3 fw-light">Hurry up! Limited time offer.</h3>
                                <h1 className="h1">Women Sportswear Sale</h1>
                                <p className="pb-3">Sneakers, Keds, Sweatshirts, Hoodies &amp; much more...</p>
                                <div className=""> <a className="btn btn-dark btn-ecomm" href="">Shop Now <i className='bx bx-chevron-right'></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <img src={image2} className="img-fluid" alt="..." />
                        </div>
                    </div>
                </div>
                <div className="carousel-item bg-dark-gery">
                    <div className="row d-flex align-items-center">
                        <div className="col d-none d-lg-flex justify-content-center">
                            <div className="">
                                <h3 className="h3 fw-light">Complete your look with</h3>
                                <h1 className="h1">New Men's Accessories</h1>
                                <p className="pb-3">Hats &amp; Caps, Sunglasses, Bags &amp; much more...</p>
                                <div className=""> <a className="btn btn-dark btn-ecomm" href="">Shop Now <i className='bx bx-chevron-right'></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <img src={image3} className="img-fluid" alt="..." />
                        </div>
                    </div>
                </div>
                </Slider>
            </div>
        </div>
    </div>
    </section></div>
  )
}

