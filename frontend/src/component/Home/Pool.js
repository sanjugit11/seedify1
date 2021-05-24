import React from "react";
import "./Pool.css";



const Pool = ({pool}) => {

  var x = pool.images;
  if (x) {
    var imagepath = require(`../../static/${x}`);
  }

  return (
    <div className="pool_card">
      <div className="tit_le">
      <img src={imagepath ? imagepath.default : ""} alt="" />
        <h3>
          {pool.title}<span>In {pool.time_duration} days</span>
        </h3>
      </div>
      <p>
        {pool.content}...<a href="#fjkhdf">Read more</a>
      </p>
      <div className="raise">
        <p>Total Raise</p>
        <h2>${pool.up_pool_raise}k</h2>
      </div>

      <div className="allocation">
        <div>
          <p>Min Allocation</p>
          <h3>{pool.min_allocation}</h3>
        </div>
        <div>
          <p>Max Allocation</p>
          <h3>${pool.max_allocation}</h3>
        </div>
        <div>
          <p>Access</p>
          <h3>{pool.up_pool_access}</h3>
        </div>
      </div>
    </div>
  );
};

export default Pool;
