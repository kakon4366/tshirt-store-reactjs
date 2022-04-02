import React from "react";

const TshirtItem = ({ tshirt, addToCartHandler }) => {
	const { picture, name, price } = tshirt;
	return (
		<div className="border relative rounded border-gray-400 p-3 bg-slate-200">
			<img className="rounded" width="100%" src={picture} alt={name} />
			<div className="mt-3 mb-12">
				<h3 className="text-2xl font-semibold">{name}</h3>
				<h4 className="text-lg ">
					Price: $<span>{price}</span>
				</h4>
			</div>
			<button
				onClick={() => addToCartHandler(tshirt)}
				className="border absolute bottom-0 left-0 rounded bg-blue-500 hover:bg-blue-700 transition-all text-white py-2 w-full"
			>
				Add To Cart
			</button>
		</div>
	);
};

export default TshirtItem;
