import { Badge } from "@/components/ui/Badge";
import { CATEGORIES } from "@/lib/products";
import { formatPrice } from "@/lib/utils";
import type { Product } from "@/types";

interface ProductCardProps {
	product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
	const category = CATEGORIES.find((c) => c.slug === product.category);
	const categoryName = category?.name ?? product.category;

	return (
		<div className="group overflow-hidden rounded-lg bg-white shadow-sm transition-shadow duration-300 hover:shadow-md">
			{/* Image placeholder */}
			<a href={`/shop/${product.category}/${product.slug}`}>
				<div className="aspect-square rounded-t-lg bg-gray-200 transition-opacity group-hover:opacity-90" />
			</a>

			<div className="p-4">
				<Badge variant="navy" className="mb-2">
					{categoryName}
				</Badge>

				<h3 className="font-heading text-base font-semibold leading-tight text-charcoal">
					<a
						href={`/shop/${product.category}/${product.slug}`}
						className="transition-colors hover:text-vfw-red-600"
					>
						{product.name}
					</a>
				</h3>

				<p className="mt-2 text-lg font-bold text-vfw-red-600">{formatPrice(product.price)}</p>

				<a
					href={`/shop/${product.category}/${product.slug}`}
					className="mt-3 inline-flex min-h-[44px] items-center text-sm font-semibold uppercase tracking-wider text-vfw-navy-700 transition-colors hover:text-vfw-red-600"
				>
					View Details
				</a>
			</div>
		</div>
	);
}
