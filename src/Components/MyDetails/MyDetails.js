import React from "react";
import { Link, Outlet } from "react-router-dom";

const MyDetails = () => {
	return (
		<div>
			<Link
				className="border border-blue-700 bg-slate-200 py-2 px-8 rounded mr-3"
				to="profile"
			>
				Profile
			</Link>
			<Link
				className="border border-blue-700 bg-slate-200 py-2 px-8 rounded mr-3"
				to="intrest"
			>
				Intrest
			</Link>
			<Link
				className="border border-blue-700 bg-slate-200 py-2 px-8 rounded mr-3"
				to="personality"
			>
				Personality
			</Link>
			<Link
				className="border border-blue-700 bg-slate-200 py-2 px-8 rounded mr-3"
				to="tour"
			>
				Tour
			</Link>
			<div className="mt-12">
				<Outlet></Outlet>
			</div>
		</div>
	);
};

export default MyDetails;
