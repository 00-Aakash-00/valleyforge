import type { Metadata } from "next";
import { BUSINESS, SITE_NAME, SITE_URL, TAGLINE } from "./constants";

export function createMetadata({
	title,
	description,
	path = "",
	keywords = [],
}: {
	title: string;
	description: string;
	path?: string;
	keywords?: string[];
}): Metadata {
	const fullTitle = `${title} | ${SITE_NAME}`;
	const url = `${SITE_URL}${path}`;

	return {
		title,
		description,
		keywords: [
			"gunsmith",
			"firearm cleaning",
			"Phoenix",
			"Scottsdale",
			"Arizona",
			"C2 Tactical",
			"veteran owned",
			...keywords,
		],
		openGraph: {
			title: fullTitle,
			description,
			url,
			siteName: SITE_NAME,
			type: "website",
			locale: "en_US",
		},
		twitter: {
			card: "summary_large_image",
			title: fullTitle,
			description,
		},
		alternates: {
			canonical: url,
		},
	};
}

export function getLocalBusinessJsonLd() {
	return {
		"@context": "https://schema.org",
		"@type": "LocalBusiness",
		name: BUSINESS.name,
		description: `Professional firearm cleaning and gunsmith services in ${BUSINESS.city}, ${BUSINESS.state}. ${TAGLINE}`,
		url: SITE_URL,
		telephone: BUSINESS.phone,
		email: BUSINESS.email,
		address: {
			"@type": "PostalAddress",
			streetAddress: BUSINESS.address,
			addressLocality: BUSINESS.city,
			addressRegion: BUSINESS.state,
			postalCode: BUSINESS.zip,
			addressCountry: "US",
		},
		geo: {
			"@type": "GeoCoordinates",
			latitude: BUSINESS.coordinates.lat,
			longitude: BUSINESS.coordinates.lng,
		},
		aggregateRating: {
			"@type": "AggregateRating",
			ratingValue: BUSINESS.googleRating,
			reviewCount: BUSINESS.reviewCount,
		},
		openingHoursSpecification: [
			{
				"@type": "OpeningHoursSpecification",
				dayOfWeek: ["Thursday", "Friday", "Saturday"],
				opens: "10:00",
				closes: "18:00",
			},
		],
		priceRange: "$$",
		image: `${SITE_URL}/images/hero/hero-main.jpeg`,
	};
}
