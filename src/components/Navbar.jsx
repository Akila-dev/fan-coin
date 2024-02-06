import React from "react";

import { FaXTwitter } from "react-icons/fa6";
import { SlGlobe } from "react-icons/sl";
import { SiMedium } from "react-icons/si";

import logo from "../assets/fancoin.png";

const Navbar = () => {
	return (
		<div className="py-5">
			<div className="container gp-flex justify-between">
				<div className="gap-2 gp-flex">
					<div className="h-[40px] w-[40px]">
						<img src={logo} alt="logo" className="w-full h-full object-cover" />
					</div>
					<p className="text-xl">FanCoin</p>
				</div>
				<div className="gp-flex gap-3 md:gap-4">
					<FaXTwitter className="social-icons" />{" "}
					<SlGlobe className="social-icons" />{" "}
					<SiMedium className="social-icons" />
				</div>
			</div>
		</div>
	);
};

export default Navbar;
