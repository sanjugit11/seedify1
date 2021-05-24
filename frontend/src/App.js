import { BrowserRouter as Router, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { refreshToken } from "./redux/actions/authAction";
import { useEffect } from "react";

import "./App.css";
import Home from "./component/Home/Home";
import PoolDetail from "./component/PoolDetail/PoolDetail";
import Login from "./component/Auth/Login";
import Register from "./component/Auth/Register";
import AdminLayout from "./component/Dashboard/AdminLayout";
import NotFound from "./component/Auth/NotFound";

import UpcommingPool from "./component/Dashboard/UpcommingPool";
import CompletedPool from "./component/Dashboard/CompletedPool";
//import MetaMask from "./component/Home/MetaMask";
import Notify from "./component/Auth/Notify";

function App() {
	const { auth } = useSelector((state) => state);
	const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshToken());
  }, [dispatch]);

  return (
    <Router>
      
      <div className="App">
      <Notify />
        <Route path="/" exact component={Home} />
        <Route path="/pool_detail/:id" exact component={PoolDetail} />
        <Route path="/admin/login" exact component={Login} />
        <Route path="/register" exact component={Register} />

        
        <Route
          path="/admin/upcommingpool"
          exact
          component={auth.token && auth.role ? AdminLayout : Home}
        />
        <Route
          path="/admin/deploynewico"
          exact
          component={auth.token && auth.role ? AdminLayout : Home}
        />
        <Route
          path="/admin/transferownership"
          exact
          component={auth.token && auth.role ? AdminLayout : Home}
        />
        <Route
          path="/admin/updatetier"
          exact
          component={auth.token && auth.role ? AdminLayout : Home}
        />
        <Route
          path="/admin/createico"
          exact
          component={auth.token && auth.role ? AdminLayout : Home}
        />
        <Route
          path="/admin/completedpool"
          exact
          component={auth.token && auth.role ? AdminLayout : Home}
        />
        <Route
          path="/admin/editico/:id"
          exact
          component={auth.token && auth.role ? AdminLayout : NotFound}
        />
        <Route
          path="/admin/adduserinwhitelist"
          exact
          component={auth.token && auth.role ? AdminLayout : NotFound}
        />
        <Route
          path="/admin/readwhitelist"
          exact
          component={auth.token && auth.role ? AdminLayout : NotFound}
        />
      </div>
    </Router>
  );
}

export default App;
