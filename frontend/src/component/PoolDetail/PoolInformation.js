import React from "react";

import "./TokenInformation.css";

const PoolInformation = ({pool_detail}) => {
  return (
    <>
      <div className="pool_details">
        <div className="container_cust">
          <div className="inner_pool_details">
            <div className="table">
              <table cellSpacing={0}>
                <tr>
                  <th align="left" colSpan={2}>
                    Pool Information
                  </th>
                </tr>
                <tr>
                  <td align="left">
                    <span>Token Distribution</span>
                  </td>
                  <td align="right">April 9th 2021, 2:30 PM UTC</td>
                </tr>
                <tr>
                  <td align="left">
                    <span>Min. Allocation</span>
                  </td>
                  <td align="right">{pool_detail.min_allocation}</td>
                </tr>

                <tr>
                  <td align="left">
                    <span>Max. Allocation</span>
                  </td>
                  <td align="right">{pool_detail.max_allocation} BNB</td>
                </tr>

                <tr>
                  <td align="left">
                    <span>Min Swap Level</span>
                  </td>
                  <td align="right">{pool_detail.min_swap_level} BNB</td>
                </tr>

                <tr>
                  <td align="left">
                    <span>Access Type</span>
                  </td>
                  <td align="right">{pool_detail.up_pool_access}</td>
                </tr>
              </table>
            </div>
            <div className="table">
              <table cellSpacing={0}>
                <tr>
                  <th align="left" colSpan={2}>
                    Token Information
                  </th>
                </tr>
                <tr>
                  <td align="left">
                    <span>Name</span>
                  </td>
                  <td align="right">{pool_detail.title}</td>
                </tr>
                <tr>
                  <td align="left">
                    <span>Symbol</span>
                  </td>
                  <td align="right">{pool_detail.symbol}</td>
                </tr>

                <tr>
                  <td align="left">
                    <span>Decimals</span>
                  </td>
                  <td align="right">{pool_detail.decimal}</td>
                </tr>

                <tr>
                  <td align="left">
                    <span>Address</span>
                  </td>
                  <td className="address_break" align="right">
                    {pool_detail.address}
                  </td>
                </tr>

                <tr>
                  <td align="left">
                    <span>Total Supply</span>
                  </td>
                  <td align="right">{pool_detail.total_supply}</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PoolInformation;
