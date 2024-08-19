import type { Metadata } from "next";
import { Hanken_Grotesk } from "next/font/google";
import "@/app/globals.css";
import "./home.css";

export const hanken_grotesk = Hanken_Grotesk({
	subsets: ['latin'],
	display: 'swap',
})

export const metadata: Metadata = {
	title: "Aaron Wang",
	description: "An undergraduate with a fervor for all things in the intersection of pure mathematics and computer science.",
};
export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={hanken_grotesk.className}>{children}</body>
		</html>
	);
}