import {
	Navbar,
	Particles,
	Countdown,
	InputWallet,
	Planet,
	Footer,
} from "./components";

import "./App.css";

function App() {
	return (
		<div className="bg-[--bg] min-h-screen">
			{/* <div className="-z-10">
				<Particles />
			</div> */}
			<div className="z-[10000] relative">
				<header className="">
					<Navbar />
				</header>

				{/* Hero */}
				<section className="py-[20px] container flex flex-col items-center gap-[50px]">
					<Countdown />

					<div className="text-center space-y-2">
						<h1>FANCOIN</h1>
						<h4>Where Community meets Crypto</h4>
					</div>

					<h3>Check your FAN</h3>

					<InputWallet />
				</section>

				{/* About */}
				<section className="container grid grid-cols-1 lg:grid-cols-2 gap-[50px] lg:gap-[100px]">
					<div className="lg:h-full flex flex-col justify-center space-y-10">
						<h1>
							Welcome to FANCOIN - <span>Where Community Meets Crypto</span>
						</h1>
						<p>
							Discover the next-generation cryptocurrency designed for fans, by
							fans. FANCOIN empowers a vibrant community, offering semless
							transactions, secure investments, and a decentralized ecosystem.
							<br />
							Dive into the future of digital currency with us - Join FANCOIN
							today!
						</p>
					</div>
					<div className="w-full h-[100vw] md:h-[500px] lg:h-screen">
						<Planet />
					</div>
				</section>

				{/* Footer */}
				<Footer />
			</div>
		</div>
	);
}

export default App;
