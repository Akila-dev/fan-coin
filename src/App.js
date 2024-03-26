// import {
// 	Navbar,
// 	Particles,
// 	Countdown,
// 	InputWallet,
// 	Planet,
// 	Footer,
// 	Tokenomics,
// } from "./components";

import {
	Navbar,
	Particles,
	Countdown,
	InputWallet,
	Planet,
	Footer,
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

						<div className="text-center space-y-1 md:space-y-2">
							<h1>FANCOIN</h1>
							<h4 className="text-[--highlight]">
								Where Community meets Crypto
							</h4>
							<p className="flex flex-col gap-2 max-w-[750px] pt-2">
								In the realm of Solana, a new force emerges: Fancoin and its
								Fanatics. More than just a token, Fancoin ignites a movement
								fueled by passion. Join us on this thrilling journey, united by
								our love for Fancoin. Together, we'll soar to new heights and
								sail to Valhalla 🚀.
							</p>
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
								FANCOIN empowers a vibrant community, enabling users to discover
								projects early while also engaging in Social contests of their
								favorite web3 projects for Redeemable Points and Rewards.
							</span>
							<span>Dive into the future of digital currency with us.</span>
							<span>Join FANCOIN today!</span>
						</p>
						<div className="flex gap-2 md:gap-3">
							{/* <button className="bg-[--highlight] hover:bg-[--highlight2] px-5 py-2 rounded-lg gp-flex gap-2">
								<HiOutlineRocketLaunch />
								Launch Dapps
							</button> */}
							<button className="w-full md:w-auto md:px-5 py-2 rounded-lg social-gradient1 group">
								{/* <HiOutlineRocketLaunch className="text-[--highlight2]" /> */}
								<span className="text-[--highlight2] group-hover:text-white inline-block mr-2">
									$
								</span>
								Buy Fancoin
							</button>
							<button className="w-full md:w-auto md:px-5 py-2 rounded-lg social-gradient1 group">
								<HiOutlineRocketLaunch className="text-[--highlight2] group-hover:text-white inline-block mr-2" />
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

				{/* <Tokenomics /> */}

				{/* Footer */}
				<Footer />
			</div>
		</div>
	);
}

export default App;
