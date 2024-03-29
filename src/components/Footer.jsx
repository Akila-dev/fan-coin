import React from "react";

import { FaXTwitter } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import { SiMedium } from "react-icons/si";
import logo from "../assets/fancoin-colored.png";

const Footer = () => {
	return (
		<div className="py-[50px]">
			<div className="container flex flex-col md:flex-row md:justify-between items-start md:items-center gap-5">
				<div className="gap-2 gp-flex">
					<div className="h-[50px] w-[50px]">
						<img
							src={logo}
							alt="logo"
							className="w-[50px] h-[50px]object-contain"
						/>
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
					<a
						target="_blank"
						rel="noreferrer"
						href="https://x.com/FanCoin_Sol"
						className="social-container social-gradient1"
					>
						<FaXTwitter className="social-icons" />{" "}
					</a>
					<a
						target="_blank"
						rel="noreferrer"
						href="https://t.me/FancoinOnSolana"
						className="social-container social-gradient1"
					>
						<FaTelegramPlane className="social-icons" />{" "}
					</a>
					<div className="social-container social-gradient1">
						<SiMedium className="social-icons" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
