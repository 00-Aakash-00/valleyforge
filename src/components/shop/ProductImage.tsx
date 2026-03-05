import Image from "next/image";
import { hasProductImage } from "@/lib/products";
import { cn } from "@/lib/utils";
import type { Product } from "@/types";

interface ProductImageProps {
	product: Product;
	width: number;
	height: number;
	sizes: string;
	className?: string;
	priority?: boolean;
}

export function ProductImage({
	product,
	width,
	height,
	sizes,
	className,
	priority = false,
}: ProductImageProps) {
	if (!hasProductImage(product.image)) {
		return (
			<div
				role="img"
				aria-label={`${product.name} image coming soon`}
				className={cn("bg-gray-200", className)}
			/>
		);
	}

	return (
		<Image
			src={product.image}
			alt={product.name}
			width={width}
			height={height}
			sizes={sizes}
			priority={priority}
			className={className}
		/>
	);
}
