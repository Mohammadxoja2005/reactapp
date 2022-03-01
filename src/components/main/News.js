import React, {useEffect, useState} from 'react'

export default function News() { 
  const [prev, setPrev] = useState(true);  

  // useEffect(() => { 
  //   const banner = document.querySelector('.split-banner-area');  
    
  //   window.addEventListener('scroll', () => {
  //       if(window.scrollY > 200) {
  //         setPrev(true); 
  //       }
  //   })
  // }, [])  

  const fakeData = [
    {
      title: 'Hello', 
      description: 'jjj',
      price: 300,  
      imgUrl: 'assets/img/banners/banner6.webp', 

    }, 
    {
      title: 'Hello', 
      description: 'jjj',
      price: 300,  
      imgUrl: 'assets/img/banners/banner6.webp', 
    }
  ]

  return (      
    <>
     {prev ? <div className="split-banner-area mb-40 mb-sm-30 animate__animated">
      <div className="container">
       <div className="row row-5">
         {
           fakeData.map((value, index) => {
             return(
              <div key={index} className="col-md-6 mb-sm-10">
              {/*=======  single split banner  =======*/}   
              <div className="single-split-banner">
                <div className="single-split-banner__image">
                  <a href="shop-left-sidebar.html">
                    <img
                      width={550}
                      height={260}
                      src={value.imgUrl}
                      className="img-fluid"
                      alt=""
                    />
                    <div className="single-split-banner__image__content">
                      <p className="split-banner-title split-banner-title--light">
                        {value.title}
                      </p>
                      <p className="split-banner-title split-banner-title--bold">
                        {value.description}
                      </p>
                      <p className="split-banner-title split-banner-title--price">
                        from <span className="amount">${value.price}</span>
                      </p>
                    </div>
                  </a>
                </div>
              </div>
              {/*=======  End of single split banner  =======*/}
            </div>
             )
           })
         }
       </div>
     </div>
     </div> : null}
    </> 

  )
}
