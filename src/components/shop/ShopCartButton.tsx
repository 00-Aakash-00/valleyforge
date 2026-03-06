"use client";

import { ShoppingCart } from "lucide-react";
import { useBreakpoint } from "@/hooks/useBreakpoint";
import { cn } from "@/lib/utils";
import { useCart } from "./CartProvider";

interface ShopCartButtonProps {
	onClick: () => void;
}

export function ShopCartButton({ onClick }: ShopCartButtonProps) {
	const { totalItems } = useCart();
	const { isPhone } = useBreakpoint();

	return (
		<button
			type="button"
			onClick={onClick}
			className={cn(
				"fixed z-40 flex items-center justify-center rounded-full bg-vfw-red-600 text-white shadow-lg transition-colors hover:bg-vfw-red-700 active:bg-vfw-red-800",
				isPhone ? "h-12 w-12" : "h-14 w-14",
			)}
			style={{
				right: "max(1rem, calc(1rem + var(--safe-area-right)))",
				bottom: "max(1rem, calc(1rem + var(--safe-area-bottom)))",
			}}
			aria-label={`Open cart with ${totalItems} items`}
		>
			<ShoppingCart className={cn(isPhone ? "h-5 w-5" : "h-6 w-6")} />
			{totalItems > 0 && (
				<span
					className={cn(
						"absolute -top-1 -right-1 flex items-center justify-center rounded-full bg-vfw-navy-700 text-xs font-bold text-white",
						isPhone ? "h-5 w-5" : "h-6 w-6",
					)}
				>
					{totalItems > 99 ? "99+" : totalItems}
				</span>
			)}
		</button>
	);
}
