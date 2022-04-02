import React from "react";
import { TrashIcon } from "@heroicons/react/solid";

const Cart = ({ tshirt, removeTshirt }) => {
	const { name, picture, price } = tshirt;
	return (
		<div className="bg-slate-200 dark:bg-slate-700 border-slate-400 border rounded p-3 flex my-3">
			<div className="w-32 h-24 overflow-hidden rounded-full border border-slate-400">
				<img src={picture} alt="" />
			</div>
			<div className="flex justify-between w-full ml-3">
				<div>
					<h2 className="text-3xl">{name}</h2>
					<h4 className="text-xl">
						Price: $<span>{price}</span>
					</h4>
				</div>
				<div className=" flex items-center justify-center">
					<button
						onClick={() => removeTshirt(tshirt)}
						className="bg-red-200 dark:bg-slate-400 p-3 rounded-full"
					>
						<TrashIcon className="h-7 w-7 text-red-500 dark:text-slate-700 dark:hover:text-red-500"></TrashIcon>
					</button>
				</div>
			</div>
		</div>
	);
};

export default Cart;
