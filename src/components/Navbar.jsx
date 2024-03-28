import React from "react";

import { FaXTwitter } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import { SiMedium } from "react-icons/si";

import logo from "../assets/fancoin.png";
// import logoText from "../assets/logo-b.png";

const Navbar = () => {
	return (
		<div className="fixed top-0 w-full py-4 px-[1rem] md:px-[3rem] h-[100px] flex items-center">
			<div className=" w-full bg-black py-3 px-[1rem] md:px-8 rounded-[5rem] gp-flex justify-between">
				<div className="gap-2 gp-flex">
					<div className="h-[37.5px] w-[37.5px]">
						<img src={logo} alt="logo" className="w-full h-full object-cover" />
					</div>
					{/* <img
						src={logoText}
						alt="logo"
						className="w-full h-[20px] object-contain"
					/> */}
					<p className="text-xl pb-1 text-white font-bold">FanCoin</p>
				</div>
				<div className="gp-flex gap-1 md:gap-2">
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
