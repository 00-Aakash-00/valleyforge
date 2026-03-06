import type { Product } from "@/types";
import { ProductCard } from "./ProductCard";

interface ProductGridProps {
	products: Product[];
}

export function ProductGrid({ products }: ProductGridProps) {
	if (products.length === 0) {
		return (
			<div className="py-16 text-center">
				<p className="text-lg text-slate-500">No products found.</p>
			</div>
		);
	}

	return (
		<div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 md:grid-cols-3 lg:grid-cols-4">
			{products.map((product) => (
				<ProductCard key={product.id} product={product} />
			))}
		</div>
	);
}
