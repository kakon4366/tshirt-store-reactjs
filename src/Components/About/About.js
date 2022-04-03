import React from "react";
import { Link, Outlet } from "react-router-dom";
import profilePhoto from "../../images/kakon.jpg";

const About = () => {
	return (
		<section className="py-20 ">
			<div className="container mx-auto">
				<h1 className="text-4xl text-center uppercase font-semibold">
					About Me
				</h1>
				<div className="mt-20 flex">
					<img className="rounded w-[500px]" src={profilePhoto} alt="" />
					<div className="ml-12">
						<h2 className="text-4xl font-semibold">Kakon Barman</h2>
						<h4 className="text-1xl">Web Developer</h4>
						<br />
						<p className="text-lg text-justify">
							Hey, My name is Kakon Barman. I'm a Web Developer. Lorem
							ipsum dolor sit amet consectetur adipisicing elit.
							Inventore itaque veritatis ducimus sunt distinctio cum
							nobis voluptatibus possimus suscipit doloremque repellat
							laudantium nisi hic nihil dignissimos beatae sed, numquam
							quod aliquid. Odit assumenda ratione nemo eos! Consectetur
							similique repellat porro rem saepe, quibusdam est ad,
							distinctio, magni autem ab eos.
							<br />
							<br />
							Lorem ipsum dolor sit amet, consectetur adipisicing elit.
							Non dolor, architecto enim reprehenderit eum recusandae
							omnis corrupti nostrum laudantium laborum aspernatur
							aliquid consequuntur qui. Nobis aperiam, facilis assumenda
							numquam laudantium at nemo veniam omnis a ea quibusdam,
							dolorem voluptatem molestiae saepe ducimus sint deleniti
							totam animi maiores, nulla autem! Vel, doloribus!
							Dignissimos quia aspernatur, animi sunt beatae, ipsam
							praesentium autem exercitationem aliquid doloremque quo
							harum ducimus vel. Sed, accusantium? Reiciendis omnis culpa
							impedit exercitationem voluptate! Illo, perferendis
							repudiandae ipsam provident accusamus asperiores ullam
							expedita magni laudantium sunt, nihil tenetur maxime. Dicta
							amet quisquam pariatur adipisci recusandae laboriosam quos
							et ab!
						</p>
						<button className="bg-blue-500 py-2 px-12 text-white rounded mt-8 hover:bg-blue-700 transition-all">
							Learn More
						</button>
					</div>
				</div>

				{/* social media section  */}
				<div className="my-28">
					<h2 className="text-2xl font-semibold mb-8">Social Media</h2>
					<Link
						className="bg-blue-500 mr-3 py-3 px-12 text-white text-xl rounded"
						to="/about/facebook"
					>
						Facebook
					</Link>
					<Link
						className="bg-[#FF0000] mr-3 py-3 px-12 text-white text-xl rounded"
						to="/about/youtube"
					>
						Youtube
					</Link>
					<Link
						className="bg-[#0A65C0] mr-3 py-3 px-12 text-white text-xl rounded"
						to="/about/linkedin"
					>
						Linkedin
					</Link>
					<div className="mt-6">
						<Outlet></Outlet>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
