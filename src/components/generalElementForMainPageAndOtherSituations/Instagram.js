import React from 'react'
import Slider from 'react-slick'

export default function Instagram() {  

   const settings = {
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: false,
        autoplay: false,
        autoplaySpeed: 5000,
        speed: 5000,
        arrows: false,
        rows: 2,   
        responsive:[  
        {
            breakpoint: 1501, 
            settings: {
                slidesToShow: 4, 
            }
        }, 
        {
            breakpoint: 1199, 
            settings: {
                slidesToShow: 4, 
            }
        },
        {
            breakpoint: 991, 
            settings: {
                slidesToShow: 3, 
            }
        }, 
        {
            breakpoint: 767, 
            settings: {
                slidesToShow: 4, 
            }
        },
        {
            breakpoint: 575, 
            settings: {
                slidesToShow: 4, 
            }
        }, 
        {
            breakpoint: 479, 
            settings: {
                slidesToShow: 2, 
            }
        },    
    ] 
   }

    const fakeData = [
        {
          url: "https://www.instagram.com/", 
          imgUrl: "assets/img/instagram/a1.webp"
        }, 
        {
         url: "https://www.instagram.com/", 
         imgUrl: "assets/img/instagram/a1.webp"
        }, 
        {
         url: "https://www.instagram.com/", 
         imgUrl: "assets/img/instagram/a1.webp"
        }, 
        {
         url: "https://www.instagram.com/", 
         imgUrl: "assets/img/instagram/a1.webp"
        }, 
        {
         url: "https://www.instagram.com/", 
         imgUrl: "assets/img/instagram/a1.webp"
       }, 
       {
        url: "https://www.instagram.com/", 
        imgUrl: "assets/img/instagram/a1.webp"
       }, 
       {
        url: "https://www.instagram.com/", 
        imgUrl: "assets/img/instagram/a1.webp"
       }, 
       {
        url: "https://www.instagram.com/", 
        imgUrl: "assets/img/instagram/a1.webp"
       }, 
    ]
  return (
    <Slider {...settings}>
    {
      fakeData.map((value, index) => {
        return(
          <div key={index} className="single-instagram-image">
          <a onClick={() => window.open(value.url, "_blank")} >
            <img
              width={320}
              height={320}
              src={value.url}
              className="img-fluid"
              alt=""
            />
          </a>
        </div>
        )
      })
    }
  </Slider>
  )
}
