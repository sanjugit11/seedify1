import React, { useEffect, useState } from "react";
import { Route, Switch, Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { getico } from "../../redux/actions/icoAction";

import UpcommingPool from "./UpcommingPool";
import CompletedPool from "./CompletedPool";
import Pagination from "../Other/Pagination"

const AdminICO = () => {
  const { ico } = useSelector((state) => state);
  const dispatch = useDispatch();

  const [pool, setPool] = useState([]);
  const currentPage =1
  
  // const [upcPool, setUpcPool] = useState([]);

  //pagination --------------------------------------
  //const [pageNumber, setPageNumber] = useState(1);
  

  useEffect(() => {
    dispatch(getico(currentPage))
    setPool(ico.pool);
  }, [ico]);
  
  // useEffect(() => {
  //   if (pool) {
  //     setUpcPool(
  //       pool.filter((x) => {
  //         return x.pool_type === "upcomming";
  //       })
  //     );
  //   }
  // }, [pool]);

  

  return (
    <div>
      <div id="tabs" className="admin">
        <div className="left-position">
          <ul className="tab-list">
            <li>
              <Link to="/admin/upcommingpool">Upcoming</Link>
            </li>
            <li>
              <Link to="/admin/completedpool">Completed</Link>
            </li>
            <li>
              <a href="#tabs-3">All</a>
            </li>
          </ul>
        </div>

        <div className="right-position">
          <ul>
            <li>
              <Link to="/admin/createico" className="create-btn">
                create ico
              </Link>
            </li>
            <li className="tab-listing">
              <a href="#gt" className="active list-all">
                <i className="fa fa-th-large" aria-hidden="true"></i>
              </a>
              <a href="#ff" className="list-tab">
                <i className="fa fa-list-alt" aria-hidden="true"></i>
              </a>
            </li>
          </ul>
        </div>

        <br />
        <br />

        <Switch>
          <Route exact path="/admin/upcommingpool">
            <div id="tabs-1">
              <div className="upcoming-list">
                {pool
                  ? pool.map((upcpool) => (
                      <UpcommingPool key={upcpool._id} upcpool={upcpool} />
                    ))
                  : ""}
              </div>
            </div>
          </Route>
          <Route exact path="/admin/completedpool">
            <CompletedPool />
          </Route>
        </Switch>
      </div>

      <Pagination/>

    </div>
  );
};

export default AdminICO;
