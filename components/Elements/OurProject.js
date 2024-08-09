const OurProject = () => {
  return (
    <section className="ds s-overlay portfolio-section s-py-xl-160 s-py-lg-130 s-py-md-90 s-py-60 text-center">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 className="special-heading text-center">
              <span className="text-capitalize"> Our Projects </span>
            </h2>
            <div className="divider-50 hidden-below-lg"></div>
            <div className="divider-30 hidden-above-lg"></div>
            <div className="row justify-content-center">
              <div className="col-md-10 col-xl-8">
                <div className="filters gallery-filters">
                  <a href="#" data-filter="*" className="active selected">
                    show All
                  </a>
                  <a href="#" data-filter=".corporate">
                    Gas
                  </a>
                  <a href="#" data-filter=".business">
                    oil
                  </a>
                  <a href="#" data-filter=".entertainment">
                    Industry
                  </a>
                  <a href="#" data-filter=".innovations">
                    eco
                  </a>
                  <a href="#" data-filter=".news">
                    Factory
                  </a>
                </div>
              </div>
            </div>
            <div
              className="row isotope-wrapper portfolio masonry-layout c-mb-30"
              data-filters=".gallery-filters"
            >
              <div className="col-xl-4 col-sm-6 business news">
                <div className="vertical-item item-gallery content-absolute text-center ds">
                  <div className="item-media">
                    <img src="images/gallery/full/01.jpg" alt="img" />
                  </div>
                  <div className="item-content">
                    <div className="links-wrap">
                      <a
                        className="link-zoom photoswipe-link"
                        title=""
                        href="images/gallery/full/01.jpg"
                      ></a>
                      <a
                        className="link-anchor"
                        title=""
                        href="#"
                      ></a>
                    </div>
                    <h6>
                      <a href="#">Lorem ipsum dolor sit</a>
                    </h6>
                  </div>
                </div>
              </div>

              <div className="col-xl-4 col-sm-6 innovations corporate">
                <div className="vertical-item item-gallery content-absolute text-center ds">
                  <div className="item-media">
                    <img src="images/gallery/full/02.jpg" alt="img" />
                  </div>
                  <div className="item-content">
                    <div className="links-wrap">
                      <a
                        className="link-zoom photoswipe-link"
                        title=""
                        href="images/gallery/full/02.jpg"
                      ></a>
                      <a
                        className="link-anchor"
                        title=""
                        href="#"
                      ></a>
                    </div>
                    <h6>
                      <a href="#">
                        Amet consetetur sadipscing
                      </a>
                    </h6>
                  </div>
                </div>
              </div>

              <div className="col-xl-4 col-sm-6 entertainment news innovations">
                <div className="vertical-item item-gallery content-absolute text-center ds">
                  <div className="item-media">
                    <img src="images/gallery/full/03.jpg" alt="img" />
                  </div>
                  <div className="item-content">
                    <div className="links-wrap">
                      <a
                        className="link-zoom photoswipe-link"
                        title=""
                        href="images/gallery/full/03.jpg"
                      ></a>
                      <a
                        className="link-anchor"
                        title=""
                        href="#"
                      ></a>
                    </div>

                    <h6>
                      <a href="#">Elitr sed diam nonumy</a>
                    </h6>
                  </div>
                </div>
              </div>

              <div className="col-xl-4 col-sm-6 business entertainment">
                <div className="vertical-item item-gallery content-absolute text-center ds">
                  <div className="item-media">
                    <img src="images/gallery/full/04.jpg" alt="img" />
                  </div>
                  <div className="item-content">
                    <div className="links-wrap">
                      <a
                        className="link-zoom photoswipe-link"
                        title=""
                        href="images/gallery/full/04.jpg"
                      ></a>
                      <a
                        className="link-anchor"
                        title=""
                        href="#"
                      ></a>
                    </div>

                    <h6>
                      <a href="#">Tempor invidunt ut</a>
                    </h6>
                  </div>
                </div>
              </div>

              <div className="col-xl-4 col-sm-6 innovations corporate">
                <div className="vertical-item item-gallery content-absolute text-center ds">
                  <div className="item-media">
                    <img src="images/gallery/full/05.jpg" alt="img" />
                  </div>
                  <div className="item-content">
                    <div className="links-wrap">
                      <a
                        className="link-zoom photoswipe-link"
                        title=""
                        href="images/gallery/full/05.jpg"
                      ></a>
                      <a
                        className="link-anchor"
                        title=""
                        href="#"
                      ></a>
                    </div>

                    <h6>
                      <a href="#">Labore et dolore magna</a>
                    </h6>
                  </div>
                </div>
              </div>

              <div className="col-xl-4 col-sm-6 entertainment news corporate">
                <div className="vertical-item item-gallery content-absolute text-center ds">
                  <div className="item-media">
                    <img src="images/gallery/full/06.jpg" alt="img" />
                  </div>
                  <div className="item-content">
                    <div className="links-wrap">
                      <a
                        className="link-zoom photoswipe-link"
                        title=""
                        href="#"
                      ></a>
                      <a
                        className="link-anchor"
                        title=""
                        href="#"
                      ></a>
                    </div>

                    <h6>
                      <a href="#">Aliquyam erat sed diam</a>
                    </h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt--30"></div>
            <div className="row">
              <div className="col-lg-12">
                <div className="divider-60"></div>
                <a className="btn btn-maincolor2 big-btn" href="#">
                  All projects
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default OurProject
