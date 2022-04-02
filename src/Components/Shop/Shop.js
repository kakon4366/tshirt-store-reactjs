import React, { useState } from "react";
import useTshirt from "../../Hooks/useTshirt";
import Cart from "../Cart/Cart";
import TshirtItem from "../TshirtItem/TshirtItem";

const Shop = () => {
	const [tshirts, setTshirts] = useTshirt([]);
	const [cart, setCart] = useState([]);

	const addToCartHandler = (selectedTshirt) => {
		const exists = cart.find((tshirt) => tshirt._id === selectedTshirt._id);
		if (!exists) {
			const addTshirt = [...cart, selectedTshirt];
			setCart(addTshirt);
		} else {
			alert("This T-shirt Alredy Exists!!!");
		}
	};

	const removeTshirt = (selectedTshirt) => {
		const riminingTshirt = cart.filter(
			(tshirt) => tshirt._id !== selectedTshirt._id
		);
		setCart(riminingTshirt);
	};

	return (
		<section className="py-12 dark:bg-slate-900">
			<div className="container mx-auto">
				<h2 className="text-4xl dark:text-white text-center font-semibold">
					Buying your favorite T-shirts
				</h2>
				<h4 className="dark:text-white">Total Items: {tshirts.length}</h4>
				<hr />
				<br />
				<div className="grid grid-cols-3 gap-8">
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 col-span-2">
						{tshirts.map((tshirt) => (
							<TshirtItem
								addToCartHandler={addToCartHandler}
								key={tshirt._id}
								tshirt={tshirt}
							></TshirtItem>
						))}
					</div>
					<div className="bg-purple-200 dark:bg-[#111] dark:text-slate-200 rounded p-4 pt-12">
						<h2 className="text-2xl font-semibold text-center">
							Order Summary
						</h2>
						<hr className="border-slate-400 my-3" />
						<div>
							<h2>Select Item: {cart.length}</h2>
							{cart.map((tshirt) => (
								<Cart
									removeTshirt={removeTshirt}
									key={tshirt._id}
									tshirt={tshirt}
								></Cart>
							))}
						</div>
						<div className="my-12 text-center">
							{cart.length !== 0 && (
								<button className="bg-blue-500 dark:bg-slate-700 dark:hover:bg-black dark:hover:border dark:hover:border-slate-700 text-white text-xl uppercase font-semibold py-3 w-full rounded ">
									Order Review
								</button>
							)}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Shop;
