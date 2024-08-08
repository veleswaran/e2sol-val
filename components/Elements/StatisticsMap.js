const StatisticsMap = () => {
  return (
    <>
      <section class="ls map-section s-pt-xl-160 s-pt-lg-130 s-pt-md-90 s-pt-60 s-pb-xl-160 s-pb-lg-130 s-pb-md-90 s-pb-60">
        <div class="container">
          <div class="row">
            <div class="col-lg-6">
              <h2 class="special-heading">
                <span class="text-capitalize">
                  We Spread
                  <br />
                  Around the World
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
              <div class="d-flex flex-column flex-sm-row justify-content-between flex-wrap">
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
                    <span> Years </span>
                  </p>
                  <h6 class="special-heading text-capitalize">
                    <span> Experience </span>
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
                    <span> Offices </span>
                  </p>
                  <h6 class="special-heading text-capitalize">
                    <span> Worldwide </span>
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
                    <span> Workers </span>
                  </p>
                  <h6 class="special-heading text-capitalize">
                    <span> Employed </span>
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
    </>
  );
};
export default StatisticsMap;
