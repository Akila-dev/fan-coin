import React from "react";

import bg from "../assets/bg-2.jpg";
import logo from "../assets/fancoin.svg";
import { Button } from "../components";

const Hero = () => {
	return (
		<div className="w-full h-[100vh] relative">
			<img
				src={bg}
				alt="background"
				className="w-full h-full object-cover object-bottom md:object-top"
			/>
			<div className="absolute top-0 w-full h-full flex items-center justify-center gradient-bg-1">
				<div className="flex flex-col items-center container">
					<div className="max-w-[800px] mx-auto text-center">
						<div className="flex justify-center items-center gap-1">
							<img
								src={logo}
								alt="logo"
								className="h-[50px] w-[50px] md:h-[60px] md:w-[60px]"
							/>
							<h1 className="pb-2">FANCOIN</h1>
						</div>
						<h3 className="text-center pt-8 pb-6">
							A beacon in the Cryptoverse where community meets Crypto, where
							fans unite, and dreams come true.
						</h3>
						<div>
							<Button text="read more" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
