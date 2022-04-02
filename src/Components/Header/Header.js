import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<div className="bg-white dark:bg-slate-900 shadow-md py-6">
			<div className="container mx-auto">
				<nav className="flex justify-between">
					<h3 className="text-2xl font-bold dark:text-white">Logo</h3>
					<ul className="flex text-lg uppercase font-semibold dark:text-white">
						<li className="ml-8">
							<Link to="/">Home</Link>
						</li>
						<li className="ml-8">
							<Link to="/about">About</Link>
						</li>
						<li className="ml-8">
							<Link to="/shop">Shop</Link>
						</li>
						<li className="ml-8">
							<Link to="/order-review">Order Review</Link>
						</li>
						<li className="ml-8">
							<Link to="/contact-us">Contact Us</Link>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	);
};

export default Header;
