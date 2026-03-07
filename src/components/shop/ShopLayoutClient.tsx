"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
import { CartProvider } from "./CartProvider";
import { ShopCartButton } from "./ShopCartButton";

const loadCartDrawer = () => import("./CartDrawer").then((mod) => ({ default: mod.CartDrawer }));

const CartDrawer = dynamic(loadCartDrawer, { ssr: false });

function preloadCartDrawer() {
	void loadCartDrawer();
}

export function ShopLayoutClient({ children }: { children: React.ReactNode }) {
	const [cartOpen, setCartOpen] = useState(false);

	return (
		<CartProvider>
			{children}
			<ShopCartButton onClick={() => setCartOpen(true)} onIntent={preloadCartDrawer} />
			<CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
		</CartProvider>
	);
}
