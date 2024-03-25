import React from "react";

import { FaXTwitter } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import { SiMedium } from "react-icons/si";

import logo from "../assets/fancoin.png";

const Navbar = () => {
	return (
		<div className="py-5">
			<div className="container gp-flex justify-between">
				<div className="gap-2 gp-flex">
					<div className="h-[37.5px] w-[37.5px]">
						<img src={logo} alt="logo" className="w-full h-full object-cover" />
					</div>
					<p className="text-xl pb-1">FanCoin</p>
				</div>
				<div className="gp-flex gap-3 md:gap-4">
					<a target="_blank" rel="noreferrer" href="https://x.com/FanCoin_Sol">
						<FaXTwitter className="social-icons" />
					</a>
					<a
						target="_blank"
						rel="noreferrer"
						href="https://t.me/FancoinOnSolana"
					>
						<FaTelegramPlane className="social-icons" />
					</a>
					<SiMedium className="social-icons" />
				</div>
			</div>
		</div>
	);
};

export default Navbar;
