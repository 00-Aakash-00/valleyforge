"use client";

import { ShoppingCart } from "lucide-react";
import { cn } from "@/lib/utils";
import { useCart } from "./CartProvider";

interface ShopCartButtonProps {
	onClick: () => void;
	onIntent?: () => void;
}

export function ShopCartButton({ onClick, onIntent }: ShopCartButtonProps) {
	const { hydrated, totalItems } = useCart();
	const visibleItems = hydrated ? totalItems : 0;

	return (
		<button
			type="button"
			onClick={onClick}
			onPointerEnter={onIntent}
			onFocus={onIntent}
			className={cn(
				"fixed z-40 flex items-center justify-center rounded-full bg-vfw-red-600 text-white shadow-lg transition-colors hover:bg-vfw-red-700 active:bg-vfw-red-800",
				"h-12 w-12 sm:h-14 sm:w-14",
			)}
			style={{
				right: "max(1rem, calc(1rem + var(--safe-area-right)))",
				bottom: "max(1rem, calc(1rem + var(--safe-area-bottom)))",
			}}
			aria-label={`Open cart with ${visibleItems} items`}
		>
			<ShoppingCart className="h-5 w-5 sm:h-6 sm:w-6" />
			{visibleItems > 0 ? (
				<span
					className={cn(
						"absolute -top-1 -right-1 flex items-center justify-center rounded-full bg-vfw-navy-700 text-xs font-bold text-white",
						"h-5 w-5 sm:h-6 sm:w-6",
					)}
				>
					{visibleItems > 99 ? "99+" : visibleItems}
				</span>
			) : null}
		</button>
	);
}
