import React from 'react'

export default function Subscribe() {
  return (
    <div className="newsletter-area mb-40">
  <div className="container">
    <div className="row">
      <div className="col-lg-12">
        {/*=======  newsletter wrapper  =======*/}
        <div className="newsletter-wrapper newsletter-bg-3">
          <div className="newsletter-wrapper__text">
            <h5>Subscribe newsletter to get updated</h5>
            <p>We’ll never share your email address with a third-party.</p>
          </div>
          <div className="newsletter-wrapper__form">
            <form id="mc-form" className="mc-form">
              <input
                type="email"
                placeholder="Enter your email address here ..."
              />
              <button type="submit">Subscribe</button>
            </form>
            {/* mailchimp-alerts Start */}
            <div className="mailchimp-alerts mt-5 mb-5">
              <div className="mailchimp-submitting" />
              {/* mailchimp-submitting end */}
              <div className="mailchimp-success" />
              {/* mailchimp-success end */}
              <div className="mailchimp-error" />
              {/* mailchimp-error end */}
            </div>
            {/* mailchimp-alerts end */}
          </div>
        </div>
        {/*=======  End of newsletter wrapper  =======*/}
      </div>
    </div>
  </div>
</div>

  )
}
