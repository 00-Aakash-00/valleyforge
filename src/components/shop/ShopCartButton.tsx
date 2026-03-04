"use client";

import { ShoppingCart } from "lucide-react";
import { useCart } from "./CartProvider";

interface ShopCartButtonProps {
	onClick: () => void;
}

export function ShopCartButton({ onClick }: ShopCartButtonProps) {
	const { totalItems } = useCart();

	return (
		<button
			type="button"
			onClick={onClick}
			className="fixed right-6 bottom-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-vfw-red-600 text-white shadow-lg transition-colors hover:bg-vfw-red-700 active:bg-vfw-red-800"
			aria-label={`Open cart with ${totalItems} items`}
		>
			<ShoppingCart className="h-6 w-6" />
			{totalItems > 0 && (
				<span className="absolute -top-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-vfw-navy-700 text-xs font-bold text-white">
					{totalItems > 99 ? "99+" : totalItems}
				</span>
			)}
		</button>
	);
}
