import React from "react";
import './FeaturedPool.css'

import img2 from '../../images/img2.png'

const FeaturedPool = ({pool}) => {
  var x = pool.images;
  if (x) {
    var imagepath = require(`../../static/${x}`);
  }
  return (
    <div className="pool_card">
      <div className="tit_le">
      <img src={imagepath ? imagepath.default : ""} alt="" />
        <h3>
        {pool.title}<span>1 BNB = {pool.price} NLS</span>
        </h3>
      </div>
      <p>
      {pool.content}...<a href="#dfd">Read more</a>
      </p>
      <div className="raise">
        <p>Total Raise</p>
        <h2>${pool.up_pool_raise} BNB</h2>
      </div>
      <div className="prog_bar">
        <div className="prog_bar_grd">
          <span className="prog">Progress</span>
          <span className="parti">Participants {pool.participants}</span>
        </div>
        <div className="progress">
          <div className="bar" style={{width: '35%'}}>
            <p className="percent">35%</p>
          </div>
        </div>
        <div className="prog_bar_grd">
          <span className="prog _percent">67,4 %</span>
          <span className="parti _nls">34562 / 12 600 000 nls</span>
        </div>
      </div>
      <div className="allocation">
        <div>
          <p>Maximum</p>
          <h3>0.183 BNB</h3>
        </div>
        <div>
          <p>Access</p>
          <h3>{pool.up_pool_access}</h3>
        </div>
      </div>
    </div>
  );
};

export default FeaturedPool;
