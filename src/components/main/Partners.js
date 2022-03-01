import React from 'react'; 
import Slider from 'react-slick';

export default function Partners() {
  
  const settings = {  
      slidesToShow: 5,
      slidesToScroll: 1,
      dots: false,
      autoplay: true,
      autoplaySpeed: 5000,
      speed: 1000,
      arrows: false, 
      rows: 1, 
      responsive: [
      {
         breakpoint: 1501, 
         settings: {
          slidesToShow: 5, 
         }, 
      },  
      {
        breakpoint: 1199, 
        settings: {
         slidesToShow: 4, 
        }, 
      }, 
      {
        breakpoint: 991, 
        settings: {
         slidesToShow: 3, 
        }, 
      }, 
      {
        breakpoint: 767, 
        settings: {
         slidesToShow: 2, 
         arrows: false, 
        }, 
      }, 
      {
        breakpoint: 575, 
        settings: {
         slidesToShow: 2, 
         arrows: false, 
        }, 
      },
      {
        breakpoint: 479, 
        settings: {
         slidesToShow: 1, 
         arrows: false, 
        }, 
      },
     ]
  }
  
  const fakeData = [
    {
      imgUrl: "assets/img/partners/Mikrokredit1.png"
    },
    {
      imgUrl: "assets/img/partners/Miradab1png.png"
    },
    {
      imgUrl: "assets/img/partners/OFB.png"
    },
    {
      imgUrl: "assets/img/partners/Olmazor1.png"
    },
    {
      imgUrl: "assets/img/partners/Tash.png"
    },
    {
      imgUrl: "assets/img/partners/XalqBa.png"
    },
  ]

  return (
    <div className="brand-logo-slider-area mb-40">
    <div className="container">
    <div className="row align-items-center">
      <div className="col-lg-12">
        {/*=======  brand logo slider wrapper  =======*/}
        <div className="brand-logo-slider-wrapper brand-logo-slider-wrapper--double-border">
          <Slider {...settings}>
            {
              fakeData.map((value, index) => {
                return(
                  <div key={index} className="single-brand-logo">
                  <a href="#">
                    <img
                      style={{height: "38px", width: "164px", display: "block"}}
                      src={value.imgUrl}
                      className="img-fluid"
                      alt=""
                    />
                  </a>
                </div>
                )
              })
            }
          </Slider>
        </div>
        {/*=======  End of brand logo slider wrapper  =======*/}
      </div>
    </div>
  </div>
</div>

  )
}
