import { useState } from "react";

const Footer = () => {
  const [obj,setObj]= useState({});

  function handleChange(e){
    setObj({...obj,[e.target.name]:e.target.value})
  }
  return (
    <>
      <footer className="page_footer text-center c-gutter-100 text-sm-left ds">
        <div className="container">
          <div className="row justify-content-center">
            <div
              className="col-lg-4 col-md-6 order-1 order-lg-1 animate"
              data-animation="fadeInUp"
            >
              <div className="fw-divider-space divider-xl-160 divider-lg-130 divider-md-90 divider-60"></div>
              <a href="" className="logo">
                <img src="images/logo.png" alt="" />
                <span className="d-flex flex-column">
                  <span className="logo-text color-darkgrey">nafta</span>
                  <span className="logo-subtext">oil &amp; gas industry</span>
                </span>
              </a>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elitsed
                eiusmod tempor incididunt ut labordolore magna aliqua eniminim
              </p>
              <a
                href="#"
                className="fab fa-facebook-f rounded-icon bg-icon fs-16"
                title="facebook"
              ></a>
              <a
                href="#"
                className="fab fa-twitter rounded-icon bg-icon fs-16"
                title="telegram"
              ></a>
              <a
                href="#"
                className="fab fa-linkedin-in rounded-icon bg-icon fs-16"
                title="linkedin"
              ></a>
              <a
                href="#"
                className="fab fa-instagram rounded-icon bg-icon fs-16"
                title="instagram"
              ></a>
              <div className="fw-divider-space divider-xl-160 divider-lg-130 divider-md-60 divider-30"></div>
            </div>

            <div
              className="col-lg-4 col-md-12 ls order-3 order-lg-2 footer-special-column text-center animate"
              data-animation="fadeInUp"
            >
              <div className="form-wrapper">
                <form className="contact-form" method="post" action="/">
                  <div className="row c-mb-20">
                    <div className="col-12 form-title text-center form-builder-item">
                      <div className="header title">
                        <h2>Write Us</h2>
                      </div>
                    </div>
                  </div>
                  <div className="row c-mb-10 c-gutter-10">
                    <div className="col-lg-12 text-center">
                      <div className="form-group has-placeholder">
                        <label htmlFor="name22335x5553">
                          Full Name <span className="required">*</span>
                        </label>
                        <input
                          type="text"
                          aria-required="true"
                          size="30"
                          value=""
                          name="name"
                          onChange={handleChange}
                          id="name22335x5553"
                          className="form-control"
                          placeholder="Full Name"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row c-mb-10 c-gutter-10">
                    <div className="col-lg-12 text-center">
                      <div className="form-group has-placeholder">
                        <label htmlFor="name223355553">
                          Phone Number <span className="required">*</span>
                        </label>

                        <input
                          type="text"
                          aria-required="true"
                          size="30"
                          value=""
                          name="phone"
                          onChange={handleChange}
                          id="name223355553"
                          className="form-control"
                          placeholder="Phone Number"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row c-mb-10 c-gutter-10">
                    <div className="col-sm-12 text-center">
                      <div className="form-group has-placeholder">
                        <label htmlFor="message22335553">Message</label>

                        <textarea
                          aria-required="true"
                          rows="6"
                          cols="45"
                          name="message"
                          onChange={handleChange}
                          id="message22335553"
                          className="form-control"
                          placeholder="Your Message"
                        ></textarea>
                      </div>
                    </div>
                  </div>
                  <div className="row c-mb-10 c-gutter-10">
                    <div className="col-sm-12 mb-0 mt-50">
                      <div className="form-group">
                        <input
                          className="btn btn-gradient big-btn"
                          type="submit"
                          value="Send message"
                        />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <h6 className="fs-12 text-uppercase">
                &copy; Copyright <span className="copyright_year">2019</span> All
                Rights Reserved
              </h6>
            </div>

            <div
              className="col-lg-4 col-md-6 order-2 order-lg-3 animate"
              data-animation="fadeInUp"
            >
              <div className="fw-divider-space divider-xl-160 divider-lg-130 divider-md-90"></div>
              <div className="widget widget_icons_list">
                <ul>
                  <li className="icon-inline">
                    <div className="icon-styled icon-top bordered round fs-16">
                      <i className="fas fa-phone"></i>
                    </div>
                    <p>800 123 4567</p>
                  </li>
                  <li className="icon-inline">
                    <div className="icon-styled icon-top bordered round fs-16">
                      <i className="fas fa-envelope"></i>
                    </div>
                    <p>
                      <a href="#">nafta@example.com</a>
                    </p>
                  </li>
                  <li className="icon-inline">
                    <div className="icon-styled icon-top bordered round fs-16">
                      <i className="fas fa-map-marker-alt"></i>
                    </div>
                    <p>
                      2469 Hoffman Avenue
                      <br />
                      New York, NY 10016
                    </p>
                  </li>
                  <li className="icon-inline">
                    <div className="icon-styled icon-top bordered round fs-16">
                      <i className="fas fa-clock"></i>
                    </div>
                    <p>
                      Mo-Fri: 8am - 6pm
                      <br />
                      Sat: 10am - 4pm
                      <br />
                      Sun: of
                    </p>
                  </li>
                </ul>
              </div>
              <div className="fw-divider-space divider-xl-160 divider-lg-130 divider-md-60 divider-30"></div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;

