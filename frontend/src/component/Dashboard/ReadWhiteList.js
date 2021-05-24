import React, { useState } from 'react'
import Web3 from 'web3';
import { SeedifyFundsContractAbi } from '../abis';

const web3 = new Web3(Web3.givenProvider);
// contract address
const contractAddr = '0xC499F995cbc8EE13d47c742dFCb6D88D6993016f';
const SimpleContract = new web3.eth.Contract(SeedifyFundsContractAbi, contractAddr);

//function TransferOwnership
const ReadWhiteList = () => {
  const [number, setNumber] = useState();

  const handleSet = async (e) => {
    e.preventDefault();    
    const accounts = await window.ethereum.enable();
    const account = accounts[0];
    const gas = await SimpleContract.methods.getWhitelistOne(number).estimateGas();
    const result = await SimpleContract.methods.getWhitelistOne(number).send({
      from: account,
      gas 
    })
    console.log(result);
  }


  return (
    <div>
      <div className="right-panel-main">
        <h2>Read White List</h2>
        <div className="rightpanel-form">
          <div className="form-inner">
            <div className="form-group">
              <label>Get White LIst One</label>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <input type="text" className="input-form" value={number} onChange={ e => setNumber(e.target.value) } placeholder="Enter white list" />

                <button onClick={handleSet} type="button" className="bttn">
                  QUERY
                </button>
              </div>
            </div>
          </div>

          <div className="form-inner">
            <div className="form-group">
              <label>Get White LIst Two</label>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <input
                  type="email"
                  className="input-form"
                  placeholder="Enter white list"
                />
                <button type="button" className="bttn">
                  QUERY
                </button>
              </div>
            </div>
          </div>

          <div className="form-inner">
            <div className="form-group">
              <label>Get White LIst Three</label>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <input
                  type="email"
                  className="input-form"
                  placeholder="Enter white list"
                />
                <button type="button" className="bttn">
                  QUERY
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReadWhiteList;
