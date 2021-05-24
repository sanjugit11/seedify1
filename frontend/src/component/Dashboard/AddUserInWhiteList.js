import React, { useState } from 'react'
import Web3 from 'web3';
import { SeedifyFundsContractAbi } from '../abis';

const web3 = new Web3(Web3.givenProvider);
// contract address
const contractAddr = '0xC499F995cbc8EE13d47c742dFCb6D88D6993016f';
const SimpleContract = new web3.eth.Contract(SeedifyFundsContractAbi, contractAddr);

//function AddUserInWhiteList
const AddUserInWhiteList = () => {
  const [number, setNumber] = useState(0);
  var addArray = ["0x7E9b119476fe7CaC888d773a9798b1a01d65003A", "0x5AedaE68CcCd22dA73D62A732FAf5f5F8304B7B6"];
  const handleSet1 = async (e) => {
    e.preventDefault();    
    const accounts = await window.ethereum.enable();
    const account = accounts[0];
    const gas = await SimpleContract.methods.addWhitelistOne(addArray).estimateGas();
    const result = await SimpleContract.methods.addWhitelistOne(addArray).send({
      from: account,
      gas 
    })
    console.log(result);
  }
   
    const handleSet2 = async (e) => {
      e.preventDefault();    
      const accounts = await window.ethereum.enable();
      const account = accounts[0];
      const gas = await SimpleContract.methods.addWhitelistOne(addArray).estimateGas();
      const result = await SimpleContract.methods.addWhitelistOne(addArray).send({
        from: account,
        gas 
      })
      console.log(result);
    }
    const handleSet3 = async (e) => {
      e.preventDefault();    
      const accounts = await window.ethereum.enable();
      const account = accounts[0];
      const gas = await SimpleContract.methods.addWhitelistOne(addArray).estimateGas();
      const result = await SimpleContract.methods.addWhitelistOne(addArray).send({
        from: account,
        gas 
      })
      console.log(result);
    }

  return (
    <div>
      <div className="right-panel-main">
        <h2>Add User In White List</h2>
        <div className="rightpanel-form">
        <div className="form-inner">
          <div className="form-group">
              <label>Add White LIst One</label>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",

                }}
              >
                <input type="text" className="input-form" value={number} onChange={ e => setNumber(e.target.value) } placeholder="Enter white list" />

                <button onClick={handleSet1} type="button" className="bttn">
                  SUBMIT
                </button>
              </div>
            </div>
          </div>

          <div className="form-inner">
          <div className="form-group">
              <label>Add White LIst Two</label>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",

                }}
              >
                <input type="text" className="input-form" value={number} onChange={ e => setNumber(e.target.value) } placeholder="Enter white list" />

                <button onClick={handleSet2} type="button" className="bttn">
                  SUBMIT
                </button>
              </div>
            </div>
          </div>

          <div className="form-inner">
          <div className="form-group">
              <label>Add White LIst Three</label>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",

                }}
              >
                <input type="text" className="input-form" value={number} onChange={ e => setNumber(e.target.value) } placeholder="Enter white list" />

                <button onClick={handleSet3} type="button" className="bttn">
                  SUBMIT
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddUserInWhiteList;
