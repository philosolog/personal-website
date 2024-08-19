"use client";

import Image from "next/image";
import philosolog_logo from "@/../public/philosolog_logo.svg";
import { motion } from "framer-motion";

export default function Home() {
	const navigate_forward = async (event: React.MouseEvent<HTMLAnchorElement>, name: string) => {
		event.preventDefault();
		// TODO: Animate the moving parts.

		window.location.href = "/" + name;
	}

	return (
		<div className="absolute m-auto w-full h-full items-center grid grid-cols-2 grid-rows-1 gap-16">
			{/* icon */}
			<Image
				className="philosolog_logo_big"
				src={philosolog_logo}
				alt=""
				width={512}
				height={512}
				style={{
					width: "auto",
					height: "35%",
					justifySelf: "end",
				}}
			/>

			<div className="grid grid-cols-1 grid-rows-2">
				{/* title */}
				<div className="philosolog_title">
					<div className="h-[1/8]">

					</div>
					<p className="text-[4.5rem] font-bold font-poppins">
						philosolog
					</p>
				</div>

				{/* buttons */}
				<div className="grid grid-cols-1 grid-rows-3 gap-2 text-[2rem] font-normal text-auto text-align-top tracking-wide leading-[2.5rem]">
					<motion.a className="button_biograph" href="/biograph" title="Things about me..." whileHover={{ x: 8 }} onClick={event => navigate_forward(event, "biograph")} whileTap={{ x: 8 }}>
						<span className="">
							biograph
						</span>
					</motion.a>
					<motion.a className="button_projects" href="/projects" title="Stuff I've worked on..." whileHover={{ x: 8 }} onClick={event => navigate_forward(event, "projects")} whileTap={{ x: 8 }}>
						<span className="">
							projects
						</span>
					</motion.a>
					<motion.a className="button_blog" href="/blog" title="My thoughts..." whileHover={{ x: 8 }} onClick={event => navigate_forward(event, "blog")} whileTap={{ x: 8 }}>
						<span className="">
							blog
						</span>
					</motion.a>
				</div>
			</div>
		</div>
	);
}
