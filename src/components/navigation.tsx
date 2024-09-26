import Image from "next/image";
import Link from 'next/link'
import biograph_button from "@/../public/biograph.svg";
import projects_button from "@/../public/projects.svg";
import blog_button from "@/../public/blog.svg";

export default function Navigation() {
	return (
		<div className="absolute m-2 h-50% items-center grid grid-cols-1 grid-rows-3 gap-2">
			<Link href="/">
				<Image
					className="biograph_button"
					src={biograph_button}
					alt=""
					width={512}
					height={512}
					style={{
						width: "64px",
						height: "64px",
					}}
				/>
			</Link>
			<Link href="/projects">
				<Image
					className="projects_button"
					src={projects_button}
					alt=""
					width={512}
					height={512}
					style={{
						width: "64px",
						height: "64px",
					}}
				/>
			</Link>
			<Link href="/blog">
				<Image
					className="blog_button"
					src={blog_button}
					alt=""
					width={512}
					height={512}
					style={{
						width: "64px",
						height: "64px",
					}}
				/>
			</Link>
		</div>
	)
}

// TODO: Find a way to isolate components' CSS.