import type { Metadata } from "next";
import { Footer, Header } from "@/components";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Car Hub",
	description: "Discover the best cars in the world",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${manrope.className} relative`}>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}
