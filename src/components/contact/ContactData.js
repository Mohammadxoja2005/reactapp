import React from 'react'

export default function ContactData() {
  return (
    <div className="contact-form-content">
    <h3 className="contact-page-title">Tell Us Your Message</h3>
    <div className="contact-form">
      <form id="contact-form" action="assets/php/mail.php" method="post">
        <div className="form-group">
          <label>
            Your Name <span className="required">*</span>
          </label>
          <input type="text" name="name" id="customername" required="" />
        </div>
        <div className="form-group">
          <label>
            Your Email <span className="required">*</span>
          </label>
          <input
            type="email"
            name="email"
            id="customerEmail"
            required=""
          />
        </div>
        <div className="form-group">
          <label>Subject</label>
          <input type="text" name="subject" id="contactSubject" />
        </div>
        <div className="form-group">
          <label>Your Message</label>
          <textarea
            name="message"
            id="contactMessage"
            defaultValue={""}
          />
        </div>
        <div className="form-group mb-0">
          <button
            type="submit"
            value="submit"
            id="submit"
            className="theme-button contact-button"
            name="submit"
          >
            Send
          </button>
        </div>
      </form>
    </div>
    <p className="form-messege pt-10 pb-10 mt-10 mb-10" />
  </div>
  )
}
