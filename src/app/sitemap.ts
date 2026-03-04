import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";
import { CATEGORIES, PRODUCTS } from "@/lib/products";

export default function sitemap(): MetadataRoute.Sitemap {
	const now = new Date();

	const staticPages: MetadataRoute.Sitemap = [
		{
			url: SITE_URL,
			lastModified: now,
			changeFrequency: "weekly",
			priority: 1,
		},
		{
			url: `${SITE_URL}/cleaning-services`,
			lastModified: now,
			changeFrequency: "monthly",
			priority: 0.9,
		},
		{
			url: `${SITE_URL}/services`,
			lastModified: now,
			changeFrequency: "monthly",
			priority: 0.9,
		},
		{
			url: `${SITE_URL}/shop`,
			lastModified: now,
			changeFrequency: "weekly",
			priority: 0.8,
		},
	];

	const categoryPages: MetadataRoute.Sitemap = CATEGORIES.map((cat) => ({
		url: `${SITE_URL}/shop/${cat.slug}`,
		lastModified: now,
		changeFrequency: "weekly" as const,
		priority: 0.7,
	}));

	const productPages: MetadataRoute.Sitemap = PRODUCTS.map((product) => ({
		url: `${SITE_URL}/shop/${product.category}/${product.slug}`,
		lastModified: now,
		changeFrequency: "monthly" as const,
		priority: 0.6,
	}));

	return [...staticPages, ...categoryPages, ...productPages];
}
