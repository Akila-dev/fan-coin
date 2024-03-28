import {
	Navbar,
	Hero,
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
		<div className="bg-white min-h-screen relative">
			<Hero />
			<Navbar />
		</div>
	);
}

export default App;
