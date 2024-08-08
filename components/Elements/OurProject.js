const OurProject = () => {
  return (
    <section class="ds s-overlay portfolio-section s-py-xl-160 s-py-lg-130 s-py-md-90 s-py-60 text-center">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h2 class="special-heading text-center">
              <span class="text-capitalize"> Our Projects </span>
            </h2>
            <div class="divider-50 hidden-below-lg"></div>
            <div class="divider-30 hidden-above-lg"></div>
            <div class="row justify-content-center">
              <div class="col-md-10 col-xl-8">
                <div class="filters gallery-filters">
                  <a href="#" data-filter="*" class="active selected">
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
              class="row isotope-wrapper portfolio masonry-layout c-mb-30"
              data-filters=".gallery-filters"
            >
              <div class="col-xl-4 col-sm-6 business news">
                <div class="vertical-item item-gallery content-absolute text-center ds">
                  <div class="item-media">
                    <img src="images/gallery/full/01.jpg" alt="img" />
                  </div>
                  <div class="item-content">
                    <div class="links-wrap">
                      <a
                        class="link-zoom photoswipe-link"
                        title=""
                        href="images/gallery/full/01.jpg"
                      ></a>
                      <a
                        class="link-anchor"
                        title=""
                        href="gallery-single.html"
                      ></a>
                    </div>
                    <h6>
                      <a href="gallery-single.html">Lorem ipsum dolor sit</a>
                    </h6>
                  </div>
                </div>
              </div>

              <div class="col-xl-4 col-sm-6 innovations corporate">
                <div class="vertical-item item-gallery content-absolute text-center ds">
                  <div class="item-media">
                    <img src="images/gallery/full/02.jpg" alt="img" />
                  </div>
                  <div class="item-content">
                    <div class="links-wrap">
                      <a
                        class="link-zoom photoswipe-link"
                        title=""
                        href="images/gallery/full/02.jpg"
                      ></a>
                      <a
                        class="link-anchor"
                        title=""
                        href="gallery-single.html"
                      ></a>
                    </div>
                    <h6>
                      <a href="gallery-single.html">
                        Amet consetetur sadipscing
                      </a>
                    </h6>
                  </div>
                </div>
              </div>

              <div class="col-xl-4 col-sm-6 entertainment news innovations">
                <div class="vertical-item item-gallery content-absolute text-center ds">
                  <div class="item-media">
                    <img src="images/gallery/full/03.jpg" alt="img" />
                  </div>
                  <div class="item-content">
                    <div class="links-wrap">
                      <a
                        class="link-zoom photoswipe-link"
                        title=""
                        href="images/gallery/full/03.jpg"
                      ></a>
                      <a
                        class="link-anchor"
                        title=""
                        href="gallery-single.html"
                      ></a>
                    </div>

                    <h6>
                      <a href="gallery-single.html">Elitr sed diam nonumy</a>
                    </h6>
                  </div>
                </div>
              </div>

              <div class="col-xl-4 col-sm-6 business entertainment">
                <div class="vertical-item item-gallery content-absolute text-center ds">
                  <div class="item-media">
                    <img src="images/gallery/full/04.jpg" alt="img" />
                  </div>
                  <div class="item-content">
                    <div class="links-wrap">
                      <a
                        class="link-zoom photoswipe-link"
                        title=""
                        href="images/gallery/full/04.jpg"
                      ></a>
                      <a
                        class="link-anchor"
                        title=""
                        href="gallery-single.html"
                      ></a>
                    </div>

                    <h6>
                      <a href="gallery-single.html">Tempor invidunt ut</a>
                    </h6>
                  </div>
                </div>
              </div>

              <div class="col-xl-4 col-sm-6 innovations corporate">
                <div class="vertical-item item-gallery content-absolute text-center ds">
                  <div class="item-media">
                    <img src="images/gallery/full/05.jpg" alt="img" />
                  </div>
                  <div class="item-content">
                    <div class="links-wrap">
                      <a
                        class="link-zoom photoswipe-link"
                        title=""
                        href="images/gallery/full/05.jpg"
                      ></a>
                      <a
                        class="link-anchor"
                        title=""
                        href="gallery-single.html"
                      ></a>
                    </div>

                    <h6>
                      <a href="gallery-single.html">Labore et dolore magna</a>
                    </h6>
                  </div>
                </div>
              </div>

              <div class="col-xl-4 col-sm-6 entertainment news corporate">
                <div class="vertical-item item-gallery content-absolute text-center ds">
                  <div class="item-media">
                    <img src="images/gallery/full/06.jpg" alt="img" />
                  </div>
                  <div class="item-content">
                    <div class="links-wrap">
                      <a
                        class="link-zoom photoswipe-link"
                        title=""
                        href="images/gallery/full/06.jpg"
                      ></a>
                      <a
                        class="link-anchor"
                        title=""
                        href="gallery-single.html"
                      ></a>
                    </div>

                    <h6>
                      <a href="gallery-single.html">Aliquyam erat sed diam</a>
                    </h6>
                  </div>
                </div>
              </div>
            </div>
            <div class="mt--30"></div>
            <div class="row">
              <div class="col-lg-12">
                <div class="divider-60"></div>
                <a class="btn btn-maincolor2 big-btn" href="gallery-image.html">
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
