import React from "react";

import { FaXTwitter } from "react-icons/fa6";
import { SlGlobe } from "react-icons/sl";
import { SiMedium } from "react-icons/si";
import logo from "../assets/fancoin.png";

const Footer = () => {
	return (
		<div className="py-[50px]">
			<div className="container flex flex-col md:flex-row md:justify-between items-start md:items-center  gap-5">
				<div className="gap-2 gp-flex">
					<div className="h-[50px] w-[50px]">
						<img src={logo} alt="logo" className="w-full h-full object-cover" />
					</div>
					<div>
						<p className="text-xl">FanCoin</p>
						<p className="text-sm">Where Community meets crypto</p>
					</div>
				</div>
				<div>
					<p>Copyright ©️ 2022 FANCOIN All Rights Reserved</p>
				</div>
				<div className="gp-flex gap-3 md:gap-4">
					<div className="bg-[--card] p-3 rounded-lg">
						<FaXTwitter className="social-icons" />{" "}
					</div>
					<div className="bg-[--card] p-3 rounded-lg">
						<SlGlobe className="social-icons" />{" "}
					</div>
					<div className="bg-[--card] p-3 rounded-lg">
						<SiMedium className="social-icons" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
