import React from "react";
import { Link, Outlet } from "react-router-dom";

const SocialMedia = () => {
	return (
		<div>
			<Link
				className="bg-blue-500 mr-3 py-3 px-12 text-white text-xl rounded"
				to="facebook"
			>
				Facebook
			</Link>
			<Link
				className="bg-[#FF0000] mr-3 py-3 px-12 text-white text-xl rounded"
				to="youtube"
			>
				Youtube
			</Link>
			<Link
				className="bg-[#0A65C0] mr-3 py-3 px-12 text-white text-xl rounded"
				to="linkedin"
			>
				Linkedin
			</Link>
			<div className="mt-12">
				<Outlet></Outlet>
			</div>
		</div>
	);
};

export default SocialMedia;
