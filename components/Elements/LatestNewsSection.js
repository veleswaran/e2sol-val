const LatestNewsSection = () => {
  return (
    <>
      <section className="ls ms s-pt-xl-160 s-pt-lg-130 s-pt-md-90 s-pt-60 s-pb-xl-280 s-pb-lg-250 s-pb-md-90 s-pb-60">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="special-heading text-center">
                <span className="text-capitalize"> Latest News </span>
              </h2>
              <p className="special-heading text-center">
                <span className="text-capitalize color-darkgrey bold">
                  our blog
                </span>
              </p>
              <div className="divider-50 hidden-below-lg"></div>
              <div className="divider-30 hidden-above-lg"></div>
              <div className="shortcode-posts row tiled-layout c-gutter-30 c-mb-30">
                <div className="bigitem col-xl-6 col-lg-5">
                  <article className="vertical-item ls rounded post type-post status-publish format-standard has-post-thumbnail">
                    <div className="item-media post-thumbnail">
                      <a href="#">
                        <img src="images/blog/01.jpg" alt="img" />
                      </a>
                    </div>

                    <div className="item-content">
                      <header className="entry-header">
                        <div className="entry-meta">
                          <div className="byline">
                            <span className="date">
                              <a href="#" rel="bookmark">
                                <time
                                  className="published entry-date"
                                  date-time="2019-04-09T12:23:09+00:00"
                                >
                                  20.03.2019
                                </time>
                              </a>
                            </span>
                            <span className="author vcard">
                              <a
                                className="url fn n"
                                href="#"
                                rel="author"
                              >
                                <span>by</span> Admin
                              </a>
                            </span>
                          </div>
                        </div>
                        <h4 className="entry-title">
                          <a href="#" rel="bookmark">
                            Consectetur adipisicing elited do eiusmod tempor
                            incididunt ut labore.
                          </a>
                        </h4>
                      </header>

                      <div className="entry-content">
                        <p>
                          Tempor incididunt labore dolmagna aliqua eniminim
                          veniam quis nostrud exercitation ullamco laboris nisi
                          ut aliquip ex ea commodo consequat. Duis aute irure
                          dolor in reprehenderit in voluptate.
                        </p>
                      </div>
                    </div>
                  </article>
                </div>
                <div className="smallitem col-xl-6 col-lg-7">
                  <article className="vertical-item side-item ls rounded post type-post status-publish format-standard has-post-thumbnail">
                    <div className="item-media post-thumbnail">
                      <a href="#">
                        <img src="images/blog/square/02.jpg" alt="img" />
                      </a>
                    </div>

                    <div className="item-content">
                      <header className="entry-header">
                        <div className="entry-meta">
                          <div className="byline">
                            <span className="date">
                              <a href="#" rel="bookmark">
                                <time
                                  className="published entry-date"
                                  date-time="2019-04-09T12:23:09+00:00"
                                >
                                  20.03.2019
                                </time>
                              </a>
                            </span>
                            <span className="author vcard">
                              <a
                                className="url fn n"
                                href="#"
                                rel="author"
                              >
                                <span>by</span> Admin
                              </a>
                            </span>
                          </div>
                        </div>
                        <h4 className="entry-title">
                          <a href="#" rel="bookmark">
                            Lorem ipsum dolor sit amet consectetur
                          </a>
                        </h4>
                      </header>

                      <div className="entry-content">
                        <p>
                          Tempor incididunt labore dolmagna aliqua eniminim
                          veniam quis.
                        </p>
                      </div>
                    </div>
                  </article>
                  <article className="vertical-item side-item ls rounded post type-post status-publish format-standard has-post-thumbnail">
                    <div className="item-media post-thumbnail">
                      <a href="#">
                        <img src="images/blog/square/03.jpg" alt="img" />
                      </a>
                    </div>

                    <div className="item-content">
                      <header className="entry-header">
                        <div className="entry-meta">
                          <div className="byline">
                            <span className="date">
                              <a href="#" rel="bookmark">
                                <time
                                  className="published entry-date"
                                  date-time="2019-04-09T12:23:09+00:00"
                                >
                                  20.03.2019
                                </time>
                              </a>
                            </span>
                            <span className="author vcard">
                              <a
                                className="url fn n"
                                href="#"
                                rel="author"
                              >
                                <span>by</span> Admin
                              </a>
                            </span>
                          </div>
                        </div>
                        <h4 className="entry-title">
                          <a href="#" rel="bookmark">
                            Adipisicing elit sed do eiusmod
                          </a>
                        </h4>
                      </header>

                      <div className="entry-content">
                        <p>
                          Nstrud exercitation ullamco laboris nisi ut aliquip ex
                          ea commodo.
                        </p>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
              <div className="mt--30"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LatestNewsSection;