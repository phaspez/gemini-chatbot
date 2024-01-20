import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "CAAS",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<SpeedInsights />
			<body className={inter.className}>
				<div className="fixed h-full w-full p-0 m-0 -z-50 bg-gradient-to-tr from-white via-white to-red-200 dark:from-black dark:via-black dark:to-sky-900">
					{" "}
				</div>
				{children}
			</body>
		</html>
	);
}
