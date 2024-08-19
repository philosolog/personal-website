import { SanityDocument } from "@sanity/client";
import { postPathsQuery, postQuery } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/fetch";
import { client } from "@/sanity/lib/client";
import Post from "components/Post";

export const revalidate = 30 // *: Revalidates every 30 seconds.

export async function generateStaticParams() {
	const posts = await client.fetch(postPathsQuery);
	return posts
}

const PostPage = async ({ params }: { params: any }) => {
	const post = await sanityFetch<SanityDocument>({ query: postQuery, params })
	
	return (
		<Post post={post} />
	)
}

export default PostPage

// TODO: Add a layout handler for generated pages.