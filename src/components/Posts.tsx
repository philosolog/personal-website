import type { SanityDocument } from "@sanity/client";
import Image from "next/image";
import Link from "next/link";

const Posts = ({ posts = [] }: { posts: SanityDocument[] }) => {
	const convertDate = (date: string) => {
		return new Date(date).toLocaleDateString("en-US", { day: "numeric", month: "short", year: "numeric" })
	}

	return (
		<div className="py-10 mx-auto grid grid-cols-1">
			<h1 className="text-[4rem] font-bold">blog</h1> 
			<div className="grid grid-cols-1">
				{posts.map((post) =>
					<Link
						className="p-4 flex flex-row items-center justify-between hover:opacity-90"
						key={post._id}
						href={"blog/" + post.slug.current} // Note: Added "blog/" prefix in order to remediate issues with the slug not loading the right path.
					>
						<div>
							<h2 className="font-medium text-xl">{post.title}</h2>
							<p className="py-2 text-gray-400 text-xs font-light uppercase">{convertDate(post._createdAt)}</p>
						</div>
						{post?.mainImage &&
							<Image
								className="w-32 object-fill rounded-lg"
								src={post.imageURL}
								alt={post.mainImage.alt}
								width={350}
								height={350}
								priority
							/>
						}
					</Link>
				)}
			</div>
		</div>
	)
}

export default Posts