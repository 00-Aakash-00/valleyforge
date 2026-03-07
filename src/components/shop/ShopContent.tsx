"use client";

import { useState, useTransition } from "react";
import { CATEGORIES, getProductsByCategory, PRODUCTS } from "@/lib/products";
import type { ProductCategory } from "@/types";
import { CategoryFilter } from "./CategoryFilter";
import { ProductGrid } from "./ProductGrid";

export function ShopContent() {
	const [activeCategory, setActiveCategory] = useState<ProductCategory | null>(null);
	const [isPending, startTransition] = useTransition();

	const filteredProducts = activeCategory ? getProductsByCategory(activeCategory) : PRODUCTS;

	const handleSelect = (category: ProductCategory | null) => {
		startTransition(() => {
			setActiveCategory(category);
		});
	};

	return (
		<div aria-busy={isPending}>
			<div className="mb-8">
				<CategoryFilter
					categories={CATEGORIES}
					activeCategory={activeCategory}
					onSelect={handleSelect}
				/>
			</div>
			<ProductGrid products={filteredProducts} />
		</div>
	);
}
