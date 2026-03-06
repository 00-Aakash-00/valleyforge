import { ChevronRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProductGrid } from "@/components/shop/ProductGrid";
import { Container } from "@/components/ui/Container";
import { createMetadata } from "@/lib/metadata";
import { CATEGORIES, getProductsByCategory } from "@/lib/products";

interface CategoryPageProps {
	params: Promise<{ category: string }>;
}

export function generateStaticParams() {
	return CATEGORIES.map((category) => ({
		category: category.slug,
	}));
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
	const { category: categorySlug } = await params;
	const category = CATEGORIES.find((c) => c.slug === categorySlug);
	if (!category) return {};

	return createMetadata({
		title: `${category.name} - Shop`,
		description: `${category.description}. Shop ${category.name.toLowerCase()} at Valley Forge Weaponry in Phoenix, AZ. Veteran-owned, competitive pricing.`,
		path: `/shop/${category.slug}`,
		keywords: [
			category.name.toLowerCase(),
			`${category.name.toLowerCase()} Phoenix`,
			"firearm parts",
			"gun parts Arizona",
		],
	});
}

export default async function CategoryPage({ params }: CategoryPageProps) {
	const { category: categorySlug } = await params;
	const category = CATEGORIES.find((c) => c.slug === categorySlug);

	if (!category) {
		notFound();
	}

	const products = getProductsByCategory(category.slug);

	return (
		<>
			{/* Hero */}
			<section className="bg-vfw-navy-900 pt-28 pb-14 sm:pt-32 sm:pb-16">
				<Container>
					{/* Breadcrumb */}
					<nav aria-label="Breadcrumb" className="mb-6">
						<ol className="flex flex-wrap items-center gap-x-1 gap-y-2 text-sm text-white/60">
							<li>
								<Link
									href="/shop"
									className="inline-flex min-h-[44px] items-center transition-colors hover:text-white"
								>
									Shop
								</Link>
							</li>
							<li>
								<ChevronRight className="h-4 w-4" />
							</li>
							<li className="font-semibold text-white">{category.name}</li>
						</ol>
					</nav>

					<h1 className="font-heading text-3xl font-bold text-white sm:text-4xl md:text-5xl">
						{category.name}
					</h1>
					<p className="mt-3 max-w-xl text-base text-white/80 sm:text-lg">{category.description}</p>
				</Container>
			</section>

			{/* Products */}
			<section className="bg-white-warm py-14 sm:py-16">
				<Container>
					<ProductGrid products={products} />

					<div className="mt-12 text-center">
						<Link
							href="/shop"
							className="inline-flex min-h-[44px] items-center text-sm font-semibold uppercase tracking-wider text-vfw-navy-700 transition-colors hover:text-vfw-red-600"
						>
							Back to All Products
						</Link>
					</div>
				</Container>
			</section>
		</>
	);
}
