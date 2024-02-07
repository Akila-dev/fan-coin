import React from "react";

// import { PiCopySimpleFill } from "react-icons/pi";
import logo from "../assets/fancoin.png";

const InputWallet = () => {
	return (
		<div className="flex w-full gradient1 p-4 rounded-lg gap-3 lg:gap-4 flex-wrap lg:flex-nowrap">
			<button className="gap-2 gp-flex justify-center bg-[--bg] py-2 lg:px-4 rounded-lg lg:min-w-[170px] order-2 flex-1 lg:order-1">
				<div className="h-[20px] w-[20px]">
					<img src={logo} alt="logo" className="w-full h-full object-cover" />
				</div>
				<p className="">FanCoin</p>
			</button>
			<div className="w-full gp-flex gap-4 bg-[--bg] py-2 px-4 rounded-lg order-1 lg:order-2">
				<input
					type="text"
					placeholder="Enter Amount"
					className="w-full bg-transparent focus:outline-none"
				/>
				{/* <PiCopySimpleFill className="text-xl cursor-pointer" /> */}
				<p className="text-[--highlight2]">Max</p>
			</div>
			<button className="bg-[--bg] py-2 lg:px-4 rounded-lg lg:min-w-[170px] order-3 lg:order-3 px-5">
				Stake
			</button>
		</div>
	);
};

export default InputWallet;
