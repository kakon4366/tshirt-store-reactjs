import React, { useState } from "react";

const TopHeader = () => {
	const [mode, setMode] = useState(true);

	const changeMode = () => {
		setMode(!mode);
	};

	return (
		<div className="border-b-4 py-1 bg-slate-200">
			<div className="container mx-auto">
				<div className="text-right">
					<small className="mr-12">Email: kakonbarman4366@gmail.com</small>
					<small className="mr-12">Phone: +8801303168572</small>
					<small>
						{mode ? (
							<button
								onClick={changeMode}
								className="border bg-black rounded text-white px-2"
							>
								dark
							</button>
						) : (
							<button
								onClick={changeMode}
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
