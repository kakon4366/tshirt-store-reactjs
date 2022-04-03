import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Components/About/About";
import ContactUs from "./Components/ContactUs/ContactUs";
import Facebook from "./Components/Facebook/Facebook";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Intrest from "./Components/Intrest/Intrest";
import Linkedin from "./Components/Linkedin/Linkedin";
import MyDetails from "./Components/MyDetails/MyDetails";
import OrderReview from "./Components/OrderReview/OrderReview";
import Personality from "./Components/Personality/Personality";
import Profile from "./Components/Profile/Profile";
import Shop from "./Components/Shop/Shop";
import SocialMedia from "./Components/SocialMedia/SocialMedia";
import TopHeader from "./Components/TopHeader/TopHeader";
import Tour from "./Components/Tour/Tour";
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
					<Route path="/about/social-media" element={<SocialMedia />}>
						<Route path="facebook" element={<Facebook />}></Route>
						<Route path="youtube" element={<Youtube />}></Route>
						<Route path="linkedin" element={<Linkedin />}></Route>
					</Route>
					<Route path="/about/my-details" element={<MyDetails />}>
						<Route path="profile" element={<Profile />}></Route>
						<Route path="intrest" element={<Intrest />}></Route>
						<Route path="personality" element={<Personality />}></Route>
						<Route path="tour" element={<Tour />}></Route>
					</Route>
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
