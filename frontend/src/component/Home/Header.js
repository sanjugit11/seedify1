import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import "./Header.css";

import logo from "../../images/Logo.png";
import getWeb3 from "../../getWeb3";

const Header = () => {
	const [address, setAddress] = useState("");
	const web3 = getWeb3();
	const { auth } = useSelector((state) => state);
	//let address = "";
	const connectMetamask = async () => {
		if (window.ethereum) {
			try {
				await window.ethereum.enable();
				const accounts = await web3.eth.getAccounts();
				const address = accounts[0];
				setAddress(address);
			} catch (error) {
				console.error(error);
			}
		} else {
			alert("Metamask extensions not detected!");
		}
	};

	return (
		<div>
			<header className="hea_der">
				<div className="container_cust">
					<div className="inner_header">
						<div className="logo">
							<Link to="/">
								<img src={logo} alt="" />
							</Link>
						</div>
						<div className="navi_gation">
							{/* {
                auth.token && auth.role ? 
                <Link className="gen_btn btn_white" to="/admin">
                dashboard
              </Link>
              :
              <Link className="gen_btn btn_white" to="/login">
                dashboard
              </Link>
              } */}
							<Link
								className="gen_btn btn_white"
								to={
									auth.token && auth.role
										? "/admin/upcommingpool"
										: "/admin/login"
								}>
								dashboard
							</Link>
							<div className="gen_bttn">
								<button
									className="gen_bttn btn_white"
									onClick={() => connectMetamask()}>
									connect wallet
								</button>
								<div className="address">
									<span>{address}</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</header>
		</div>
	);
};

export default Header;
