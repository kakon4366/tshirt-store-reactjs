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
				<div className="mt-20 lg:flex">
					<div className="lg:w-1/3">
						<img className="rounded w-full" src={profilePhoto} alt="" />
					</div>
					<div className="lg:ml-12 lg:w-2/3">
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
				<div className="flex my-28">
					{/* social medea component here  */}
					<div>
						<Link
							to={"/about/social-media"}
							className="border rounded border-blue-700 bg-blue-500 hover:bg-slate-200 text-slate-200 hover:text-black py-2 px-12 text-2xl font-semibold mb-8 mr-3"
						>
							Social Media
						</Link>
						<Link
							to={"/about/my-details"}
							className="border rounded border-blue-700 bg-blue-500 hover:bg-slate-200 text-slate-200 hover:text-black py-2 px-12 text-2xl font-semibold mb-8"
						>
							My Details
						</Link>
						<div className="mt-12">
							<Outlet></Outlet>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
