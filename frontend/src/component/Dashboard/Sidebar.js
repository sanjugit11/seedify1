import React from "react";
import { NavLink } from "react-router-dom";

import logo from "../../images/Logo.png";

const Sidebar = () => {
  return (
    <div>
      <div className="left-panal">
        <div className="logo">
          <NavLink to="/admin/upcommingpool">
            <img src={logo} alt="logo" />
          </NavLink>
        </div>
        <ul className="ul-list">
          <li>
            <NavLink to="/admin/deploynewico">Deploy New ICO</NavLink>
          </li>
          <li>
            <NavLink to="/admin/transferownership">Transfer Ownership</NavLink>
          </li>
        </ul>
        <ul className="ul-list secondul">
          <li>
            <NavLink to="/admin/createico">Create ICO/IDO</NavLink>
          </li>

          <li>
            <NavLink to="/admin/updatetier">Update Tiers Value</NavLink>
          </li>
          <li>
            <NavLink to="/admin/adduserinwhitelist">
              Add User in White List
            </NavLink>
          </li>
          <li>
            <NavLink to="/admin/readwhitelist">Read White List</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
