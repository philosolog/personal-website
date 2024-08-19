// *: Styles
import "@/app/globals.css";
import "./biograph.css";

// *: Components
import Loading from "components/loading";

// *: Fonts
import { Hanken_Grotesk } from "next/font/google";

export const hanken_grotesk = Hanken_Grotesk({
	subsets: ['latin'],
	display: 'swap',
})

// *: Metadata
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Aaron Wang",
	description: "An undergraduate with a fervor for interesting stuff in the intersection of pure mathematics and computer science.",
};
export default function Layout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={hanken_grotesk.className}>
				<Loading />
				{children}
			</body>
		</html>
	);
}