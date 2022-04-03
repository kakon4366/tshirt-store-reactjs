import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Components/About/About";
import ContactUs from "./Components/ContactUs/ContactUs";
import Facebook from "./Components/Facebook/Facebook";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Linkedin from "./Components/Linkedin/Linkedin";
import OrderReview from "./Components/OrderReview/OrderReview";
import Shop from "./Components/Shop/Shop";
import TopHeader from "./Components/TopHeader/TopHeader";
import Youtube from "./Components/Youtube/Youtube";

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
				<Route path="/about" element={<About></About>}>
					<Route path="facebook" element={<Facebook></Facebook>}></Route>
					<Route path="youtube" element={<Youtube></Youtube>}></Route>
					<Route path="linkedin" element={<Linkedin></Linkedin>}></Route>
				</Route>
				<Route path="/shop" element={<Shop></Shop>}></Route>
				<Route
					path="/order-review"
					element={<OrderReview></OrderReview>}
				></Route>
				<Route path="/contact-us" element={<ContactUs></ContactUs>}></Route>
			</Routes>
		</div>
	);
}

export default App;
