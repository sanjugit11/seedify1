import React from "react";
import './Banner.css'

const Banner = () => {
  return (
    <div>
      <div className="banner">
        <div className="container_cust">
          <div className="inner_banner">
            <h1>
              Raise Capital In a<br /> Community-Driven Way
            </h1>
            <p>
              <span>Seedify.fund</span> is a blockchain-focused seed stage fund,
              decentralized
              <br /> incubator program and token sale launchpad driven by a DAO{" "}
              <br />
              (decentralized autonomous organization){" "}
            </p>
            <a className="gen_btn btn_orange" href="#SS">
              Join
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Banner;
