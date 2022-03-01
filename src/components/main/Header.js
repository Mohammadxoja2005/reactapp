import React from 'react'
import Slider from 'react-slick';  

export default function Header() {  
  
    const settings = {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 1000,
        fade: true, 
        rows: 1, 
         
        responsive:[
            {
				breakpoint: 1501,
				settings: {
					slidesToShow:1
				}
			},
			{
				breakpoint: 991,
				settings: {
					slidesToShow:1
				}
			}, 
            {
				breakpoint: 767,
				settings: {
					slidesToShow:1
				}
			}, 
            {
				breakpoint: 575,
				settings: {
					slidesToShow:1
				}
			}, 
            {
				breakpoint: 479,
				settings: {
					slidesToShow:1
				}
			},    
        ]
    }; 
    
    const fakeData = [
      {
        mainTitle: "hello",
        announcement: "gogogogo", 
        brandName: "furniture",  
        imgUrl: "assets/img/header/m.jpg"
      }, 
      {
        mainTitle: "",
        announcement: "", 
        brandName: "",  
        imgUrl: "assets/img/header/m.jpg"
      },  
      {
        mainTitle: "",
        announcement: "", 
        brandName: "",  
        imgUrl: "assets/img/header/m.jpg"
      }, 
    ]

  return (
  <div className="hero-slider-area mb-40">

    <div className="hero-slider-wrapper">  
    <Slider {...settings}>
       {fakeData.map((value, index) => {
         return(
          <div key={index} className="single-slider-item">
          <div className="hero-slider-item-wrapper hero-slider-item-wrapper--fullwidth hero-slider-item-wrapper--fullwidth--maxheight hero-slider-bg-7" style={{backgroundImage: `url(${value.imgUrl})`}}>
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="hero-slider-content">
                    <p className="slider-title slider-title--small">
                      {value.mainTitle} 
                    </p>
                    <p className="slider-title slider-title--big-bold">
                      {value.announcement}
                    </p>
                    <p className="slider-title slider-title--big-light">
                      {value.brandName}
                    </p>
                    <a
                      className="theme-button hero-slider-button"
                      href="shop-left-sidebar.html"
                    >
                      Shopping Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
         )
      }) 
      }
        
    </Slider>
    </div>
  </div>
  )
}
