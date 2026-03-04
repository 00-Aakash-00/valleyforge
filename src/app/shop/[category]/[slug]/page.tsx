import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductDetail } from "@/components/shop/ProductDetail";
import { createMetadata } from "@/lib/metadata";
import { CATEGORIES, getProductBySlug, getRelatedProducts, PRODUCTS } from "@/lib/products";

interface ProductPageProps {
	params: Promise<{ category: string; slug: string }>;
}

export function generateStaticParams() {
	return PRODUCTS.map((product) => ({
		category: product.category,
		slug: product.slug,
	}));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
	const { slug } = await params;
	const product = getProductBySlug(slug);
	if (!product) return {};

	const category = CATEGORIES.find((c) => c.slug === product.category);
	const categoryName = category?.name ?? product.category;

	return createMetadata({
		title: `${product.name} - ${categoryName}`,
		description: product.description,
		path: `/shop/${product.category}/${product.slug}`,
		keywords: [
			product.name.toLowerCase(),
			categoryName.toLowerCase(),
			"firearm parts",
			"gun parts Phoenix",
		],
	});
}

export default async function ProductPage({ params }: ProductPageProps) {
	const { slug } = await params;
	const product = getProductBySlug(slug);

	if (!product) {
		notFound();
	}

	const relatedProducts = getRelatedProducts(product, 4);

	return <ProductDetail product={product} relatedProducts={relatedProducts} />;
}
