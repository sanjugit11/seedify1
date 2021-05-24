import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import $ from "jquery";

import "./AdminLayout.css";
import AdminHeader from "./AdminHeader";
import CreateICO from "./CreateICO";
import DeployNewICO from "./DeployNewICO";
import TransferOwnership from "./TransferOwnership";
import UpdateTier from "./UpdateTier";
import AdminICO from "./AdminICO";
import AddUserInWhiteList from "./AddUserInWhiteList";
import ReadWhiteList from "./ReadWhiteList";
import Notify from "../Auth/Notify"

import Sidebar from "./Sidebar";

const AdminLayout = () => {
  useEffect(() => {
    // $(function () {
    $(document).ready(function () {

      $(".list-tab").click(function () {
        $(".upcoming-list").addClass("upcoming-all");
        $(".upcoming-list").removeClass("upcoming-list");
      });

      $(".list-all").click(function () {
        $(".upcoming-all").addClass("upcoming-list");
        $(".upcoming-all").removeClass("upcoming-all");
      });

      $(".list-tab").click(function () {
        $(".list-all").removeClass("active");
        $(".list-tab").addClass("active");
      });

      $(".list-all").click(function () {
        $(".list-tab").removeClass("active");
        $(".list-all").addClass("active");
      });
    });
  });

  return (
    <div className="dashboard">
      <section className="main-section">
        <Sidebar />
        <div className="right-panal">
          <AdminHeader />

          <Switch>
            <Route exact path="/admin/upcommingpool">
              {/* <CreateICO /> */}
              <AdminICO />
            </Route>
            <Route exact path="/admin/completedpool">
              <AdminICO />
            </Route>
            <Route exact path="/admin/createico">
              <CreateICO />
            </Route>
            <Route exact path="/admin/deploynewico">
              <DeployNewICO />
            </Route>
            <Route exact path="/admin/transferownership">
              <TransferOwnership />
            </Route>
            <Route exact path="/admin/updatetier">
              <UpdateTier />
            </Route>
            <Route exact path="/admin/editico/:id">
              <CreateICO />
            </Route>
            <Route exact path="/admin/adduserinwhitelist">
              <AddUserInWhiteList />
            </Route>
            <Route exact path="/admin/readwhitelist">
              <ReadWhiteList />
            </Route>
          </Switch>
        </div>
      </section>
    </div>
  );
};

export default AdminLayout;
