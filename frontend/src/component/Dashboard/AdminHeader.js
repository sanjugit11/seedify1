import React, {useEffect} from "react";
import { useDispatch } from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../../redux/actions/authAction'

import profile from "../../images/profile.png";
import droparrow from "../../images/drop-arrow.png";
const AdminHeader = () => {
  const dispatch = useDispatch();

useEffect(() => {
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
}, [])

const drop_toggle = () => {
  document.getElementById("myDropdown").classList.toggle("show");
}
  
  return (
    <div>
      <div className="right-top">
        <div className="right-topleft">
          <div className="search-form">
            <input className="search-bar" type="search" placeholder="Search" />
            <button className="btn" type="submit">
              <span>
                <i className="fa fa-search" aria-hidden="true"></i>
              </span>
            </button>
          </div>
        </div>
        <div className="right-topright">
          <div className="profile-bar">
            <img src={profile} alt="profile" />
          </div>
          <div className="dropdown">
            <button onClick={drop_toggle} className="dropbtn">
              Darrell Steward{" "}
              <span>
                <img src={droparrow} alt="dropdown" />
              </span>
            </button>
            <div id="myDropdown" className="dropdown-content">
              <a href="#gg">Home</a>
              <a href="#gg">Profile</a>
              <Link to="#" onClick={() => dispatch(logout())}>logout</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHeader;
