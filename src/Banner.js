import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import React from 'react';
import './scss/Banner.scss';
import Categories from './Categories';

function Banner() {
    const slider = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 3000
    };
    return (
        <div className="banner">
            <div>
                <Categories/>
            </div>

            <div className="slider">
                <Slider {...slider}>
                <div className="banner-item">
                    <img className="banner-img" src="https://icms-image.slatic.net/images/ims-web/e8dd81f2-a10f-4987-8a55-97b7f342a906.jpg" alt="1"/>
                </div>
                <div className="banner-item">
                    <img className="banner-img" src="https://icms-image.slatic.net/images/ims-web/ddd148e4-eb83-49ec-8fb2-6d4686b48495.jpg" alt="1"/>
                </div>
                <div className="banner-item">
                    <img className="banner-img" src="https://icms-image.slatic.net/images/ims-web/aaa96f42-6ee8-47a3-abd1-fcd23be12321.jpg" alt="1"/>
                </div>
                <div className="banner-item">
                    <img className="banner-img" src="https://icms-image.slatic.net/images/ims-web/ddd148e4-eb83-49ec-8fb2-6d4686b48495.jpg" alt="1"/>
                </div>
                <div className="banner-item">
                    <img className="banner-img" src="https://icms-image.slatic.net/images/ims-web/b1664340-30f9-4aa2-9275-81f5e606eafe.jpg" alt="1"/>
                </div>
                <div className="banner-item">
                    <img className="banner-img" src="https://icms-image.slatic.net/images/ims-web/563775f3-4ef3-4e97-a414-f994527e0462.jpg" alt="1"/>
                </div>
                </Slider>
                
            </div>
        </div>
    )
}

export default Banner;
