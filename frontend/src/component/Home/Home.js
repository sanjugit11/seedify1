import React, {useState, useEffect} from "react";
import {getDataAPI} from '../../utils/API'
import { Link } from 'react-router-dom';

import Header from "../Home/Header"
import Banner from "./Banner";
import Pool from "./Pool";
import FeaturedPool  from "./FeaturedPool"
import './Home.css'

const Home = () => {
  const [upcPool, setupcPool] = useState([])
  const [upcommingPool, setUpcommingPool] = useState([])
  const [featuredPool, setFeaturedPool] = useState([])

  
  useEffect(() => {
    getDataAPI('get_upcPool')
    .then(res => setupcPool(res.data.upcPool))
  }, [upcPool])

  useEffect(() => {
    setUpcommingPool(
      upcPool.filter((x) => {
        return x.pool_type === "upcomming"
      })
    )
  }, [upcPool])

  useEffect(() => {
    setFeaturedPool(
      upcPool.filter((x) => {
        return x.pool_type === "featured"
      })
    )
  }, [upcPool])

  
  return (
    <div>
      <Header />
      <Banner />
      <div className="pools">
        <div className="container_cust">
          <div className="inner_pools">
            <h2>Upcoming Pools</h2>
            <div className="pool_grid">
              {
                upcommingPool.map(pool => (
                  <Link key={pool._id} to={`/pool_detail/${pool._id}`}><Pool key={pool._id} pool={pool} /></Link>
                ))
              }
            </div>
          </div>
        </div>
      </div>
      <div className="pools feat_ured">
        <div className="container_cust">
          <div className="inner_pools">
            <h2>Featured Pools</h2>
            <div className="pool_grid">
               {
                 featuredPool.map(pool => (
                  <Link key={pool._id} to={`/pool_detail/${pool._id}`}><FeaturedPool key={pool._id} pool={pool} /></Link>
                 ))
               }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
