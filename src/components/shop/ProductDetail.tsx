"use client";

import { ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/ui/Container";
import { SITE_URL } from "@/lib/constants";
import { CATEGORIES } from "@/lib/products";
import { formatPrice } from "@/lib/utils";
import type { Product } from "@/types";
import { AddToCartButton } from "./AddToCartButton";
import { ProductGrid } from "./ProductGrid";

interface ProductDetailProps {
	product: Product;
	relatedProducts: Product[];
}

export function ProductDetail({ product, relatedProducts }: ProductDetailProps) {
	const category = CATEGORIES.find((c) => c.slug === product.category);
	const categoryName = category?.name ?? product.category;

	const jsonLd = {
		"@context": "https://schema.org",
		"@type": "Product",
		name: product.name,
		description: product.description,
		image: `${SITE_URL}${product.image}`,
		sku: product.id,
		offers: {
			"@type": "Offer",
			price: product.price.toFixed(2),
			priceCurrency: "USD",
			availability: product.inStock
				? "https://schema.org/InStock"
				: "https://schema.org/OutOfStock",
			seller: {
				"@type": "Organization",
				name: "Valley Forge Weaponry",
			},
		},
	};

	return (
		<>
			<script
				type="application/ld+json"
				// biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD structured data
				dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
			/>

			<section className="bg-white py-8">
				<Container>
					{/* Breadcrumb */}
					<nav aria-label="Breadcrumb" className="mb-8">
						<ol className="flex items-center gap-1 text-sm text-slate-500">
							<li>
								<a
									href="/shop"
									className="min-h-[44px] inline-flex items-center transition-colors hover:text-vfw-red-600"
								>
									Shop
								</a>
							</li>
							<li>
								<ChevronRight className="h-4 w-4" />
							</li>
							<li>
								<a
									href={`/shop/${product.category}`}
									className="min-h-[44px] inline-flex items-center transition-colors hover:text-vfw-red-600"
								>
									{categoryName}
								</a>
							</li>
							<li>
								<ChevronRight className="h-4 w-4" />
							</li>
							<li className="font-semibold text-charcoal">{product.name}</li>
						</ol>
					</nav>

					{/* Product layout: 2 columns */}
					<div className="grid gap-8 md:grid-cols-2 lg:gap-12">
						{/* Image placeholder */}
						<div className="aspect-square rounded-lg bg-gray-200" />

						{/* Details */}
						<div className="flex flex-col">
							<Badge variant="navy" className="mb-3 self-start">
								{categoryName}
							</Badge>

							<h1 className="font-heading text-3xl font-bold text-charcoal md:text-4xl">
								{product.name}
							</h1>

							<p className="mt-4 text-3xl font-bold text-vfw-red-600">
								{formatPrice(product.price)}
							</p>

							{product.inStock ? (
								<p className="mt-2 text-sm font-semibold text-success">In Stock</p>
							) : (
								<p className="mt-2 text-sm font-semibold text-error">Out of Stock</p>
							)}

							<p className="mt-6 text-base leading-relaxed text-slate-700">{product.description}</p>

							<div className="mt-8">
								<AddToCartButton product={product} />
							</div>
						</div>
					</div>
				</Container>
			</section>

			{/* Related products */}
			{relatedProducts.length > 0 && (
				<section className="border-t border-gray-200 bg-white-warm py-16">
					<Container>
						<h2 className="font-heading mb-8 text-2xl font-bold text-charcoal">Related Products</h2>
						<ProductGrid products={relatedProducts} />
					</Container>
				</section>
			)}
		</>
	);
}
