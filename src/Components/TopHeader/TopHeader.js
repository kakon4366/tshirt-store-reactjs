import React from "react";

const TopHeader = ({ dark, darkHandler }) => {
	// const [mode, setMode] = useState(true);

	// const changeMode = () => {
	// 	setMode(!mode);
	// };

	console.log(dark);

	return (
		<div className="border-b-4 py-1 bg-slate-200 dark:bg-slate-900">
			<div className="container mx-auto">
				<div className="text-right">
					<small className="mr-12 dark:text-white">
						Email: kakonbarman4366@gmail.com
					</small>
					<small className="mr-12 dark:text-white">
						Phone: +8801303168572
					</small>
					<small>
						{dark === "light" ? (
							<button
								onClick={darkHandler}
								className="border bg-black rounded text-white px-2"
							>
								dark
							</button>
						) : (
							<button
								onClick={darkHandler}
								className="border bg-white text-black rounded px-2"
							>
								light
							</button>
						)}
					</small>
				</div>
			</div>
		</div>
	);
};

export default TopHeader;
