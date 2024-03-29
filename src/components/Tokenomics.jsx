import React from "react";
import { Tilt } from "react-tilt";
import { tokenomics } from "../utils/constants";

const TokenomicsCard = ({ index, title, value }) => (
	<Tilt className={`xs:w-[275px] w-full`}>
		<div
			options={{
				max: 45,
				scale: 1,
				speed: 450,
			}}
			className="social-gradient1 rounded-[20px] py-8 px-7 min-h-[125px] md:min-h-[150px] flex justify-evenly items-center flex-col cursor-pointer"
		>
			<p className="text-center sm:text-[18px] text-[14px] uppercase tracking-wider mb-3 text-[--highlight2]">
				{title}
			</p>

			<h1 className="text-[white] md:text-[35px]">{value}</h1>
		</div>
	</Tilt>
);

const Tokenomics = () => {
	return (
		<div className="container py-5 md:py-10">
			<div>
				<p
					className={`text-center sm:text-[18px] text-[14px] uppercase tracking-wider mb-3 text-[--highlight2]`}
				>
					Allocations
				</p>
				<h1 className={`text-center text-[white]`}>Tokenomics</h1>
			</div>

			<div className="mt-10 lg:mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
				{tokenomics.map((item, index) => (
					<TokenomicsCard key={index} index={index} {...item} />
				))}
			</div>
		</div>
	);
};

export default Tokenomics;
