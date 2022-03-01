import React from 'react'
import ContactData from './ContactData'
import GoogleMap from './GoogleMap'

export default function Page() {
  return (
    <div className="page-section">
  {/*=============================================
		=            google map container         =
		=============================================*/}
  <div className="google-map-container mb-45">
    {/* <div id="google-map" /> */} 
    <GoogleMap/>
  </div>
  {/*=====  End of google map container  ======*/}
  <div className="container">
    <div className="row">
      <div className="col-lg-5 offset-lg-1 col-md-12 mb-sm-45 order-1 order-lg-2 mb-md-45">
        {/*=======  contact page side content  =======*/}
        <div className="contact-page-side-content">
          <h3 className="contact-page-title">Contact Us</h3>
          <p className="contact-page-message mb-30">
            Claritas est etiam processus dynamicus, qui sequitur mutationem
            consuetudium lectorum. Mirum est notare quam littera gothica, quam
            nunc putamus parum claram anteposuerit litterarum formas human.
          </p>
          {/*=======  single contact block  =======*/}
          <div className="single-contact-block">
            <h4>
              <i className="fa fa-fax" /> Address
            </h4>
            <p>123 Main Street, Anytown, CA 12345 – USA</p>
          </div>
          {/*=======  End of single contact block  =======*/}
          {/*=======  single contact block  =======*/}
          <div className="single-contact-block">
            <h4>
              <i className="fa fa-phone" /> Phone
            </h4>
            <p>Mobile: (08) 123 456 789</p>
            <p>Hotline: 1009 678 456</p>
          </div>
          {/*=======  End of single contact block  =======*/}
          {/*=======  single contact block  =======*/}
          <div className="single-contact-block">
            <h4>
              <i className="fa fa-envelope-o" /> Email
            </h4>
            <p>yourmail@domain.com</p>
            <p>support@hastech.company</p>
          </div>
          {/*=======  End of single contact block  =======*/}
        </div>
        {/*=======  End of contact page side content  =======*/}
      </div>
      <div className="col-lg-6 col-md-12 order-2 order-lg-1">
        {/*=======  contact form content  =======*/}
          <ContactData/>
        {/*=======  End of contact form content =======*/}
      </div>
    </div>
  </div>
</div>

  )
}
