

const home = () => {
  return (
    <>
      <div class="preloader">
        <div class="preloader_image"></div>
      </div>

      <div
        class="modal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="search_modal"
        id="search_modal"
      >
        <button
          type="button"
          class="close"
          data-dismiss="modal"
          aria-label="Close"
        >
          <span aria-hidden="true">&times;</span>
        </button>
        <div class="widget widget_search">
          <form method="get" class="searchform search-form" action="/">
            <div class="form-group">
              <input
                type="text"
                value=""
                name="search"
                class="form-control"
                placeholder="Search keyword"
                id="modal-search-input"
              />
            </div>
            <button type="submit" class="btn">
              Search
            </button>
          </form>
        </div>
      </div>
      <div id="team-form" class="ds modal">
        <div class="container">
          <div class="row">
            <div class="col-md-6 offset-md-3">
              <div class="form-wrapper ls rounded">
                <form class="contact-form" method="post" action="/">
                  <div class="row c-mb-20">
                    <div class="col-12 form-title text-center form-builder-item">
                      <div class="header title">
                        <h4>
                          <span class="thin">Contact</span> me
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div class="row c-mb-20">
                    <div class="col-sm-12">
                      <div class="form-group has-placeholder">
                        <label for="name333">
                          Full Name <span class="required">*</span>
                        </label>
                        <input
                          type="text"
                          aria-required="true"
                          size="30"
                          value=""
                          name="name"
                          id="name333"
                          class="form-control"
                          placeholder="Your name"
                        />
                      </div>
                    </div>
                    <div class="col-sm-12">
                      <div class="form-group has-placeholder">
                        <label for="phone35533">
                          Email address<span class="required">*</span>
                        </label>
                        <input
                          type="tel"
                          aria-required="true"
                          size="30"
                          name="phone"
                          id="phone35533"
                          class="form-control"
                          placeholder="Phone Number"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="row c-mb-20">
                    <div class="col-sm-12">
                      <div class="form-group has-placeholder">
                        <label for="message333">Message</label>
                        <textarea
                          aria-required="true"
                          rows="3"
                          cols="45"
                          name="message"
                          id="message333"
                          class="form-control"
                          placeholder="Message"
                        ></textarea>
                      </div>
                    </div>
                  </div>
                  <div class="row c-mb-20">
                    <div class="col-sm-12 mb-0 mt-10 text-center">
                      <div class="form-group">
                        <input
                          class="btn btn-gradient"
                          type="submit"
                          value="Contact me"
                        />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="modal fade" tabindex="-1" role="dialog" id="messages_modal">
        <div class="fw-messages-wrap ls p-normal"></div>
      </div>
      <div id="canvas">
        <div id="box_wrapper">
          <div class="header_absolute">
            <header class="page_header_side header_slide header-special header_side_right ds">
              <div class="scrollbar-macosx">
                <div class="side_header_inner">
                  <p class="text-right mb-0 close-wrapper">
                    <a href="javascript:void(0)">×</a>
                  </p>

                  <div class="widget widget_recent_posts">
                    <h3 class="widget-title">Our news</h3>
                    <ul class="list-unstyled">
                      <li class="media">
                        <article class="vertical-item  post type-post status-publish format-standard has-post-thumbnail">
                          <div class="item-content">
                            <div class="entry-header">
                              <div class="entry-meta">
                                <div class="byline">
                                  <span class="date">
                                    <a href="blog-@@type.html" rel="bookmark">
                                      <time
                                        class="published entry-date"
                                        datetime="2019-04-09T12:23:09+00:00"
                                      >
                                        20.03.2019
                                      </time>
                                    </a>
                                  </span>
                                  <span class="author vcard">
                                    <a
                                      class="url fn n"
                                      href="blog-@@type.html"
                                      rel="author"
                                    >
                                      <span>by</span> Admin
                                    </a>
                                  </span>
                                </div>
                              </div>
                              <h4 class="entry-title">
                                <a
                                  href="blog-single-@@type.html"
                                  rel="bookmark"
                                >
                                  Adipisicing elit sed do eiusmod
                                </a>
                              </h4>
                            </div>
                          </div>
                        </article>
                      </li>
                      <li class="media">
                        <article class="vertical-item  post type-post status-publish format-standard has-post-thumbnail">
                          <div class="item-content">
                            <div class="entry-header">
                              <div class="entry-meta">
                                <div class="byline">
                                  <span class="date">
                                    <a href="blog-@@type.html" rel="bookmark">
                                      <time
                                        class="published entry-date"
                                        datetime="2019-04-09T12:23:09+00:00"
                                      >
                                        20.03.2019
                                      </time>
                                    </a>
                                  </span>
                                  <span class="author vcard">
                                    <a
                                      class="url fn n"
                                      href="blog-@@type.html"
                                      rel="author"
                                    >
                                      <span>by</span> Admin
                                    </a>
                                  </span>
                                </div>
                              </div>
                              <h4 class="entry-title">
                                <a
                                  href="blog-single-@@type.html"
                                  rel="bookmark"
                                >
                                  Adipisicing elit sed do eiusmod
                                </a>
                              </h4>
                            </div>
                          </div>
                        </article>
                      </li>
                      <li class="media">
                        <article class="vertical-item  post type-post status-publish format-standard has-post-thumbnail">
                          <div class="item-content">
                            <div class="entry-header">
                              <div class="entry-meta">
                                <div class="byline">
                                  <span class="date">
                                    <a href="blog-@@type.html" rel="bookmark">
                                      <time
                                        class="published entry-date"
                                        datetime="2019-04-09T12:23:09+00:00"
                                      >
                                        20.03.2019
                                      </time>
                                    </a>
                                  </span>
                                  <span class="author vcard">
                                    <a
                                      class="url fn n"
                                      href="blog-@@type.html"
                                      rel="author"
                                    >
                                      <span>by</span> Admin
                                    </a>
                                  </span>
                                </div>
                              </div>
                              <h4 class="entry-title">
                                <a
                                  href="blog-single-@@type.html"
                                  rel="bookmark"
                                >
                                  Adipisicing elit sed do eiusmod
                                </a>
                              </h4>
                            </div>
                          </div>
                        </article>
                      </li>
                    </ul>
                  </div>
                  <div class="widget widget_about">
                    <h3 class="widget-title">About</h3>
                    <p>
                      Excepteur sint occaecat cupidatat non proident, sunt in
                      culpa qui officia deserunt mollit anim id est laborum. Sed
                      ut perspiciatis unde.
                    </p>
                  </div>
                  <div class="widget widget_mailchimp">
                    <h3 class="widget-title">Newsletter</h3>

                    <form class="signup" action="/">
                      <label for="mailchimp_email88d">
                        <span class="screen-reader-text">Subscribe:</span>
                      </label>
                      <input
                        id="mailchimp_email88d"
                        name="email"
                        type="email"
                        class="form-control mailchimp_email has-placeholder"
                        placeholder="Email"
                      />
                      <button type="submit" class="search-submit">
                        <span class="screen-reader-text">Subscribe</span>
                      </button>
                      <div class="response"></div>
                    </form>
                  </div>
                  <div class="widget widget_social_icons">
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
                  </div>
                </div>
              </div>
            </header>

            <header class="page_header header-1 ds bg-transparent s-py-xl-20 s-py-10 ">
              <div class="container-fluid">
                <div class="row d-flex align-items-center justify-content-center">
                  <div class="col-xl-3 col-md-4 col-12 text-center">
                    <a href="./" class="logo">
                      <img src="images/logo.png" alt="" />
                      <span class="d-flex flex-column">
                        <span class="logo-text color-darkgrey">nafta</span>
                        <span class="logo-subtext">oil & gas industry</span>
                      </span>
                    </a>
                  </div>
                  <div class="col-xl-6 col-1 text-right">
                    <nav class="top-nav">
                      <ul class="nav sf-menu">
                        <li class="active">
                          <a href="index.html">Home</a>
                          <ul>
                            <li>
                              <a href="index.html">MultiPage</a>
                            </li>

                            <li>
                              <a href="index_singlepage.html">Single Page</a>
                            </li>
                          </ul>
                        </li>

                        <li>
                          <a href="about.html">Pages</a>
                          <ul>
                            <li>
                              <a href="about.html">About</a>
                            </li>

                            <li>
                              <a href="our-history.html">Our history</a>
                            </li>

                            <li>
                              <a href="pricing.html">Pricing</a>
                            </li>
                            <li>
                              <a href="partners.html">Partners & Clients</a>
                            </li>
                            <li>
                              <a href="comingsoon.html">Comingsoon</a>
                            </li>

                            <li>
                              <a href="careers.html">Careers</a>
                            </li>

                            <li>
                              <a href="shortcodes_iconbox.html">Shortcodes</a>
                              <ul>
                                <li>
                                  <a href="shortcodes_typography.html">
                                    Typography
                                  </a>
                                </li>
                                <li>
                                  <a href="shortcodes_buttons.html">Buttons</a>
                                </li>
                                <li>
                                  <a href="shortcodes_pricing.html">Pricing</a>
                                </li>
                                <li>
                                  <a href="shortcodes_iconbox.html">
                                    Icon Boxes
                                  </a>
                                </li>
                                <li>
                                  <a href="shortcodes_progress.html">
                                    Progress
                                  </a>
                                </li>
                                <li>
                                  <a href="shortcodes_tabs.html">
                                    Tabs &amp; Collapse
                                  </a>
                                </li>
                                <li>
                                  <a href="shortcodes_bootstrap.html">
                                    Bootstrap Elements
                                  </a>
                                </li>
                                <li>
                                  <a href="shortcodes_animation.html">
                                    Animation
                                  </a>
                                </li>
                              </ul>
                            </li>

                            <li>
                              <a href="shortcodes_widgets_default.html">
                                Widgets
                              </a>
                              <ul>
                                <li>
                                  <a href="shortcodes_widgets_default.html">
                                    Default Widgets
                                  </a>
                                </li>
                                <li>
                                  <a href="shortcodes_widgets_shop.html">
                                    Shop Widgets
                                  </a>
                                </li>
                                <li>
                                  <a href="shortcodes_widgets_custom.html">
                                    Custom Widgets
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <a href="services.html">Services</a>
                              <ul>
                                <li>
                                  <a href="services.html">Services 1</a>
                                </li>
                                <li>
                                  <a href="services2.html">Services 2</a>
                                </li>
                                <li>
                                  <a href="service-single.html">
                                    Single Service
                                  </a>
                                </li>
                                <li>
                                  <a href="service-single2.html">
                                    Single Service 2
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <a href="gallery-image.html">Gallery</a>
                              <ul>
                                <li>
                                  <a href="gallery-image.html">Image Only</a>
                                  <ul>
                                    <li>
                                      <a href="gallery-image-2-cols.html">
                                        2 columns
                                      </a>
                                    </li>
                                    <li>
                                      <a href="gallery-image.html">3 columns</a>
                                    </li>
                                    <li>
                                      <a href="gallery-image-4-cols-fullwidth.html">
                                        4 columns fullwidth
                                      </a>
                                    </li>
                                  </ul>
                                </li>
                                <li>
                                  <a href="gallery-title.html">
                                    Image With Title
                                  </a>
                                  <ul>
                                    <li>
                                      <a href="gallery-title-2-cols.html">
                                        2 columns
                                      </a>
                                    </li>
                                    <li>
                                      <a href="gallery-title.html">3 column</a>
                                    </li>
                                    <li>
                                      <a href="gallery-title-4-cols-fullwidth.html">
                                        4 columns fullwidth
                                      </a>
                                    </li>
                                  </ul>
                                </li>

                                <li>
                                  <a href="gallery-excerpt.html">
                                    Image with Excerpt
                                  </a>
                                  <ul>
                                    <li>
                                      <a href="gallery-excerpt-2-cols.html">
                                        2 columns
                                      </a>
                                    </li>
                                    <li>
                                      <a href="gallery-excerpt.html">
                                        3 column
                                      </a>
                                    </li>
                                    <li>
                                      <a href="gallery-excerpt-4-cols-fullwidth.html">
                                        4 columns fullwdith
                                      </a>
                                    </li>
                                  </ul>
                                </li>

                                <li>
                                  <a href="gallery-single.html">Gallery Item</a>
                                  <ul>
                                    <li>
                                      <a href="gallery-single.html">Style 1</a>
                                    </li>
                                    <li>
                                      <a href="gallery-single2.html">Style 2</a>
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                            </li>

                            <li>
                              <a href="team.html">Team</a>
                              <ul>
                                <li>
                                  <a href="team.html">Team List</a>
                                </li>
                                <li>
                                  <a href="team-single.html">Team Member</a>
                                </li>
                              </ul>
                            </li>

                            <li>
                              <a href="faq.html">FAQ</a>
                              <ul>
                                <li>
                                  <a href="faq.html">FAQ</a>
                                </li>
                                <li>
                                  <a href="faq2.html">FAQ 2</a>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <a href="404.html">404</a>
                            </li>
                          </ul>
                        </li>

                        <li>
                          <a href="#">Features</a>
                          <div class="mega-menu">
                            <ul class="mega-menu-row">
                              <li class="mega-menu-col">
                                <a href="#">Headers</a>
                                <ul>
                                  <li>
                                    <a href="header1.html">Header Type 1</a>
                                  </li>
                                  <li>
                                    <a href="header2.html">Header Type 2</a>
                                  </li>
                                  <li>
                                    <a href="header3.html">Header Type 3</a>
                                  </li>
                                  <li>
                                    <a href="header4.html">Header Type 4</a>
                                  </li>
                                  <li>
                                    <a href="header5.html">Header Type 5</a>
                                  </li>
                                  <li>
                                    <a href="header6.html">Header Type 6</a>
                                  </li>
                                </ul>
                              </li>
                              <li class="mega-menu-col">
                                <a href="#">Side Menus</a>
                                <ul>
                                  <li>
                                    <a href="header-side.html">Push Left</a>
                                  </li>
                                  <li>
                                    <a href="header-side-right.html">
                                      Push Right
                                    </a>
                                  </li>
                                  <li>
                                    <a href="header-side-slide.html">
                                      Slide Left
                                    </a>
                                  </li>
                                  <li>
                                    <a href="header-side-slide-right.html">
                                      Slide Right
                                    </a>
                                  </li>
                                  <li>
                                    <a href="header-side-sticked.html">
                                      Sticked Left
                                    </a>
                                  </li>
                                  <li>
                                    <a href="header-side-sticked-right.html">
                                      Sticked Right
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li class="mega-menu-col">
                                <a href="title1.html">Title Sections</a>
                                <ul>
                                  <li>
                                    <a href="title1.html">Title section 1</a>
                                  </li>
                                  <li>
                                    <a href="title2.html">Title section 2</a>
                                  </li>
                                  <li>
                                    <a href="title3.html">Title section 3</a>
                                  </li>
                                  <li>
                                    <a href="title4.html">Title section 4</a>
                                  </li>
                                  <li>
                                    <a href="title5.html">Title section 5</a>
                                  </li>
                                  <li>
                                    <a href="title6.html">Title section 6</a>
                                  </li>
                                </ul>
                              </li>
                              <li class="mega-menu-col">
                                <a href="footer1.html#footer">Footers</a>
                                <ul>
                                  <li>
                                    <a href="footer1.html#footer">
                                      Footer Type 1
                                    </a>
                                  </li>
                                  <li>
                                    <a href="footer2.html#footer">
                                      Footer Type 2
                                    </a>
                                  </li>
                                  <li>
                                    <a href="footer3.html#footer">
                                      Footer Type 3
                                    </a>
                                  </li>
                                  <li>
                                    <a href="footer4.html#footer">
                                      Footer Type 4
                                    </a>
                                  </li>
                                  <li>
                                    <a href="footer5.html#footer">
                                      Footer Type 5
                                    </a>
                                  </li>
                                  <li>
                                    <a href="footer6.html#footer">
                                      Footer Type 6
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li class="mega-menu-col">
                                <a href="copyright1.html#copyright">
                                  Copyright
                                </a>

                                <ul>
                                  <li>
                                    <a href="copyright1.html#copyright">
                                      Copyright 1
                                    </a>
                                  </li>
                                  <li>
                                    <a href="copyright2.html#copyright">
                                      Copyright 2
                                    </a>
                                  </li>
                                  <li>
                                    <a href="copyright3.html#copyright">
                                      Copyright 3
                                    </a>
                                  </li>
                                  <li>
                                    <a href="copyright4.html#copyright">
                                      Copyright 4
                                    </a>
                                  </li>
                                  <li>
                                    <a href="copyright5.html#copyright">
                                      Copyright 5
                                    </a>
                                  </li>
                                  <li>
                                    <a href="copyright6.html#copyright">
                                      Copyright 6
                                    </a>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </div>
                        </li>

                        <li>
                          <a href="blog-right.html">Blog</a>
                          <ul>
                            <li>
                              <a href="blog-right.html">Right Sidebar</a>
                            </li>
                            <li>
                              <a href="blog-left.html">Left Sidebar</a>
                            </li>
                            <li>
                              <a href="blog-full.html">No Sidebar</a>
                            </li>

                            <li>
                              <a href="blog-single-right.html">Post</a>
                              <ul>
                                <li>
                                  <a href="blog-single-right.html">
                                    Right Sidebar
                                  </a>
                                </li>
                                <li>
                                  <a href="blog-single-left.html">
                                    Left Sidebar
                                  </a>
                                </li>
                                <li>
                                  <a href="blog-single-full.html">No Sidebar</a>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </li>

                        <li>
                          <a href="shop-right.html">Shop</a>
                          <ul>
                            <li>
                              <a href="shop-account-dashboard.html">Account</a>
                              <ul>
                                <li>
                                  <a href="shop-account-details.html">
                                    Account details
                                  </a>
                                </li>
                                <li>
                                  <a href="shop-account-addresses.html">
                                    Addresses
                                  </a>
                                </li>
                                <li>
                                  <a href="shop-account-address-edit.html">
                                    Edit Address
                                  </a>
                                </li>
                                <li>
                                  <a href="shop-account-orders.html">Orders</a>
                                </li>
                                <li>
                                  <a href="shop-account-order-single.html">
                                    Single Order
                                  </a>
                                </li>
                                <li>
                                  <a href="shop-account-downloads.html">
                                    Downloads
                                  </a>
                                </li>
                                <li>
                                  <a href="shop-account-password-reset.html">
                                    Password Reset
                                  </a>
                                </li>
                                <li>
                                  <a href="shop-account-login.html">
                                    Login/Logout
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <a href="shop-full.html">Full layout</a>
                            </li>
                            <li>
                              <a href="shop-right.html">Right Sidebar</a>
                            </li>
                            <li>
                              <a href="shop-left.html">Left Sidebar</a>
                            </li>
                            <li>
                              <a href="shop-product-right.html">
                                Product Right Sidebar
                              </a>
                            </li>
                            <li>
                              <a href="shop-product-left.html">
                                Product Left Sidebar
                              </a>
                            </li>
                            <li>
                              <a href="shop-cart.html">Cart</a>
                            </li>
                            <li>
                              <a href="shop-checkout.html">Checkout</a>
                            </li>
                            <li>
                              <a href="shop-order-received.html">
                                Order Received
                              </a>
                            </li>
                          </ul>
                        </li>

                        <li>
                          <a href="contact.html">Contact</a>
                          <ul>
                            <li>
                              <a href="contact.html">Contact 1</a>
                            </li>
                            <li>
                              <a href="contact2.html">Contact 2</a>
                            </li>
                            <li>
                              <a href="contact3.html">Contact 3</a>
                            </li>
                            <li>
                              <a href="contact4.html">Contact 4</a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </nav>
                  </div>
                  <div class="col-xl-3 col-md-7 col-12  d-flex justify-content-md-end">
                    <ul class="top-includes">
                      <li class="metaphone">
                        <a href="#">800 123 4567</a>
                      </li>
                      <li class="special-menu">
                        <span class="toggle_menu toggle_menu_side header-slide toggle_menu_side_special">
                          <span></span>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <span class="toggle_menu">
                <span>menu</span>
              </span>
            </header>
          </div>
          <section class="page_slider">
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
                              <a
                                href="#"
                                class="btn btn-outline-darkgrey big-btn"
                              >
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
                              <a
                                href="#"
                                class="btn btn-outline-darkgrey big-btn"
                              >
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
                  <img src="images/slide03.jpg" alt="img" />
                  <div class="container-fluid">
                    <div class="row">
                      <div class="col-md-12">
                        <div class="intro_layers_wrapper">
                          <div class="intro_layers">
                            <div class="intro_layer">
                              <h6 class="intro_before_featured_word">
                                03. Industry
                              </h6>
                              <h2 class="text-capitalize intro_featured_word">
                                Energy & Commodities
                              </h2>
                              <a
                                href="#"
                                class="btn btn-outline-darkgrey big-btn"
                              >
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

          <section class="ds text-sm-left text-center container-px-0 c-gutter-0">
            <div class="container-fluid">
              <div class="row service-v2">
                <div class="col-sm-6 col-md-4 col-xl-2   ">
                  <div class="icon-box service-single with-icon layout2 ds text-center">
                    <a class="link-icon" href="service-single.html">
                      <div class="icon-styled  fs-50">
                        <i class="ico ico-refinery"></i>
                      </div>
                    </a>
                    <a href="service-single.html">
                      <h5>Thermal Power</h5>
                    </a>

                    <p>Lorem ipsum dolor amet consectetur</p>
                    <a
                      class="btn btn-outline-darkgrey"
                      href="service-single.html"
                    >
                      <i class="fas fa-chevron-right"></i>
                    </a>
                  </div>
                </div>
                <div class="col-sm-6 col-md-4 col-xl-2   ">
                  <div class="icon-box service-single with-icon layout2 ds text-center">
                    <a class="link-icon" href="service-single.html">
                      <div class="icon-styled  fs-50">
                        <i class="ico ico-tank"></i>
                      </div>
                    </a>
                    <a href="service-single.html">
                      <h5>Oil Platform</h5>
                    </a>

                    <p>Adipisicing elit, sed do eiusmod tempor</p>
                    <a
                      class="btn btn-outline-darkgrey"
                      href="service-single.html"
                    >
                      <i class="fas fa-chevron-right"></i>
                    </a>
                  </div>
                </div>
                <div class="col-sm-6 col-md-4 col-xl-2   ">
                  <div class="icon-box service-single with-icon layout2 ds text-center">
                    <a class="link-icon" href="service-single.html">
                      <div class="icon-styled  fs-50">
                        <i class="ico ico-oil"></i>
                      </div>
                    </a>
                    <a href="service-single.html">
                      <h5>Gas Flaring</h5>
                    </a>

                    <p>Incididunt labore dolore magna aliqua</p>
                    <a
                      class="btn btn-outline-darkgrey"
                      href="service-single.html"
                    >
                      <i class="fas fa-chevron-right"></i>
                    </a>
                  </div>
                </div>
                <div class="col-sm-6 col-md-4 col-xl-2   ">
                  <div class="icon-box service-single with-icon layout2 ds text-center">
                    <a class="link-icon" href="service-single.html">
                      <div class="icon-styled  fs-50">
                        <i class="ico ico-extraction"></i>
                      </div>
                    </a>
                    <a href="service-single.html">
                      <h5>Oil Pump</h5>
                    </a>

                    <p>Utenim adminim veniam quis nostrud </p>
                    <a
                      class="btn btn-outline-darkgrey"
                      href="service-single.html"
                    >
                      <i class="fas fa-chevron-right"></i>
                    </a>
                  </div>
                </div>
                <div class="col-sm-6 col-md-4 col-xl-2   ">
                  <div class="icon-box service-single with-icon layout2 ds text-center">
                    <a class="link-icon" href="service-single.html">
                      <div class="icon-styled  fs-50">
                        <i class="ico ico-oil-tanker"></i>
                      </div>
                    </a>
                    <a href="service-single.html">
                      <h5>Oil Refinaery</h5>
                    </a>

                    <p>Ullamco laboris nisi ut aliquip veniam exea</p>
                    <a
                      class="btn btn-outline-darkgrey"
                      href="service-single.html"
                    >
                      <i class="fas fa-chevron-right"></i>
                    </a>
                  </div>
                </div>
                <div class="col-sm-6 col-md-4 col-xl-2   ">
                  <div class="icon-box service-single with-icon layout2 ds text-center">
                    <a class="link-icon" href="service-single.html">
                      <div class="icon-styled  fs-50">
                        <i class="ico ico-pipe"></i>
                      </div>
                    </a>
                    <a href="service-single.html">
                      <h5>Factory</h5>
                    </a>

                    <p>Commodo conquat duis aute irure dolor</p>
                    <a
                      class="btn btn-outline-darkgrey"
                      href="service-single.html"
                    >
                      <i class="fas fa-chevron-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section class="ls main-testimonial s-py-xl-160 s-py-lg-130 s-py-md-90 s-py-60">
            <div class="container">
              <div class="row">
                <div class="col-12 col-lg-3 text-center">
                  <h2 class="special-heading text-center">
                    <span class="text-capitalize">welcome!</span>
                  </h2>
                  <div class="divider-30"></div>
                  <a class="btn btn-gradient big-btn" href="#">
                    get a quote
                  </a>
                </div>
                <div class="col-12 col-lg-6 text-center">
                  <div class="divider-35 hidden-above-lg"></div>
                  <div class="divider--5"></div>
                  <p class="excerpt">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore.
                  </p>
                  <p>
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum doloreu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit animest laborum sed ut perspiciatis unde
                    omnis iste natus error sit voluptatem accusantium
                    doloremque.
                  </p>
                </div>
                <div class="col-12 col-lg-3 text-sm-left text-center">
                  <div class="divider-35 hidden-above-lg"></div>
                  <div class="signature">
                    <div class="signature-image">
                      <img src="images/team/testimonial2.jpg" alt="" />
                    </div>
                    <div class="signature-content">
                      <span>Diana T. Davis</span>
                      <img src="images/signature.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section class="ls  s-py-xl-160 s-py-lg-130 s-py-md-90 s-py-60 text-sm-left text-center container-px-0">
            <div class="cover-image s-cover-left">
              <img src="images/services/service1.jpg" alt="01" />
            </div>
            <div class="container-fluid">
              <div class="row">
                <div class="col-xs-12 col-12 col-lg-6"></div>
                <div class="col-xs-12 col-12 col-lg-6">
                  <div class="content-center">
                    <h2 class="special-heading numeric text-sm-left text-center">
                      <span class="text-capitalize">Chemical Industry</span>
                    </h2>
                    <div class="divider-45 hidden-below-lg"></div>
                    <div class="divider-30 hidden-above-lg"></div>
                    <p>
                      Cillum doloreu fugiat nulla pariatur excepteur si occaecat
                      cupdatat non proident sunt culpaq officia deserunt mollt
                      animest laborum sed perspiciatis unde omnis iste natus
                      errosit voluptatem accuantium doloremque laudantium totam.
                    </p>
                    <div class="divider-45 hidden-below-lg"></div>
                    <div class="divider-30 hidden-above-lg"></div>
                    <ul class="list-styled">
                      <li>Laudantium, totam rem aperiam</li>
                      <li>Eaque ipsa quae ab illo inventore veritatis</li>
                      <li>Quasi architecto beatae</li>
                    </ul>
                    <div class="divider--10"></div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section class="ls  s-py-xl-160 s-py-lg-130 s-py-md-90 s-py-60 text-sm-left text-center container-px-0">
            <div class="cover-image s-cover-right">
              <img src="images/services/service2.jpg" alt="01" />
            </div>

            <div class="container-fluid">
              <div class="row">
                <div class="col-xs-12 col-12 col-lg-6">
                  <div class="content-center">
                    <h2 class="special-heading numeric text-sm-left text-center">
                      <span class="text-capitalize">Saving Technologies</span>
                    </h2>
                    <div class="divider-45 hidden-below-lg"></div>
                    <div class="divider-30 hidden-above-lg"></div>
                    <p>
                      Rem aperiam, eaque ipsa qillo inventore veritatis etquasi
                      architecto beatae vitae dicta sunt explicabo. Nemo enim
                      ipsam voluptatem quia voluptas sit aspernatur aut odit aut
                      fugit sed quia consequuntur magni dolores eos.
                    </p>
                    <div class="divider-45 hidden-below-lg"></div>
                    <div class="divider-30 hidden-above-lg"></div>
                    <div class="shortcode-widget-area">
                      <div class="widget widget_mailchimp">
                        <p>Subscribe to Our Newsletter:</p>

                        <form class="signup" action="/">
                          <label for="mailchimp_email88">
                            <span class="screen-reader-text">Subscribe:</span>
                          </label>
                          <input
                            id="mailchimp_email88"
                            name="email"
                            type="email"
                            class="form-control mailchimp_email has-placeholder"
                            placeholder="Email"
                          />
                          <button type="submit" class="search-submit">
                            <span class="screen-reader-text">Subscribe</span>
                          </button>
                          <div class="response"></div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-xs-12 col-12 col-lg-6"></div>
              </div>
            </div>
          </section>

          <section class="ls  s-py-xl-160 s-py-lg-130 s-py-md-90 s-py-60 text-sm-left text-center container-px-0">
            <div class="cover-image s-cover-left">
              <a
                href="images/services/service3.jpg"
                class="photoswipe-link side-video"
                data-width="800"
                data-height="800"
                data-iframe="https://www.youtube.com/embed/GhthHC0s38A"
              ></a>
              <img src="images/services/service3.jpg" alt="01" />
            </div>
            <div class="container-fluid">
              <div class="row">
                <div class="col-xs-12 col-12 col-lg-6"></div>
                <div class="col-xs-12 col-12 col-lg-6">
                  <div class="content-center">
                    <h2 class="special-heading numeric text-sm-left text-center">
                      <span class="text-capitalize">Military Industry</span>
                    </h2>
                    <div class="divider-45 hidden-below-lg"></div>
                    <div class="divider-30 hidden-above-lg"></div>
                    <p>
                      Qui ratione voluptatem sequi nesciunt. Neque porro
                      quisquam est, qui dolorem ipsum quia dolor sit amet,
                      consectetur, adipisci velit, sed quia non numquam. Watch
                      our presentation:
                    </p>
                    <div class="divider-50 hidden-below-lg"></div>
                    <div class="divider-30 hidden-above-lg"></div>
                    <div id="comingsoon-countdown"></div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section class="ds s-overlay portfolio-section  s-py-xl-160 s-py-lg-130 s-py-md-90 s-py-60 text-center">
            <div class="container">
              <div class="row">
                <div class="col-12">
                  <h2 class="special-heading text-center">
                    <span class="text-capitalize">Our Projects</span>
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
                            <a href="gallery-single.html">
                              Lorem ipsum dolor sit
                            </a>
                          </h6>
                        </div>
                      </div>
                    </div>

                    <div class="col-xl-4 col-sm-6 innovations corporate">
                      <div class="vertical-item item-gallery content-absolute text-center ds">
                        <div class="item-media">
                          <img src="images/gallery/full/02.jpg" alt="img" />
                        </div>
                        <div class="item-content ">
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
                        <div class="item-content ">
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
                            <a href="gallery-single.html">
                              Elitr sed diam nonumy
                            </a>
                          </h6>
                        </div>
                      </div>
                    </div>

                    <div class="col-xl-4 col-sm-6 business entertainment">
                      <div class="vertical-item item-gallery content-absolute text-center ds">
                        <div class="item-media">
                          <img src="images/gallery/full/04.jpg" alt="img" />
                        </div>
                        <div class="item-content ">
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
                            <a href="gallery-single.html">
                              Labore et dolore magna
                            </a>
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
                            <a href="gallery-single.html">
                              Aliquyam erat sed diam
                            </a>
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="mt--30"></div>
                  <div class="row">
                    <div class="col-lg-12">
                      <div class="divider-60"></div>
                      <a
                        class="btn btn-maincolor2 big-btn"
                        href="gallery-image.html"
                      >
                        All projects
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section class="ls  s-py-xl-160 s-py-lg-130 s-py-md-90 s-py-60 text-sm-left text-center c-gutter-60">
            <div class="container">
              <div class="row">
                <div class="col-12 col-lg-6">
                  <h2 class="special-heading text-sm-left text-center">
                    <span class="text-capitalize">FAQ & Information</span>
                  </h2>
                  <div class="divider-50 hidden-below-lg"></div>
                  <div class="divider-30 hidden-above-lg"></div>
                  <div id="accordion01" role="tablist">
                    <div class="card">
                      <div
                        class="card-header"
                        role="tab"
                        id="collapse01_header"
                      >
                        <h5>
                          <a
                            data-toggle="collapse"
                            href="#collapse01"
                            aria-expanded="true"
                            aria-controls="collapse01"
                          >
                            Get to know us
                          </a>
                        </h5>
                      </div>

                      <div
                        id="collapse01"
                        class="collapse show"
                        role="tabpanel"
                        aria-labelledby="collapse01_header"
                        data-parent="#accordion01"
                      >
                        <div class="card-body">
                          Our team has been gelpingclients throughout the
                          country for 10 years lorem ipsum dolor sit amet,
                          consectetur adipisicing elit, sed do eiusmod tempor
                          incididunt.
                        </div>
                      </div>
                    </div>
                    <div class="card">
                      <div
                        class="card-header"
                        role="tab"
                        id="collapse02_header"
                      >
                        <h5>
                          <a
                            class="collapsed"
                            data-toggle="collapse"
                            href="#collapse02"
                            aria-expanded="false"
                            aria-controls="collapse02"
                          >
                            Get Informed
                          </a>
                        </h5>
                      </div>
                      <div
                        id="collapse02"
                        class="collapse"
                        role="tabpanel"
                        aria-labelledby="collapse02_header"
                        data-parent="#accordion01"
                      >
                        <div class="card-body">
                          Our team has been gelpingclients throughout the
                          country for 10 years lorem ipsum dolor sit amet,
                          consectetur adipisicing elit, sed do eiusmod tempor
                          incididunt.
                        </div>
                      </div>
                    </div>
                    <div class="card">
                      <div
                        class="card-header"
                        role="tab"
                        id="collapse03_header"
                      >
                        <h5>
                          <a
                            class="collapsed"
                            data-toggle="collapse"
                            href="#collapse03"
                            aria-expanded="false"
                            aria-controls="collapse03"
                          >
                            Get Help
                          </a>
                        </h5>
                      </div>
                      <div
                        id="collapse03"
                        class="collapse"
                        role="tabpanel"
                        aria-labelledby="collapse03_header"
                        data-parent="#accordion01"
                      >
                        <div class="card-body">
                          Our team has been gelpingclients throughout the
                          country for 10 years lorem ipsum dolor sit amet,
                          consectetur adipisicing elit, sed do eiusmod tempor
                          incididunt.
                        </div>
                      </div>
                    </div>
                    <div class="card">
                      <div
                        class="card-header"
                        role="tab"
                        id="collapse04_header"
                      >
                        <h5>
                          <a
                            class="collapsed"
                            data-toggle="collapse"
                            href="#collapse04"
                            aria-expanded="false"
                            aria-controls="collapse04"
                          >
                            Contact Us
                          </a>
                        </h5>
                      </div>
                      <div
                        id="collapse04"
                        class="collapse"
                        role="tabpanel"
                        aria-labelledby="collapse04_header"
                        data-parent="#accordion01"
                      >
                        <div class="card-body">
                          Our team has been gelpingclients throughout the
                          country for 10 years lorem ipsum dolor sit amet,
                          consectetur adipisicing elit, sed do eiusmod tempor
                          incididunt.
                        </div>
                      </div>
                    </div>
                    <div class="card">
                      <div
                        class="card-header"
                        role="tab"
                        id="collapse09_header"
                      >
                        <h5>
                          <a
                            class="collapsed"
                            data-toggle="collapse"
                            href="#collapse09"
                            aria-expanded="false"
                            aria-controls="collapse09"
                          >
                            Other Questions
                          </a>
                        </h5>
                      </div>
                      <div
                        id="collapse09"
                        class="collapse"
                        role="tabpanel"
                        aria-labelledby="collapse09_header"
                        data-parent="#accordion01"
                      >
                        <div class="card-body">
                          Our team has been gelpingclients throughout the
                          country for 10 years lorem ipsum dolor sit amet,
                          consectetur adipisicing elit, sed do eiusmod tempor
                          incididunt.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-12 col-lg-6">
                  <div class="divider-30 hidden-above-lg"></div>
                  <div class="row isotope-wrapper masonry-layout images-grid c-mb-30 c-gutter-30">
                    <div class="col-lg-4  col-sm-6  ">
                      <a href="#">
                        <div class="bordered text-center p-xl-50 p-20 rounded">
                          <img src="images/partners/01.png" alt="" />
                        </div>
                      </a>
                    </div>
                    <div class="col-lg-4 col-sm-6  ">
                      <a href="#">
                        <div class="bordered text-center p-xl-50 p-20 rounded">
                          <img src="images/partners/02.png" alt="" />
                        </div>
                      </a>
                    </div>
                    <div class="col-lg-4 col-sm-6  ">
                      <a href="#">
                        <div class="bordered text-center p-xl-50 p-20 rounded">
                          <img src="images/partners/03.png" alt="" />
                        </div>
                      </a>
                    </div>
                    <div class="col-lg-4 col-sm-6  ">
                      <a href="#">
                        <div class="bordered text-center p-xl-50 p-20 rounded">
                          <img src="images/partners/04.png" alt="" />
                        </div>
                      </a>
                    </div>
                    <div class="col-lg-4 col-sm-6  ">
                      <a href="#">
                        <div class="bordered text-center p-xl-50 p-20 rounded">
                          <img src="images/partners/05.png" alt="" />
                        </div>
                      </a>
                    </div>
                    <div class="col-lg-4 col-sm-6  ">
                      <a href="#">
                        <div class="bordered text-center p-xl-50 p-20 rounded">
                          <img src="images/partners/06.png" alt="" />
                        </div>
                      </a>
                    </div>
                    <div class="col-lg-4 col-sm-6  ">
                      <a href="#">
                        <div class="bordered text-center p-xl-50 p-20 rounded">
                          <img src="images/partners/07.png" alt="" />
                        </div>
                      </a>
                    </div>
                    <div class="col-lg-4 col-sm-6  ">
                      <a href="#">
                        <div class="bordered text-center p-xl-50 p-20 rounded">
                          <img src="images/partners/08.png" alt="" />
                        </div>
                      </a>
                    </div>
                    <div class="col-lg-4 col-sm-6  ">
                      <a href="#">
                        <div class="bordered text-center p-xl-50 p-20 rounded">
                          <img src="images/partners/09.png" alt="" />
                        </div>
                      </a>
                    </div>
                  </div>
                  <div class="mt--30"></div>
                </div>
              </div>
            </div>
          </section>

          <section
            id="team"
            class="ls ms s-py-xl-160 s-py-lg-130 s-py-md-90 s-py-60"
          >
            <div class="container">
              <div class="row">
                <div class="col-12">
                  <h2 class="special-heading text-center">
                    <span class="text-capitalize">Our Team</span>
                  </h2>
                  <div class="divider-line bg-maincolor text-center"></div>
                  <div class="fw-divider-space divider-25"></div>
                  <p class="special-heading text-center">
                    <span>
                      Neque porro quisquam est, qui dolorem ipsum quia dolor sit
                      amet, consectetur, adipisci velit, sed quia non numquam.
                    </span>
                  </p>
                  <div class="divider-35 hidden-below-lg"></div>
                  <div class="divider-30 hidden-above-lg"></div>
                  <div
                    class="owl-carousel team-carousel"
                    data-center="false"
                    data-nav="false"
                    data-margin="30"
                    data-loop="true"
                    data-responsive-lg="3"
                    data-responsive-md="3"
                    data-responsive-sm="2"
                    data-responsive-xs="1"
                  >
                    <div class="vertical-item text-center">
                      <div class="item-media">
                        <img src="images/team/01.png" alt="team" />
                        <div class="media-links">
                          <span class="social-icons">
                            <a
                              href="#"
                              class="fab fa-facebook-f"
                              title="facebook"
                            ></a>
                            <a
                              href="#"
                              class="fab fa-telegram-plane"
                              title="telegram"
                            ></a>
                            <a
                              href="#"
                              class="fab fa-instagram"
                              title="instagram"
                            ></a>
                          </span>
                        </div>
                      </div>
                      <div class="item-content">
                        <h6>
                          <a href="team-single.html">Roger J. Watkins</a>
                        </h6>
                        <p class="small-text">President</p>
                      </div>
                    </div>

                    <div class="vertical-item text-center">
                      <div class="item-media">
                        <img src="images/team/02.png" alt="team" />
                        <div class="media-links">
                          <span class="social-icons">
                            <a
                              href="#"
                              class="fab fa-facebook-f"
                              title="facebook"
                            ></a>
                            <a
                              href="#"
                              class="fab fa-telegram-plane"
                              title="telegram"
                            ></a>
                            <a
                              href="#"
                              class="fab fa-instagram"
                              title="instagram"
                            ></a>
                          </span>
                        </div>
                      </div>
                      <div class="item-content">
                        <h6>
                          <a href="team-single.html">Anita J. Harker</a>
                        </h6>
                        <p class="small-text">CEO</p>
                      </div>
                    </div>

                    <div class="vertical-item text-center">
                      <div class="item-media">
                        <img src="images/team/03.png" alt="team" />
                        <div class="media-links">
                          <span class="social-icons">
                            <a
                              href="#"
                              class="fab fa-facebook-f"
                              title="facebook"
                            ></a>
                            <a
                              href="#"
                              class="fab fa-telegram-plane"
                              title="telegram"
                            ></a>
                            <a
                              href="#"
                              class="fab fa-instagram"
                              title="instagram"
                            ></a>
                          </span>
                        </div>
                      </div>
                      <div class="item-content">
                        <h6>
                          <a href="team-single.html">Harold K. Cave</a>
                        </h6>
                        <p class="small-text">Coordinator</p>
                      </div>
                    </div>

                    <div class="vertical-item text-center">
                      <div class="item-media">
                        <img src="images/team/04.png" alt="team" />
                        <div class="media-links">
                          <span class="social-icons">
                            <a
                              href="#"
                              class="fab fa-facebook-f"
                              title="facebook"
                            ></a>
                            <a
                              href="#"
                              class="fab fa-telegram-plane"
                              title="telegram"
                            ></a>
                            <a
                              href="#"
                              class="fab fa-instagram"
                              title="instagram"
                            ></a>
                          </span>
                        </div>
                      </div>
                      <div class="item-content">
                        <h6>
                          <a href="team-single.html">Alex M. Richardson</a>
                        </h6>
                        <p class="small-text">CEO</p>
                      </div>
                    </div>

                    <div class="vertical-item text-center">
                      <div class="item-media">
                        <img src="images/team/05.png" alt="team" />
                        <div class="media-links">
                          <span class="social-icons">
                            <a
                              href="#"
                              class="fab fa-facebook-f"
                              title="facebook"
                            ></a>
                            <a
                              href="#"
                              class="fab fa-telegram-plane"
                              title="telegram"
                            ></a>
                            <a
                              href="#"
                              class="fab fa-instagram"
                              title="instagram"
                            ></a>
                          </span>
                        </div>
                      </div>
                      <div class="item-content">
                        <h6>
                          <a href="team-single.html">Tajana N. Emmett</a>
                        </h6>
                        <p class="small-text">Accountant</p>
                      </div>
                    </div>

                    <div class="vertical-item text-center">
                      <div class="item-media">
                        <img src="images/team/06.png" alt="team" />
                        <div class="media-links">
                          <span class="social-icons">
                            <a
                              href="#"
                              class="fab fa-facebook-f"
                              title="facebook"
                            ></a>
                            <a
                              href="#"
                              class="fab fa-telegram-plane"
                              title="telegram"
                            ></a>
                            <a
                              href="#"
                              class="fab fa-instagram"
                              title="instagram"
                            ></a>
                          </span>
                        </div>
                      </div>
                      <div class="item-content">
                        <h6>
                          <a href="team-single.html">Justine E. Inger</a>
                        </h6>
                        <p class="small-text">Manager</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="mt--20"></div>
            </div>
          </section>

          <section class="ds call-to-action text-center  s-py-xl-160 s-py-lg-130 s-py-md-90 s-py-60">
            <div class="container">
              <div class="row">
                <div class="col-12">
                  <h2 class="special-heading text-center">
                    <span class="text-capitalize big">
                      All for Good. Good for All.
                    </span>
                  </h2>
                  <div class="divider-45 hidden-below-lg"></div>
                  <div class="divider-30 hidden-above-lg"></div>
                  <a class="btn btn-darkgrey big-btn" href="blog-right.html">
                    go to blog
                  </a>
                </div>
              </div>
            </div>
          </section>

          <section class="ls map-section s-pt-xl-160 s-pt-lg-130 s-pt-md-90 s-pt-60 s-pb-xl-160 s-pb-lg-130 s-pb-md-90 s-pb-60">
            <div class="container">
              <div class="row">
                <div class="col-lg-6">
                  <h2 class="special-heading">
                    <span class="text-capitalize">
                      We Spread
                      <br /> Around the World
                    </span>
                  </h2>
                  <div class="divider-45 hidden-below-lg"></div>
                  <div class="divider-30 hidden-above-lg"></div>
                  <p class="special-heading">
                    <span>
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco
                      laboris nisi ut aliquip ex ea commodo consequat.
                    </span>
                  </p>
                  <div class="divider-45 hidden-below-lg"></div>
                  <div class="divider-30 hidden-above-lg"></div>
                  <div class="d-flex flex-column flex-sm-row justify-content-between flex-wrap ">
                    <div class="simple-counter">
                      <h3 class="special-heading counter-wrap">
                        <span
                          class="counter color-main thin big"
                          data-from="0"
                          data-to="22"
                          data-speed="1800"
                        >
                          0
                        </span>
                      </h3>
                      <p class="special-heading bold color-darkgrey">
                        <span>Years</span>
                      </p>
                      <h6 class="special-heading text-capitalize">
                        <span>Experience</span>
                      </h6>
                    </div>
                    <div class="divider-30 hidden-above-sm"></div>
                    <div class="simple-counter">
                      <h3 class="special-heading counter-wrap">
                        <span
                          class="counter color-main thin big"
                          data-from="0"
                          data-to="65"
                          data-speed="1800"
                        >
                          0
                        </span>
                      </h3>
                      <p class="special-heading bold color-darkgrey">
                        <span>Offices</span>
                      </p>
                      <h6 class="special-heading text-capitalize">
                        <span>Worldwide</span>
                      </h6>
                    </div>
                    <div class="divider-30 hidden-above-sm"></div>
                    <div class="simple-counter">
                      <h3 class="special-heading counter-wrap">
                        <span
                          class="counter color-main thin big"
                          data-from="0"
                          data-to="15"
                          data-speed="1800"
                        >
                          0
                        </span>
                        <span class="counter-add thin color-main big">k</span>
                      </h3>
                      <p class="special-heading bold color-darkgrey">
                        <span>Workers</span>
                      </p>
                      <h6 class="special-heading text-capitalize">
                        <span>Employed</span>
                      </h6>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="divider-40 hidden-above-lg"></div>
                  <div id="map-vector"></div>
                </div>
              </div>
            </div>
          </section>

          <section class="ls ms s-pt-xl-160 s-pt-lg-130 s-pt-md-90 s-pt-60 s-pb-xl-280 s-pb-lg-250 s-pb-md-90 s-pb-60">
            <div class="container">
              <div class="row">
                <div class="col-12">
                  <h2 class="special-heading text-center">
                    <span class="text-capitalize">Latest News</span>
                  </h2>
                  <p class="special-heading text-center">
                    <span class="text-capitalize color-darkgrey bold">
                      our blog
                    </span>
                  </p>
                  <div class="divider-50 hidden-below-lg"></div>
                  <div class="divider-30 hidden-above-lg"></div>
                  <div class="shortcode-posts row tiled-layout c-gutter-30 c-mb-30">
                    <div class="bigitem col-xl-6 col-lg-5">
                      <article class="vertical-item ls rounded post type-post status-publish format-standard has-post-thumbnail">
                        <div class="item-media post-thumbnail">
                          <a href="blog-single-@@type.html">
                            <img src="images/blog/01.jpg" alt="img" />
                          </a>
                        </div>
                        <div class="item-content">
                          <header class="entry-header">
                            <div class="entry-meta">
                              <div class="byline">
                                <span class="date">
                                  <a href="blog-@@type.html" rel="bookmark">
                                    <time
                                      class="published entry-date"
                                      datetime="2019-04-09T12:23:09+00:00"
                                    >
                                      20.03.2019
                                    </time>
                                  </a>
                                </span>
                                <span class="author vcard">
                                  <a
                                    class="url fn n"
                                    href="blog-@@type.html"
                                    rel="author"
                                  >
                                    <span>by</span> Admin
                                  </a>
                                </span>
                              </div>
                            </div>
                            <h4 class="entry-title">
                              <a href="blog-single-@@type.html" rel="bookmark">
                                Consectetur adipisicing elited do eiusmod tempor
                                incididunt ut labore.
                              </a>
                            </h4>
                          </header>

                          <div class="entry-content">
                            <p>
                              Tempor incididunt labore dolmagna aliqua eniminim
                              veniam quis nostrud exercitation ullamco laboris
                              nisi ut aliquip ex ea commodo consequat. Duis aute
                              irure dolor in reprehenderit in voluptate.
                            </p>
                          </div>
                        </div>
                      </article>
                    </div>
                    <div class=" smallitem col-xl-6 col-lg-7">
                      <article class="vertical-item side-item ls rounded post type-post status-publish format-standard has-post-thumbnail">
                        <div class="item-media post-thumbnail">
                          <a href="blog-single-@@type.html">
                            <img src="images/blog/square/02.jpg" alt="img" />
                          </a>
                        </div>
                        <div class="item-content">
                          <header class="entry-header">
                            <div class="entry-meta">
                              <div class="byline">
                                <span class="date">
                                  <a href="blog-@@type.html" rel="bookmark">
                                    <time
                                      class="published entry-date"
                                      datetime="2019-04-09T12:23:09+00:00"
                                    >
                                      20.03.2019
                                    </time>
                                  </a>
                                </span>
                                <span class="author vcard">
                                  <a
                                    class="url fn n"
                                    href="blog-@@type.html"
                                    rel="author"
                                  >
                                    <span>by</span> Admin
                                  </a>
                                </span>
                              </div>
                            </div>
                            <h4 class="entry-title">
                              <a href="blog-single-@@type.html" rel="bookmark">
                                Lorem ipsum dolor sit amet consectetur
                              </a>
                            </h4>
                          </header>

                          <div class="entry-content">
                            <p>
                              Tempor incididunt labore dolmagna aliqua eniminim
                              veniam quis.
                            </p>
                          </div>
                        </div>
                      </article>
                      <article class="vertical-item side-item ls rounded post type-post status-publish format-standard has-post-thumbnail">
                        <div class="item-media post-thumbnail">
                          <a href="blog-single-@@type.html">
                            <img src="images/blog/square/03.jpg" alt="img" />
                          </a>
                        </div>
                        <div class="item-content">
                          <header class="entry-header">
                            <div class="entry-meta">
                              <div class="byline">
                                <span class="date">
                                  <a href="blog-@@type.html" rel="bookmark">
                                    <time
                                      class="published entry-date"
                                      datetime="2019-04-09T12:23:09+00:00"
                                    >
                                      20.03.2019
                                    </time>
                                  </a>
                                </span>
                                <span class="author vcard">
                                  <a
                                    class="url fn n"
                                    href="blog-@@type.html"
                                    rel="author"
                                  >
                                    <span>by</span> Admin
                                  </a>
                                </span>
                              </div>
                            </div>
                            <h4 class="entry-title">
                              <a href="blog-single-@@type.html" rel="bookmark">
                                Adipisicing elit sed do eiusmod
                              </a>
                            </h4>
                          </header>

                          <div class="entry-content">
                            <p>
                              Nstrud exercitation ullamco laboris nisi ut
                              aliquip ex ea commodo.
                            </p>
                          </div>
                        </div>
                      </article>
                    </div>
                  </div>
                  <div class="mt--30"></div>
                </div>
              </div>
            </div>
          </section>

          <footer class="page_footer  text-center c-gutter-100 text-sm-left  ds">
            <div class="container">
              <div class="row justify-content-center">
                <div
                  class="col-lg-4 col-md-6 order-1 order-lg-1  animate"
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
                    eiusmod tempor incididunt ut labordolore magna aliqua
                    eniminim
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
                    &copy; Copyright <span class="copyright_year">2019</span>{" "}
                    All Rights Reserved
                  </h6>
                </div>

                <div
                  class="col-lg-4 col-md-6 order-2 order-lg-3 animate"
                  data-animation="fadeInUp"
                >
                  <div class="fw-divider-space divider-xl-160 divider-lg-130 divider-md-90"></div>
                  <div class="widget widget_icons_list">
                    <ul>
                      <li class="icon-inline ">
                        <div class="icon-styled icon-top  bordered round fs-16">
                          <i class="fas fa-phone"></i>
                        </div>
                        <p>800 123 4567</p>
                      </li>
                      <li class="icon-inline">
                        <div class="icon-styled icon-top bordered round  fs-16">
                          <i class="fas fa-envelope"></i>
                        </div>
                        <p>
                          <a href="#">nafta@example.com</a>
                        </p>
                      </li>
                      <li class="icon-inline">
                        <div class="icon-styled icon-top bordered round  fs-16">
                          <i class="fas fa-map-marker-alt"></i>
                        </div>
                        <p>
                          2469 Hoffman Avenue
                          <br />
                          New York, NY 10016
                        </p>
                      </li>
                      <li class="icon-inline">
                        <div class="icon-styled icon-top bordered round  fs-16">
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
        </div>
      </div>
    </>
  );
};
export default home