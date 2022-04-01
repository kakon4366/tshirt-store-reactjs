import { useState } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import TopHeader from "./Components/TopHeader/TopHeader";

function App() {
	const [dark, setDark] = useState("light");

	const darkHandler = () => {
		if (dark === "dark") {
			setDark("light");
		} else {
			setDark("dark");
		}
	};

	return (
		<div className={dark}>
			<TopHeader darkHandler={darkHandler} dark={dark}></TopHeader>
			<Header></Header>
		</div>
	);
}

export default App;
