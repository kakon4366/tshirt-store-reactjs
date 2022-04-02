import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
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
			<Routes>
				<Route path="/" element={<Home></Home>}></Route>
				<Route path="/home" element={<Home></Home>}></Route>
			</Routes>
		</div>
	);
}

export default App;
