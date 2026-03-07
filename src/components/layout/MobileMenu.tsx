"use client";

import { X } from "lucide-react";
import Link from "next/link";
import { useEffect, useEffectEvent } from "react";
import { useBodyScrollLock } from "@/hooks/useBodyScrollLock";
import { BUSINESS } from "@/lib/constants";
import { formatPhone } from "@/lib/utils";

const NAV_LINKS = [
	{ href: "/", label: "Home" },
	{ href: "/cleaning-services", label: "Cleaning Services" },
	{ href: "/services", label: "Other Services" },
	{ href: "/shop", label: "Shop" },
];

export function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
	useBodyScrollLock(open);
	const handleClose = useEffectEvent(() => {
		onClose();
	});

	useEffect(() => {
		if (!open) return;
		const onKeyDown = (event: KeyboardEvent) => {
			if (event.key === "Escape") {
				handleClose();
			}
		};
		window.addEventListener("keydown", onKeyDown);
		return () => window.removeEventListener("keydown", onKeyDown);
	}, [open]);

	if (!open) return null;

	return (
		<div
			className="fixed inset-0 z-50 lg:hidden"
			role="dialog"
			aria-modal="true"
			aria-label="Mobile menu"
		>
			<button
				type="button"
				className="fixed inset-0 bg-black/50"
				onClick={onClose}
				aria-label="Close menu backdrop"
			/>
			<div
				className="fixed inset-y-0 right-0 flex h-[100dvh] w-full max-w-none flex-col bg-white shadow-xl sm:max-w-sm"
				style={{
					paddingTop: "max(0px, var(--safe-area-top))",
					paddingBottom: "max(0px, var(--safe-area-bottom))",
				}}
			>
				<div className="flex items-center justify-between border-b border-gray-200 px-4 py-4 sm:px-6">
					<span className="font-heading text-lg font-bold text-black">Menu</span>
					<button
						type="button"
						onClick={onClose}
						className="flex h-11 w-11 items-center justify-center rounded-full hover:bg-gray-100"
						aria-label="Close menu"
					>
						<X className="h-6 w-6" />
					</button>
				</div>
				<nav className="flex-1 overflow-y-auto px-4 py-4 sm:px-6">
					<ul className="space-y-1">
						{NAV_LINKS.map((link) => (
							<li key={link.href}>
								<Link
									href={link.href}
									className="block rounded-lg px-4 py-3.5 text-lg font-medium text-charcoal transition-colors hover:bg-gray-100"
									onClick={onClose}
								>
									{link.label}
								</Link>
							</li>
						))}
					</ul>
				</nav>
				<div className="border-t border-gray-200 px-4 pt-4 pb-4 sm:px-6 sm:pb-6">
					<a
						href={`tel:${formatPhone(BUSINESS.phone)}`}
						className="flex min-h-[48px] w-full items-center justify-center rounded-full bg-vfw-red-600 px-6 py-3 text-center font-semibold uppercase tracking-wider text-white transition-colors hover:bg-vfw-red-700"
					>
						Call {BUSINESS.phone}
					</a>
				</div>
			</div>
		</div>
	);
}
