// *: Styles
import "@/app/globals.css";
import "./home.css"
// *: Components

// *: Fonts
import { Inter } from "next/font/google";

export const inter = Inter({
	subsets: ['latin'],
	display: 'swap',
})

// *: Metadata
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Aaron Wang",
	description: "An undergraduate with a fervor for all things in the intersection of pure mathematics and computer science.",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body>
				<main className={inter.className}>
					{children}
				</main>
			</body>
		</html>
	)
}