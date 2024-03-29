import React from "react";

import bg from "../assets/bg-2.jpg";
import logo from "../assets/logo1.png";
import { About, Button } from "../components";
import { CgEreader } from "react-icons/cg";

const Hero = () => {
	return (
		<div className="w-full relative bg-white">
			<div className="w-full absolute top-0 h-full">
				<img
					src={bg}
					alt="background"
					className="w-full h-full object-cover object-bottom md:object-top"
				/>
			</div>
			<div className="relative top-0 w-full gradient-bg-1">
				<div className="flex flex-col justify-center items-center container h-screen max-h-[700px]">
					<div className="max-w-[800px] flex flex-col justify-center pb-[100px md:pb-[100px pt-[100px] text-center">
						<div className="flex justify-center items-center gap-1">
							{/* <img
								src={logo}
								alt="logo"
								className="h-[50px] w-[50px] md:h-[60px] md:w-[60px]"
							/>
							<h1 className="pb-2">FANCOIN</h1> */}
							<img
								src={logo}
								alt="logo"
								className="h-[60px] w-full md:h-[100px] xl:h-[150px] object-contain pl-3"
							/>
						</div>
						<h3 className="text-center pt-8 pb-6">
							A beacon in the Cryptoverse where community meets crypto, where
							fans unite, and dreams come true.
						</h3>
						<div>
							<Button
								text="read more"
								icon={<CgEreader className="text-lg w-[20px] object-stretch" />}
							/>
						</div>
					</div>
				</div>
			</div>
			<div className="relative gradient-bg-1">
				<About />
			</div>
		</div>
	);
};

export default Hero;
