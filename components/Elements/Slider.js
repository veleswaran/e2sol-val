const Slider = () => {
  return (
    <section class="page_slider" style={{height:"100vh",backgroundColor:"red"}}>
      <div class="flexslider">
        <ul class="slides">
          <li class="ds cover-image">
            <img src="images/slide01.jpg" alt="img" />
            <div class="container-fluid">
              <div class="row">
                <div class="col-md-12">
                  <div class="intro_layers_wrapper">
                    <div class="intro_layers">
                      <div class="intro_layer">
                        <h6 class="intro_before_featured_word">
                          01. Providing for Today
                        </h6>
                        <h2 class="text-capitalize intro_featured_word">
                          Vital Oil & Natural Gas
                        </h2>
                        <a href="#" class="btn btn-outline-darkgrey big-btn">
                          get a quote
                        </a>
                        <span class="text-divider">or</span>
                        <a href="#" class="btn just-link">
                          Request a Callback
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li class="ds cover-image">
            <img src="images/slide02.jpg" alt="img" />
            <div class="container-fluid">
              <div class="row">
                <div class="col-md-12">
                  <div class="intro_layers_wrapper">
                    <div class="intro_layers">
                      <div class="intro_layer">
                        <h6 class="intro_before_featured_word">
                          02. Innovations
                        </h6>
                        <h2 class="text-capitalize intro_featured_word">
                          Know How Solutions
                        </h2>
                        <a href="#" class="btn btn-outline-darkgrey big-btn">
                          get a quote
                        </a>
                        <span class="text-divider">or</span>
                        <a href="#" class="btn just-link">
                          Request a Callback
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li class="ds cover-image">
            <img src="/images/slide03.jpg" alt="img" />
            <div class="container-fluid">
              <div class="row">
                <div class="col-md-12">
                  <div class="intro_layers_wrapper">
                    <div class="intro_layers">
                      <div class="intro_layer">
                        <h6 class="intro_before_featured_word">03. Industry</h6>
                        <h2 class="text-capitalize intro_featured_word">
                          Energy & Commodities
                        </h2>
                        <a href="#" class="btn btn-outline-darkgrey big-btn">
                          get a quote
                        </a>
                        <span class="text-divider">or</span>
                        <a href="#" class="btn just-link">
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