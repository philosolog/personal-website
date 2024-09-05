// *: Styles
import "@/app/globals.css";
import "./home.css"
// *: Components

// *: Fonts
import { Hanken_Grotesk } from "next/font/google";

const hanken_grotesk = Hanken_Grotesk({
	subsets: ['latin'],
	display: 'swap',
})

// *: Metadata
import type { Metadata } from "next";

export const metadata: Metadata = {
	// title: "Aaron Wang",
	// description: "An undergraduate with a fervor for all things pure mathematics and computer science.",
	openGraph: {
		title: 'Aaron Wang',
		description: 'An undergraduate with a fervor for all things pure mathematics and computer science.',
		url: 'https://philosolog.com',
		siteName: 'philosolog',
		images: [
			{
				url: 'https://philosolog.com/philosolog_logo_dark.jpg', // Must be an absolute URL
				width: 800,
				height: 600,
			},
		],
		locale: 'en_US',
		type: 'website',
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en" className={hanken_grotesk.className}>
			<body>
				<main>
					{children}
				</main>
			</body>
		</html>
	)
}