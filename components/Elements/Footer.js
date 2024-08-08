const Footer = () => {
  return (
    <>
      <footer class="page_footer text-center c-gutter-100 text-sm-left ds">
        <div class="container">
          <div class="row justify-content-center">
            <div
              class="col-lg-4 col-md-6 order-1 order-lg-1 animate"
              data-animation="fadeInUp"
            >
              <div class="fw-divider-space divider-xl-160 divider-lg-130 divider-md-90 divider-60"></div>
              <a href="./" class="logo">
                <img src="images/logo.png" alt="" />
                <span class="d-flex flex-column">
                  <span class="logo-text color-darkgrey">nafta</span>
                  <span class="logo-subtext">oil &amp; gas industry</span>
                </span>
              </a>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elitsed
                eiusmod tempor incididunt ut labordolore magna aliqua eniminim
              </p>
              <a
                href="#"
                class="fab fa-facebook-f rounded-icon bg-icon fs-16"
                title="facebook"
              ></a>
              <a
                href="#"
                class="fab fa-twitter rounded-icon bg-icon fs-16"
                title="telegram"
              ></a>
              <a
                href="#"
                class="fab fa-linkedin-in rounded-icon bg-icon fs-16"
                title="linkedin"
              ></a>
              <a
                href="#"
                class="fab fa-instagram rounded-icon bg-icon fs-16"
                title="instagram"
              ></a>
              <div class="fw-divider-space divider-xl-160 divider-lg-130 divider-md-60 divider-30"></div>
            </div>

            <div
              class="col-lg-4 col-md-12 ls order-3 order-lg-2 footer-special-column text-center animate"
              data-animation="fadeInUp"
            >
              <div class="form-wrapper">
                <form class="contact-form" method="post" action="/">
                  <div class="row c-mb-20">
                    <div class="col-12 form-title text-center form-builder-item">
                      <div class="header title">
                        <h2>Write Us</h2>
                      </div>
                    </div>
                  </div>
                  <div class="row c-mb-10 c-gutter-10">
                    <div class="col-lg-12 text-center">
                      <div class="form-group has-placeholder">
                        <label for="name22335x5553">
                          Full Name <span class="required">*</span>
                        </label>
                        <input
                          type="text"
                          aria-required="true"
                          size="30"
                          value=""
                          name="name"
                          id="name22335x5553"
                          class="form-control"
                          placeholder="Full Name"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="row c-mb-10 c-gutter-10">
                    <div class="col-lg-12 text-center">
                      <div class="form-group has-placeholder">
                        <label for="name223355553">
                          Phone Number <span class="required">*</span>
                        </label>

                        <input
                          type="text"
                          aria-required="true"
                          size="30"
                          value=""
                          name="name"
                          id="name223355553"
                          class="form-control"
                          placeholder="Phone Number"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="row c-mb-10 c-gutter-10">
                    <div class="col-sm-12 text-center">
                      <div class="form-group has-placeholder">
                        <label for="message22335553">Message</label>

                        <textarea
                          aria-required="true"
                          rows="6"
                          cols="45"
                          name="message"
                          id="message22335553"
                          class="form-control"
                          placeholder="Your Message"
                        ></textarea>
                      </div>
                    </div>
                  </div>
                  <div class="row c-mb-10 c-gutter-10">
                    <div class="col-sm-12 mb-0 mt-50">
                      <div class="form-group">
                        <input
                          class="btn btn-gradient big-btn"
                          type="submit"
                          value="Send message"
                        />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <h6 class="fs-12 text-uppercase">
                &copy; Copyright <span class="copyright_year">2019</span> All
                Rights Reserved
              </h6>
            </div>

            <div
              class="col-lg-4 col-md-6 order-2 order-lg-3 animate"
              data-animation="fadeInUp"
            >
              <div class="fw-divider-space divider-xl-160 divider-lg-130 divider-md-90"></div>
              <div class="widget widget_icons_list">
                <ul>
                  <li class="icon-inline">
                    <div class="icon-styled icon-top bordered round fs-16">
                      <i class="fas fa-phone"></i>
                    </div>
                    <p>800 123 4567</p>
                  </li>
                  <li class="icon-inline">
                    <div class="icon-styled icon-top bordered round fs-16">
                      <i class="fas fa-envelope"></i>
                    </div>
                    <p>
                      <a href="#">nafta@example.com</a>
                    </p>
                  </li>
                  <li class="icon-inline">
                    <div class="icon-styled icon-top bordered round fs-16">
                      <i class="fas fa-map-marker-alt"></i>
                    </div>
                    <p>
                      2469 Hoffman Avenue
                      <br />
                      New York, NY 10016
                    </p>
                  </li>
                  <li class="icon-inline">
                    <div class="icon-styled icon-top bordered round fs-16">
                      <i class="fas fa-clock"></i>
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
              <div class="fw-divider-space divider-xl-160 divider-lg-130 divider-md-60 divider-30"></div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;

