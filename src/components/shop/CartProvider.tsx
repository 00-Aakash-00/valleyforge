"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";
import type { CartItem, Product } from "@/types";

interface CartContextType {
	items: CartItem[];
	addItem: (product: Product) => void;
	removeItem: (productId: string) => void;
	updateQuantity: (productId: string, quantity: number) => void;
	clearCart: () => void;
	totalItems: number;
	totalPrice: number;
	hydrated: boolean;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const CART_STORAGE_KEY = "vfw-cart";

function loadCart(): CartItem[] {
	if (typeof window === "undefined") return [];
	try {
		const stored = localStorage.getItem(CART_STORAGE_KEY);
		if (stored) {
			const parsed = JSON.parse(stored);
			if (Array.isArray(parsed)) return parsed;
		}
	} catch {
		// Corrupted data, start fresh
	}
	return [];
}

function saveCart(items: CartItem[]) {
	if (typeof window === "undefined") return;
	try {
		localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
	} catch {
		// Storage full or unavailable
	}
}

export function CartProvider({ children }: { children: React.ReactNode }) {
	const [items, setItems] = useState<CartItem[]>(() => loadCart());
	const [hydrated, setHydrated] = useState(false);

	useEffect(() => {
		setHydrated(true);
	}, []);

	useEffect(() => {
		if (hydrated) {
			saveCart(items);
		}
	}, [items, hydrated]);

	const addItem = useCallback((product: Product) => {
		setItems((prev) => {
			const existing = prev.find((item) => item.product.id === product.id);
			if (existing) {
				return prev.map((item) =>
					item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item,
				);
			}
			return [...prev, { product, quantity: 1 }];
		});
	}, []);

	const removeItem = useCallback((productId: string) => {
		setItems((prev) => prev.filter((item) => item.product.id !== productId));
	}, []);

	const updateQuantity = useCallback(
		(productId: string, quantity: number) => {
			if (quantity <= 0) {
				removeItem(productId);
				return;
			}
			setItems((prev) =>
				prev.map((item) => (item.product.id === productId ? { ...item, quantity } : item)),
			);
		},
		[removeItem],
	);

	const clearCart = useCallback(() => {
		setItems([]);
	}, []);

	const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
	const totalPrice = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

	return (
		<CartContext.Provider
			value={{
				items,
				addItem,
				removeItem,
				updateQuantity,
				clearCart,
				totalItems,
				totalPrice,
				hydrated,
			}}
		>
			{children}
		</CartContext.Provider>
	);
}

export function useCart(): CartContextType {
	const context = useContext(CartContext);
	if (context === undefined) {
		throw new Error("useCart must be used within a CartProvider");
	}
	return context;
}
