import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { getCategoryBySlug } from "@/lib/products";
import { formatPrice } from "@/lib/utils";
import type { Product } from "@/types";
import { ProductImage } from "./ProductImage";

interface ProductCardProps {
	product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
	const category = getCategoryBySlug(product.category);
	const categoryName = category?.name ?? product.category;
	const productHref = `/shop/${product.category}/${product.slug}`;

	return (
		<div className="content-auto-card group overflow-hidden rounded-lg bg-white shadow-sm transition-shadow duration-300 hover:shadow-md">
			<Link href={productHref}>
				<ProductImage
					product={product}
					width={800}
					height={800}
					sizes="(min-width: 1280px) 18rem, (min-width: 1024px) 22vw, (min-width: 768px) 30vw, 50vw"
					className="aspect-square w-full rounded-t-lg object-cover transition-opacity group-hover:opacity-90"
				/>
			</Link>

			<div className="p-4 sm:p-5">
				<Badge variant="navy" className="mb-2">
					{categoryName}
				</Badge>

				<h3 className="font-heading text-lg font-semibold leading-tight text-charcoal sm:text-base">
					<Link href={productHref} className="transition-colors hover:text-vfw-red-600">
						{product.name}
					</Link>
				</h3>

				<p className="mt-2 text-lg font-bold text-vfw-red-600">{formatPrice(product.price)}</p>

				<Link
					href={productHref}
					className="mt-3 inline-flex min-h-[44px] items-center text-sm font-semibold uppercase tracking-wider text-vfw-navy-700 transition-colors hover:text-vfw-red-600"
				>
					View Details
				</Link>
			</div>
		</div>
	);
}
