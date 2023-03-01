import coinimg from "../images/coinimg.jpg";

export const StartEarn = () => {
  return (
    <div className="container-fluid earnBox">
      <div className="row">
        <div className="col-md-6">
          <div className="container innerEarnBox">
            <h2 className="">Earn up to $25 worth of crypto</h2>
            <p className="earnBox-p text-left">
              Discover how specific cryptocurrencies work — and get a bit of
              each crypto to try out for yourself.
            </p>
            <a color="slate" weight="inherit" className="" href="/earn">
              <button type="primary" className="btn btn-primary">
                <span className="">Start earning</span>
              </button>
            </a>
          </div>
        </div>
        <div className="col-md-6">
          <img src={coinimg} alt="alt" />
        </div>
      </div>
    </div>
  );
};
