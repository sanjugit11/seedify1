import React, { useState } from 'react'
import Web3 from 'web3';
import { SeedifyFundsContractAbi } from '../abis';

const web3 = new Web3(Web3.givenProvider);
// contract address
const contractAddr = '0xC499F995cbc8EE13d47c742dFCb6D88D6993016f';
const SimpleContract = new web3.eth.Contract(SeedifyFundsContractAbi, contractAddr);

//function TransferOwnership
const TransferOwnership = () => {
  const [number, setNumber] = useState();

  const handleSet = async (e) => {
    e.preventDefault();    
    const accounts = await window.ethereum.enable();
    const account = accounts[0];
    const gas = await SimpleContract.methods.transferOwnership(number).estimateGas();
    const result = await SimpleContract.methods.transferOwnership(number).send({
      from: account,
      gas 
    })
    console.log(result);
  }

    return (
        <div>
            <div className="right-panel-main">
          <h2>Transfer Ownership</h2>
          <div className="rightpanel-form">
            <div className="form-inner">
              <div className="form-group">
                <label>New Owner Address</label>
                <input type="text" className="input-form" value={number} onChange={ e => setNumber(e.target.value) } placeholder="Enter Owner Address" />
              </div>
             </div>                          
              <div className="form-group">
                <button  onClick={handleSet} type="button" className="btn">SUBMIT</button>
              </div>
          </div>
        </div>
        </div>
    )
}

export default TransferOwnership
