// *: Styles
import "@/app/globals.css";
import "./home.css"
// *: Components
import Navigation from "components/navigation";
// *: Fonts
import { Roboto } from "next/font/google";

const roboto = Roboto({
	subsets: ['latin'],
	display: 'swap',
	weight: ['400', '700'],
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
				url: 'https://philosolog.com/philosolog_logo_dark.jpg',
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
		<html lang="en" className={roboto.className}>
			<body>
				<main>
					<Navigation />
					{children}
				</main>
			</body>
		</html>
	)
}