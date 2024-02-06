import React from "react";

const CountdownDisplay = ({ x, y, unit }) => (
	<div className="flex flex-col items-center gap-2">
		<div className="gp-flex gap-1 md:gap-2 text-lg md:text-xl">
			<div className="px-3 md:px-5 h-[50px] md:h-[60px] flex items-center bg-[--bg] rounded-lg">
				{x}
			</div>
			<div className="px-3 md:px-5 h-[50px] md:h-[60px] flex items-center bg-[--bg] rounded-lg">
				{y}
			</div>
		</div>
		<div className="capitalize">{unit}</div>
	</div>
);

const Countdown = () => {
	return (
		<div className="w-full h-[200px] max-w-[1024p] bg-[--card] rounded-3xl flex flex-col items-center justify-center gap-5">
			<h2>Going live in:</h2>
			<div className="flex gap-3 md:gap-5">
				<CountdownDisplay x="0" y="0" unit="days" />
				<CountdownDisplay x="0" y="0" unit="hours" />
				<CountdownDisplay x="0" y="0" unit="minutes" />
			</div>
		</div>
	);
};

export default Countdown;
