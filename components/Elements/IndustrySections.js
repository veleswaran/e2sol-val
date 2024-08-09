import { useState } from "react";

const IndustrySections=()=>{
  const[obj,setObj] = useState({});

  // collect the value from form
  function handleChange(e){
    setObj({...obj,[e.target.name]:e.target.value})
  }
    return (
        <>
              <section
          className="ls s-py-xl-160 s-py-lg-130 s-py-md-90 s-py-60 text-sm-left text-center container-px-0"
        >
          <div className="cover-image s-cover-left">
            <img src="images/services/service1.jpg" alt="01" />
          </div>
          <div className="container-fluid">
            <div className="row">
              <div className="col-xs-12 col-12 col-lg-6"></div>
              <div className="col-xs-12 col-12 col-lg-6">
                <div className="content-center">
                  <h2 className="special-heading numeric text-sm-left text-center">
                    <span className="text-capitalize"> Chemical Industry </span>
                  </h2>
                  <div className="divider-45 hidden-below-lg"></div>
                  <div className="divider-30 hidden-above-lg"></div>
                  <p>
                    Cillum doloreu fugiat nulla pariatur excepteur si occaecat
                    cupdatat non proident sunt culpaq officia deserunt mollt
                    animest laborum sed perspiciatis unde omnis iste natus
                    errosit voluptatem accuantium doloremque laudantium totam.
                  </p>
                  <div className="divider-45 hidden-below-lg"></div>
                  <div className="divider-30 hidden-above-lg"></div>
                  <ul className="list-styled">
                    <li>Laudantium, totam rem aperiam</li>
                    <li>Eaque ipsa quae ab illo inventore veritatis</li>
                    <li>Quasi architecto beatae</li>
                  </ul>
                  <div className="divider--10"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          className="ls s-py-xl-160 s-py-lg-130 s-py-md-90 s-py-60 text-sm-left text-center container-px-0"
        >
          <div className="cover-image s-cover-right">
            <img src="images/services/service2.jpg" alt="01" />
          </div>

          <div className="container-fluid">
            <div className="row">
              <div className="col-xs-12 col-12 col-lg-6">
                <div className="content-center">
                  <h2 className="special-heading numeric text-sm-left text-center">
                    <span className="text-capitalize"> Saving Technologies </span>
                  </h2>
                  <div className="divider-45 hidden-below-lg"></div>
                  <div className="divider-30 hidden-above-lg"></div>
                  <p>
                    Rem aperiam, eaque ipsa qillo inventore veritatis etquasi
                    architecto beatae vitae dicta sunt explicabo. Nemo enim
                    ipsam voluptatem quia voluptas sit aspernatur aut odit aut
                    fugit sed quia consequuntur magni dolores eos.
                  </p>
                  <div className="divider-45 hidden-below-lg"></div>
                  <div className="divider-30 hidden-above-lg"></div>
                  <div className="shortcode-widget-area">
                    <div className="widget widget_mailchimp">
                      <p>Subscribe to Our Newsletter:</p>

                      <form className="signup" action="/">
                        <label htmlFor="mailchimp_email88">
                          <span className="screen-reader-text">Subscribe:</span>
                        </label>
                        <input
                          id="mailchimp_email88"
                          name="email"
                          type="email"
                          onChange={handleChange}
                          className="form-control mailchimp_email has-placeholder"
                          placeholder="Email"
                        />
                        <button type="submit" className="search-submit">
                          <span className="screen-reader-text">Subscribe</span>
                        </button>
                        <div className="response"></div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-12 col-lg-6"></div>
            </div>
          </div>
        </section>

        <section
          className="ls s-py-xl-160 s-py-lg-130 s-py-md-90 s-py-60 text-sm-left text-center container-px-0"
        >
          <div className="cover-image s-cover-left">
            <a
              href="images/services/service3.jpg"
              className="photoswipe-link side-video"
              data-width="800"
              data-height="800"
              data-iframe="https://www.youtube.com/embed/GhthHC0s38A"
            ></a>
            <img src="images/services/service3.jpg" alt="01" />
          </div>
          <div className="container-fluid">
            <div className="row">
              <div className="col-xs-12 col-12 col-lg-6"></div>
              <div className="col-xs-12 col-12 col-lg-6">
                <div className="content-center">
                  <h2 className="special-heading numeric text-sm-left text-center">
                    <span className="text-capitalize"> Military Industry </span>
                  </h2>
                  <div className="divider-45 hidden-below-lg"></div>
                  <div className="divider-30 hidden-above-lg"></div>
                  <p>
                    Qui ratione voluptatem sequi nesciunt. Neque porro quisquam
                    est, qui dolorem ipsum quia dolor sit amet, consectetur,
                    adipisci velit, sed quia non numquam. Watch our
                    presentation:
                  </p>
                  <div className="divider-50 hidden-below-lg"></div>
                  <div className="divider-30 hidden-above-lg"></div>
                  <div id="comingsoon-countdown"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
        </>
    )
}
export default IndustrySections;