const StatisticsMap = () => {
  return (
    <>
      <section className="ls map-section s-pt-xl-160 s-pt-lg-130 s-pt-md-90 s-pt-60 s-pb-xl-160 s-pb-lg-130 s-pb-md-90 s-pb-60">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h2 className="special-heading">
                <span className="text-capitalize">
                  We Spread
                  <br />
                  Around the World
                </span>
              </h2>
              <div className="divider-45 hidden-below-lg"></div>
              <div className="divider-30 hidden-above-lg"></div>
              <p className="special-heading">
                <span>
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </span>
              </p>
              <div className="divider-45 hidden-below-lg"></div>
              <div className="divider-30 hidden-above-lg"></div>
              <div className="d-flex flex-column flex-sm-row justify-content-between flex-wrap">
                <div className="simple-counter">
                  <h3 className="special-heading counter-wrap">
                    <span
                      className="counter color-main thin big"
                      data-from="0"
                      data-to="22"
                      data-speed="1800"
                    >
                      0
                    </span>
                  </h3>
                  <p className="special-heading bold color-darkgrey">
                    <span> Years </span>
                  </p>
                  <h6 className="special-heading text-capitalize">
                    <span> Experience </span>
                  </h6>
                </div>
                <div className="divider-30 hidden-above-sm"></div>
                <div className="simple-counter">
                  <h3 className="special-heading counter-wrap">
                    <span
                      className="counter color-main thin big"
                      data-from="0"
                      data-to="65"
                      data-speed="1800"
                    >
                      0
                    </span>
                  </h3>
                  <p className="special-heading bold color-darkgrey">
                    <span> Offices </span>
                  </p>
                  <h6 className="special-heading text-capitalize">
                    <span> Worldwide </span>
                  </h6>
                </div>
                <div className="divider-30 hidden-above-sm"></div>
                <div className="simple-counter">
                  <h3 className="special-heading counter-wrap">
                    <span
                      className="counter color-main thin big"
                      data-from="0"
                      data-to="15"
                      data-speed="1800"
                    >
                      0
                    </span>
                    <span className="counter-add thin color-main big">k</span>
                  </h3>
                  <p className="special-heading bold color-darkgrey">
                    <span> Workers </span>
                  </p>
                  <h6 className="special-heading text-capitalize">
                    <span> Employed </span>
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="divider-40 hidden-above-lg"></div>
              <div id="map-vector"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default StatisticsMap;
