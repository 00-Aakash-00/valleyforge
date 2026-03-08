import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { Playfair_Display, Source_Sans_3 } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { BUSINESS, SITE_NAME, SITE_URL, TAGLINE } from "@/lib/constants";
import { getLocalBusinessJsonLd } from "@/lib/metadata";
import "./globals.css";

const playfair = Playfair_Display({
	subsets: ["latin"],
	variable: "--font-playfair",
	display: "swap",
	weight: ["400", "600", "700", "800"],
});

const sourceSans = Source_Sans_3({
	subsets: ["latin"],
	variable: "--font-source-sans",
	display: "swap",
	weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
	title: {
		default: `${SITE_NAME} — Professional Firearm Cleaning & Gunsmith Services | Phoenix, AZ`,
		template: `%s | ${SITE_NAME}`,
	},
	description: `${TAGLINE} Veteran-owned firearm cleaning and gunsmith services in Phoenix/Scottsdale, AZ. Located inside C2 Tactical. ${BUSINESS.googleRating}/5 stars (${BUSINESS.reviewCount} reviews).`,
	keywords: [
		"gunsmith",
		"firearm cleaning",
		"gun cleaning",
		"Phoenix gunsmith",
		"Scottsdale gunsmith",
		"Arizona",
		"C2 Tactical",
		"veteran owned",
		"AR-15",
		"sight installation",
		"Cerakote",
	],
	metadataBase: new URL(SITE_URL),
	openGraph: {
		type: "website",
		locale: "en_US",
		url: SITE_URL,
		siteName: SITE_NAME,
		title: `${SITE_NAME} — Professional Firearm Cleaning & Gunsmith Services`,
		description: `${TAGLINE} Veteran-owned firearm cleaning and gunsmith services in Phoenix/Scottsdale, AZ.`,
	},
	twitter: {
		card: "summary_large_image",
	},
	robots: {
		index: true,
		follow: true,
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${playfair.variable} ${sourceSans.variable} antialiased`}>
				<Navbar />
				<main>{children}</main>
				<Footer />
				<script
					type="application/ld+json"
					// biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD structured data
					dangerouslySetInnerHTML={{
						__html: JSON.stringify(getLocalBusinessJsonLd()),
					}}
				/>
				<Analytics />
			</body>
		</html>
	);
}
