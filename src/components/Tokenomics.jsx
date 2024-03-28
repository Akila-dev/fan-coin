import React from "react";
import { Button, Particles } from "../components";
import { tokenomics } from "..//utils/constants";
import { HiOutlineRocketLaunch } from "react-icons/hi2";

const TokenomicsCard = ({ index, title, value }) => (
	<div className="flex flex-col md:flex-row md:items-center md:gap-3">
		<h4 className="text-white uppercase">{title}</h4>
		<p className="text-white">{value}</p>
	</div>
);

const Tokenomics = () => {
	return (
		<div className="relative first-letter:p-5 md:p-7 lg:p-10 py-8 md:py-10 bg-[--text] rounded-xl h-full space-y-10 pointer-events-auto">
			<div className="absolute top-0 w-full h-full">
				<Particles />
			</div>
			<div className="relative space-y-2">
				<h2 className="text-white">TOKENOMICS</h2>
				<p className="text-white tracking-wider">
					A total supply of 1.5 billion tokens
				</p>
			</div>
			<div className="relative space-y-2">
				{tokenomics.map((item, index) => (
					<TokenomicsCard key={index} index={index} {...item} />
				))}
			</div>
			<div className="relative">
				<Button
					text="View Roadmap"
					icon={<HiOutlineRocketLaunch className="" />}
					type={2}
				/>
			</div>
		</div>
	);
};

export default Tokenomics;
