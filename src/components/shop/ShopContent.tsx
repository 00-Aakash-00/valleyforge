"use client";

import { useMemo, useState } from "react";
import { CATEGORIES, PRODUCTS } from "@/lib/products";
import { CategoryFilter } from "./CategoryFilter";
import { ProductGrid } from "./ProductGrid";

export function ShopContent() {
	const [activeCategory, setActiveCategory] = useState<string | null>(null);

	const filteredProducts = useMemo(() => {
		if (!activeCategory) return PRODUCTS;
		return PRODUCTS.filter((p) => p.category === activeCategory);
	}, [activeCategory]);

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
