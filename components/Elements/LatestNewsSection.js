const LatestNewsSection = () => {
  return (
    <>
      <section class="ls ms s-pt-xl-160 s-pt-lg-130 s-pt-md-90 s-pt-60 s-pb-xl-280 s-pb-lg-250 s-pb-md-90 s-pb-60">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <h2 class="special-heading text-center">
                <span class="text-capitalize"> Latest News </span>
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
                          veniam quis nostrud exercitation ullamco laboris nisi
                          ut aliquip ex ea commodo consequat. Duis aute irure
                          dolor in reprehenderit in voluptate.
                        </p>
                      </div>
                    </div>
                  </article>
                </div>
                <div class="smallitem col-xl-6 col-lg-7">
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
                          Nstrud exercitation ullamco laboris nisi ut aliquip ex
                          ea commodo.
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
    </>
  );
};

export default LatestNewsSection;