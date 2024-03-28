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
			<div className="relative">
				<Hero />
				<Roadmap />
				<Footer />
			</div>

			<div className="!pointer-events-none" style={{ pointerEvent: "none" }}>
				<Particles />
			</div>
			<Navbar />
		</div>
	);
}

export default App;
