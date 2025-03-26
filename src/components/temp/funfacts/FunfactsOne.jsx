"use client"; // Use this if you're using Next.js 13+ and your file is in the app directory;
import CounterUp from './CounterGlobal'; // Ensure this path is correct
function FunFacts() {

  return (
    <div>
      {/* Start Main Counter up-5 Area  */}
      <div className="tmp-counterup-area tmp-section-gapTop">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-head">
                <div className="section-sub-title center-title">
                  <img
                    src="/assets/images/services/section-custom-menubar.png" // Adjusted to use a relative path
                    alt="Corporate_service"
                  />
                  <span className="subtitle">15000 Trusted</span>
                </div>
                <h2 className="title split-collab">Happy customers</h2>
              </div>
            </div>
          </div>
          <div className="row g-5 mt--20 counter_animation">
            <div className="col-lg-3 col-md-6 col-sm-6 col-12 wow fadeInLeft" data-wow-duration=".8s" data-wow-delay=".1s">
              <div className="count-box counter-style-4 text-center">
                <div>
                  <CounterUp end={669} />
                </div>
                <h5 className="counter-title">Happy Clients.</h5>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-12 wow fadeInLeft" data-wow-duration=".8s" data-wow-delay=".2s">
              <div className="count-box counter-style-4 text-center">
                <div>
                  <CounterUp end={580} />
                </div>
                <h5 className="counter-title">Employees</h5>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-12 wow fadeInLeft" data-wow-duration=".8s" data-wow-delay=".3s">
              <div className="count-box counter-style-4 text-center">
                <div>
                  <CounterUp end={356} />
                </div>
                <h5 className="counter-title">Useful Programs</h5>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-12 wow fadeInLeft" data-wow-duration=".8s" data-wow-delay=".4s">
              <div className="count-box counter-style-4 text-center">
                <div>
                  <CounterUp end={953} />
                </div>
                <h5 className="counter-title">More Clients</h5> {/* Fixed the title */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Main Counter up-5 Area  */}
    </div>
  );
}

export default FunFacts;
