"use client";

import { Minus, Plus, ShoppingBag, Trash2, X } from "lucide-react";
import { useEffect, useRef } from "react";
import { cn, formatPrice } from "@/lib/utils";
import { useCart } from "./CartProvider";

interface CartDrawerProps {
	open: boolean;
	onClose: () => void;
}

export function CartDrawer({ open, onClose }: CartDrawerProps) {
	const { items, removeItem, updateQuantity, clearCart, totalItems, totalPrice } = useCart();
	const drawerRef = useRef<HTMLDivElement>(null);

	// Lock body scroll when open
	useEffect(() => {
		if (open) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "";
		}
		return () => {
			document.body.style.overflow = "";
		};
	}, [open]);

	// Close on Escape key
	useEffect(() => {
		function handleKeyDown(e: KeyboardEvent) {
			if (e.key === "Escape" && open) {
				onClose();
			}
		}
		window.addEventListener("keydown", handleKeyDown);
		return () => window.removeEventListener("keydown", handleKeyDown);
	}, [open, onClose]);

	// Focus trap
	useEffect(() => {
		if (open && drawerRef.current) {
			drawerRef.current.focus();
		}
	}, [open]);

	return (
		<>
			{/* Backdrop overlay */}
			<div
				className={cn(
					"fixed inset-0 z-50 bg-black/50 transition-opacity duration-300",
					open ? "opacity-100" : "pointer-events-none opacity-0",
				)}
				onClick={onClose}
				aria-hidden="true"
			/>

			{/* Drawer panel */}
			<div
				ref={drawerRef}
				role="dialog"
				aria-label="Shopping cart"
				aria-modal="true"
				tabIndex={-1}
				className={cn(
					"fixed top-0 right-0 z-50 flex h-full w-full max-w-md flex-col bg-white shadow-2xl transition-transform duration-300 ease-in-out",
					open ? "translate-x-0" : "translate-x-full",
				)}
			>
				{/* Header */}
				<div className="flex items-center justify-between border-b border-gray-200 px-6 py-4">
					<h2 className="font-heading text-lg font-bold">Your Cart ({totalItems})</h2>
					<button
						type="button"
						onClick={onClose}
						className="flex h-10 w-10 items-center justify-center rounded-lg text-slate-500 transition-colors hover:bg-gray-100 hover:text-charcoal"
						aria-label="Close cart"
					>
						<X className="h-5 w-5" />
					</button>
				</div>

				{/* Cart items */}
				<div className="flex-1 overflow-y-auto px-6 py-4">
					{items.length === 0 ? (
						<div className="flex flex-col items-center justify-center py-16 text-center">
							<ShoppingBag className="mb-4 h-16 w-16 text-gray-300" />
							<p className="mb-2 text-lg font-semibold text-charcoal">Your cart is empty</p>
							<p className="text-sm text-slate-500">
								Browse our shop and add some items to get started.
							</p>
						</div>
					) : (
						<ul className="space-y-4">
							{items.map((item) => (
								<li
									key={item.product.id}
									className="flex gap-4 rounded-lg border border-gray-200 p-4"
								>
									{/* Image placeholder */}
									<div className="h-20 w-20 flex-shrink-0 rounded-lg bg-gray-200" />

									{/* Details */}
									<div className="flex flex-1 flex-col">
										<div className="flex items-start justify-between">
											<h3 className="text-sm font-semibold leading-tight text-charcoal">
												{item.product.name}
											</h3>
											<button
												type="button"
												onClick={() => removeItem(item.product.id)}
												className="ml-2 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg text-slate-400 transition-colors hover:bg-vfw-red-50 hover:text-vfw-red-600"
												aria-label={`Remove ${item.product.name} from cart`}
											>
												<Trash2 className="h-4 w-4" />
											</button>
										</div>

										<p className="mt-1 text-sm font-semibold text-vfw-red-600">
											{formatPrice(item.product.price)}
										</p>

										{/* Quantity controls */}
										<div className="mt-2 flex items-center gap-2">
											<button
												type="button"
												onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
												className="flex h-8 w-8 items-center justify-center rounded-md border border-gray-200 text-charcoal transition-colors hover:bg-gray-100"
												aria-label={`Decrease quantity of ${item.product.name}`}
											>
												<Minus className="h-3 w-3" />
											</button>
											<span className="min-w-[2rem] text-center text-sm font-semibold">
												{item.quantity}
											</span>
											<button
												type="button"
												onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
												className="flex h-8 w-8 items-center justify-center rounded-md border border-gray-200 text-charcoal transition-colors hover:bg-gray-100"
												aria-label={`Increase quantity of ${item.product.name}`}
											>
												<Plus className="h-3 w-3" />
											</button>
											<span className="ml-auto text-sm font-semibold text-charcoal">
												{formatPrice(item.product.price * item.quantity)}
											</span>
										</div>
									</div>
								</li>
							))}
						</ul>
					)}
				</div>

				{/* Footer with subtotal and actions */}
				{items.length > 0 && (
					<div className="border-t border-gray-200 px-6 py-4">
						<div className="mb-4 flex items-center justify-between">
							<span className="text-base font-semibold text-charcoal">Subtotal</span>
							<span className="text-lg font-bold text-charcoal">{formatPrice(totalPrice)}</span>
						</div>

						<button
							type="button"
							disabled
							className="mb-3 flex w-full items-center justify-center rounded-full bg-gray-300 px-6 py-3 text-sm font-semibold uppercase tracking-wider text-gray-500 cursor-not-allowed"
						>
							Checkout Coming Soon
						</button>

						<button
							type="button"
							onClick={clearCart}
							className="flex w-full items-center justify-center rounded-full border-2 border-gray-200 px-6 py-3 text-sm font-semibold uppercase tracking-wider text-slate-500 transition-colors hover:border-vfw-red-600 hover:text-vfw-red-600"
						>
							Clear Cart
						</button>
					</div>
				)}
			</div>
		</>
	);
}
