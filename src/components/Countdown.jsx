import React from "react";

const CountdownDisplay = ({ x, y, unit }) => (
	<div className="flex flex-col items-center gap-2 w-full">
		<div className="gp-flex gap-1 md:gap-2 text-lg md:text-xl w-full">
			<div className="h-[50px] md:h-[60px] lg:h-[70px] flex items-center justify-center bg-[--bg] rounded-lg w-full text-xl md:text-2xl xl:text-3xl">
				{x}
			</div>
			<div className="h-[50px] md:h-[60px] lg:h-[70px] flex items-center justify-center bg-[--bg] rounded-lg w-full text-xl md:text-2xl xl:text-3xl">
				{y}
			</div>
		</div>
		<div className="capitalize">{unit}</div>
	</div>
);

const Countdown = () => {
	return (
		<div className="w-full h-[200px] max-w-[1024p] bg-[--car] rounded-3xl flex flex-col items-center justify-center gap-5 gradient1 p-4">
			<h2>Going live in:</h2>
			<div className="flex gap-3 md:gap-5 w-full max-w-[325px] md:max-w-[400px] lg:max-w-[505px]">
				<CountdownDisplay x="0" y="0" unit="days" />
				<CountdownDisplay x="0" y="0" unit="hours" />
				<CountdownDisplay x="0" y="0" unit="minutes" />
			</div>
		</div>
	);
};

export default Countdown;
