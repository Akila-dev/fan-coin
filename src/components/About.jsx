import React from "react";

// import { HiOutlineRocketLaunch } from "react-icons/hi2";
import { Tokenomics } from "../components";

const About = () => {
	return (
		<section className="container grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-[100px] pb-[50px] lg:pb-[100px]">
			<div className="lg:h-full flex flex-col justify-center space-y-5 lg:space-y-10">
				<h1>WELCOME TO FANCOIN, REALM OF THE FANATICS</h1>
				<p className="flex flex-col gap-2 text-justify">
					<span>
						We are the Fanatics, a community of like-minded souls, connected
						through blockchain technology and memes.
					</span>
					<span className="">
						Embracing the vibrant spirit of fan culture and diving headfirst
						into the world of blockchain technology, Fancoin stands as a beacon
						of unity and celebration. With a nod to the passion and creativity
						of fans everywhere, Fancoin immortalizes the essence of fandom in
						the digital realm.
					</span>
				</p>
				{/* <div>
					<Button
						icon={<HiOutlineRocketLaunch className="" />}
						text="Launch Dapps"
					/>
				</div> */}
			</div>
			<div className="w-full pointer-events-none relative">
				<Tokenomics />
			</div>
		</section>
	);
};

export default About;
