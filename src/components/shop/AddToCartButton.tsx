"use client";

import { Check, ShoppingCart } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import type { Product } from "@/types";
import { useCart } from "./CartProvider";

interface AddToCartButtonProps {
	product: Product;
}

export function AddToCartButton({ product }: AddToCartButtonProps) {
	const { addItem } = useCart();
	const [added, setAdded] = useState(false);

	useEffect(() => {
		if (!added) return;
		const timeout = setTimeout(() => setAdded(false), 1000);
		return () => clearTimeout(timeout);
	}, [added]);

	function handleClick() {
		addItem(product);
		setAdded(true);
	}

	return (
		<Button
			variant="primary"
			size="md"
			onClick={handleClick}
			disabled={!product.inStock}
			className="gap-2"
		>
			{added ? (
				<>
					<Check className="h-5 w-5" />
					Added!
				</>
			) : (
				<>
					<ShoppingCart className="h-5 w-5" />
					{product.inStock ? "Add to Cart" : "Out of Stock"}
				</>
			)}
		</Button>
	);
}
