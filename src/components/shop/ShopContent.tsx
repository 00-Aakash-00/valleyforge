"use client";

import { useState } from "react";
import { CATEGORIES, PRODUCTS } from "@/lib/products";
import { CategoryFilter } from "./CategoryFilter";
import { ProductGrid } from "./ProductGrid";

export function ShopContent() {
	const [activeCategory, setActiveCategory] = useState<string | null>(null);

	const filteredProducts = activeCategory
		? PRODUCTS.filter((product) => product.category === activeCategory)
		: PRODUCTS;

	return (
		<div>
			<div className="mb-8">
				<CategoryFilter
					categories={CATEGORIES}
					activeCategory={activeCategory}
					onSelect={setActiveCategory}
				/>
			</div>
			<ProductGrid products={filteredProducts} />
		</div>
	);
}
