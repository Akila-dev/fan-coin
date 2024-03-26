import { useState, useEffect } from "react";

const COUNTDOWN_TARGET = new Date("2024-03-26T18:00:00");

const getTimeLeft = () => {
	const totalTimeLeft = COUNTDOWN_TARGET - new Date();
	const hours = Math.floor(totalTimeLeft / (1000 * 60 * 60));

	const minutes = Math.floor((totalTimeLeft / (1000 * 60)) % 60);
	const seconds = Math.floor((totalTimeLeft / 1000) % 60);

	const timeout = totalTimeLeft <= 0;

	return { hours, minutes, seconds, timeout };
};

const CountdownDisplay = ({ value, unit }) =>
	unit === "timeout" || (
		<div className="flex flex-col items-center gap-2 w-full">
			<div className="gp-flex gap-1 md:gap-1 text-lg md:text-xl w-full">
				<div className="h-[50px] md:h-[60px] lg:h-[70px] flex items-center justify-center bg-[--highlight] rounded-lg w-full text-2xl md:text-3xl xl:text-4xl shadow-md font-semibold">
					{value >= 10 ? value.toString().slice(0, 1) : 0}
				</div>
				<div className="h-[50px] md:h-[60px] lg:h-[70px] flex items-center justify-center bg-[--highlight] rounded-lg w-full text-2xl md:text-3xl xl:text-4xl shadow-md font-semibold">
					{value >= 10 ? value.toString().slice(1) : value}
				</div>
			</div>
			<div className="capitalize">{unit}</div>
		</div>
	);

const Countdown = () => {
	const [timeLeft, setTimeLeft] = useState(() => getTimeLeft());

	useEffect(() => {
		const timer = setInterval(() => {
			setTimeLeft(getTimeLeft());
		}, 1000);

		return () => {
			clearInterval(timer);
		};
	}, []);

	return (
		<div className="w-full">
			{timeLeft.timeout ? (
				<div className="w-full h-[200px] max-w-[1024p] bg-[--car] rounded-3xl flex flex-col items-center justify-center gap-5 gradient1 p-4">
					<h2 className="text-lg">Going live in (Already live):</h2>
					<div className="flex gap-3 md:gap-5 w-full max-w-[325px] md:max-w-[400px] lg:max-w-[505px]">
						{Object.entries(timeLeft).map((el) => {
							const label = el[0];

							return <CountdownDisplay key={label} value={"0"} unit={label} />;
						})}

						{/* <CountdownDisplay x="0" y="0" unit="days" />
			<CountdownDisplay x="0" y="0" unit="hours" />
			<CountdownDisplay x="0" y="0" unit="minutes" /> */}
					</div>
				</div>
			) : (
				<div className="w-full h-[200px] max-w-[1024p] bg-[--car] rounded-3xl flex flex-col items-center justify-center gap-5 gradient1 p-4">
					<h2 className="text-lg">Going live in:</h2>
					<div className="flex gap-3 md:gap-5 w-full max-w-[325px] md:max-w-[400px] lg:max-w-[505px]">
						{Object.entries(timeLeft).map((el) => {
							const label = el[0];
							const value = el[1];

							// const label = el[0];
							// const value1 = el[1].slice(0, 1);
							// const value2 = el[1].slice(1);

							return (
								<CountdownDisplay
									key={label}
									// x={value.slice(0,1)}
									// y={value.slice(1)}
									value={value}
									unit={label}
								/>
							);
						})}

						{/* <CountdownDisplay x="0" y="0" unit="days" />
				<CountdownDisplay x="0" y="0" unit="hours" />
				<CountdownDisplay x="0" y="0" unit="minutes" /> */}
					</div>
				</div>
			)}
		</div>
	);
};

export default Countdown;
