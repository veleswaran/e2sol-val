const Slider = () => {
  return (
    <section className="page_slider" >
      <div className="flexslider">
        <ul className="slides">
          <li className="ds cover-image">
            <img src="images/slide01.jpg" alt="img" />
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-12">
                  <div className="intro_layers_wrapper">
                    <div className="intro_layers">
                      <div className="intro_layer">
                        <h6 className="intro_before_featured_word">
                          01. Providing for Today
                        </h6>
                        <h2 className="text-capitalize intro_featured_word">
                          Vital Oil & Natural Gas
                        </h2>
                        <a href="#" className="btn btn-outline-darkgrey big-btn">
                          get a quote
                        </a>
                        <span className="text-divider">or</span>
                        <a href="#" className="btn just-link">
                          Request a Callback
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className="ds cover-image">
            <img src="images/slide02.jpg" alt="img" />
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-12">
                  <div className="intro_layers_wrapper">
                    <div className="intro_layers">
                      <div className="intro_layer">
                        <h6 className="intro_before_featured_word">
                          02. Innovations
                        </h6>
                        <h2 className="text-capitalize intro_featured_word">
                          Know How Solutions
                        </h2>
                        <a href="#" className="btn btn-outline-darkgrey big-btn">
                          get a quote
                        </a>
                        <span className="text-divider">or</span>
                        <a href="#" className="btn just-link">
                          Request a Callback
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className="ds cover-image">
            <img src="/images/slide03.jpg" alt="img" />
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-12">
                  <div className="intro_layers_wrapper">
                    <div className="intro_layers">
                      <div className="intro_layer">
                        <h6 className="intro_before_featured_word">03. Industry</h6>
                        <h2 className="text-capitalize intro_featured_word">
                          Energy & Commodities
                        </h2>
                        <a href="#" className="btn btn-outline-darkgrey big-btn">
                          get a quote
                        </a>
                        <span className="text-divider">or</span>
                        <a href="#" className="btn just-link">
                          Request a Callback
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Slider;