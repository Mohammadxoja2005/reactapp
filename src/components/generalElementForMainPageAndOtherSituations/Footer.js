import React from 'react'
import Slider from 'react-slick'; 
import {Link} from 'react-router-dom';
import Instagram from './Instagram';

export default function Footer() {
  return ( 
 <div className="footer-area">
   <div className="container">
     <div className="row mb-40">
       <div className="col-lg-12">
         <div className="footer-content-wrapper border-top pt-40">
           <div className="row">
             <div className="col-lg-4 col-md-6">
              {/*=======  single footer widget  =======*/}
              <div className="single-footer-widget">
                <div className="footer-logo mb-25">
                  <img
                    style={{width: "105px"}}
                    height={40}
                    src="assets/img/logo/LOGO789.png"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="footer-text-block mb-10">
                  <h5 className="footer-text-block__title">Address</h5>
                  <p className="footer-text-block__content">
                    4710-4890 Breckinridge St, UK Burlington, VT 05401
                  </p>
                </div>
                <div className="footer-text-block mb-10">
                  <h5 className="footer-text-block__title">Need Help?</h5>
                  <p className="footer-text-block__content">
                    Call: 1-800-345-6789
                  </p>
                </div>
                <div className="footer-social-icon-block">
                  <ul>
                    <li>
                      <a className="facebook-icon" href="//www.facebook.com">
                        <i className="ion-social-facebook" />
                      </a>
                    </li>
                    <li>
                      <a className="twitter-icon" href="//www.twitter.com">
                        <i className="ion-social-twitter" />
                      </a>
                    </li>
                    <li>
                      <a className="googleplus-icon" href="//plus.google.com">
                        <i className="ion-social-googleplus" />
                      </a>
                    </li>
                    <li>
                      <a className="instagram-icon" href="//www.instagram.com">
                        <i className="ion-social-instagram-outline" />
                      </a>
                    </li>
                    <li>
                      <a className="youtube-icon" href="//www.youtube.com">
                        <i className="ion-social-youtube" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              {/*=======  End of single footer widget  =======*/}
            </div>
              {/*=======  single footer widget  =======*/}
              <div className="col-lg-4 col-md-6 mt-sm-30">
  {/*=======  single footer widget  =======*/}
  <div className="single-footer-widget">
    <h4 className="footer-widget-title">
      <a href="#">Follow on instagram</a>
    </h4>
    <div className="instagram-image-slider-wrapper">
      <Instagram />
    </div>
  </div>
  {/*=======  End of single footer widget  =======*/}
</div>

              {/*=======  End of single footer widget  =======*/}
            <div className="col-lg-4 col-md-6 mt-md-30 mt-sm-30">
              {/*=======  single footer widget  =======*/}
              <div className="single-footer-widget">
                <h5 className="montserrat-footer-widget-title">Information</h5>
                <div className="footer-navigation">
                  <nav>
                    <ul>
                      <li>
                        <a href="#">About Us</a>
                      </li>
                      <li>
                        <a href="#">Privacy Policy</a>
                      </li>
                      <li>
                        <a href="#">Contact Us</a>
                      </li>
                      <li>
                        <a href="#">Gift Certificates</a>
                      </li>
                      <li>
                        <a href="#">Specials</a>
                      </li>
                      <li>
                        <a href="#">Delivery Information</a>
                      </li>
                      <li>
                        <a href="#">Terms &amp; Conditions</a>
                      </li>
                      <li>
                        <a href="#">Brands</a>
                      </li>
                      <li>
                        <a href="#">Affiliate</a>
                      </li>
                      <li>
                        <a href="#">Site Map</a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              {/*=======  End of single footer widget  =======*/}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-lg-12">
        <div className="copyright-text-area">
          <div className="row align-items-center">
            <div className="col-md-6 text-center text-md-start mb-sm-15">
              <div className="copyright-text">
                <p>
                  Copyright © 2021 <a href="#">Ulug Mebel</a>. All Right Reserved.
                </p>
              </div>
            </div>
            <div className="col-md-6 text-center text-md-end">
              <div className="payment-logo">
                <img
                  width={286}
                  height={23}
                  src="assets/img/icons/payment.webp"
                  className="img-fluid"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div> 
  )
}
