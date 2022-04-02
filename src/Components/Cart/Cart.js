import React from "react";

const Cart = ({ tshirt }) => {
	const { name, picture, price } = tshirt;
	return (
		<div>
			<h2>{name}</h2>
		</div>
	);
};

export default Cart;
