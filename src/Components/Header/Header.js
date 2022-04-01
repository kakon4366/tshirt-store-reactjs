import React from "react";

const Header = () => {
	return (
		<div className="bg-white shadow-md py-6">
			<div className="container mx-auto">
				<nav className="flex justify-between">
					<h3 className="text-2xl font-bold">Logo</h3>
					<ul className="flex text-lg uppercase font-semibold">
						<li className="ml-8">
							<a href="/">Home</a>
						</li>
						<li className="ml-8">
							<a href="/about">About</a>
						</li>
						<li className="ml-8">
							<a href="/shop">Shop</a>
						</li>
						<li className="ml-8">
							<a href="/order-review">Order Review</a>
						</li>
						<li className="ml-8">
							<a href="/contact-us">Contact Us</a>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	);
};

export default Header;