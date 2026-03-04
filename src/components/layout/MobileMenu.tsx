"use client";

import { X } from "lucide-react";
import { useEffect } from "react";
import { BUSINESS } from "@/lib/constants";
import { formatPhone } from "@/lib/utils";

const NAV_LINKS = [
	{ href: "/", label: "Home" },
	{ href: "/cleaning-services", label: "Cleaning Services" },
	{ href: "/services", label: "Other Services" },
	{ href: "/shop", label: "Shop" },
];

export function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
	useEffect(() => {
		if (!open) return;
		document.body.style.overflow = "hidden";
		return () => {
			document.body.style.overflow = "";
		};
	}, [open]);

	useEffect(() => {
		if (!open) return;
		const onKeyDown = (event: KeyboardEvent) => {
			if (event.key === "Escape") {
				onClose();
			}
		};
		window.addEventListener("keydown", onKeyDown);
		return () => window.removeEventListener("keydown", onKeyDown);
	}, [open, onClose]);

	if (!open) return null;

	return (
		<div className="fixed inset-0 z-50 lg:hidden">
			<button
				type="button"
				className="fixed inset-0 bg-black/50"
				onClick={onClose}
				aria-label="Close menu backdrop"
			/>
			<div className="fixed inset-y-0 right-0 w-full max-w-sm bg-white shadow-xl">
				<div className="flex items-center justify-between border-b border-gray-200 px-6 py-4">
					<span className="font-heading text-lg font-bold text-black">Menu</span>
					<button
						type="button"
						onClick={onClose}
						className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-gray-100"
						aria-label="Close menu"
					>
						<X className="h-6 w-6" />
					</button>
				</div>
				<nav className="px-6 py-4">
					<ul className="space-y-1">
						{NAV_LINKS.map((link) => (
							<li key={link.href}>
								<a
									href={link.href}
									className="block rounded-lg px-4 py-3 text-lg font-medium text-charcoal transition-colors hover:bg-gray-100"
									onClick={onClose}
								>
									{link.label}
								</a>
							</li>
						))}
					</ul>
				</nav>
				<div className="border-t border-gray-200 px-6 py-6">
					<a
						href={`tel:${formatPhone(BUSINESS.phone)}`}
						className="flex w-full items-center justify-center rounded-full bg-vfw-red-600 px-6 py-3 font-semibold uppercase tracking-wider text-white transition-colors hover:bg-vfw-red-700"
					>
						Call {BUSINESS.phone}
					</a>
				</div>
			</div>
		</div>
	);
}
