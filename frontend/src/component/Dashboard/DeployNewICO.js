import React, {useState} from "react";
import {useDispatch} from 'react-redux';
import { deployICO } from '../../redux/actions/deployICOAction'

const DeployNewICO = () => {
  const dispatch = useDispatch();
  const initialState = {
    set_maxcap : "",
    sale_start_time : "",
    sale_end_time : "",
    limit_tier_one: "",
    limit_tier_two: "",
    limit_tier_three: "",
  };
  const [deployNewIcoData, setDeploynewIcoData] = useState(initialState);
  const {set_maxcap, sale_start_time, sale_end_time, limit_tier_one, limit_tier_two, limit_tier_three } = deployNewIcoData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setDeploynewIcoData({ ...deployNewIcoData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(deployICO(deployNewIcoData))
  };

  return (
    <div>
      <div className="right-panel-main">
        <h2>Deploy New ICO</h2>
        <form onSubmit={handleSubmit}>
          <div className="rightpanel-form">
            <div className="form-inner">
              <div className="form-group">
                <label>Need to Set Maxcap</label>
                <input
                  type="text"
                  className="input-form"
                  placeholder="Enter Value"
                  name="set_maxcap"
                  value={set_maxcap}
                  onChange={handleChangeInput}
                />
              </div>
              <div className="form-group">
                <label>The Limit Of One Tier</label>
                <input
                  type="text"
                  className="input-form"
                  placeholder="Enter Value"
                  name="limit_tier_one"
                  value={limit_tier_one}
                  onChange={handleChangeInput}
                />
              </div>
              <div className="form-group">
                <label>Sale Start Time</label>
                <input
                  type="date"
                  className="input-form"
                  placeholder="Enter Start Time"
                  name="sale_start_time"
                  value={sale_start_time}
                  onChange={handleChangeInput}
                />
              </div>
              <div className="form-group">
                <label>The Limit Of Tier Two</label>
                <input
                  type="text"
                  className="input-form"
                  placeholder="Enter Value"
                  name="limit_tier_two"
                  value={limit_tier_two}
                  onChange={handleChangeInput}
                />
              </div>
              <div className="form-group">
                <label>Sale End Time</label>
                <input
                  type="date"
                  className="input-form"
                  placeholder="Enter end time"
                  name="sale_end_time"
                  value={sale_end_time}
                  onChange={handleChangeInput}
                />
              </div>
              <div className="form-group">
                <label>The Limit Of Tier Three</label>
                <input
                  type="text"
                  className="input-form"
                  placeholder="Enter Value"
                  name="limit_tier_three"
                  value={limit_tier_three}
                  onChange={handleChangeInput}
                />
              </div>
            </div>
            <div className="form-group">
              <button type="submit" className="btn">
                DEOLOY
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DeployNewICO;
