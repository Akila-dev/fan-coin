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
			<Particles />
			<div className="relative !pointer-events-auto">
				<Hero />
				<Roadmap />
				<Footer />
			</div>

			<Navbar />
		</div>
	);
}

export default App;
