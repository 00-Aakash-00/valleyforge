"use client";

import { Minus, Plus, ShoppingBag, Trash2, X } from "lucide-react";
import { useEffect, useEffectEvent, useRef, useState } from "react";
import { useBodyScrollLock } from "@/hooks/useBodyScrollLock";
import { cn, formatPrice } from "@/lib/utils";
import { useCart } from "./CartProvider";
import { ProductImage } from "./ProductImage";

interface CartDrawerProps {
	open: boolean;
	onClose: () => void;
}

const CLOSE_ANIMATION_MS = 300;

export function CartDrawer({ open, onClose }: CartDrawerProps) {
	const { items, removeItem, updateQuantity, clearCart, totalItems, totalPrice } = useCart();
	const drawerRef = useRef<HTMLDivElement>(null);
	const [mounted, setMounted] = useState(open);
	const handleClose = useEffectEvent(() => {
		onClose();
	});

	useBodyScrollLock(open);

	useEffect(() => {
		if (open) {
			setMounted(true);
			return;
		}

		const timeout = window.setTimeout(() => {
			setMounted(false);
		}, CLOSE_ANIMATION_MS);

		return () => window.clearTimeout(timeout);
	}, [open]);

	// Close on Escape key
	useEffect(() => {
		if (!open) {
			return;
		}

		function handleKeyDown(e: KeyboardEvent) {
			if (e.key === "Escape") {
				handleClose();
			}
		}
		window.addEventListener("keydown", handleKeyDown);
		return () => window.removeEventListener("keydown", handleKeyDown);
	}, [open]);

	// Focus trap
	useEffect(() => {
		if (open && drawerRef.current) {
			drawerRef.current.focus();
		}
	}, [open]);

	if (!mounted) {
		return null;
	}

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
					"fixed top-0 right-0 z-50 flex h-[100dvh] w-full max-w-none flex-col bg-white shadow-2xl transition-transform duration-300 ease-in-out sm:max-w-md",
					open ? "translate-x-0" : "translate-x-full",
				)}
				style={{
					paddingTop: "max(0px, var(--safe-area-top))",
					paddingBottom: "max(0px, var(--safe-area-bottom))",
				}}
			>
				{/* Header */}
				<div className="flex items-center justify-between border-b border-gray-200 px-4 py-4 sm:px-6">
					<h2 className="font-heading text-lg font-bold">Your Cart ({totalItems})</h2>
					<button
						type="button"
						onClick={onClose}
						className="flex h-11 w-11 items-center justify-center rounded-lg text-slate-500 transition-colors hover:bg-gray-100 hover:text-charcoal"
						aria-label="Close cart"
					>
						<X className="h-5 w-5" />
					</button>
				</div>

				{/* Cart items */}
				<div className="flex-1 overflow-y-auto px-4 py-4 sm:px-6">
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
									className="flex gap-3 rounded-lg border border-gray-200 p-3 sm:gap-4 sm:p-4"
								>
									{/* Product image */}
									<ProductImage
										product={item.product}
										width={80}
										height={80}
										sizes="80px"
										className="h-16 w-16 flex-shrink-0 rounded-lg object-cover sm:h-20 sm:w-20"
									/>

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
										<div className="mt-3 flex flex-wrap items-center gap-2">
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
											<span className="basis-full pt-1 text-sm font-semibold text-charcoal sm:ml-auto sm:basis-auto sm:pt-0">
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
					<div className="border-t border-gray-200 px-4 py-4 sm:px-6">
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
