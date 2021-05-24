import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { creatICO } from "../../redux/actions/icoAction";
import { checkImage } from "../../utils/uploadImage";
import GlobalTypes from "../../redux/actions/GlobalTypes";
import {useParams} from "react-router-dom"
import { useSelector } from "react-redux";
import {updateico} from "../../redux/actions/icoAction"
import moment from 'moment'
import $ from 'jquery'
import DatePicker from "react-datepicker";


const CreateICO = () => {
 



//   $(function() {
//     $( "#datepicker-13" ).datepicker();
//     $( "#datepicker-13" ).datepicker("show");
//  });
 

  const dispatch = useDispatch();

  const initialState = {
    title: "",
    total_supply: "",
    symbol: "",
    up_pool_raise: "",
    images : "",
    start_date: "",
    end_date: "",
    content: "",
    min_allocation: "",
    max_allocation: "",
    participants: "",
    swap_amount: "",
    min_swap_level: "",
    address: "",
    decimal: "",
    description: "",
    project_goal: "",
    project_team: "",
    pool_type: "",
    up_pool_access: "",
    price : ""
  };
  const [icoData, setIcoData] = useState(initialState);
  const {
    pool_type,
    start_date,
    end_date,
    images,
    title,
    price,
    up_pool_raise,
    content,
    min_allocation,
    max_allocation,
    up_pool_access,
    participants,
    swap_amount,
    min_swap_level,
    symbol,
    decimal,
    address,
    total_supply,
    description,
    project_goal,
    project_team,
  } = icoData;

  const [image, setImages] = useState("");

  const handleImage = (e) => {
    const file = e.target.files[0];
    const err = checkImage(file);
    if (err)
      return dispatch({
        type: GlobalTypes.NOTIFY,
        payload: { error: err },
      });
    setImages(file);
  };

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setIcoData({ ...icoData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(onEdit){
      dispatch(updateico(icoData, param.id, image, images));
    }else{
      dispatch(creatICO(icoData, image));
    }
  };

  //UPDATE ICO
  const [onEdit, setOnEdit] = useState(false)
  const { ico } = useSelector((state) => state);
  const param = useParams()
  const pools  = ico.pool;

  useEffect(() => {
    if(param.id){
      setOnEdit(true)
      pools.forEach(poo => {
        if(poo._id === param.id){
          poo.start_date = moment(poo.start_date).format('MM/DD/YYYY');
          poo.end_date = moment(poo.end_date).format('MM/DD/YYYY');
          setIcoData(poo)
        
          //console.log(moment(icoData.start_date).format('DD/MM/YYYY'))
          console.log(icoData.start_date)
        }
      })
    }else{
      setOnEdit(false)
      setIcoData(initialState)
    }
  }, [ico, param, onEdit])
 
  //console.log(pools)
  var x = images
  if(x){
    var imageName = require(`../../static/${x}`);
  }

  return (
    <div>
      <div className="right-panel-main">
        <h2>{onEdit ? "UPDATE ICO" : "CREATE ICO" }</h2>
        <form onSubmit={handleSubmit}>
          <div className="rightpanel-form">
            <div className="form-inner">
              <div className="form-group">
                <label>ICO Name</label>
                <input
                  type="text"
                  className="input-form"
                  placeholder="Enter Name"
                  required
                  name="title"
                  value={title}
                  onChange={handleChangeInput}
                />
              </div>
              <div className="form-group">
                <label>Token Price</label>
                <input
                  type="text"
                  className="input-form"
                  placeholder="Enter Price"
                  required
                  name="up_pool_raise"
                  value={up_pool_raise}
                  onChange={handleChangeInput}
                />
              </div>
            </div>
            <div className="form-inner">
              <div className="form-group">
                <label>Total Supply</label>
                <input
                  type="text"
                  className="input-form"
                  placeholder="Enter Total Supply"
                  required
                  name="total_supply"
                  value={total_supply}
                  onChange={handleChangeInput}
                />
              </div>
              <div className="form-group">
                <label>Start Date</label>
                <input
                  type="date"
                  className="input-form"
                  id="datepicker-13"
                  placeholder="Enter Start Date"
                  required
                  name="start_date"
                  value={start_date}
                  onChange={handleChangeInput}
                />
              </div>
            </div>
            <div className="form-inner">
              <div className="form-group">
                <label>ICO Symbol</label>
                <input
                  type="text"
                  className="input-form"
                  placeholder="Enter Symbol"
                  required
                  name="symbol"
                  value={symbol}
                  onChange={handleChangeInput}
                />
              </div>
              <div className="form-group">
                <label>End Date</label>
                <input
                  type="date"
                  className="input-form"
                  placeholder="Enter End Date"
                  required
                  name="end_date"
                  value={end_date}
                  onChange={handleChangeInput}
                />
              </div>
            </div>
            <div className="form-inner">
              <div className="form-group">
                <label>Pool Content</label>
                <input
                  type="text"
                  className="input-form"
                  placeholder="Enter content"
                  required
                  name="content"
                  value={content}
                  onChange={handleChangeInput}
                />
              </div>
              <div className="form-group">
                <label>Min Allocation</label>
                <input
                  type="text"
                  className="input-form"
                  placeholder="Enter Min Allocation"
                  required
                  name="min_allocation"
                  value={min_allocation}
                  onChange={handleChangeInput}
                />
              </div>
            </div>
            <div className="form-inner">
              <div className="form-group">
                <label>Max Allocation</label>
                <input
                  type="text"
                  className="input-form"
                  placeholder="Enter Max Allocation"
                  required
                  name="max_allocation"
                  value={max_allocation}
                  onChange={handleChangeInput}
                />
              </div>
              <div className="form-group">
                <label>Participants</label>
                <input
                  type="text"
                  className="input-form"
                  placeholder="Enter No. of Participants"
                  required
                  name="participants"
                  value={participants}
                  onChange={handleChangeInput}
                />
              </div>
            </div>
            <div className="form-inner">
              <div className="form-group">
                <label>Swap Amount</label>
                <input
                  type="text"
                  className="input-form"
                  placeholder="Enter Swap Amount"
                  required
                  name="swap_amount"
                  value={swap_amount}
                  onChange={handleChangeInput}
                />
              </div>
              <div className="form-group">
                <label>Min Swap Level</label>
                <input
                  type="text"
                  className="input-form"
                  placeholder="Enter Min Swap Level"
                  required
                  name="min_swap_level"
                  value={min_swap_level}
                  onChange={handleChangeInput}
                />
              </div>
            </div>
            <div className="form-inner">
              <div className="form-group">
                <label>Address</label>
                <input
                  type="text"
                  className="input-form"
                  placeholder="Enter Address"
                  required
                  name="address"
                  value={address}
                  onChange={handleChangeInput}
                />
              </div>
              <div className="form-group">
                <label>Decimals</label>
                <input
                  type="text"
                  className="input-form"
                  placeholder="Enter Decimals"
                  required
                  name="decimal"
                  value={decimal}
                  onChange={handleChangeInput}
                />
              </div>
            </div>
            <div className="form-inner">
              <div className="form-group">
                <label>Project Description</label>
                <input
                  type="text"
                  className="input-form"
                  placeholder="Enter Description"
                  required
                  name="description"
                  value={description}
                  onChange={handleChangeInput}
                />
              </div>
              <div className="form-group">
                <label>Project Goal</label>
                <input
                  type="text"
                  className="input-form"
                  placeholder="Enter Project Goal"
                  required
                  name="project_goal"
                  value={project_goal}
                  onChange={handleChangeInput}
                />
              </div>
            </div>
            <div className="form-inner">
              <div className="form-group">
                <label>Project Team</label>
                <input
                  type="text"
                  className="input-form"
                  placeholder="Enter Project Team"
                  required
                  name="project_team"
                  value={project_team}
                  onChange={handleChangeInput}
                />
              </div>
              <div className="form-group">
                <label>Pool Type</label>
                <select
                  className="input-form"
                  name="pool_type"
                  value={pool_type}
                  onChange={handleChangeInput}
                >
                  <option
                    className="ico___dropdown"
                    value=""
                    disabled="disabled"
                    required
                  >
                    Select Pool Type
                  </option>
                  <option className="ico___dropdown">featured</option>
                  <option className="ico___dropdown">upcomming</option>
                  <option className="ico___dropdown">completed</option>
                </select>
              </div>
            </div>

            <div className="form-inner">
              <div className="form-group">
                <label>Pool Access Type</label>
                <select
                  className="input-form"
                  name="up_pool_access"
                  value={up_pool_access}
                  onChange={handleChangeInput}
                >
                  <option
                    className="ico___dropdown"
                    value=""
                    disabled="disabled"
                    required
                  >
                    Select Pool Access Type
                  </option>
                  <option className="ico___dropdown">Private</option>
                  <option className="ico___dropdown">Public</option>
                </select>
              </div>
              <div className="form-group">
                <label>Upload Pool logo</label>
                <input
                  type="file"
                  className="input-form"
                  placeholder="Enter Project Team"
                  name="images"
                 
                  onChange={handleImage}
                />
              </div>
              
              
            </div>
            <div className="form-inner">
              <div className="form-group">
                <label>BNB Price</label>
                <input
                  type="text"
                  className="input-form"
                  placeholder="Enter price"
                  required
                  name="price"
                  value={price}
                  onChange={handleChangeInput}
                />
              </div>
              <div className="form-group">
                
              {
                imageName ? <img src={imageName ? imageName.default : ""} height="70px" width="70px" alt="" /> : ""
              }
              </div>
            </div>
            
            <div className="form-group">
              <button type="submit" className="btn">
                {onEdit ? 'UPDATE' : 'CREATE'}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateICO;
