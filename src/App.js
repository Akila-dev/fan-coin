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

						<h3>Stake your FAN</h3>

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
						<p>
							Discover the next-generation cryptocurrency designed for fans, by
							fans. FANCOIN empowers a vibrant community, offering semless
							transactions, secure investments, and a decentralized ecosystem.
							<br />
							Dive into the future of digital currency with us - Join FANCOIN
							today!
						</p>
					</div>
					<div className="w-full h-[100vw] md:h-[500px] lg:h-[60vw] xl:h-screen order-1 lg:order-2">
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
