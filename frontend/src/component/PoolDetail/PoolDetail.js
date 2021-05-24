import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getDataAPI } from "../../utils/API";
import getWeb3 from "../../getWeb3";

import Header from "../Home/Header";
import "./PoolDetail.css";
import PoolInformation from "./PoolInformation";
import AboutProject from "./AboutProject";

import img1 from "../../images/img1.png";
import Vector1 from "../../images/Vector1.png";
import Vector2 from "../../images/Vector2.png";
import Vector3 from "../../images/Vector3.png";
import Vector4 from "../../images/Vector4.png";
import Vector5 from "../../images/Vector5.png";
import Vector6 from "../../images/Vector6.png";
import bitcoin from "../../images/bitcoin.png";
const PoolDetail = () => {
  const [pool_detail, setPool_detail] = useState("");
  const web3 = getWeb3();
  const transactionMetamask = async () => {
    try {
      const address = await web3.eth.getAccounts();
      web3.eth.sendTransaction({
        to: pool_detail.address,
        from: address[0],
        value: web3.utils.toWei("0.000001", "ether"),
      });
    } catch (error) {
      return {
        connectedStatus: false,
        status: "🦊 there is some problem in transaction",
      };
    }
  };

  const id = useParams().id;
  useEffect(() => {
    getDataAPI(`getPool/${id}`).then((res) => setPool_detail(res.data));
  }, [id]);

  var x = pool_detail.images;
  if (x) {
    var imagepath = require(`../../static/${x}`);
  }

  return (
    <div>
      <Header />
      <div className="pool_detail_banner">
        <div className="container_cust">
          <div className="inner_pool_detail_banner">
            <div className="left_ban">
              <div className="ti_tle">
                <img src={imagepath ? imagepath.default : ""} alt="" />
                <div>
                  <h3>{pool_detail.title}</h3>

                  <p>{pool_detail.content}</p>
                  <div className="socia_l">
                    <a href="#fd">
                      <img src={Vector1} alt="" />
                    </a>
                    <a href="#fd">
                      <img src={Vector2} alt="" />
                    </a>
                    <a href="#fd">
                      <img src={Vector3} alt="" />
                    </a>
                    <a href="#fd">
                      <img src={Vector4} alt="" />
                    </a>
                    <a href="#fd">
                      <img src={Vector5} alt="" />
                    </a>
                    <a href="#fd">
                      <img src={Vector6} alt="" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="right_ban">
              <div className="detail_card">
                <div className="gen_btnn">
                  <button
                    className="gen_btnn btnn_white"
                    onClick={() => transactionMetamask()}
                  >
                    Payment
                  </button>
                </div>
                <div className="tit_le2">
                  <img src={bitcoin} alt="" />
                  <h3>
                    Binance Coin <span> 1 BNB = 34563,00 NLS</span>
                  </h3>
                </div>
                <div className="allocation">
                  <div>
                    <p>Swap Amount</p>
                    <h3>{pool_detail.swap_amount} BNB</h3>
                  </div>
                  <div className="rts">
                    <p>Closes in</p>
                    <h3>{pool_detail.closes_in} Days</h3>
                  </div>
                </div>
                <div className="prog_bar">
                  <div className="prog_bar_grd">
                    <span className="prog">Progress</span>
                    <span className="parti">
                      Participants {pool_detail.participants}
                    </span>
                  </div>
                  <div className="progress">
                    <div className="bar" style={{ width: "35%" }}>
                      <p className="percent">35%</p>
                    </div>
                  </div>
                  <div className="prog_bar_grd">
                    <span className="prog _percent">67,4 %</span>
                    <span className="parti _nls">34562 / 12 600 000 nls</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <PoolInformation pool_detail={pool_detail} />
      <AboutProject pool_detail={pool_detail} />
    </div>
  );
};

export default PoolDetail;
