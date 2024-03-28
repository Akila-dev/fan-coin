import React from "react";

import bg from "../assets/bg-2.jpg";
import logo from "../assets/logo1.png";
import { Button } from "../components";

import { LiaReadme } from "react-icons/lia";
import { IoReaderOutline } from "react-icons/io5";
import { CgEreader } from "react-icons/cg";

const Hero = () => {
	return (
		<div className="w-full h-[100vh] relative">
			<img
				src={bg}
				alt="background"
				className="w-full h-full object-cover object-bottom md:object-top"
			/>
			<div className="absolute top-0 w-full h-full gradient-bg-1">
				<div className="flex items-center gap-10 h-full container">
					<div className="flex-1">
						<h2>Fancoin</h2>
						<p className="pt-8 pb-6">
							A beacon in the Cryptoverse where community meets Crypto, where
							fans unite, and dreams come true.
						</p>
						<div>
							<Button
								text="read more"
								icon={<CgEreader className="text-lg w-[20px] object-stretch" />}
							/>
						</div>
					</div>
					<div className="flex-1">
						<h2>Fancoin</h2>
						<p className="pt-8 pb-6">
							A beacon in the Cryptoverse where community meets Crypto, where
							fans unite, and dreams come true.
						</p>
						<div>
							<Button
								text="read more"
								icon={<CgEreader className="text-lg w-[20px] object-stretch" />}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
