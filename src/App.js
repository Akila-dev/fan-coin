import {
	Navbar,
	Particles,
	Countdown,
	InputWallet,
	Planet,
	Footer,
	Tokenomics,
} from "./components";

import { HiOutlineRocketLaunch } from "react-icons/hi2";

import "./App.css";

function App() {
	return (
		<div className="home-bg min-h-screen">
			<div className="-z-10">
				<Particles />
			</div>
			<div className="z-[10000] relative">
				<header className="">
					<Navbar />
				</header>

				{/* Hero */}
				<section className="py-[20px] container">
					<div className="text-center flex flex-col items-center gap-[30px] md:gap-[50px] max-w-[900px] mx-auto mb-[0]">
						<Countdown />

						<div className="text-center space-y-2">
							<h1>FANCOIN</h1>
							<h4>Where Community meets Crypto</h4>
						</div>

						{/* <h3>Stake your FAN</h3> */}

						<InputWallet />
					</div>
				</section>

				{/* About */}
				<section className="container grid grid-cols-1 lg:grid-cols-2 lg:gap-[50px] xl:gap-[100px] mb-[50px] lg:mb-0">
					<div className="lg:h-full flex flex-col justify-center space-y-5 lg:space-y-10 order-2 lg:order-1">
						<h1>
							Welcome to <span className="text-[--highlight2]">FANCOIN</span> -
							Where Community Meets Crypto
						</h1>
						<p className="flex flex-col gap-2">
							<span>
								Become a Fanatic, invest in your favorite web3 projects and ride
								to Valhala. FANCOIN empowers a vibrant community, enabling users
								to discover low caps early while also engaging in social
								contests of their favorite web3 projects for redeemable points
								and rewards.
							</span>
							<span className="">
								Dive into the future of digital currency with us.
							</span>
							<span>Join FANCOIN today!</span>
						</p>
						<div>
							{/* <button className="bg-[--highlight] hover:bg-[--highlight2] px-5 py-2 rounded-lg gp-flex gap-2">
								<HiOutlineRocketLaunch />
								Launch Dapps
							</button> */}
							<button className="px-5 py-2 rounded-lg gp-flex gap-2 social-gradient1">
								<HiOutlineRocketLaunch className="text-[--highlight2]" />
								Launch Dapps
							</button>
						</div>
					</div>
					<div className="w-full h-[100vw] md:h-[500px] lg:h-[60vw] xl:h-screen order-1 lg:order-2 pointer-events-none relative">
						<div className="w-full h-[100vw] md:h-[500px] lg:h-[60vw] xl:h-screen relative -z-10">
							<Planet />
						</div>
						<div className="w-full h-[100vw] md:h-[500px] lg:h-[60vw] xl:h-screen absolute top-0 left-0 "></div>
					</div>
				</section>

				<Tokenomics />

				{/* Footer */}
				<Footer />
			</div>
		</div>
	);
}

export default App;
