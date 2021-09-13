import React from 'react'
import './swiper.css'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import image from '../../Images/landing2r.png'
import image1 from '../../Images/about.svg'
import image2 from '../../Images/about2.svg'
import image3 from '../../Images/search.svg'

const Swipers = () => {
  let settings={
    className: "center",
    centerPadding: "60px",
    dots: true,
    infinite: true,
    slidesToShow: 1,
    SlidesToScroll: 1,
    centerMode: true,
    speed: 500,

  }
  return (
    <div id="container">
      <h2 className="review-section">What Job Seekers Say About Us</h2>
      <Slider className="carousel" {...settings}>
          <div className="card">
                <h3>Client 1</h3>
                  <div className="card-image">
                    <img id="card-img" src={image}/>
                  </div>
                  <div className="card-comment">
                    <p>"Bammy offers a powerful suite of tools that every marketing
                      team must have... And if you get stuck, their support team will 
                      help out."</p>
                  </div>
                  <div className="card-name">
                    <h3 className="client-name"> Akinyemi Bamidele </h3>
                    <p className="client-position"><i>Client</i></p>
                  </div>
          </div>

          <div className="card">
                <h3>Client 2</h3>
                  <div className="card-image">
                    <img id="card-img" src={image1}/>
                  </div>
                  <div className="card-comment">
                    <p>"Tosin offers a powerful suite of tools that every marketing
                      team must have. And if you get stuck, their support team will 
                      hwlp out."</p>
                  </div>
                  <div className="card-name">
                    <h3 className="client-name"> Akinyemi Bamidele </h3>
                    <p className="client-position"><i>Client</i></p>
                  </div>
          </div>

          <div className="card">
                <h3>Client 3</h3>
                  <div className="card-image">
                    <img id="card-img" src={image2}/>
                  </div>
                  <div className="card-comment">
                    <p>"Seun offers a powerful suite of tools that every marketing
                      team must have. And if you get stuck, their support team will 
                      hwlp out."</p>
                  </div>
                  <div className="card-name">
                    <h3 className="client-name"> Akinyemi Bamidele </h3>
                    <p className="client-position"><i>Client</i></p>
                  </div>
          </div>

          <div className="card">
                <h3>Client 4</h3>
                  <div className="card-image">
                    <img id="card-img" src={image3}/>
                  </div>
                  <div className="card-comment">
                    <p>"Jom offers a powerful suite of tools that every marketing
                      team must have. And if you get stuck, their support team will 
                      hwlp out."</p>
                  </div>
                  <div className="card-name">
                    <h3 className="client-name"> Akinyemi Bamidele </h3>
                    <p className="client-position"><i>Client</i></p>
                  </div>
          </div>
          
            
      </Slider>
    </div>
  )
}

export default Swipers
