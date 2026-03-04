"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
import { CartProvider } from "./CartProvider";
import { ShopCartButton } from "./ShopCartButton";

const CartDrawer = dynamic(
	() => import("./CartDrawer").then((mod) => ({ default: mod.CartDrawer })),
	{ ssr: false },
);

export function ShopLayoutClient({ children }: { children: React.ReactNode }) {
	const [cartOpen, setCartOpen] = useState(false);

	return (
		<CartProvider>
			{children}
			<ShopCartButton onClick={() => setCartOpen(true)} />
			<CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
		</CartProvider>
	);
}
