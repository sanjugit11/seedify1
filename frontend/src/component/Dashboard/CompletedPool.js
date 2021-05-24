import React from "react";

const CompletedPool = () => {
  return (
    <div id="tabs-2">
      <div className="completed">
        <table>
          <thead>
            <tr>
              <th>
                ico name <i className="fa fa-sort" aria-hidden="true"></i>
              </th>
              <th>
                {" "}
                total supply <i className="fa fa-sort" aria-hidden="true"></i>
              </th>
              <th>
                ratio <i className="fa fa-sort" aria-hidden="true"></i>
              </th>
              <th>
                remaining time <i className="fa fa-sort" aria-hidden="true"></i>
              </th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div className="client-img"></div>
                <div className="client-info">
                  <h5>Name of the ICO</h5>
                  <h6>Contract address</h6>
                </div>
              </td>
              <td>
                <p className="total-sfund">
                  35662 <span>sfund</span>
                </p>
                <div className="percentage-border"></div>
                <span className="first">67.4%</span>
                <span className="second">3456/12 600 000 SFUND</span>
              </td>
              <td className="sfund">1 ETH = 4563 SFUND</td>
              <td className="day">1 day 6h 23 min</td>
              <td>
                <a href="#kk" className="detail">
                  details
                </a>
                <a href="#ff" className="coming-soon">
                  Finised
                </a>
              </td>
              <td>
                <a href="javascript:void(0);" className="fa fa-pencil-square-o"></a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CompletedPool;
