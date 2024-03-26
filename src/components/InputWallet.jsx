import React from "react";

// import { PiCopySimpleFill } from "react-icons/pi";
import { HiOutlineRocketLaunch } from "react-icons/hi2";
import logo from "../assets/fancoin-colored.png";
import logoWhite from "../assets/fancoin.png";

const InputWallet = () => {
	return (
		<div className="w-full gradient1 p-4 rounded-lg gap-3 lg:gap-4 grid grid-cols-2 lg:grid-cols-3">
			<button className="button-1 col-span-2 lg:col-span-1 group">
				<div className="h-[20px] w-[20px] relative">
					<img
						src={logo}
						alt="logo"
						className="block group-hover:hidden -z-10 w-full h-full object-cover"
					/>
					<img
						src={logoWhite}
						alt="logo"
						className="hidden group-hover:block top-0 w-full h-full object-cover"
					/>
				</div>
				<p className="">Read Litepaper</p>
			</button>
			<button className="button-1">
				<p className="">Buy $Fan</p>
			</button>
			<button className="button-1 group">
				<HiOutlineRocketLaunch className="text-[--highlight2] group-hover:text-white" />
				Launch Dapp
			</button>
		</div>
	);
};

export default InputWallet;
