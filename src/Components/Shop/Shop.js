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
		<section className="my-12">
			<div className="container mx-auto">
				<h2 className="text-4xl text-center font-semibold">
					Buying your favorite T-shirts
				</h2>
				<h4>Total Items: {tshirts.length}</h4>
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
					<div className="bg-purple-200 rounded p-4 pt-12">
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
					</div>
				</div>
			</div>
		</section>
	);
};

export default Shop;
