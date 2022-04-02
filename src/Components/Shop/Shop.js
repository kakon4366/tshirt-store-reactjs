import React from "react";
import useTshirt from "../../Hooks/useTshirt";
import TshirtItem from "../TshirtItem/TshirtItem";

const Shop = () => {
	const [tshirts, setTshirts] = useTshirt([]);

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
							<TshirtItem key={tshirt._id} tshirt={tshirt}></TshirtItem>
						))}
					</div>
					<div className="bg-slate-500">jsdafkljasljf</div>
				</div>
			</div>
		</section>
	);
};

export default Shop;
