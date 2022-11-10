import React from 'react';

export default function Inquire() {
  return (
    
    <div className="container py-4 inquire_us">
      <h3 className='text-uppercase inquire_us_title mb-4'>Inquire Us</h3>
      <div className='inquire_us_border'>
        <div className='px-5 py-4 bg-black inquire_us_body'>
          <h4 className='text-uppercase pb-5 m-1 inquire_us_sub_title'>Get your free counselling now</h4>
          <form id="contactForm">
            <div className="mb-3">
              <input className="form-control p-3 text-white bg-dark border border-0" id="name" type="text" placeholder="Enter Your Name" />
            </div>
            <div className="mb-3">
              <input className="form-control p-3 text-white bg-dark border border-0" id="emailAddress" type="email" placeholder="Enter Your Email" />
            </div>
            <div className="mb-3">
              <input className="form-control p-3 text-white bg-dark border border-0" id="number" type="number" maxLength={10} placeholder="Enter Your Mobile Number" />
            </div>
            <div className="mb-3">
              <textarea className="form-control text-white bg-dark border border-0" id="message" type="text" placeholder="Message" rows={7} ></textarea>
            </div>
            <div className="col-12 p-3 d-flex inquire_us_btn">
              <button className="btn px-5 py-2" type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
