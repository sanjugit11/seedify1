import React from "react";
import { Link } from "react-router-dom";


const UpcommingPool = ({ upcpool }) => {
  var x = upcpool.images;
 
  if (x) {
    var imageName = require(`../../static/${x}`);
  }

  return (
    <div>
      <div className="inner-box">
        <div className="media">
          <div className="client-name">
            <div className="client-img">
              <img src={imageName ? imageName.default : ""} alt="" />
            </div>
            <div className="client-info">
              <h5>{upcpool.title}</h5>
              <h6>Contract address</h6>
            </div>
          </div>
          <Link
            to={`/admin/editico/${upcpool._id}`}
            className="fa fa-pencil-square-o"
          ></Link>
        </div>
        <div className="radio">Radio per 1 ETH</div>
        <div className="na">
          N/A <span>sfund</span>
        </div>
        <div className="border"></div>
        <div className="percentage">
          <span className="total">0%</span>
          <span className="sfund">0/12 600 000 SFUND</span>
        </div>
        <div className="text-center">
          <a href="#ff" className="detail">
            details
          </a>
          <a href="#ff" className="coming-soon">
            coming soon
          </a>
        </div>
      </div>
    </div>
  );
};

export default UpcommingPool;
