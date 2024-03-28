import {
	Navbar,
	Hero,
	Roadmap,
	Particles,
	// Countdown,
	// InputWallet,
	// Planet,
	Footer,
} from "./components";

// import { HiOutlineRocketLaunch } from "react-icons/hi2";

import "./App.css";

function App() {
	return (
		<div className="bg-white min-h-screen relative">
			<div className="relative z-10"></div>
			<Hero />
			<Roadmap />
			<Footer />

			<Navbar />
			<div className="!pointer-events-none">
				<Particles />
			</div>
		</div>
	);
}

export default App;
